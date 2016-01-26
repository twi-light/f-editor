id = "content#{+Date.now()}"
Message = require './views/message.cjsx'

window.addEventListener 'load', ->
  chrome.runtime.onMessage.addListener (data, sender, sendResponse) ->
    new Message data, sender
  new Message { loaded: yes }, {}


#FEditor = require '../../src/f-editor.coffee'
# id = "content#{+Date.now()}"
setInterval ->
  console.log 'ping'
  chrome.runtime.sendMessage { id, ping: yes }, (response) ->
    console.log response
, 1000
