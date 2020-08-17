/**
 * @scope Support
 * code interface, class, function style in this file
 * you can be changed to you love the color 
 */
const color = require('../BaseColor')

module.exports = [
    {
        "name": "Support",
        "scope": [
            "support.class",
            "support.variable",
            "support.function",
            "support.type",
            "support.constant",
        ],
        "settings": {
            "foreground": color['cyan']
        }
    }
]