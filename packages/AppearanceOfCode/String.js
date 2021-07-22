/**
 * @scope String
 * code string style in this file
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
    {
      "name": "String: Quoted | Template",
      "scope": [
        "string.quoted.single",
        "string.quoted.double",
        "string.quoted.triple",
        "string.quoted.other",
        "string.template"
      ],
      "settings": {
        "foreground": color['lightGreen']
      }
    },
    {
      "name": "String: Regexp",
      "scope": [
        "string.regexp",
      ],
      "settings": {
        "foreground": color['green']
      }
    },
    {
      "name": "String-Attribute: CSS",
      "scope": [
        "string.unquoted.attribute-value.css"
      ],
      "settings": {
        "foreground": color['purple']
      }
    }
  ]
}

module.exports = getConfig