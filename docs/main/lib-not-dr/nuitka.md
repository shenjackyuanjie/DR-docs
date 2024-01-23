# lndl-nuitka

> 欢迎来到 lndl-nuitka 的文档

:::Info
请注意, 这里不是一个 Nuitka 使用教程
如果你想寻找 Nuitka 使用教程, 请[另寻他路](https://nuitka.0.org.cn)
:::

## 范例

一个简单的例子

```toml title=pyproject.toml
[tool.lndl.nuitka.cli]
main = "main.py"
standalone = true

clang = true
msvc = "latest"
```
