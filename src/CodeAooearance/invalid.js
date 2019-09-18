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
}
]
    

    


    // invalid.deprecated.entity.other.attribute-name