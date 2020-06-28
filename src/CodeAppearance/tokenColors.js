/**
 * @config all config assign this file
 * code variable style in this file
 * you can be changed to you love the color 
 */
const comments = require('./comment')
const variable = require('./variable')
const invalid = require('./invalid')
const keyword = require('./keyword')
const storage = require('./storage')
const constant = require('./constant')
const punctuation = require('./punctuation')
const string = require('./strings')
const entity = require('./entity')
const source = require('./source')
const meta = require('./meta')
const support = require('./support')
const markup = require('./markup')
const temp = [
    comments,
    variable,
    invalid,
    keyword,
    storage,
    constant,
    punctuation,
    string,
    entity,
    source,
    meta,
    support,
    markup
]
const tokenColors = []
const _push = Array.prototype.push;

temp.forEach( item => { 
    if(Array.isArray(item)) {
        _push.apply(tokenColors, item) 
    }else{
        tokenColors.push(item) 
    }
})

module.exports = {
    tokenColors
}
