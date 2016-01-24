module.exports = (element) ->
  for eicon in element.querySelectorAll 'span.eicon'
    eicon.style.backgroundImage = "url('https://static.f-list.net/images/eicon/#{eicon.textContent.toLowerCase().replace /^\s+|\s+$/g, ''}.gif')"
  element.textContent
