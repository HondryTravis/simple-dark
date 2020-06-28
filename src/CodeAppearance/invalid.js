/**
 * @scope keyword
 * Elements that are illegal in a specific context should use the following scope. Overuse of this will likely lead to unpleasant highlighting for users as they edit code.
 * you can be changed to you love the color 
 */
const color = require('../base/color')

module.exports = [
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
    "name": "Invalid HTML attribute name",
    "scope": [
      "invalid.deprecated.entity.other.attribute-name"
    ],
    "settings": {
      "foreground": color['blueLight']
    }
  },
  {
    "name": "Invalid Style attribute name",
    "scope": [
      "invalid.deprecated.media"
    ],
    "settings": {
      "foreground": color['green']
    }
  }
]





    // invalid.deprecated.entity.other.attribute-name