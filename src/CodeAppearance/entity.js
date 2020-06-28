/**
 * @scope entity
 * The entity scopes are generally assigned to the names of data structures, types and other uniquely-identifiable constructs in code and markup. The notable exceptions are entity.name.tag and entity.other.attribute-name, which are used in HTML and XML tags.
 * you can be changed to you love the color 
 */
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
            "entity.name.type",
            "entity.other.inherited-class"
        ],
        "settings": {
            "foreground": color['blueLight']
        }
    }
]