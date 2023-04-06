function getConfig(color) {
  return {
    "sideBar.background": color['black'],
    "sideBarTitle.foreground": color['white'],

    "sideBarSectionHeader.background": color['darkGary'],
    "list.errorForeground": color['tomato'],
    "list.warningForeground": color['tomato'],

    "list.activeSelectionBackground": color['darkGary_low'],
    "list.inactiveSelectionBackground": color['darkGary_low'],
    "list.hoverBackground": color['color_ctrl_hover_gray'],
    "list.focusAndSelectionOutline": color['deepSkyBlue'],
  }
}

module.exports = getConfig