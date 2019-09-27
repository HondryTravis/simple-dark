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
    
    
   
