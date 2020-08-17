/**
 * @scope Comment
 * Single and multi-line comments
 * you can be changed to you love the color 
 */
const color = require('../BaseColor')
module.exports = [
  {
    "name": "Comment",
    "scope": [
      "comment",
			"punctuation.definition.comment"
    ],
    "settings": {
      "foreground": color['lightGray']
    }
  }
]