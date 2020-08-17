/**
 * @scope Variables
 * code Variables style in this file
 * you can be changed to you love the color 
 */

const color = require('../BaseColor')
module.exports = [
  {
    "name": "Variables",
    "scope": [
      "variable",
    ],
    "settings": {
      "foreground": color['mediumWhite']
    }
  },
  {
    "name": "Variables this ...",
    "scope": [
      "variable.language",
    ],
    "settings": {
      "foreground": color['purple']
    }
  },
  {
    "name": "Variables parameter ...",
    "scope": [
      "variable.parameter",
    ],
    "settings": {
      "foreground": color['orange']
    }
  },
  {
    "name": "Variables constant ...",
    "scope": [
      "variable.other.constant",
    ],
    "settings": {
      "foreground": color['lightCyan']
    }
  },
  {
    "name": "Variables less,sass ...",
    "scope": [
      "variable.other.interpolation",
    ],
    "settings": {
      "foreground": color['pink']
    }
  },

]