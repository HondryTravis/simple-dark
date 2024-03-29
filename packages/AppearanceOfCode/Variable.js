/**
 * @scope Variables
 * code Variables style in this file
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
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
      "name": "Variables Less Sass ...",
      "scope": [
        "variable.scss",
        "variable.other.interpolation.less",
      ],
      "settings": {
        "foreground": color['lightCyan']
      }
    },
    {
      "name": "Variables parameter for C#",
      "scope": [
        "entity.name.variable.parameter.cs"
      ],
      "settings": {
        "foreground": color['orange']
      }
    }
  ]
}
module.exports = getConfig