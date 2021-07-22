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



function getColors(color) {
  const colors = Object.assign({},
    Base(color),
    ActiveBar(color),
    EditorArea(color),
    TabGroupOfEditor(color),
    GitTip(color),
    SideBarList(color),
    MiniMap(color),
    Panel(color),
    StatusBar(color),
    Terminal(color),
    TitleBar(color),
    InputCtrl(color),
    Widget(color)
  )
  return {
    colors: colors
  }
}
module.exports = getColors