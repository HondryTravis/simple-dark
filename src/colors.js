const eidtorColor = require('./baseColor')
const colors = {
    // code
    "editor.background": eidtorColor['baseColor']['content'],
    "editor.foreground": eidtorColor['baseColor']['whiteGray'],
    // sidebar
    "sideBar.background": eidtorColor['baseColor']['black'],
    "sideBarTitle.foreground": eidtorColor['baseColor']['white'],
    // active bar 
    "activityBar.background": eidtorColor['baseColor']['blackGray'],
    "activityBar.foreground": eidtorColor['baseColor']['white'],
    "activityBarBadge.background": eidtorColor['baseColor']['blueLight'],
    // status bgcolor
    "statusBar.background": eidtorColor['baseColor']['black'],
    // top tab goup settings
    "editorGroupHeader.tabsBackground": eidtorColor['baseColor']['black'],
    "tab.activeBackground": eidtorColor['baseColor']['content'],
    "tab.inactiveBackground": eidtorColor['baseColor']['blackGray'],
    // editor selected attr 
    "editor.selectionBackground": eidtorColor['baseColor']['blackGrayLight'],
    "editor.selectionForeground": eidtorColor['baseColor']['white'],
    "editor.selectionHighlightBackground": eidtorColor['baseColor']['blackGrayLight'],
    "editor.wordHighlightBackground":  eidtorColor['baseColor']['blackGrayLight'],
    "editor.wordHighlightStrongBackground": eidtorColor['baseColor']['blackGrayLight'],
    // find Match attr
    "editor.findMatchBackground": eidtorColor['baseColor']['blackGrayLowerLight'],
    "editor.findMatchHighlightBackground": eidtorColor['baseColor']['blackGrayLight'],

    // mouse hover color 
    "editor.hoverHighlightBackground": eidtorColor['baseColor']['blackGrayLight'],

    // git 
    "gitDecoration.modifiedResourceForeground": eidtorColor['baseColor']['yellow'],
    "gitDecoration.addedResourceForeground": eidtorColor['baseColor']['green'],
    "gitDecoration.deletedResourceForeground": eidtorColor['baseColor']['red'],
    // mini findMatch color
    "minimap.findMatchHighlight": eidtorColor['baseColor']['green'],
}
module.exports = {
    colors
}