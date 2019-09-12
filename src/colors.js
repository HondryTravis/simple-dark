const eidtorColor = require('./baseColor')
const colors = {
    // 编辑器code块字体和背景
    "editor.background": eidtorColor['baseColor']['content'],
    "editor.foreground": eidtorColor['baseColor']['whiteGray'],
    // 编辑器侧边栏
    "sideBar.background": eidtorColor['baseColor']['black'],
    "sideBarTitle.foreground": eidtorColor['baseColor']['white'],
    // 编辑器活动栏
    "activityBar.background": eidtorColor['baseColor']['blackGray'],
    "activityBar.foreground": eidtorColor['baseColor']['white'],
    "activityBarBadge.background": eidtorColor['baseColor']['blueLight'],
    // 状态栏
    "statusBar.background": eidtorColor['baseColor']['black'],
    // 顶部选项卡背景颜色
    "editorGroupHeader.tabsBackground": eidtorColor['baseColor']['black'],
    "tab.activeBackground": eidtorColor['baseColor']['content'],
    "tab.inactiveBackground": eidtorColor['baseColor']['blackGray'],
    // 编辑器选中颜色
    "editor.selectionBackground": eidtorColor['baseColor']['blackGrayLight'],
    "editor.selectionHighlightBackground": eidtorColor['baseColor']['blackGrayLight'],
    "editor.wordHighlightBackground":  eidtorColor['baseColor']['blackGrayLight'],
    "editor.wordHighlightStrongBackground": eidtorColor['baseColor']['blackGrayLight'],
}
module.exports = {
    colors
}