const Variables = require('./Variable')
const Comment = require('./Comment')
const Invalid = require('./Invalid')
const Keyword = require('./Keyword')
const Storage = require('./Storage')
const Markup = require('./Markup')
const Constant = require('./Constant')
const Entity = require('./Entity')
const Meta = require('./Meta')
const String = require('./String')
const Punctuation = require('./Punctuation')
const Support = require('./Support')
const Source = require('./Source')

const tokenColors = [
  ...Variables,
  ...Comment,
  ...Invalid,
  ...Keyword,
  ...Storage,
  ...Markup,
  ...Constant,
  ...Entity,
  ...Meta,
  ...String,
  ...Punctuation,
  ...Support,
  ...Source
]
module.exports = {
  tokenColors
}