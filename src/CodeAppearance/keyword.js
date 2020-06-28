/**
 * @scope keyword
 * Control keywords examples include if, try, end and while. Some syntaxes prefer to mark if and else with the conditional variant.
 * you can be changed to you love the color 
 */

const color = require('../base/color')

module.exports = [
    {
        "name": "keyword",
        "scope": [
            "keyword"
        ],
        "settings": {
            "foreground": color['pink']
        }
    },
    {
      "name": 'keyword new',
      "scope": [
        "keyword.operator.new"
      ],
      "settings": {
        "fontStyle": 'bold',
      }
    }
]
    
    
   
