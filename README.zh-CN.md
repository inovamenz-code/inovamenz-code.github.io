# 朱语涵（Zuzu）— 个人主页

[English](README.md) · [简体中文](README.zh-CN.md)

一个展示我的项目、背景与开发近况的中英文个人网站。游戏工程与技术音频是当前工作方向，网站也介绍项目背后的个人兴趣。实现采用 HTML、CSS 和 JavaScript，通过 GitHub Pages 发布。

[访问网站](https://inovamenz-code.github.io/) · [精选项目](https://inovamenz-code.github.io/projects.html) · [联系](https://inovamenz-code.github.io/contact.html)

## 可以看到什么

- 个人首页及三个精选项目：WM908 Survival Shooter、BallDarkEcho 和自适应游戏音乐工具。
- 合并呈现个人作品与精选课程项目的项目页面。
- 独立的 About、Now 和 Contact 页面，使用页面切换。
- 中英文内容、语言选择器和保存的语言偏好。
- 项目证据与仓库链接；各项目自己的 README 说明可用内容、依赖和限制。

## 我的实现

项目选择、介绍、双语文案与页面结构围绕我自己的作品组织。实现采用静态布局、共享 CSS 和小型 JavaScript 语言切换器，先说明项目用途，再让访客深入技术细节。

项目截图来自对应工程，但不代表所有列出的功能都在本次重新测试。具体实现、依赖、验证状态和第三方组件由各仓库说明。

## 页面与技术

| 页面／技术 | 用途 | 源码 |
| --- | --- | --- |
| Home | 介绍个人并展示三个精选项目 | [index.html](index.html) |
| Projects | 合并个人作品与精选课程项目 | [projects.html](projects.html) |
| About | 背景、兴趣与工作方式 | [about.html](about.html) |
| Now | 当前开发近况 | [now.html](now.html) |
| Contact | 联系方式与职业链接 | [contact.html](contact.html) |
| CSS | 共享字体、布局和响应式样式 | [site.css](assets/site.css) |
| JavaScript | 切换语言并保留选择 | [site.js](assets/site.js) |

## 本地运行与发布

不需要安装包或构建。可以直接用浏览器打开 `index.html`，或使用静态文件服务器。例如已安装 Python 时运行：

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

然后打开 `http://127.0.0.1:8000/`。修改文案时需检查导航与两种语言；中英文长文本占用空间可能不同。

默认分支是 `master`。GitHub Pages 从仓库配置的来源发布静态文件。仓库名保持 `inovamenz-code.github.io`，因为它托管账号个人站点。项目仓库改名时，站内页面路径与项目锚点保持稳定。

## 状态与项目范围

网站已发布。2026 年 10 月 11 日的文档整理更新项目仓库链接，并将毕设状态标为已完成、继续迭代。WM908 仍是已准备好的本地源码与证据档案，本站不宣称它已有公开仓库或下载。

首页继续优先展示游戏相关作品。图形学课程项目单独保留在 GitHub，不加入首页。公开项目在需要时采用小于本地工作工程的内容范围，实际收录内容以各仓库说明为准。

## 来源与署名

各项目材料保留自己的来源与素材声明。网站通过 Google Fonts 使用 Inter 和 Cormorant Garamond，并采用静态布局与项目介绍。没有为所有引用的项目材料新增统一许可证。
