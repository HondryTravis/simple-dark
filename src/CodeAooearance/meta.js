// meta.js
const color = require('../base/color')

module.exports = [
    {
        "name": "Meta Function",
        "scope": [
            "meta.function.parameters",
            "entity.name.function"
        ],
        "settings": {
            "foreground": color['green']
        }
    },
    {
      "scope": [
        "meta.toc-list.id.html",
        "meta.attribute-with-value.id"
      ],
      "settings": {
        "foreground": color['greenLight']
      }
    }
]