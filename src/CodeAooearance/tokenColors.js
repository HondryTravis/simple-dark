const color = require('../base/color')
const tokenColors = [
    {
        "name": "Comment",
        "scope": [
            "comment",
            "punctuation.definition.comment"
        ],
        "settings": {
            "foreground": color['blackGrayLowerLight']
        }
    },
    {
        "name": "Variables",
        "scope": [
            "variable",
            "string constant.other.placeholder"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Colors",
        "scope": [
            "constant.other.color"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Invalid",
        "scope": [
            "invalid",
            "invalid.illegal"
        ],
        "settings": {
            "foreground": color['red']
        }
    },
    {
        "name": "Keyword, Storage",
        "scope": [
            "keyword",
            "storage.type",
            "storage.modifier"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name": "Operator, Misc",
        "scope": [
            "keyword.control",
            "constant.other.color",
            "punctuation",
            "meta.tag",
            "punctuation.definition.tag",
            "keyword.other.template",
            "keyword.other.substitution"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name": "Tag",
        "scope": [
            "entity.name.tag",
            "meta.tag.sgml",
            "markup.deleted.git_gutter"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name": "Function, Special Method",
        "scope": [
            "entity.name.function",
            "meta.function-call",
            "variable.function",
            "support.function",
            "keyword.other.special-method"
        ],
        "settings": {
            "foreground": color['green']
        }
    },
    {
        "name": "Block Level Variables",
        "scope": [
            "meta.block variable.other"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Other Variable, String Link",
        "scope": [
            "support.other.variable",
            "string.other.link"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Number, Constant, Tag Attribute, Embedded",
        "scope": [
            "constant.numeric",
            "constant.language",
            "support.constant",
            "constant.character",
            "constant.escape",
            "variable.parameter",
            "keyword.other.unit",
            "keyword.other"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
    {
        "name": "Function Argument",
        "scope": [
            "variable.parameter",
        ],
        "settings": {
            "foreground": color['orange']
        }
    },
    {
        "name": "String, Symbols, Inherited Class, Markup Heading",
        "scope": [
            "string",
            "constant.other.symbol",
            "constant.other.key",
            "entity.other.inherited-class",
            "markup.heading",
            "markup.inserted.git_gutter",
            "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
            "foreground": color['greenLight']
        }
    },
    {
        "name": "Class, Support",
        "scope": [
            "entity.name",
            "support.type",
            "support.class",
            "support.orther.namespace.use.php",
            "meta.use.php",
            "support.other.namespace.php",
            "markup.changed.git_gutter",
            "support.type.sys-types"
        ],
        "settings": {
            "foreground": color['blueLight']
        }
    },
    {
        "name": "Entity Types",
        "scope": [
            "support.type"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "CSS Class and Support",
        "scope": [
            "source.css support.type.property-name",
            "source.sass support.type.property-name",
            "source.scss support.type.property-name",
            "source.less support.type.property-name",
            "source.stylus support.type.property-name",
            "source.postcss support.type.property-name"
        ],
        "settings": {
            "foreground": color['whiteGray']
        }
    },
    {
        "name": "Sub-methods",
        "scope": [
            "entity.name.module.js",
            "variable.import.parameter.js",
            "variable.other.class.js"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name": "Language methods",
        "scope": [
            "variable.language"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['purple']
        }
    },
    {
        "name": "entity.name.method.js",
        "scope": [
            "entity.name.method.js"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['blueLight']
        }
    },
    {
        "name": "meta.method.js",
        "scope": [
            "meta.class-method.js entity.name.function.js",
            "variable.function.constructor"
        ],
        "settings": {
            "foreground": color['blueLight']
        }
    },
    {
        "name": "Attributes",
        "scope": [
            "entity.other.attribute-name"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "HTML Attributes",
        "scope": [
            "text.html.basic entity.other.attribute-name.html",
            "text.html.basic entity.other.attribute-name"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['cyan']
        }
    },
    {
        "name": "CSS Classes",
        "scope": [
            "entity.other.attribute-name.class"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
        "name": "CSS ID's",
        "scope": [
            "source.sass keyword.control"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "Inserted",
        "scope": [
            "markup.inserted"
        ],
        "settings": {
            "foreground": color['greenLight']
        }
    },
    {
        "name": "Deleted",
        "scope": [
            "markup.deleted"
        ],
        "settings": {
            "foreground": color['red']
        }
    },
    {
        "name": "Changed",
        "scope": [
            "markup.changed"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "Regular Expressions",
        "scope": [
            "string.regexp"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "Escape Characters",
        "scope": [
            "constant.character.escape"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "URL",
        "scope": [
            "*url*",
            "*link*",
            "*uri*"
        ],
        "settings": {
            "fontStyle": "underline"
        }
    },
    {
        "name": "Decorators",
        "scope": [
            "tag.decorator.js entity.name.tag.js",
            "tag.decorator.js punctuation.definition.tag.js"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['purple']
        }
    },
    {
        "name": "ES7 Bind Operator",
        "scope": [
            "source.js constant.other.object.key.js string.unquoted.label.js"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['pink']
        }
    },
    {
        "name": "JSON Key - Level 0",
        "scope": [
            "source.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "JSON Key - Level 1",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "JSON Key - Level 2",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['cyan']
        }
    },
    {
        "name": "JSON Key - Level 3",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "JSON Key - Level 4",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "JSON Key - Level 5",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "JSON Key - Level 6",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "JSON Key - Level 7",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "JSON Key - Level 8",
        "scope": [
            "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Markdown - Plain",
        "scope": [
            "text.html.markdown",
            "punctuation.definition.list_item.markdown"
        ],
        "settings": {
            "foreground": color['white']
        }
    },
    {
        "name": "Markdown - Markup Raw Inline",
        "scope": [
            "text.html.markdown markup.inline.raw.markdown"
        ],
        "settings": {
            "foreground": color['purple']
        }
    },
    {
        "name": "Markdown - Markup Raw Inline Punctuation",
        "scope": [
            "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
        ],
        "settings": {
            "foreground": "#65737E"
        }
    },
    {
        "name": "Markdown - Heading",
        "scope": [
            "markdown.heading",
            "markup.heading | markup.heading entity.name",
            "markup.heading.markdown punctuation.definition.heading.markdown"
        ],
        "settings": {
            "foreground": color['greenLight']
        }
    },
    {
        "name": "Markup - Italic",
        "scope": [
            "markup.italic"
        ],
        "settings": {
            "fontStyle": "italic",
            "foreground": color['orange']
        }
    },
    {
        "name": "Markup - Bold",
        "scope": [
            "markup.bold",
            "markup.bold string"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": color['orange']
        }
    },
    {
        "name": "Markup - Bold-Italic",
        "scope": [
            "markup.bold markup.italic",
            "markup.italic markup.bold",
            "markup.quote markup.bold",
            "markup.bold markup.italic string",
            "markup.italic markup.bold string",
            "markup.quote markup.bold string"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": color['orange']
        }
    },
    {
        "name": "Markup - Underline",
        "scope": [
            "markup.underline"
        ],
        "settings": {
            "fontStyle": "underline",
            "foreground": color['blueLight']
        }
    },
    {
        "name": "Markdown - Blockquote",
        "scope": [
            "markup.quote punctuation.definition.blockquote.markdown"
        ],
        "settings": {
            "foreground": "#65737E"
        }
    },
    {
        "name": "Markup - Quote",
        "scope": [
            "markup.quote"
        ],
        "settings": {
            "fontStyle": "italic",
        }
    },
    {
        "name": "Markdown - Link",
        "scope": [
            "string.other.link.title.markdown"
        ],
        "settings": {
            "foreground": "#82AAFF"
        }
    },
    {
        "name": "Markdown - Link Description",
        "scope": [
            "string.other.link.description.title.markdown"
        ],
        "settings": {
            "foreground": "#C792EA"
        }
    },
    {
        "name": "Markdown - Link Anchor",
        "scope": [
            "constant.other.reference.link.markdown"
        ],
        "settings": {
            "foreground": "#FFCB6B"
        }
    },
    {
        "name": "Markup - Raw Block",
        "scope": [
            "markup.raw.block"
        ],
        "settings": {
            "foreground": "#C792EA"
        }
    },
    {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
            "markup.raw.block.fenced.markdown"
        ],
        "settings": {
            "foreground": "#00000050"
        }
    },
    {
        "name": "Markdown - Fenced Bode Block",
        "scope": [
            "punctuation.definition.fenced.markdown"
        ],
        "settings": {
            "foreground": "#00000050"
        }
    },
    {
        "name": "Markdown - Fenced Bode Block Variable",
        "scope": [
            "markup.raw.block.fenced.markdown",
            "variable.language.fenced.markdown",
            "punctuation.section.class.end"
        ],
        "settings": {
            "foreground": "#EEFFFF"
        }
    },
    {
        "name": "Markdown - Fenced Language",
        "scope": [
            "variable.language.fenced.markdown"
        ],
        "settings": {
            "foreground": "#65737E"
        }
    },
    {
        "name": "Markdown - Separator",
        "scope": [
            "meta.separator"
        ],
        "settings": {
            "fontStyle": "bold",
            "foreground": "#65737E"
        }
    },
    {
        "name": "Markup - Table",
        "scope": [
            "markup.table"
        ],
        "settings": {
            "foreground": "#EEFFFF"
        }
    }
]

module.exports = {
    tokenColors
}
