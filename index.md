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

- [{{ site.github_username }}](https://gists.github.com/{{ site.github_username }})'s gists on GH
- [{{ site.github_username }}](https://github.com/{{ site.github_username }}) GH account


## About

This project is open-sourced!

Find the repo on GitHub:

- [{{ site.github_username }}{{ site.baseurl }}](https://github.com/{{ site.github_username }}{{ site.baseurl }})

To get your own site setup like this one, you can fork it, customize it with your own username and deploy it.
