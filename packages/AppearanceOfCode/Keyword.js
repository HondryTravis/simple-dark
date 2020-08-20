/**
 * @scope keyword
 * Control keywords examples include if, try, end and while. Some syntaxes prefer to mark if and else with the conditional variant.
 * you can be changed to you love the color
 */

const color = require('../BaseColor')

module.exports = [
  {
    "name": "Keyword",
    "scope": [
      "keyword"
    ],
    "settings": {
      "foreground": color['pink']
    }
  },
  {
    "name": 'Keyword: new',
    "scope": [
      "keyword.operator.new"
    ],
    "settings": {
      "fontStyle": 'bold',
    }
  },
  {
    "name": 'Keyword: use for [C#/.Net] type',
    "scope": [
      "keyword.type.cs"
    ],
    "settings": {
      "foreground": color['cyan'],
    }
  },

]