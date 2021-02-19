function renderTemplate(data) {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, data);
  
  document.getElementById('target').innerHTML = rendered;
}

function renderGists(username) {
  const userGistsUrl = `https://api.github.com/users/${username}/gists`;
  
  fetch(userGistsUrl)
      .then(res => res.json())
      .then(json => renderTemplate({ gists: json }));
}
