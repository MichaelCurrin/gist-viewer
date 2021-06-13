# Gist Viewer 👨‍💻 🔭
> Web app to show a live list of all my public gists

<!-- Badges generated with: https://michaelcurrin.github.io/badge-generator/ -->

[![GitHub tag](https://img.shields.io/github/tag/MichaelCurrin/gist-viewer)](https://github.com/MichaelCurrin/gist-viewer/tags/?include_prereleases&sort=semver)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)

[![dependency - vue](https://img.shields.io/badge/vue-3-blue?logo=vue.js&logoColor=white)](https://www.npmjs.com/package/vue)
[![Hosted with GH Pages](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://pages.github.com/)


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
- Easy to fork and [customize](#customize).
- Built on Vue 3 without needing Node or a build step.
- Hosted on GH Pages.


## Customize

1. Fork this repo on GitHub.
2. Customize the [main.js](/assets/js/main.js) module's global constants with your username.
3. Under your GitHub repo's _Settings_, go to _Pages_ and enable _GitHub Pages_.
4. Wait for your site to build then check your GitHub Pages URL in _Settings_ or the _Environment_ tab.


## Development

- [Gists](https://docs.github.com/en/rest/reference/gists) section in the GitHub REST API docs.
    - Keys on gist items:
        ```json
        [
            "comments_url",
            "comments",
            "commits_url",
            "created_at",
            "description",
            "files",
            "forks_url",
            "git_pull_url",
            "git_push_url",
            "html_url",
            "id",
            "node_id",
            "owner",
            "public",
            "truncated",
            "updated_at",
            "url",
            "user"
        ]
        ```
- [GitHub REST](https://michaelcurrin.github.io/dev-resources/resources/version-control/github/rest.html) API in my Dev Resources.


## License

Released under [MIT](/LICENSE) by [@MichaelCurrin](https://github.com/MichaelCurrin).
