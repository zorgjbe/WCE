import { SDK } from '../index';
import { waitFor, objEntries } from '../util/util';
import { logInfo, logWarn } from '../util/logger';

/**
 * @param {string} gameVersion
 */
const expectedHashes = (gameVersion) => {
  switch (gameVersion.toLowerCase()) {
    default:
      return /** @type {const} */ ({
        ActivityChatRoomArousalSync: "BFF3DED7",
        ActivitySetArousal: "3AE28123",
        ActivitySetArousalTimer: "1342AFE2",
        ActivityTimerProgress: "6CD388A7",
        AppearanceClick: "4C04C15E",
        AppearanceLoad: "4360C485",
        AppearanceRun: "6EC75705",
        CharacterAppearanceWardrobeLoad: "A5B63A03",
        CharacterBuildDialog: "85F79C6E",
        CharacterCompressWardrobe: "2A05ECD1",
        CharacterDecompressWardrobe: "327FADA4",
        CharacterDelete: "57AA5D48", // optional parameter was added to skip npc Character clearing in https://gitgud.io/BondageProjects/Bondage-College/-/commit/7ee7939bdf40fac6a496e7851a50efe3277c8e63
        CharacterGetCurrent: "69F45A41",
        CharacterLoadCanvas: "EAB81BC4",
        CharacterLoadOnline: "B1BCD3B1",
        CharacterNickname: "A794EFF5",
        CharacterRefresh: "301DA9CF", // C.RunScripts not relevant here: https://gitgud.io/BondageProjects/Bondage-College/-/merge_requests/4905
        CharacterReleaseTotal: "BB9C6989",
        CharacterSetCurrent: "F46573D8",
        CharacterSetFacialExpression: "F83CE881",
        CharacterSetActivePose: "566A14D7",
        ChatAdminRoomCustomizationClick: "9D859B28", // not relevant: https://gitgud.io/BondageProjects/Bondage-College/-/merge_requests/4917
        ChatAdminRoomCustomizationProcess: "AF01C65A", // same as above
        ChatRoomAppendChat: "998F2F98",
        ChatRoomCharacterUpdate: "DE2DC592",
        ChatRoomCharacterViewDrawBackground: "39EFE213",
        ChatRoomCharacterViewIsActive: "CD8066FA",
        ChatRoomClearAllElements: "D67A7839", // works https://gitgud.io/BondageProjects/Bondage-College/-/merge_requests/4908
        ChatRoomClick: "F57069BB",
        ChatRoomCurrentTime: "A462DD3A",
        ChatRoomDrawCharacterStatusIcons: "198C8657",
        ChatRoomHTMLEntities: "0A7ADB1D",
        ChatRoomKeyDown: "CBE6830E",
        ChatRoomListManipulation: "75D28A8B",
        ChatRoomMapViewCharacterIsVisible: "286C447D",
        ChatRoomMapViewCharacterOnWhisperRange: "B0D08E96",
        ChatRoomMapViewIsActive: "D181020D",
        ChatRoomMenuBuild: "F76AEFC3",
        ChatRoomMenuClick: "600503B8",
        ChatRoomMenuDraw: "CF17EA43",
        ChatRoomMessage: "BBD61334",
        ChatRoomMessageDisplay: "37B5D4F2",
        ChatRoomRegisterMessageHandler: "C432923A",
        ChatRoomResize: "653445D7",
        ChatRoomRun: "9E0D7899",
        ChatRoomSendChat: "C4C0688E", // only formatting change
        ChatRoomStart: "9B822A9A",
        CommandExecute: "803D6C70",
        CommandParse: "474ECCE0",
        CommonClick: "1F6DF7CB",
        CommonColorIsValid: "390A2CE4",
        CommonSetScreen: "E10E2148", // non relevant https://gitgud.io/BondageProjects/Bondage-College/-/commit/f011a26580f67b2655ba540262b1344441a3c620
        CraftingClick: "5A1B4ACC", // import / export crafted itemss tested
        CraftingConvertSelectedToItem: "48270B42",
        CraftingRun: "4018E748", // import / export crafted itemss tested
        DialogDrawItemMenu: "FCE556C2",
        DialogLeave: "C37553DC",
        DialogMenuButtonBuild: "E69567D2",
        DialogMenuButtonClick: "E69567D2",
        DrawArousalMeter: "BB0755AF",
        DrawArousalThermometer: "7ED6D822",
        DrawBackNextButton: "9AF4BA37",
        DrawButton: "B747DF6E", // works
        DrawCharacter: "B175AF5E",
        DrawCheckbox: "00FD87EB",
        DrawImageEx: "E01BE7E7",
        DrawImageResize: "D205975A",
        DrawItemPreview: "6A7A1E2A",
        DrawProcess: "9776CBC2", // works
        DrawText: "C1BF0F50",
        DrawTextFit: "F9A1B11E",
        ElementCreateTextArea: "AA4AEDE7",
        ElementIsScrolledToEnd: "1CC4FE11",
        ElementScrollToEnd: "1AC45575",
        ElementValue: "4F26C62F",
        FriendListShowBeep: "6C0449BB",
        GameRun: "505F7E21", // seems to work fine
        GLDrawResetCanvas: "81214642",
        InformationSheetRun: "4B2D599D", // works
        InterfaceTextGet: "4B2D599D",
        InventoryGet: "E666F671",
        LoginClick: "EE94BEC7",
        LoginRun: "C3926C4F",
        LoginSetSubmitted: "C88F4A8E",
        LoginStatusReset: "18619F02",
        MouseIn: "CA8B839E",
        NotificationDrawFavicon: "AB88656B",
        NotificationRaise: "E8F29646",
        NotificationTitleUpdate: "0E92F3ED",
        OnlineGameAllowChange: "3779F42C",
        OnlineProfileClick: "521146DF",
        OnlineProfileExit: "1C673DC8",
        OnlineProfileLoad: "BE8B009B",
        OnlineProfileRun: "7F57EF9A",
        PoseSetActive: "22C02050",
        PreferenceInitPlayer: "037AB0BC",
        PreferenceSubscreenArousalClick: "30C611F9",
        PreferenceSubscreenArousalRun: "9A8128AF",
        PreferenceSubscreenRestrictionClick: "30C611F9",
        PreferenceSubscreenRestrictionRun: "9A8128AF",
        RelogRun: "10AF5A60",
        RelogExit: "2DFB2DAD",
        ServerAccountBeep: "AAC49FD4",
        ServerAppearanceBundle: "4D069622",
        ServerAppearanceLoadFromBundle: "946537FD",
        ServerClickBeep: "3E6277BE",
        ServerConnect: "845E50A6",
        ServerDisconnect: "198FF7E7", // works
        ServerInit: "B6CEF7F1",
        ServerOpenFriendList: "FA8D3CDE",
        ServerPlayerExtensionSettingsSync: "1776666B",
        ServerSend: "ABE74E75",
        ServerSendQueueProcess: "BD4277AC",
        SkillGetWithRatio: "3EB4BC45",
        SpeechGarble: "9D669F73",
        SpeechGarbleByGagLevel: "F7555009", // non relevant
        SpeechGetTotalGagLevel: "5F4F6D45",
        StruggleDexterityProcess: "7E19ADA9",
        StruggleFlexibilityCheck: "727CE05B",
        StruggleFlexibilityProcess: "278D7285",
        StruggleLockPickDraw: "2F1F603B",
        StruggleMinigameHandleExpression: "1B3ABF55",
        StruggleMinigameStop: "FB05E8A9",
        StruggleStrengthProcess: "D20CF698",
        TextGet: "4DDE5794",
        TextLoad: "0D535190",
        TimerInventoryRemove: "1FA771FB",
        TimerProcess: "BFB7FFE2", // no relevant
        TitleExit: "F13F533C",
        ValidationSanitizeProperties: "659F5965",
        WardrobeClick: "33405B1D",
        WardrobeExit: "12D14AE4",
        WardrobeFastLoad: "AAB9F25B",
        WardrobeFastSave: "D1E906FD",
        WardrobeFixLength: "CA3334C6",
        WardrobeLoad: "C343A4C7",
        WardrobeRun: "633B3570",
      });
  }
};

/** @type {unknown[]} */
export const deviatingHashes = [];

export async function functionIntegrityCheck() {
  await waitFor(() => GameVersion !== "R0" && typeof ServerIsConnected === "boolean" && ServerIsConnected);

  logInfo("Checking function integrity with GameVersion", GameVersion);

  /**
   * @param {keyof ReturnType<typeof expectedHashes>} func
   * @param {string} hash
   * @returns {func is keyof typeof window}
   */
  function isActiveFunction(func, hash) {
    return hash !== "SKIP";
  }

  for (const [func, hash] of objEntries(expectedHashes(GameVersion))) {
    if (!isActiveFunction(func, hash)) {
      continue;
    }
    if (!window[func]) {
      logWarn(`Expected function ${func} not found.`);
      continue;
    }
    if (typeof window[func] !== "function") {
      logWarn(`Expected function ${func} is not a function.`);
      continue;
    }
    const actualHash = SDK.getOriginalHash(func);
    if (actualHash !== hash) {
      logWarn(`Function ${func} has been modified before FBC, potential incompatibility: ${actualHash}`);
      deviatingHashes.push(func);
    }
  }
}