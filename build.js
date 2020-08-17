const fs = require('fs');
const info = require('./src/about/info')
const codeStyle = require('./src/CodeAppearance/tokenColors')
const editorStyle = require('./src/EditorAppearance/colors')
const semanticTokenColor = require('./src/semantic')
const result = Object.assign({}, info, semanticTokenColor, editorStyle, codeStyle)

const data = JSON.stringify(result)
const _path = './themes/Simple Dark-color-theme.json'
fs.writeFileSync(_path, data)