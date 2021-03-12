const Base = require('./Base')
const ActiveBar = require('./ActiveBar')
const EditorArea = require('./EditorArea')
const TabGroupOfEditor = require('./TabGroupOfEditor')
const GitTip = require('./GitTip')
const SideBarList = require('./SideBarList')
const MiniMap = require('./MiniMap')
const Panel = require('./Panel')
const StatusBar = require('./StatusBar')
const Terminal = require('./Terminal')
const TitleBar = require('./Titlebar')
const InputCtrl = require('./InputCtrl')
const Widget = require('./Widget')

const colors = Object.assign({},
  Base,
  ActiveBar,
  EditorArea,
  TabGroupOfEditor,
  GitTip,
  SideBarList,
  MiniMap,
  Panel,
  StatusBar,
  Terminal,
  TitleBar,
  InputCtrl,
  Widget
)
module.exports = {
  colors
}