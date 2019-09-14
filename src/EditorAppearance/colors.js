const activeBar = require('./activeBar')
const editor = require('./editor')
const editorGroupHeader = require('./editorGroupHeader')
const gitDecoration = require('./gitDecoration')
const minimap = require('./minimap')
const sideBar = require('./sideBar')
const statusBar = require('./statusBar')
const tab = require('./tab')
let colors = {}
Object.assign(colors, activeBar, editor, editorGroupHeader, gitDecoration, minimap,sideBar,statusBar,tab)
module.exports = {
    colors
}