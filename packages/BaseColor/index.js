/**
 * @base_color Theme main color config
 * Single and multi-line comments
 * you can be changed to you love the color
 * All colors pass the test [WCAG](https://www.w3.org/TR/WCAG/#contrast-minimum)
 *

const Color = require("color");

/*
 * Generate color variant by inverting
 * luminance in the HSL representation
 */
function getVariant(hex, colorName, style) {
  const disable = new Set([
    'black', 'lightBlack', 'gray', 'darkGary', 'lightGray', 'pink', 'orange', 'purple', 'deepSkyBlue'
  ])
  switch (style) {
    case 'soft':
      if (disable.has(colorName)) return hex
      const color = Color(hex);
      return color.hsl().lighten(10).hex().toLowerCase()
    case 'dark':
    default:
      return hex
  }
}

function defaultColors() {
  return {
    // dark color
    black: "#202124",
    lightBlack: "#24272A",
    gray: "#444444",
    darkGary: "#2c2f32",

    // comment
    lightGray: "#737373",

    // light color
    white: "#f0f0f0",
    garyWhite: "#D2D3D9",
    mediumWhite: "#dddddd",

    tomato: "#FF6347",
    pink: "#FF69B4",
    cyan: "#8BE9FD",
    lightCyan: "#E1FFFF",
    green: "#00E673", // #78F078
    lightGreen: "#C3E88D",
    orange: "#FFB86C",
    purple: "#BD93F9",
    red: "#f4433c",
    blue: "#1e90ff",
    lightBlue: '#75ABE0',
    deepSkyBlue: "#00bfff",
    mediumBlue: "#00A1F1",
    lightYellow: "#eefa7a",
    // primary color
    color_ctrl_blue: "#00A1F1",
    color_ctrl_blue_active: '#93B3F2',
    color_ctrl_hover_gray: '#3D4043',
  }
}

// console.log(Color('#00bfff').hsl().darken(0.2).hex().toLowerCase())
function getSoftColors(opts = {}) {
  return {
    ...defaultColors(),
    ...opts
  }
}
// mode: dark | soft
function getColors(mode = 'dark') {
  const def_colors = defaultColors()
  if (mode === 'soft') {
    return getSoftColors({
      pink: '#F572B7', // DD7CA0
      green: '#56b97f',
      orange: '#D5B884', // F2C3A7
      cyan: '#9CCBD1',
      lightCyan: "#F0F0E0",
      deepSkyBlue: "#4da5c9",
      mediumWhite: "#dcdcdc"
    })
  }
  return def_colors
}

module.exports = getColors