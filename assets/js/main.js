function gistsUrl(username, limit = 100) {
  return `https://api.github.com/users/${username}/gists?per_page=${limit}`;
}

function renderTemplate(data) {
  const template = document.getElementById('template').innerHTML;
  const rendered = Mustache.render(template, data);

  document.getElementById('target').innerHTML = rendered;
}

async function renderGists(username) {
  const url = gistsUrl(username);

  console.debug(url);

  const resp = await fetch(url)
  const json = await resp.json()
  renderTemplate({ gists: json })
}
