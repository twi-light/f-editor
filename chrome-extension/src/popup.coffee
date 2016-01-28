require './manifest.json'
require './popup.html'
require './icon.png'

# id = "popup#{+Date.now()}"
# Message = require './views/message.cjsx'
# React = dom = require '../../src/dom.coffee'
# window.addEventListener 'load', ->
#   chrome.runtime.onMessage.addListener (data, sender, sendResponse) ->
#     new Message data, sender
#     # sendResponse { pong: yes }
#   new Message { loaded: yes }, {}
# setInterval ->
#   console.log 'ping'
#   chrome.runtime.sendMessage { id, ping: yes }, (response) ->
#     console.log response
# , 1000
