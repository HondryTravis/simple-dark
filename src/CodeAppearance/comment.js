const color = require('../base/color')
module.exports = [
    //
    {
        "name": "Comment",
        "scope": [
            "comment.line",
            "comment.block",
            "punctuation.definition.comment",
            "comment.block.documentation",
            "meta.toc-list"
        ],
        "settings": {
            "foreground": color['blackGrayLowerLight']
        }
    }
]
    