# Yuhan Zhu (Zuzu) — Personal Portfolio

[English](README.md) · [简体中文](README.zh-CN.md)

A bilingual personal website for my projects, background and development updates. Game engineering and technical audio are my current areas of work, while the site also introduces the person behind the projects. It is built with HTML, CSS and JavaScript and published through GitHub Pages.

[Visit the website](https://inovamenz-code.github.io/) · [Selected projects](https://inovamenz-code.github.io/projects.html) · [Contact](https://inovamenz-code.github.io/contact.html)

## What visitors can find

- A personal homepage with three selected projects: WM908 Survival Shooter, BallDarkEcho and Adaptive Game Music.
- One project collection combining selected personal work and coursework.
- Separate About, Now and Contact pages, rather than a single long scrolling page.
- English and Chinese content with a language selector and a saved language preference.
- Project evidence and direct repository links, with availability and dependency limits explained in each project's own README.

## My contribution

I organise the project selection, descriptions, bilingual copy and page structure around my own work. The implementation uses a static layout, reusable CSS and a small JavaScript language switcher. The site introduces project purpose before technical detail so a visitor can quickly decide which work to explore.

Project screenshots are evidence from the corresponding work; they are not proof that every listed feature has been freshly tested. Each repository explains its own current implementation, dependencies, verification and third-party components.

## Pages and implementation

| Page or technology | Purpose | Source |
| --- | --- | --- |
| Home | Introduce me and show three selected projects | [index.html](index.html) |
| Projects | Combine personal work and selected coursework | [projects.html](projects.html) |
| About | Explain background, interests and working approach | [about.html](about.html) |
| Now | Summarise current development | [now.html](now.html) |
| Contact | Provide contact and professional links | [contact.html](contact.html) |
| CSS | Shared typography, layout and responsive styles | [site.css](assets/site.css) |
| JavaScript | Switch displayed language and retain the choice | [site.js](assets/site.js) |

## Run locally and publish

There is no package installation or build step. Open `index.html` in a browser, or serve the repository with any static-file server. For example, with Python installed:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8000/`. Test navigation and both languages when changing copy; long Chinese and English text can occupy different amounts of space.

The default branch is `master`. GitHub Pages publishes the static files from the configured repository source. The repository name remains `inovamenz-code.github.io` because it hosts the account's personal site. Internal page routes and project anchors remain stable when project repositories are renamed.

## Status and project scope

The website is published. The 11 October 2026 documentation refresh updates repository links and records the dissertation as completed with continuing development. WM908 remains a prepared local source-and-evidence archive, with no public repository or download claimed here.

The homepage continues to prioritise game-related work. Graphics coursework is retained separately on GitHub and is not added to the homepage. Public project repositories are smaller than working folders where appropriate; check their individual documentation for what is included.

## Credits

Project materials retain their own source and asset notices. The site uses Inter and Cormorant Garamond through Google Fonts, alongside its own static layout and project descriptions. No new licence is applied to all referenced project material.
