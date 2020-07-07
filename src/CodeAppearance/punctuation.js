/**
 * @scope punctuation
 * The following scopes are punctuation scopes that are not embedded within other scopes. For instance, the string. section includes documentation about scopes for string punctuation.
 * you can be changed to you love the color 
 */
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
            "foreground": color['mediumWhite']
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
        "name": "Use for jsdoc comment",
        "scope": [
            "punctuation.definition.block.tag.jsdoc",
            "punctuation.definition.template-expression.begin",
            "punctuation.definition.template-expression.end"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name":  "Use for jsdoc comment",
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
    