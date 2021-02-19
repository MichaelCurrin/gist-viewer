# Gist Viewer 🖥 🔭
> A simple site to show a live list of all my public gists 

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/gist-viewer)](https://github.com/MichaelCurrin/gist-viewer/tags/?include_prereleases&sort=semver)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![Made with Jekyll](https://img.shields.io/badge/jekyll-3.9-blue?logo=jekyll)](https://jekyllrb.com)
[![Theme Minima](https://img.shields.io/badge/theme-minima-blue)](https://github.com/jekyll/minima)
[![Made with Mustache](https://img.shields.io/npm/v/mustache?label=mustache)](https://www.npmjs.com/package/mustache)


## Preview

<div align="center">
    <a href="https://michaelcurrin.github.io/gist-viewer/">
        <img src="/sample.png" alt="Sample screenshot" title="Sample screenshot" width="400" />
    </a>
</div>


## Web app

<div align="center">

[![View site GH Pages](https://img.shields.io/badge/View_site-Gist_viewer-2ea44f?style=for-the-badge)](https://michaelcurrin.github.io/gist-viewer/)

</div>


## Features

- Fetch all of a user's gists from the [GitHub REST API](https://docs.github.com/en/rest) using JS.
- Always shows latest data - refresh the page to update.
- Render gists on on a page using [mustache.js](https://www.npmjs.com/package/mustache) templating.
- Easy to fork and [customize](#customize).
- Built on Jekyll and hosted on GH Pages.


## Installation

### Install system dependencies

Install Ruby and Bundler - follow these [instructions](https://gist.github.com/MichaelCurrin/3af38fca4e2903cdedfb8402c18b2936).

### Clone

Clone the repo.

```sh
$ git clone git@github.com:MichaelCurrin/gist-viewer.git
$ cd gist-viewer
```

### Install project packages

Install project gems.

```sh
$ make install
```


## Usage

Start a local dev server.

```sh
$ make serve
```

Open in the browser:

- http://localhost:4000/gist-viewer/


## Customize

1. Fork this repo on GitHub.
2. Customize the [\_config.yml](/_config.yml) file with your username.
3. Enable _GitHub Pages_ under Settings.
4. Wait for your site to build then check your GitHub Pages URL in Settings or the _environment_ tab.


## License

Released under [MIT](/LICENSE).
