/**
 * @scope Constant
 * Numeric literals, including integers, floats, etc.
 * you can be changed to you love the color 
 */
const color = require('../BaseColor')

module.exports = [
    {
        "name": "Constant",
        "scope": [
           "constant",
           "constant.numeric"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
]
    
    
