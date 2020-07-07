const color = require('../base/color')

module.exports = {
    // code main
    "editor.background": color['gray'],
    "editor.foreground": color['mediumWhite'],
    // find Match attr
    "editor.findMatchBackground": color['blackGrayLowerLight'],
    "editor.findMatchHighlightBackground": color['blackGrayLight'],

    // mouse hover color 
    "editor.hoverHighlightBackground": color['blackGrayLight'],
    // editor selected attr 
    "editor.selectionBackground": color['blackGrayLight'],
    "editor.selectionForeground": color['white'],
    "editor.selectionHighlightBackground": color['blackGrayLight'],
    "editor.wordHighlightBackground":  color['blackGrayLight'],
    "editor.wordHighlightStrongBackground": color['blackGrayLight'],

    // bugs
    "editorWarning.foreground": color['red'],
    "editorInfo.foreground": color['green'],
}