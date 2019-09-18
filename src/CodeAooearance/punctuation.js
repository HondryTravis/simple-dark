//punctuation
const color = require('../base/color')

module.exports = [
    {
        "name": "Punctuation",
        "scope": [
            "punctuation",
            "punctuation.separator",
            "punctuation.terminator",
            "punctuation.separator.continuation",
            "punctuation.accessor"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Punctuation color at the start and end of string",
        "scope": [
           "punctuation.definition.string.begin",
           "punctuation.definition.string.end",
           "punctuation.definition.string.template.begin",
           "punctuation.definition.string.template.end"
        ],
        "settings": {
            "foreground": color['greenLight']
        }
    },
    {
        "name": "JSON color",
        "scope": [
            "string.json",
            "punctuation.support.type.property-name.begin",
            "punctuation.support.type.property-name.end",
            "variable.other.jsdoc"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "Escape character",
        "scope": [
            "punctuation.definition.entity"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
    {
        "scope": [
            "punctuation.definition.block.tag.jsdoc",
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "scope": [
            "punctuation.definition.bracket.curly.begin.jsdoc",
            "punctuation.definition.bracket.curly.end.jsdoc"
        ],
        "settings": {
            "foreground": color['orange']
        }
    },
    {

      "name": "less,css,sass,html",
      "scope": [
        "punctuation.separator.key-value",
        "punctuation.definition.variable",
        "punctuation.definition.keyword",
        "keyword.control.at-rule.import",
        "punctuation.definition.entity.css",
        "variable.other.less"
      ],
      "settings": {
        "foreground": color['pink']
      }
    }
]
    