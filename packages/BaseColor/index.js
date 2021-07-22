/**
 * @base_color Theme main color config
 * Single and multi-line comments
 * you can be changed to you love the color
 */

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
    blue_ctrl: "#00A1F1"
  }
}


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
      pink: '#FF7BBD',
      green: '#3CB371',
      orange: '#85C7B5',
    })
  }
  return def_colors
}

module.exports = getColors