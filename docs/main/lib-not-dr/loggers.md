# lib_not_dr.loggers

> 欢迎来到 lndl 的 logger 的文档!

使用范例:

[使用 config 的范例](./loggers/config_example.md)

[正常情况下不产生文件, 在某个特定级别之上产生文件](./loggers/level_file_example.md)

## 简单的

```python title=use_logger.py
from lib_not_dr import loggers

logger = loggers.config.get_logger("somename")

logger.info("abc")
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
