const activeBar = require('./activeBar')
const editor = require('./editor')
const editorGroupHeader = require('./editorGroupHeader')
const gitDecoration = require('./gitDecoration')
const minimap = require('./minimap')
const sideBar = require('./sideBar')
const statusBar = require('./statusBar')
const tab = require('./tab')
const list = require('./list')
const terminal = require('./terminal')
const panel = require('./panel')

const colors = Object.assign({}, 
  activeBar,
  editor,
  editorGroupHeader,
  gitDecoration,
  minimap,
  sideBar,
  statusBar,
  tab,
  list,
  terminal,
  panel
  )
module.exports = {
    colors
}