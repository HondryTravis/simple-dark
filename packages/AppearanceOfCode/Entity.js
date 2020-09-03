/**
 * @scope Entity
 * The entity scopes are generally assigned to the names of data structures, types and other uniquely-identifiable constructs in code and markup. The notable exceptions are entity.name.tag and entity.other.attribute-name, which are used in HTML and XML tags.
 * you can be changed to you love the color
 */
const color = require('../BaseColor')

module.exports = [
  {
    "name": "Entity: Attribute Name",
    "scope": [
      "entity.name.type",
      "entity.other.inherited-class",
      "entity.other.attribute-name"
    ],
    "settings": {
      "foreground": color['deepSkyBlue']
    }
  },
  {
    "name": "Entity: Css[hover...] ...",
    "scope": [
      "entity.other.attribute-name.pseudo-element",
    ],
    "settings": {
      "foreground": color['pink']
    }
  },
  {
    "name": "Entity: TagName",
    "scope": [
      "entity.name.tag"
    ],
    "settings": {
      "foreground": color['pink']
    }
  },
  {
    "name": "Entity: Native-Object[Array,Object]",
    "scope": [
      "entity.name.type.class",
    ],
    "settings": {
      "foreground": color['deepSkyBlue']
    }
  },
  {
    "name": "Entity: use for C++/C",
    "scope": [
      "entity.name.namespace.cpp",
      "entity.name.namespace.c"
    ],
    "settings": {
      "foreground": color['cyan']
    }
  }
]