# lib_not_dr.loggers

> 欢迎来到 lndl 的 logger 的文档!

使用范例:

## 简单的

```python title=use_logger.py
from lib_not_dr import loggers

logger = loggers.config.get_logger("somename")

logger.info("abc")
```

## 使用 config 的范例

```python title=use_config.py
from lib_not_dr.loggers import config

your_toml_config = "aaa"

config.read_config(your_toml_config)
logger = config.get_logger("你定义好的logger")
```

### 这里的 config 范例

> 其实就是把 DR 的 config 复制过来了而已

```toml title=lndl-logger.toml

config_version = 1

[Logger]

    [Logger.client]
    # 日志名称
    logger_name = "client"
    level_name = "debug"
    # or 'DEBUG'
    # or level = 10
    outputs = ["std_out", "file_out"]

    [Logger.server]
    # 日志名称
    logger_name = "server"
    level_name = "debug"
    # or 'DEBUG'
    # or level = 10
    outputs = ["std_out", "file_out"]

    [Logger.main]
    # 日志名称
    logger_name = "main"
    level_name = "debug"
    # or 'DEBUG'
    # or level = 10
    outputs = ["std_out", "file_out"]

[Formatter]

    [Formatter.main_formatter]
    # 格式化器名称
    class = "MainFormatter"
    # 格式化器参数
    time_format = "%Y-%m-%d %H:%M:%S"
    msec_time_format = "{}-{:03d}"
    use_absolute_path = false

    [Formatter.std_formatter]
    class = "StdFormatter"
    enable_color = true
    sub_formatter = ["main_formatter"]
    default_template = "[${log_time}][${level}]|${logger_name}:${logger_tag}|${messages}"

    [Formatter.file_std_formatter]
    class = "StdFormatter"
    enable_color = false
    sub_formatter = ["main_formatter"]
    default_template = "[${log_time}][${level}]|${logger_name}:${logger_tag}|${messages}"

[Outstream]

    [Outstream.std_out]
    # 输出流名称
    class = "StdioOutputStream"
    # 输出流参数
    formatter = "std_formatter"
    use_stderr = false
    # or true
    level_name = "debug"
    # or 'DEBUG'
    # or level = 10

    [Outstream.file_out]
    class = "FileCacheOutputStream"

    level = 10
    # or level_name = 'DEBUG'
    # or level_name = 'debug'
    formatter = "file_std_formatter"
    flush_count_limit = 10
    # 5 条日志刷新一次
    flush_time_limit = 5
    # 5 秒刷新一次
    # or flush_time_limit = 0.5
    file_path = "./logs"
    file_name = "dr-{time}.log"

```

## 直接在代码里配置的案例

```python title=code_config.py
from lib_not_dr import loggers

logger = loggers.config.get_logger("main")

# 比如你想在控制台输出所有，文件里输出 error 及以上
error_stream = loggers.outstream.FileCacheOutputStream(file_name="check-err.log", level=loggers.LogLevel.warn)
logger.add_output(error_stream)
```

或者

```python title=fmt_log.py
import sys
from lib_not_dr import loggers

logger = loggers.config.get_logger("transfer")
log_file_name = f"{time.strftime('%Y-%m-%d-%H-%M-%S', time.localtime())}-transfer.log"
logger.add_output(FileCacheOutputStream(file_name=log_file_name, level=0))

# 使用命令行参数来调节等级
if "-v" in sys.argv:
    logger.global_level = 10
if "-vv" in sys.argv:
    logger.global_level = 5
```
