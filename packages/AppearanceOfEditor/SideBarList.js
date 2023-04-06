function getConfig(color) {
  return {
    "sideBar.background": color['black'],
    "sideBarTitle.foreground": color['white'],

    "sideBarSectionHeader.background": color['darkGary'],
    "list.errorForeground": color['tomato'],
    "list.warningForeground": color['tomato'],

    "list.activeSelectionBackground": color['color_ctrl_hover_gray'],
    "list.inactiveSelectionBackground": color['black'],
    "list.hoverBackground": color['color_ctrl_hover_gray'],
    "list.focusAndSelectionOutline": color['deepSkyBlue'],
    "list.inactiveFocusOutline": color['deepSkyBlue'],
  }
}

module.exports = getConfig