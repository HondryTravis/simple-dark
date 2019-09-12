const fs = require('fs');
const baseInfo = require('./src/baseInfo')
const codeStyle = require('./src/tokenColors')
const editorStyle = require('./src/colors')

const result = Object.assign({}, baseInfo)
Object.assign(result, editorStyle)
Object.assign(result, codeStyle)

fs.writeFileSync(
    './themes/Simple Dark-color-theme.json',
    JSON.stringify(result)
)