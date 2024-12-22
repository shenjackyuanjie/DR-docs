# 只在某个级别之上写入文件的例子

## 使用配置文件版

```python title=use_config.py
from lib_not_dr.loggers import config

# 通过某种方式读取配置文件
the_config = "读进来的文件"

config.read_config(the_config)
logger = config.get_logger("你定义好的logger")
```

```toml title=logger_config.config.toml
config_version = 1

[Logger]

[Logger.main]
logger_name = "main"
level_name = "debug"

outputs = ["StdioOutputStream", "err_file"]


[Formatter.file_std_formatter]
class = "StdFormatter"
enable_color = false

[OutStream]

[OutStream.err_file]
class = "FileCacheOutputStream"
formatter = "file_std_formatter"
level = "ERROR"

file_path = "./logs"
file_name = "warn-{time}.log"
```

## 使用代码版

```python title=use_code.py
from lib_not_dr import loggers

logger = loggers.config.get_logger("main")

error_stream = loggers.outstream.FileCacheOutputStream(file_name="error.log", level=loggers.LogLevel.warn)

logger.add_output(error_stream)

logger.info("这条信息只会在控制台显示")
logger.error("这条信息也会被写到文件里")
```