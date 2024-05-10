import { patchFunction, SDK, HOOK_PRIORITIES, createTimer } from "..";
import { fbcSettings } from "../util/settings";
import { waitFor } from "../util/util";
import { debug } from "../util/logger";

export function cacheClearer() {
  const cacheClearInterval = 1 * 60 * 60 * 1000;

  SDK.hookFunction(
    "ChatRoomMenuBuild",
    HOOK_PRIORITIES.AddBehaviour,
    /**
     * @param {Parameters<typeof ChatRoomMenuBuild>} args
     */
    (args, next) => {
      const ret = next(args);
      if (fbcSettings.manualCacheClear) ChatRoomMenuButtons.splice(ChatRoomMenuButtons.indexOf("Cut"), 0, "clearCache");
      return ret;
    }
  );

  patchFunction(
    "ChatRoomMenuClick",
    {
      "switch (ChatRoomMenuButtons[B]) {": `switch (ChatRoomMenuButtons[B]) {
        case "clearCache": 
          bceDoClearCaches();
          break;`,
    },
    "manual clearing and reloading of drawing cache"
  );

  patchFunction(
    "ChatRoomMenuDraw",
    {
      'let suffix = "";': `let suffix = "";
        if (name === "clearCache") {
          DrawButton(1005 + Space * Number(idx), 2, Space - 2, 60, "", color, null, "clear and reload the drawing cache of all characters");
          DrawImage("Icons/Small/Reset.png", 976 + Space * Number(idx) + Space / 2, 4);
          continue;
        }`,
    },
    "manual clearing and reloading of drawing cache"
  );

  window.bceClearCaches = async function () {
    const start = Date.now();
    if (
      !(await waitFor(
        // Only clear when in chat room and not inspecting a character
        () => CurrentScreen === "ChatRoom" && !CurrentCharacter,
        () => Date.now() - start > cacheClearInterval
      ))
    ) {
      return;
    }
    if (!fbcSettings.automateCacheClear) {
      return;
    }
    window.bceDoClearCaches();
  };

  window.bceDoClearCaches = function () {
    debug("Clearing caches");
    if (GLDrawCanvas.GL?.textureCache) {
      GLDrawCanvas.GL.textureCache.clear();
    }
    GLDrawResetCanvas();

    debug("Clearing old characters from cache");
    const oldOnlineCharacters = Character.filter(
      (c) => c.IsOnline?.() && !ChatRoomCharacter.some((cc) => cc.MemberNumber === c.MemberNumber)
    );
    oldOnlineCharacters.forEach((c) => CharacterDelete(c));
    Character.filter((c) => c.IsOnline?.()).forEach((c) => CharacterRefresh(c, false, false));
  };

  const clearCaches = () => {
    if (fbcSettings.automateCacheClear) {
      window.bceClearCaches();
    }
  };

  createTimer(clearCaches, cacheClearInterval);
}