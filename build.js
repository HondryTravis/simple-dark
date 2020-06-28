const fs = require('fs');
const info = require('./src/about/info')
const codeStyle = require('./src/CodeAppearance/tokenColors')
const editorStyle = require('./src/EditorAppearance/colors')
const result = Object.assign({}, info, editorStyle, codeStyle)

const data = JSON.stringify(result)
const _path = './themes/Simple Dark-color-theme.json'
fs.writeFileSync(_path, data)