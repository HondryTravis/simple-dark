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
      "string constant.other.placeholder",
      "constant.other"
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
      "meta.return.type.ts",
      "meta.type.annotation",
      "meta.interface.ts",
      "keyword.type.cs"
    ],
    "settings": {
      "foreground": color['cyan']
    }
  },
  {
    "name": "other.object.constant general",
    "scope": [
      "variable.other.constant.property",
      "variable.other.constant.object.property."
    ],
    "settings": {
      "foreground": color['purple']
    }
  },
  {
    "name": "other.object for C# style",
    "scope": [
      "variable.other.object.cs"
    ],
    "settings": {
      "foreground": color['cyan']
    }
  },
]

