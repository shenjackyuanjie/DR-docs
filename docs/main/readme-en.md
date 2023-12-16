# Difficult Rocket

[中文](/main/readme.md) | English

- [GitHub](https://github.com/shenjackyuanjie/Difficult-Rocket)
- [gitee](https://gitee.com/shenjackyuanjie/Difficult-Rocket)
- [discord](https://discord.gg/kWzw2JrG6M)
- [kook](https://kook.top/sRPjFG)

## Notice: This repo will only publish `DR SDK` updates, `DR game` updates will be published [here](https://github.com/shenjackyuanjie/DR-game)

![demo](/demo.png)

[![996.icu](https://img.shields.io/badge/996.icu-996.icu-red.svg)](https://996.icu)
[![semver](https://img.shields.io/badge/SemVer-2.0.0-blue.svg)](https://Semver.org/)
[![python-3.8.10](https://img.shields.io/badge/编写于_Python_版本-3.8.10-blue.svg)](https://Python.org)
[![pyglet-2.x](https://img.shields.io/badge/编写于_Pyglet_版本-2.x-blue.svg)](https://pyglet.org)
[![support python 3.8~12](https://img.shields.io/badge/Python-_3.8_~_3.12_-blue.svg)](https://Python.org)

## Version

[About Versions](./version.md)

[![release version](https://img.shields.io/badge/Release-0.8.7.2-blue.svg)](https://github.com/shenjackyuanjie/Difficult-Rocket/releases)
[![pre version](https://img.shields.io/badge/Pre_Release-0.8.7.2-blue.svg)](https://github.com/shenjackyuanjie/Difficult-Rocket/releases)
[![devlo version](https://img.shields.io/badge/Devloping-0.9.0-blue.svg)](https://github.com/shenjackyuanjie/Difficult-Rocket/releases)

[![language badge](https://stats.deeptrain.net/repo/shenjackyuanjie/Difficult-Rocket?theme=dark)](https://stats.deeptrain.net/repo/shenjackyuanjie/Difficult-Rocket?theme=dark)

[DR sdk latest Action build](https://nightly.link/shenjackyuanjie/Difficult-Rocket/workflows/nuitka/main)

[DR rs latest Action build](https://nightly.link/shenjackyuanjie/Difficult-Rocket/workflows/dr_rs/main)

## 中文README请移步 [这里](../README.md)

> Difficult-rocket is a Simple Rocket liked game build with Python (in short: rocket simulator)

## Advantage

> Lighter than Vanilla SR

## [Plan feature list](/main/plan_features/README.md)

[YouTrack](https://difficult-rocket.youtrack.cloud/projects/8dafd498-59c0-4ce7-9900-d9292e9ed1f0)

## [Update logs](/main/change_log)

## How To Run

### clone

```bash title="clone.sh"
mkdir DR
cd DR
git clone https://github.com/shenjackyuanjie/Difficult-Rocket.git
# or
git clone https://gitee.com/shenjackyuanjie/Difficult-Rocket.git
# or
git clone git@github.com:shenjackyuanjie/Difficult-Rocket.git
```

### Install requirements

```bash title="install.sh"
python -m pip install -r requirements.txt
git submodule update --init --recursive
cd libs
cd lib_not_dr
python -m pip install .
```

### Run

```bash title="run.sh"
python DR.py
```

## Environment (been tested / developed on)

- `Develop platform 1 - Windows 10 x64 22H2`
  - Python `3.8.10` / `3.10.11`
    - pillow `10.0.0`
    - psutil `5.9.5`
    - rtoml `0.9.0`
    - tomlkit `0.12.1`
    - defusedxml `0.7.1`
    - objprint `0.2.2`
    - viztracer `0.15.6`
    - vizplugins `0.1.3`
    - nuitka `1.7.10`
    - ordered-set `4.1.0`
    - imageio `2.31.2`
    - wheel `0.41.2`
    - setuptools `68.1.2`
    - setuptools-rust `1.7.0`
  - `AMD R5 5600X`
  - `AMD RX 550 4G`

## Required python modules

- `pyglet` (pre-installed V2.0.8 path:`./libs/pyglet`)
- `xmltodict` (pre-installed V0.12.0 path:`./libs/xmltodict`)
- `pyperclip` (pre-installed V1.8.2 path: `./libs/pyperclip`)

```text
# this requirement is for
#   DR basic running from source
#   DR build (by nuitka)
#   DR contributing

# for images
# not for pypy >= 3.10
pillow >= 10.0.0; (platform_python_implementation == "PyPy" and python_version < "3.10") or platform_python_implementation == "CPython"

# for sys info
psutil >= 5.9.5

# for files
rtoml >= 0.9.0
tomlkit >= 0.11.8
defusedxml >= 0.7.1

# for debug
objprint >= 0.2.2
viztracer >= 0.15.6; platform_python_implementation != "PyPy"
vizplugins >= 0.1.3; platform_python_implementation != "PyPy"

# for compile
nuitka >= 1.7.5
ordered-set >= 4.1.0
imageio >= 2.31.0; (platform_python_implementation == "PyPy" and python_version < "3.10") or platform_python_implementation == "CPython"
wheel >= 0.40.0
setuptools >= 67.8.0
setuptools-rust >= 1.6.0

```

## thanks to

- Open Source Projects
  - [pyglet](https://github.com/pyglet/pyglet): GUI and graphics
  - `tomlkit` / `rtoml` toml parser
  - `xmltodict`: translate data between xml and dict
  - `pyperclip`: paste board!
  - [rapier2d](https://rapier.rs/) : Phy simulate engine
  - [pyo3](https://pyo3.rs/main) : Rust Python Binding

- Main contributors
  - [@Rayawa](https://github.com/Rayawa) : Check mistake in docs & some translates
  - [@rouxiao-you](https://github.com/ruoxiao-you) : Translate chinese to English
  - [@Billchyi](https://github.com/Billchyi) : Check mistake in docs
  - [@MSDNicrosoft](https://github.com/MSDNicrosoft) : Optimize code

## Other links

## About License

#### https://creativecommons.org/licenses/by-nc-sa/4.0/

#### Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)

This is a human-readable summary of (and not a substitute for) the license. Disclaimer.

You are free to:

Share — copy and redistribute the material in any medium or format

Adapt — remix, transform, and build upon the material

The licensor cannot revoke these freedoms as long as you follow the license terms.

Under the following terms:

Attribution — You must give appropriate credit, provide a link to the license, and indicate if changes were made. You
may do so in any reasonable manner, but not in any way

that suggests the licensor endorses you or your use.

NonCommercial — You may not use the material for commercial purposes.

ShareAlike — If you remix, transform, or build upon the material, you must distribute your contributions under the same
license as the original.

No additional restrictions — You may not apply legal terms or technological measures that legally restrict others from
doing anything the license permits.

Notices:

You do not have to comply with the license for elements of the material in the public domain or where your use is
permitted by an applicable exception or limitation.

No warranties are given. The license may not give you all the permissions necessary for your intended use. For example,
other rights such as publicity, privacy, or moral rights may limit how you use the material.
