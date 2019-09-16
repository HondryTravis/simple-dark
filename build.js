const fs = require('fs');
const info = require('./src/about/info')
const codeStyle = require('./src/CodeAooearance/tokenColors')
const editorStyle = require('./src/EditorAppearance/colors')
const result = Object.assign({}, info, editorStyle, codeStyle)

fs.writeFileSync(
    './themes/Simple Dark-color-theme.json',
    JSON.stringify(result)
)