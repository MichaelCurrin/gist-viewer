# Gist Viewer
> A simple site to show a live list of all my public gists 

[![Made with Jekyll](https://img.shields.io/badge/Jekyll-3.9-blue?logo=jekyll)](https://jekyllrb.com)
[![Theme Minima](https://img.shields.io/badge/theme-Minima-blue)](https://github.com/jekyll/minima)
[![Made with Moustache](https://img.shields.io/npm/v/mustache?label=mustache)](https://www.npmjs.com/package/mustache)
[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/gist-viewer)](https://github.com/MichaelCurrin/gist-viewer/tags/?include_prereleases&sort=semver)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](#license)

<div align="center">

[![View site GH Pages](https://img.shields.io/badge/View_site-GH_Pages-green?style=for-the-badge)](https://michaelcurrin.github.io/gist-viewer/)

</div>


## Features

- Fetch all of a user's gists from the [GitHub REST API](https://docs.github.com/en/rest) using JS
- Always shows latest data on a page load
- Renders gists on on a page using [mustache.js](https://www.npmjs.com/package/mustache) templating.
- Easy to fork and [customize](#customize).
- Built on Jekyll and GH Pages


## Preview

[![Sample screenshot](/sample.png)](https://michaelcurrin.github.io/gist-viewer/)


## Installation

### Install system dependencies

Install Ruby and Bundler - see [instructions](https://gist.github.com/MichaelCurrin/3af38fca4e2903cdedfb8402c18b2936)

### Clone

Clone the repo.

```sh
$ git clone git@github.com:MichaelCurrin/gist-viewer.git
$ cd gist-viewer
```

### Install project dependencies

Install local gems.

```sh
$ make install
```


## Usage
> Start local dev server

```sh
$ make serve
```

Open in the browser:

- http://localhost:4000/gist-viewer/


## Customize

Fork this repo on GitHub.

Customize the [\_config.yml](/_config.yml) file with your username.

Enable _GitHub Pages_ under Settings.

Wait for your site to build.


## License

Released under [MIT](/LICENSE).
