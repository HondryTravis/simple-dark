const eidtorColor = require('./color.base')
const colors = {
    // code
    "editor.background": eidtorColor['color']['content'],
    "editor.foreground": eidtorColor['color']['whiteGray'],
    // sidebar
    "sideBar.background": eidtorColor['color']['black'],
    "sideBarTitle.foreground": eidtorColor['color']['white'],
    // active bar 
    "activityBar.background": eidtorColor['color']['blackGray'],
    "activityBar.foreground": eidtorColor['color']['white'],
    "activityBarBadge.background": eidtorColor['color']['blueLight'],
    // status bgcolor
    "statusBar.background": eidtorColor['color']['black'],
    // top tab goup settings
    "editorGroupHeader.tabsBackground": eidtorColor['color']['black'],
    "tab.activeBackground": eidtorColor['color']['content'],
    "tab.inactiveBackground": eidtorColor['color']['blackGray'],
    // editor selected attr 
    "editor.selectionBackground": eidtorColor['color']['blackGrayLight'],
    "editor.selectionForeground": eidtorColor['color']['white'],
    "editor.selectionHighlightBackground": eidtorColor['color']['blackGrayLight'],
    "editor.wordHighlightBackground":  eidtorColor['color']['blackGrayLight'],
    "editor.wordHighlightStrongBackground": eidtorColor['color']['blackGrayLight'],
    // find Match attr
    "editor.findMatchBackground": eidtorColor['color']['blackGrayLowerLight'],
    "editor.findMatchHighlightBackground": eidtorColor['color']['blackGrayLight'],

    // mouse hover color 
    "editor.hoverHighlightBackground": eidtorColor['color']['blackGrayLight'],

    // git 
    "gitDecoration.modifiedResourceForeground": eidtorColor['color']['yellow'],
    "gitDecoration.addedResourceForeground": eidtorColor['color']['green'],
    "gitDecoration.deletedResourceForeground": eidtorColor['color']['red'],
    // mini findMatch color
    "minimap.findMatchHighlight": eidtorColor['color']['green'],
}
module.exports = {
    colors
}