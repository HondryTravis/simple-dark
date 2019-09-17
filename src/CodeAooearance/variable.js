const color = require('../base/color')

module.exports = [
    {
        "name": "variable",
        "scope": [
            "variable",
            "string constant.other.placeholder",
            "constant.other"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Function variable",
        "scope": [
            "variable.parameter"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['orange']
        }
    },
    {
        "name": "Function parameters in the function color variable",
        "scope": [
            "variable.other.object",
            "meta.function-call"
        ],
        "settings": {
            "foreground": color['orange']
        }
    },
    {
        "name": "Function this variable",
        "scope": [
            "variable.language"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
    {
        "name": "types",
        "scope": [
            "meta.return.type.ts",
            "meta.type.annotation",
            "meta.interface.ts",
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "scope": [
            "variable.other.constant.property"
        ],
        "settings": {
            "foreground": color['purple']
        }
    }
]
    
