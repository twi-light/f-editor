contentScriptStyle = require './content-script.styl'
using = no
setInterval ->
  if using
    contentScriptStyle.unuse()
    using = no
  else
    contentScriptStyle.use()
    using = yes
, 1000

# extenal library zone.js https://github.com/angular/zone.js
console.log 'Content-Script Loaded!'
id = "content-script#{+Date.now()}"
chrome.runtime.onMessage.addListener (data, sender, sendResponse) ->
  console.log '-->', data?.id
  sendResponse { id, 'is ping': yes }

pingTimer = setInterval ->
  console.log "ping #{id}"
  try
    chrome.runtime.sendMessage { id, ping: yes }, (data, sender) ->
      console.log '<--', data?.id
  catch error
    clearTimeout pingTimer
    throw error
, 1000
