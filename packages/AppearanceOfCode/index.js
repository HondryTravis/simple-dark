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


function getTokenColors(color) {
  const tokenColors = [
    ...Variables(color),
    ...Comment(color),
    ...Invalid(color),
    ...Keyword(color),
    ...Storage(color),
    ...Markup(color),
    ...Constant(color),
    ...Entity(color),
    ...Meta(color),
    ...String(color),
    ...Punctuation(color),
    ...Support(color)
  ]
  return {
    tokenColors: tokenColors
  }
}
module.exports = getTokenColors