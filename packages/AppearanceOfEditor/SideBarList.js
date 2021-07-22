function getConfig(color) {
  return {
    "sideBar.background": color['black'],
    "sideBarTitle.foreground": color['white'],

    "sideBarSectionHeader.background": color['darkGary'],

    "list.errorForeground": color['tomato'],
    "list.warningForeground": color['tomato'],
  }
}

module.exports = getConfig