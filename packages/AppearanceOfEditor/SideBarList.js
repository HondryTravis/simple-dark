function getConfig(color) {
  return {
    "sideBar.background": color['black'],
    "sideBarTitle.foreground": color['white'],

    "sideBarSectionHeader.background": color['darkGray'],
    "list.errorForeground": color['tomato'],
    "list.warningForeground": color['tomato'],

    "list.activeSelectionBackground": color['darkGray_low'],
    "list.activeSelectionForeground": color['white'],
    "list.inactiveSelectionBackground": color['darkGray_low'],
    "list.hoverBackground": color['color_ctrl_hover_gray'],
    "list.focusAndSelectionOutline": color['deepSkyBlue'],
  }
}

module.exports = getConfig