---
layout: home
---

> {{ site.description }}

## GitHub user

Profile: [{{ site.github_username }}](https://github.com/{{ site.github_username }})


## Gists

See my public gists below, or browse [gists](https://gists.github.com/{{ site.github_username }}) directly on GitHub.

{% raw %}
<div id="target">Loading...</div>
<script id="template" type="x-tmpl-mustache">
    <ol>
    {{#gists}}
        <li>
            <a href="{{ html_url }}">link</a> <span>{{ description }}</span>
        </li>
    {{/gists}}
    </ol>
</script>
{% endraw %}

<script>
    renderGists(
        '{{ site.github_username }}'
    )
</script>


## Repo

This project is open-sourced!

See the repo on GitHub:

- [{{ site.github_username }}{{ site.baseurl }}](https://github.com/{{ site.github_username }}{{ site.baseurl }})

To get your own site setup like this, fork it, customize with your own username and deploy it.
