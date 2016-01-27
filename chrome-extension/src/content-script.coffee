# extenal library zone.js https://github.com/angular/zone.js
{zone} = require 'zone.js'
console.log zone
zone.fork().run ->
  id = "content#{+Date.now()}"
  Message = require './views/message.cjsx'

  window.addEventListener 'load', ->
    chrome.runtime.onMessage.addListener (data, sender, sendResponse) ->
      new Message data, sender
    new Message { loaded: yes }, {}
    throw new Error 'OOPS'


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
