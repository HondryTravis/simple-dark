/**
 * @scope storage
 * Types should use the following scope. Examples include int, bool and char.
 * you can be changed to you love the color  
 */
const color = require('../base/color')
module.exports = [
  {
    "name": "storage",
    "scope": [
      "storage"
    ],
    "settings": {
      "foreground": color['pink']
    }
  },
  {
    "name": "storage for c#",
    "scope": [
      "storage.type.cs"
    ],
    "settings": {
      "foreground": color['blueLight']
    }
  }
]