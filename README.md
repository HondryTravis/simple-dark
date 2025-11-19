# Simple Dark Theme

A simple, clear, and focused theme for VS Code.

Designed with a specific color philosophy to reduce cognitive load and improve code readability.

## Design Philosophy

- **Function-First**: Functions are **Green**, Parameters are **Orange**. This consistent pattern helps you quickly parse code structure.
- **Semantic Clarity**: Distinct colors for native objects (`DeepSkyBlue`) vs custom types (`Cyan`), making it easy to distinguish built-in types from your own.
- **Accessibility**: The **Simple Light** theme is designed with WCAG AA contrast standards in mind, ensuring readability even in bright environments.

## Available Themes

1.  **Simple Dark**
    *   The standard, balanced dark theme. Perfect for daily use.
2.  **Simple Dark Soft**
    *   Lower saturation, softer contrast. Easy on the eyes for long coding sessions.
3.  **Simple Light** (New!)
    *   A clean, high-contrast light theme.
    *   Optimized for readability with darker syntax colors (Green/Orange) on a light background.
    *   Includes specific semantic highlighting (e.g., Red strings) to distinguish from functions.

## Screenshots

### Editor Appearance
![appearance](images/appearance.png)

### TypeScript / JavaScript
![ts](images/ts.png)

### C#
![dotnet](images/dotnet.png)

### PHP
![php](images/php.png)

### HTML
![html](images/html.png)

### LESS / CSS
![less](images/less.png)

## Installation

1.  Open **Extensions** sidebar in VS Code.
2.  Search for `Simple Dark`.
3.  Click **Install**.
4.  Press `Cmd+K Cmd+T` (macOS) or `Ctrl+K Ctrl+T` (Windows/Linux) and select one of the **Simple** themes.

## Customization

You can customize specific colors in your `settings.json`:

### Workbench Colors (UI)

```json
"workbench.colorCustomizations": {
  "[Simple Dark]": {
    "tab.activeBorder": "#ff0000",
    "sideBar.background": "#202124"
  },
  "[Simple Light]": {
    "sideBar.background": "#fafafa"
  }
}
```

### Syntax Highlighting

```json
"editor.tokenColorCustomizations": {
  "[Simple Dark]": {
    "functions": "#00E673"
  },
  "[Simple Light]": {
    "functions": "#048043"
  }
}
```

## Feedback

If you like this theme, please give it a star on GitHub!
Issues and Pull Requests are welcome.
