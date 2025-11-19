/**
 * @base_color Theme main color config
 * Single and multi-line comments
 * you can be changed to you love the color
 * All colors pass the test [WCAG](https://www.w3.org/TR/WCAG/#contrast-minimum)
 */

const Color = require("color");

function getDarkColors() {
  return {
    // dark color
    black: "#202124",
    lightBlack: "#24272A",
    gray: "#444444",
    darkGray: "#2c2f32",
    darkGray_low: '#35363a',

    // comment
    lightGray: "#737373",

    // light color
    white: "#f0f0f0",
    grayWhite: "#D2D3D9",
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

    // semantic
    string_color: "#C3E88D", // same as lightGreen
  }
}

function getLightColors() {
  return {
    // background colors (inverted from dark)
    black: "#ffffff",      // Main background
    lightBlack: "#f3f3f3", // Sidebar/Panel background
    gray: "#e0e0e0",       // Borders/Dividers
    darkGray: "#f5f5f5",   // Input background
    darkGray_low: '#fafafa',

    // comment
    lightGray: "#a0a1a7", // #a0a0a0 Darker gray for better contrast (WCAG AA)

    // text colors
    white: "#202124",      // Main text color (dark for light theme)
    grayWhite: "#5f6368",  // Secondary text
    mediumWhite: "#3c4043",

    // Syntax Highlighting - Adjusted for Light Theme
    // Philosophy: Green for functions, Orange for parameters
    tomato: "#d93025",
    pink: "#d01884",
    cyan: "#007b83",       // Darker cyan for visibility
    lightCyan: "#006064",  // Much darker for visibility on white
    green: "#048043",      // Darker green for functions (WCAG AA)
    lightGreen: "#2e7d32", // Darker lightGreen (WCAG AA)
    orange: "#b35900",     // Darker orange/brown for parameters (WCAG AA)
    purple: "#9334e6",
    red: "#d93025",
    blue: "#1a73e8",
    lightBlue: '#1967d2',
    deepSkyBlue: "#0277bd", // Darker sky blue for native objects
    mediumBlue: "#0277bd",  // Darker mediumBlue (WCAG AA)
    lightYellow: "#9a6700", // Darker yellow/gold (WCAG AA)

    // primary color
    color_ctrl_blue: "#1a73e8",
    color_ctrl_blue_active: '#8ab4f8',
    color_ctrl_hover_gray: '#f1f3f4',

    // semantic
    string_color: "#a31515", // Red for strings to distinguish from green functions
  }
}

function getSoftColors(opts = {}) {
  return {
    ...getDarkColors(),
    ...opts
  }
}

// mode: dark | soft | light
function getColors(mode = 'dark') {
  if (mode === 'light') {
    return getLightColors();
  }

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

  return getDarkColors()
}

module.exports = getColors