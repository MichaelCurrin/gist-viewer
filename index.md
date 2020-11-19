---
layout: home
---

> {{ site.description }}

When viewing multiple pages of my gists directly on GitHub becomes impractical, a one-page solution keeps thing easy to manage.


## Gists

See my public gists below.

{% raw %}

<div id="target">Loading...</div>

<script id="template" type="x-tmpl-mustache">
    <ol>
    {{ #gists }}
        <li>
            <a href="{{ html_url }}">link</a> - <span>{{ description }}</span>
        </li>
    {{ /gists }}
    </ol>
</script>

{% endraw %}

<script>
    renderGists('{{ site.github_username }}');
</script>


## User links

- [{{ site.github_username }}](https://gist.github.com/{{ site.github_username }})'s gists on GH
- [{{ site.github_username }}](https://github.com/{{ site.github_username }}) GH account


## About

This project is open-sourced!

Find the repo on GitHub:

[![MichaelCurrin - gist-viewer](https://img.shields.io/static/v1?label=MichaelCurrin&message=gist-viewer&color=blue&logo=github)](https://github.com/MichaelCurrin/gist-viewer)

To get your own site setup like this one, it is easy to fork and deploy using your own username. Just follow the instructions in the `README.md`.

If you want to contribute to make this project better, issues and pull requests are welcome.
