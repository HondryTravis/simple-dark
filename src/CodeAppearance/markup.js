/**
 * @scope markup
 * Markup scopes are used for content, as opposed to code. This includes syntaxes such as Markdown and Textile.
 * you can be changed to you love the color 
 */
const color = require('../base/color')
module.exports = [
  {
    "name": "MarkDown - paragraph",
    "scope": [
      "meta.paragraph.markdown",
      "text.html.markdown"
    ],
    "settings": {
      "foreground": color['whiteGray']
    }
  },
  {
    "name": "MarkDown - heading",
    "scope": [
      "punctuation.definition.heading.markdown",
    ],
    "settings": {
      "foreground": color['pink']
    }
  },
  {
    "name": "MarkDown - heading content",
    "scope": [
      "markup.heading.markdown"
    ],
    "settings": {
      "foreground": color['blueLight']
    }
  },
  {
    "name": "MarkDown - code mark",
    "scope": [
      "punctuation.definition.markdown",
      "markup.fenced_code.block.markdown"
    ],
    "settings": {
      "foreground": color['greenLight']
    }
  },
  {
    "name": "MarkDown - raw code mark",
    "scope": [
      "punctuation.definition.raw.markdown",
      "markup.inline.raw.string.markdown",
    ],
    "settings": {
      "foreground": color['green']
    }
  },
  {
    "name": "MarkDown - underline",
    "scope": [
      "markup.underline.link.markdown",
    ],
    "settings": {
      "foreground": color['blueLight']
    }
  },
  {
    "name": "MarkDown - inline underline",
    "scope": [
      "meta.link.inline.markdown",
    ],
    "settings": {
      "foreground": color['orange']
    }
  },
  {
    "name": "MarkDown - bold",
    "scope": [
      "punctuation.definition.bold.markdown",
      "markup.bold.markdown"
    ],
    "settings": {
      "foreground": color['orange']
    }
  },
  {
    "name": "MarkDown - list",
    "scope": [
      "punctuation.definition.list.begin.markdown",
      "markup.list.unnumbered.markdown"
    ],
    "settings": {
      "foreground": color['orange']
    }
  },
  {
    "name": "MarkDown - image",
    "scope": [
      "punctuation.definition.string.begin.markdown",
    ],
    "settings": {
      "foreground": color['pink']
    }
     
  },
  {
    "name": "MarkDown - image - link",
    "scope": [
      "markup.underline.link.image.markdown",
      // "meta.image.inline.markdown"
    ],
    "settings": {
      "foreground": color['blueLight']
    }//string.other.link.description.markdown
  },
  {
    "name": "MarkDown - image - description",
    "scope": [
      "string.other.link.description.markdown",
    ],
    "settings": {
      "foreground": color['yellowLight']
    }
  }
]
