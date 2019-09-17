// string
const color = require('../base/color')

module.exports = [
  {
    "name": "String Normal",
    "scope": [
      "string.quoted.single",
      "string.quoted.double",
      "string.quoted.triple",
      "string.quoted.other",
      "string.template"
    ],
    "settings": {
      "foreground": color['greenLight']
    }
  },
  {
    "name": "Regular string",
    "scope": [
      "string.regexp",
    ],
    "settings": {
      "foreground": color['green']
    }
  },
  {
    "scope": [
      "string.unquoted.attribute-value.css"
    ],
    "settings": {
      "foreground": color['purple']
    }
  }
]