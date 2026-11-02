# 朱语涵（Zuzu）— 个人主页

[English](README.md) · [简体中文](README.zh-CN.md)

一个展示我的项目、背景与开发近况的中英文个人网站。游戏工程与技术音频是当前工作方向，网站也介绍项目背后的个人兴趣。实现采用 HTML、CSS 和 JavaScript，通过 GitHub Pages 发布。

[访问网站](https://inovamenz-code.github.io/) · [精选项目](https://inovamenz-code.github.io/projects.html) · [联系](https://inovamenz-code.github.io/contact.html)

## 可以看到什么

- 个人首页及三个精选项目：WM908 Survival Shooter、BallDarkEcho 和自适应游戏音乐工具。
- 合并呈现个人作品与精选课程项目的项目页面。
- 独立的 About、Now 和 Contact 页面，使用页面切换。
- 中英文内容、语言选择器和保存的语言偏好。
- 项目截图和仓库链接，运行方法见各项目的 README。

## 我的实现

项目选择、介绍、双语文案与页面结构围绕我自己的作品组织。实现采用静态布局、共享 CSS 和小型 JavaScript 语言切换器，先说明项目用途，再让访客深入技术细节。

各项目仓库包含实现说明、依赖和素材署名。

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

网站已发布。2026 年 11 月补充了音乐工具与 Anti-Alien 截图、项目链接，并调整了双语介绍。毕设已完成，WM908 的公开版本正在整理。

首页展示 WM908、BallDarkEcho 和自适应游戏音乐工具，Projects 另收录 Anti-Alien 第六关。图形学课程项目保留在 GitHub。

## 来源与署名

各项目材料保留自己的来源与素材声明。网站通过 Google Fonts 使用 Inter 和 Cormorant Garamond，并采用静态布局与项目介绍。没有为所有引用的项目材料新增统一许可证。
