<div id="top"></div>
<br />

<div align="center">
<a href="https://github.com/StudioRvAndCo/Website">
    <img src="src/assets/img/logo.png" alt="Logo Studio Rv & Co" width="auto" height="80">
</a>

<h3 align="center">Website</h3>

![GitHub deployments](https://img.shields.io/github/deployments/StudioRvAndCo/Website/github-pages?label=Deployment)&nbsp;
![Website version](https://img.shields.io/github/package-json/v/StudioRvAndCo/Website?label=Version)&nbsp;
![Project License](https://img.shields.io/github/license/StudioRvAndCo/Website?label=License)&nbsp;
![Website build size](https://img.shields.io/badge/Build%20size-0.00%20MB-blue)

  <p align="center">
    Website of the Studio Rv & Co association.
    <br />
    <a href="https://rvandco.fr/"><strong>rvandco.fr »</strong></a>
  </p>
</div>
<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#color-reference">Color Reference</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-locally">Run Locally</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#feedback">Feedback</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

## About The Project

Website of the association Rv & Co promoting the productions and social networks.

### Features

- Video teaser with important numbers
- Our productions
- Other projects with carousel
- Association's presentation with its members and Instagram posts
- Contact
- 100% Responsive design
- Live notification for the Twitch channel
- Translation (EN / FR)

### Tech Stack

- [VueJS 3](https://vuejs.org/)
- [Sass](https://sass-lang.com/)
- [Vue-i18n](https://vue-i18n.intlify.dev/)
- [Vue-router](https://router.vuejs.org/)
- [Vue-observe-visibility](https://github.com/Akryum/vue-observe-visibility)
- [Fontawesome](https://fontawesome.com/)
- [SplideJS](https://splidejs.com/)
- [CountUp](https://github.com/inorganik/countUp.js)

### Color Reference

| Color                        | Hex                                                                           | Description                   |
|------------------------------|-------------------------------------------------------------------------------|-------------------------------|
| Text color                   | ![#FFFFFFFF](https://via.placeholder.com/8/FFFFFFFF/FFFFFFFF.png) `#FFFFFFFF` | Titles and subtitles          |
| Subtext color                | ![#DFDFDFFF](https://via.placeholder.com/8/DFDFDFFF/DFDFDFFF.png) `#DFDFDFFF` | Texts and description         |
| Button background color      | ![#BE0000FF](https://via.placeholder.com/8/BE0000FF/BE0000FF.png) `#BE0000FF` | Background for buttons        |
| Background color             | ![#393939FF](https://via.placeholder.com/8/393939FF/393939FF.png) `#393939FF` | Global background             |
| Projects background color    | ![#555555FF](https://via.placeholder.com/8/555555FF/555555FF.png) `#555555FF` | Background for other projects |
| Association background color | ![#612626FF](https://via.placeholder.com/8/612626FF/612626FF.png) `#612626FF` | Background for association    |

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

- Install [NodeJS](https://nodejs.org/) with [npm](https://www.npmjs.com/)

```bash
  curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
  sudo apt-get install -y nodejs
```

### Run locally

1. Clone the project

```bash
  git clone https://github.com/StudioRvAndCo/Website
  cd website
```

2. Install dependencies

```bash
  npm install
```

3. Start the server

```bash
  npm run serve
```

The server should start on [localhost:8080](http://localhost:8080/).

### Deployment

To deploy this project run

```bash
  npm run build
```

A new `dist` folder will appear containing the entire compiled website.

<p align="right">(<a href="#top">back to top</a>)</p>

## Roadmap

- [x] Video teaser with numbers
- [x] List of productions
- [x] Carousel of other projects
- [x] Presentation of the association
- [x] Presentation of the members
- [x] Contact
- [x] Sync with YouTube API for statistics
- [ ] Sync with Instagram API for latest posts
- [x] Sync with Twitch API for live notification

<p align="right">(<a href="#top">back to top</a>)</p>

## Feedback

If you have any feedback, please reach out to us at [contact@rvandco.fr](mailto:contact@rvandco.fr).

<p align="right">(<a href="#top">back to top</a>)</p>

## Author

[@Minarox](https://www.github.com/Minarox)

<p align="right">(<a href="#top">back to top</a>)</p>
