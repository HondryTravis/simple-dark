/**
 * @scope variable
 * code variable style in this file
 * you can be changed to you love the color 
 */
const color = require('../base/color')

module.exports = [
  {
    "name": "variable",
    "scope": [
      "variable",
    ],
    "settings": {
      "foreground": color['mediumWhite']
    }
  },
  {
    "name": "Function parameter variable",
    "scope": [
      "variable.parameter",
      "entity.name.variable.parameter.cs",
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": color['orange']
    }
  },
  {
    "name": "Function this variable",
    "scope": [
      "variable.language"
    ],
    "settings": {
      "foreground": color['purple']
    }
  },
  {
    "name": "types",
    "scope": [
      "meta.type.annotation",
      "meta.return.type.ts",
      "meta.interface.ts",
      "keyword.type.cs"
    ],
    "settings": {
      "foreground": color['cyan']
    }
  },
  {
    "name": "other.object style",
    "scope": [
      "variable.other.object.cs",
    ],
    "settings": {
      "foreground": color['cyan']
    }
  },
]

