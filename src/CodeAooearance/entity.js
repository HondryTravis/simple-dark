// entity

const color = require('../base/color')

module.exports = [
    {
        "name": "Entity TagName",
        "scope": [
            "entity.name.tag"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name": "Entity Attribute Name",
        "scope": [
            "entity.other.attribute-name"
        ],
        "settings": {
            "foreground": color['blueLight']
        }
    },
    {
        "name": "class Name",
        "scope": [
            "entity.name.type"
        ],
        "settings": {
            "foreground": color['blueLight']
        }
    },
    {
        "name": "class Name",
        "scope": [
            "entity.other.inherited-class"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    }
]