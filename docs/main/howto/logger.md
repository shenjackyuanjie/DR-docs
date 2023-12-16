# DR 的 logger

DR 使用 `lib-not-dr` 的 `loggers` 模块作为 logger

```python
from lib_not_dr import loggers

logger = loggers.config.get_logger('root')

logger.info('some info')
logger.debug('some debug')

logger.info('with tag', tag='a tag')

logger.info('without \\n', end='no \\n')
```
