/**
 * @scope Storage
 * Types should use the following scope. Examples include int, bool and char.
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
    {
      "name": "Storage",
      "scope": [
        "storage"
      ],
      "settings": {
        "foreground": color['pink']
      }
    },
    {
      "name": "Storage: Type for c#",
      "scope": [
        "storage.type.cs"
      ],
      "settings": {
        "foreground": color['deepSkyBlue']
      }
    }
  ]
}

module.exports = getConfig