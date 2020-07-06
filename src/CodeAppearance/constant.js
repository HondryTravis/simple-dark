/**
 * @scope constant
 * Numeric literals, including integers, floats, etc.
 * you can be changed to you love the color 
 */
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
      "name": "Use for css",
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
    
    
