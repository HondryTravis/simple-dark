
const projectInfo = {
  name: "Simple Dark",
  type: "dark",
  author: "Hondry Travis",
  maintainers: "travis<Hondry.Travis@outlook.com>"
}

function getConfig(options = {}) {
  return {
    ...projectInfo,
    ...options
  }
}

module.exports = getConfig