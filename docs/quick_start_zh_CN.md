# 如何使用

您可以按下 "ctrl / command + shift + p"，然后输入 **developer”**,然后选择 "检查编辑器Tokens和Scopes"，然后聚焦行代码，您将看到此行代码范围

## 更多帮助

你可以参考以下

sublimetext:[Language helper rule](https://www.sublimetext.com/docs/3/scope_naming.html#comment)

TextMate:[Language helper rule](https://macromates.com/manual/en/language_grammars#rule_keys)

[所有样式集合](https://code.visualstudio.com/api/references/theme-color)

## 如何开发

你可以执行如下打包,然后查看是否有变化

```bash
  npm run build
```

前提请安装 **vsce**


```bash
  npm i -g vsce
```

## 发布

```bash
  # first one
  vsce package
  # and then
  vsce publish
```
