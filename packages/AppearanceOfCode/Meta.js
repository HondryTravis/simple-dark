/**
 * @scope Meta
 * Meta scopes are used to scope larger sections of code or markup, generally containing multiple, more specific scopes. These are not intended to be styled by a color scheme, but used by preferences and plugins.
 * you can be changed to you love the color 
 */
const color = require('../BaseColor')

module.exports = [
    {
        "name": "Meta: Color of Function name",
        "scope": [
            "meta.function.parameters",
            "entity.name.function"
        ],
        "settings": {
            "foreground": color['green']
        }
    },
    {
      "name": "Meta: Use for in HTML attr id",
      "scope": [
        "meta.toc-list.id.html",
        "meta.attribute-with-value.id",
      ],
      "settings": {
        "foreground": color['lightGreen']
      }
    },
    {
      "name": "Meta: Use for in HTML @",
      "scope": [
        "meta.tag.block.any"
      ],
      "settings": {
        "foreground": color['pink']
      }
    },
]