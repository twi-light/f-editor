import './manifest.json'
import './popup.html'
import './icon.png'

# id = "popup#{+Date.now()}"
# import Message from './views/message.cjsx'
# import {React, dom} from '../../src/dom.coffee'
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
