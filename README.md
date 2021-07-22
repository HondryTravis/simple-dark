# Simple dark Theme

**Allo :D**.

this library is a simple and clear dark style theme for VSCode

referring to Dracula color scheme, the color is fine tuned through its own iteration of dark version

let's look that

first of all, different colors are used to distinguish native objects and custom objects,for example Interface Somthing type or js WeakMap type, color is darkSkyblue and cyan, this is very easy to understand in source code reading, function is green,parameter is orange;

code style for typescript/javascript/html/less/c#/php/more

## list of supported topics

- Simple Dark (standard)
- Simple Dark Soft (low saturation)

use command: `command/ctrl + k, command/ctrl + t` to choice

## this vscode theme Appearance

![appearence](images/appearance.png)

## C# code style

![code](images/dotnet.png)

## PHP code style

![code](images/php.png)

## ts/js code style

![code](images/ts.png)

## html style

![html](images/html.png)

## less style

![less](images/less.png)

## custom local changes

In fact, everyone uses different styles, so you can customize that, let's look this

this file: `settings.json`

### editor appearance

```json
"workbench.colorCustomizations": {
  "[Simple Dark]": {
    // do ...
    "tab.activeBorder": "#ff0000"
  },
  "[Simple Dark Soft]": {
    // do ...
    "tab.activeBorder": "#ff0000"
  }
},
```

### code style

```json
"editor.tokenColorCustomizations": {
  "[Simple Dark]": {
    // do...
    "functions": "#FF0000"
  },
  "[Simple Dark Soft]": {
    // do...
    "functions": "#FF0000"
  }
},
```

Maybe you like this one, please give this repository a star~
