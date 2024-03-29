# 关于 Difficult_Rocket 的版本号说明

## `Semver++` by shenjackyuanjie

* 基于 [Semver](https://semver.org/) 2.0.0
* 1.0.0.0

## 版本号格式

### 基本遵守 Semver 规范

* `x.y.z.w`
* `0.y.z.w`

### 各子版本号说明

#### 版本号发布之后不会退回,只会增加

| 子版本号 |     名称     |     步进条件      |      更新内容       |  更新兼容性  |
|:----:|:----------:|:-------------:|:---------------:|:-------:|
| `X`  |    主版本号    |   每次 `大更新`    |    大量 `新内容`     | `完全不兼容` |
| `Y`  |  `功能` 版本号  |   发布 `内容更新`   |    大量 `新内容`     | `基本不兼容` |
| `Z`  | `内容修订` 版本号 |   修订 `新内容`    |   对 `新内容` 的修订   | `基本兼容`  |
| `W`  | `内部修订` 版本号 | 发布未实装的 `内部更新` | 对 `将要到来的内容` 的更新 | `完全兼容`  |
