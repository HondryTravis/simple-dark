/**
 * @scope Invalid
 * stuff which is “invalid”.
 */

function getConfig(color) {
  return [
    {
      "name": "Invalid",
      "scope": [
        "invalid",
        "invalid.illegal"
      ],
      "settings": {
        "foreground": color['red']
      }
    },
    {
      "name": "Invalid: HTML[attribute-name]",
      "scope": [
        "invalid.deprecated.entity.other.attribute-name"
      ],
      "settings": {
        "foreground": color['deepSkyBlue']
      }
    },
    {
      "name": "Invalid: Style[attribute-name]",
      "scope": [
        "invalid.deprecated.media"
      ],
      "settings": {
        "foreground": color['green']
      }
    }
  ]
}

module.exports = getConfig