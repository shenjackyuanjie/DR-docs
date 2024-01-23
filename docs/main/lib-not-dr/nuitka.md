# lndl-nuitka

> 欢迎来到 lndl-nuitka 的文档

:::warning
请注意, 下文提到的 `控制台` 如果没有额外说明, 最好都使用 *非 Pycharm 内置控制台*

除非你知道自己在做什么
:::

:::info
请注意, 这里 **不是** 一个 Nuitka 使用教程

如果你想寻找 Nuitka 使用教程, 请[另寻他路](https://nuitka.0.org.cn)
:::

## 快速开始

1. *前置步骤*
   1. 确认好安装了 `lib-not-dr` 0.3.10+
      - 最好是使用 `lib-not-dr[nuitka]` 安装的

   2. 确认 `nuitka >= 1.8` 已经安装

2. 首先, 在你的项目根目录底下创建一个 `pyproject.toml` 文件
   - 已有的话可以跳过这一步

3. 在 `pyproject.toml` 文件中添加以下内容

   ```toml title=pyproject.toml
   [tool.lndl.nuitka.cli]
   main = "你的主文件"
   ```

4. 尝试在 *项目根目录* 的 `控制台` 输入 `python -m lndl_nuitka .`

## 范例

一个简单的例子

```toml title=pyproject.toml
[tool.lndl.nuitka.cli]
main = "main.py"
standalone = true

clang = true
msvc = "latest"
```
