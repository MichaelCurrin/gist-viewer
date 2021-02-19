function makeGistsUrl(username)
  return `https://api.github.com/users/${username}/gists?per_page=100`;

function renderTemplate(data) {
  const template = document.getElementById('template').innerHTML;
  const rendered = Mustache.render(template, data);
  
  document.getElementById('target').innerHTML = rendered;
}

function renderGists(username) {
  const gistsUrl = makeGistsUrl(username);
  
  fetch(gistsUrl)
      .then(res => res.json())
      .then(json => renderTemplate({ gists: json }));
}
