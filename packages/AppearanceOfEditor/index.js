const ActiveBar = require('./ActiveBar')
const EditorArea = require('./EditorArea')
const TabGroupOfEditor = require('./TabGroupOfEditor')
const GitTip = require('./GitTip')
const SideBarList = require('./SideBarList')
const MiniMap = require('./MiniMap')
const Panel = require('./Panel')
const StatusBar = require('./StatusBar')
const Terminal = require('./Terminal')


const colors = Object.assign({}, 
  ActiveBar,
  EditorArea,
  TabGroupOfEditor,
  GitTip,
  SideBarList,
  MiniMap,
  Panel,
  StatusBar,
  Terminal
)
module.exports = {
  colors
}