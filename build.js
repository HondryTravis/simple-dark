
const Editor = require('./packages/AppearanceOfEditor');
const Code = require('./packages/AppearanceOfCode');
const AboutMyself = require('./packages/AboutMyself')
const Semantic = require('./packages/Semantic')
const fs = require('fs');

const result = Object.assign({}, AboutMyself, Semantic, Editor, Code)
const Theme = JSON.stringify(result)
const _path = './themes/Simple Dark-color-theme.json'

fs.writeFileSync(_path, Theme)