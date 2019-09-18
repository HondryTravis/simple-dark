// support 
const color = require('../base/color')

module.exports = [
    {
        "name": "Support",
        "scope": [
            "support.class.builtin",
            "support.class",
            "support.variable.property",
            "support.function.console",
            "support.type.primitive",
            "support.type.object.module",
            "support.function",
            "support.type.property-name.css",
        ],
        "settings": {
            "foreground": color['cyan']
        }
    }
]