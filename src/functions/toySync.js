import { createTimer } from "../util/hooks";
import { fbcSettings } from "../util/settings";
import { debug, logInfo, logWarn, logError } from "../util/logger";
import { displayText } from "../util/localization";
import { fbcChatNotify } from "../util/utils";

/** @type {FBCToySyncState} */
export const toySyncState = {
  deviceSettings: new Map(),
};

export default async function toySync() {
  // Handles synchronizing in-game vibrators with real bluetooth devices via buttplut.io
  if (!fbcSettings.toySync) {
    return;
  }

  const { ButtplugClient, ButtplugBrowserWebsocketClientConnector } = await import("buttplug");

  logInfo("Loaded Buttplug.io");

  const client = new ButtplugClient("WCE Toy Sync");
  client.addListener(
    "deviceadded",
    /**
     * @param {import("buttplug").ButtplugClientDevice} device
     */
    (device) => {
      debug("Device connected", device);
      fbcChatNotify(
        displayText(`Vibrator connected: $DeviceName`, {
          $DeviceName: device.name,
        })
      );
      const deviceSettings = toySyncState.deviceSettings.get(device.name);
      if (deviceSettings) {
        delete deviceSettings.LastIntensity;
      }
    }
  );
  client.addListener(
    "deviceremoved",
    /**
     * @param {import("buttplug").ButtplugClientDevice} device
     */
    (device) => {
      debug("Device disconnected", device);
      fbcChatNotify(
        displayText(`Vibrator disconnected: $DeviceName`, {
          $DeviceName: device.name,
        })
      );
    }
  );
  client.addListener("scanningfinished", (data) => {
    debug("Scanning finished", data);
  });

  const connector = new ButtplugBrowserWebsocketClientConnector("ws://127.0.0.1:12345");
  try {
    await client.connect(connector);
    logInfo("Connected buttplug.io");
  } catch (ex) {
    alert(
      displayText(
        "buttplug.io is enabled, but server could not be contacted at ws://127.0.0.1:12345. Is Intiface Desktop running? Is another client connected to it?"
      )
    );
    logError("buttplug.io could not connect to server", ex);
    return;
  }

  toySyncState.client = client;

  // Sync vibrations from slots
  const removeTimer = createTimer(() => {
    if (!client.connected) {
       removeTimer();
       return;
    }
    for (const d of client.devices.filter((dev) => dev.vibrateAttributes.length > 0)) {
      const deviceSettings = toySyncState.deviceSettings?.get(d.name);
      if (!deviceSettings) {
        continue;
      }

      const slot = deviceSettings.SlotName;
      const intensity = Player.Appearance.find((a) => a.Asset.Group.Name === slot)?.Property?.Intensity;

      if (deviceSettings.LastIntensity === intensity) {
        continue;
      }
      deviceSettings.LastIntensity = intensity;

      if (typeof intensity !== "number" || intensity < 0) {
        d.vibrate(0);
      } else {
        switch (intensity) {
          case 0:
            d.vibrate(0.1);
            debug(d.name, slot, "intensity 0.1");
            break;
          case 1:
            d.vibrate(0.4);
            debug(d.name, slot, "intensity 0.4");
            break;
          case 2:
            d.vibrate(0.75);
            debug(d.name, slot, "intensity 0.75");
            break;
          case 3:
            d.vibrate(1.0);
            debug(d.name, slot, "intensity 1");
            break;
          default:
            logWarn("Invalid intensity in ", slot, ":", intensity);
            break;
        }
      }
    }
  }, 3000);

  Commands.push({
    Tag: "toybatteries",
    Description: displayText("Shows the battery status of all connected buttplug.io toys"),
    Action: () => {
      (async () => {
        if (!client.connected) {
          fbcChatNotify("buttplug.io is not connected");
          return;
        }

        const batteryDevices = client.devices.filter((dev) => dev.hasBattery);
        if (batteryDevices.length === 0) {
          fbcChatNotify("No battery devices connected");
          return;
        }

        const batteryStatus = await Promise.all(batteryDevices.map((dev) => dev.battery()));
        for (let i = 0; i < batteryDevices.length; i++) {
          const battery = batteryStatus[i] * 100;
          fbcChatNotify(`${batteryDevices[i].name}: ${battery}%`);
        }
      })();
    },
  });

  Commands.push({
    Tag: "toyscan",
    Description: displayText("Scans for connected buttplug.io toys"),
    Action: () => {
      if (!client.connected) {
        fbcChatNotify(displayText("buttplug.io is not connected"));
        return;
      }

      if (client.isScanning) {
        client.stopScanning();
        fbcChatNotify(displayText("Scanning stopped"));
        return;
      }

      client.startScanning();
      fbcChatNotify(displayText("Scanning for toys"));
    },
  });

  await client.startScanning();
}
