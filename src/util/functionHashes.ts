export function expectedHashes(gameVersion: string): Readonly<Record<string, string>> {
  switch (gameVersion.toLowerCase()) {
    default:
      return {
        ActivityChatRoomArousalSync: "BFF3DED7",
        ActivitySetArousal: "3AE28123",
        ActivitySetArousalTimer: "1342AFE2",
        ActivityTimerProgress: "6CD388A7",
        AppearanceClick: "48B83523", // Screens/Character/Appearance/Appearance.js (21.5.2024)
        AppearanceLoad: "4360C485",
        AppearanceRun: "8B7558CB", // Screens/Character/Appearance/Appearance.js (13.5.2024)
        CharacterAppearanceBuildCanvas: "C05FE035", // Screens/Character/Appearance/Appearance.js
        CharacterAppearanceMustHide: "9C34DF21",
        CharacterAppearanceVisible: "0740043C",
        CharacterAppearanceWardrobeLoad: "A5B63A03",
        CharacterBuildDialog: "85F79C6E",
        CharacterCompressWardrobe: "2A05ECD1",
        CharacterDelete: "57AA5D48",
        CharacterGetCurrent: "69F45A41",
        CharacterLoadCanvas: "EAB81BC4",
        CharacterLoadOnline: "407FEDDE", // Scripts/Character.js
        CharacterNickname: "A794EFF5",
        CharacterRefresh: "301DA9CF",
        CharacterSetCurrent: "F46573D8",
        CharacterSetFacialExpression: "EC032BEE", // Scripts/Character.js (6.5.2024)
        CharacterSetActivePose: "566A14D7",
        ChatAdminRoomCustomizationClick: "9D859B28",
        ChatAdminRoomCustomizationProcess: "AF01C65A",
        ChatRoomAppendChat: "12890378", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomCharacterUpdate: "DE2DC592",
        ChatRoomCharacterViewDraw: "732C91C9", // Screens/Online/ChatRoom/ChatRoomCharacterView.js (19.4.2024 )
        ChatRoomCharacterViewIsActive: "CD8066FA",
        ChatRoomClearAllElements: "ECF65628", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomCurrentTime: "A462DD3A",
        ChatRoomDrawCharacterStatusIcons: "B5209E11", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomGenerateChatRoomChatMessage: "3BDE0884", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomHideElements: "D58ECB5C", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomHTMLEntities: "0A7ADB1D",
        ChatRoomKeyDown: "9F45A713", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomListManipulation: "75D28A8B",
        ChatRoomMapViewCharacterIsVisible: "286C447D",
        ChatRoomMapViewCharacterOnWhisperRange: "B0D08E96",
        ChatRoomMapViewIsActive: "D181020D",
        ChatRoomMenuBuild: "F76AEFC3",
        ChatRoomMenuClick: "3BC3C582", // Screens/Online/ChatRoom/ChatRoom.js (6.5.2024)
        ChatRoomMenuDraw: "83275135", // Screens/Online/ChatRoom/ChatRoom.js (6.5.2024)
        ChatRoomMessage: "E75ED29B", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomRegisterMessageHandler: "C432923A",
        ChatRoomSendChat: "ACB10CE5", // Screens/Online/ChatRoom/ChatRoom.js
        ChatRoomStart: "9B822A9A",
        ChatRoomSyncMemberJoin: "2A9CB40B", // Screens/Online/ChatRoom/ChatRoom.js
        CommandCombine: "80F9D4AF", // Screens/Online/ChatRoom/Commands.js
        CommandExecute: "D1DEB2AD", // Screens/Online/ChatRoom/Commands.js
        CommonClick: "1F6DF7CB",
        CommonColorIsValid: "390A2CE4",
        CommonSetScreen: "B674BE4D", // Scripts/Common.js
        CraftingClick: "083CC3CA", // Screens/Room/Crafting/Crafting.js
        CraftingConvertSelectedToItem: "03E97498",
        CraftingRun: "CA7B4FE0", // Screens/Room/Crafting/Crafting.js
        DialogCanUnlock: "A86B2558",
        DialogDrawItemMenu: "FCE556C2",
        DialogLeave: "C37553DC",
        DialogMenuButtonBuild: "3FDE2F94", // Scripts/Dialog.js (13.5.2024)
        DialogMenuButtonClick: "C1F5E0AF", // Scripts/Dialog.js (2.5.2024)
        DrawArousalMeter: "BB0755AF",
        DrawArousalThermometer: "7ED6D822",
        DrawBackNextButton: "7263249E", // Scripts/Drawing.js
        DrawButton: "B747DF6E",
        DrawCharacter: "B175AF5E",
        DrawCheckbox: "00FD87EB",
        DrawImageEx: "E01BE7E7",
        DrawImageResize: "D205975A",
        DrawItemPreview: "6A7A1E2A",
        DrawProcess: "9776CBC2",
        DrawText: "C1BF0F50",
        DrawTextFit: "F9A1B11E",
        ElementCreate: "A3E07B07",
        ElementCreateInput: "0755ED07",
        ElementCreateTextArea: "4E040819", // Scripts/Element.js
        ElementIsScrolledToEnd: "1CC4FE11",
        ElementPosition: "81836C4E", // Scripts/Element.js
        ElementScrollToEnd: "1AC45575",
        ElementValue: "4F26C62F",
        FriendListShowBeep: "5B91D5DA", // Screens/Character/FriendList/FriendList.js
        GameRun: "337CB358", // Scripts/Game.js
        GLDrawResetCanvas: "81214642",
        InformationSheetRun: "5B5C7751", // Screens/Character/InformationSheet/InformationSheet.js
        InterfaceTextGet: "66603471", // Scripts/Text.js (2.5.2024)
        InventoryGet: "E666F671",
        "Layering.Load": "589C88CD", // Scripts/Layering.js
        "Layering._ResetClickListener": "5EDCC26F", // Scripts/Layering.js
        LoginClick: "ADA7E2B7", // Screens/Character/Login/Login.js
        LoginDoLogin: "D4000B03", // Screens/Character/Login/Login.js
        LoginRun: "D1DB7A8A", // Screens/Character/Login/Login.js
        LoginSetSubmitted: "C88F4A8E",
        LoginStatusReset: "18619F02",
        MouseIn: "CA8B839E",
        NotificationDrawFavicon: "AB88656B",
        NotificationRaise: "E8F29646",
        NotificationTitleUpdate: "0E92F3ED",
        OnlineGameAllowChange: "3779F42C",
        OnlineProfileClick: "521146DF",
        OnlineProfileUnload: "A8651F30",
        OnlineProfileLoad: "BE8B009B",
        OnlineProfileRun: "7F57EF9A",
        PoseSetActive: "22C02050",
        PreferenceExit: "27E40748",
        PreferenceInitPlayer: "B12FA731", // Screens/Character/Preference/Preference.js (6.5.2024)
        PreferenceSubscreenArousalClick: "84F49886",
        PreferenceSubscreenArousalRun: "96A6157B",
        PreferenceSubscreenImmersionClick: "0EF82344",
        PreferenceSubscreenImmersionRun: "276FA30B",
        RelogRun: "10AF5A60",
        RelogExit: "2DFB2DAD",
        ServerAccountBeep: "37ED13F6", // Scripts/Server.js
        ServerAppearanceBundle: "4D069622",
        ServerAppearanceLoadFromBundle: "946537FD",
        ServerConnect: "845E50A6",
        ServerDisconnect: "198FF7E7",
        ServerInit: "B6CEF7F1",
        ServerOpenFriendList: "FA8D3CDE",
        ServerPlayerAppearanceSync: "A014E0B7",
        ServerPlayerExtensionSettingsSync: "1776666B",
        ServerSend: "ABE74E75",
        ServerSendQueueProcess: "BD4277AC",
        SkillGetWithRatio: "3EB4BC45",
        SpeechTransformBabyTalk: "C812EE0E", // Scripts/Speech.js
        SpeechTransformGagGarble: "691A05BF", // Scripts/Speech.js
        SpeechTransformGagGarbleIntensity: "F61ECBDA", // Scripts/Speech.js
        SpeechTransformProcess: "666DDA2F", // Scripts/Speech.js
        SpeechTransformShouldBabyTalk: "634BCD64", // Scripts/Speech.js
        SpeechTransformStutter: "A930F55E", // Scripts/Speech.js
        SpeechTransformStutterIntensity: "4754768A", // Scripts/Speech.js
        StruggleDexterityProcess: "D185D348", // Scripts/Struggle.js
        StruggleFlexibilityCheck: "727CE05B",
        StruggleFlexibilityProcess: "1A0B96EF", // Scripts/Struggle.js
        StruggleLockPickDraw: "CCCCA4BE", // Scripts/Struggle.js
        StruggleMinigameHandleExpression: "1B3ABF55",
        StruggleMinigameStop: "FB05E8A9",
        StruggleStrengthProcess: "B1A1457D", // StruggleStrengthProcess
        TextGet: "4DDE5794",
        TextLoad: "0D535190",
        TimerInventoryRemove: "2588CA11",
        TimerProcess: "BFB7FFE2",
        TitleExit: "F13F533C",
        ValidationSanitizeProperties: "659F5965",
        WardrobeClick: "33405B1D",
        WardrobeExit: "12D14AE4",
        WardrobeFastLoad: "AAB9F25B",
        WardrobeFastSave: "D1E906FD",
        WardrobeFixLength: "CA3334C6",
        WardrobeLoad: "C343A4C7",
        WardrobeLoadCharacterNames: "F39DF5E3",
        WardrobeRun: "633B3570",
      } as const;
  }
}
