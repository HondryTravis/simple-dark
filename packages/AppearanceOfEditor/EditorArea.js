function getConfig(color) {
  return {
    // code main
    "editor.background": color['lightBlack'],
    "editor.foreground": color['mediumWhite'],

    // find Match string attr
    "editor.findMatchHighlightBackground": color['gray'],

    // mouse hover color
    "editor.hoverHighlightBackground": color['gray'],

    // editor selected attr
    "editor.selectionBackground": color['gray'],
    "editor.selectionForeground": color['white'],
    "editor.selectionHighlightBackground": color['gray'],
    "editor.wordHighlightBackground": color['gray'],
    "editor.wordHighlightStrongBackground": color['gray'],

    // bugs
    "editorWarning.foreground": color['red'],
    "editorInfo.foreground": color['green'],
  }
}

module.exports = getConfig