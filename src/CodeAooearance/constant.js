const color = require('../base/color')
module.exports = [
    {
        "name": "Constant",
        "scope": [
           "constant",
           "constant.character.escape"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
    {
      "scope": [
        "punctuation.definition.constant.css",
        "constant.other.color.rgb-value.hex.css",
        "meta.property-value.css"
      ],
      "settings": {
        "foreground": color['purple']
      }
    }
]
    
    
