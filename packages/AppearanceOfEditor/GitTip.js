function getConfig(color) {
  return {
    // git
    "gitDecoration.modifiedResourceForeground": color['cyan'],
    "gitDecoration.addedResourceForeground": color['green'],
    "gitDecoration.deletedResourceForeground": color['tomato'],
  }
}
module.exports = getConfig