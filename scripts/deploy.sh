#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成发布文件
yarn theme:build

# 发布
yarn theme:publish