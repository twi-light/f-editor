startupTimestamp = Date.now()

#chrome.runtime.reload()
chrome.tabs.query { url: 'https://www.f-list.net/*' }, (tabs) ->
  for tab in tabs
    chrome.tabs.executeScript tab.id, {
      file: 'content-script.js'
    }
id = "background#{+Date.now()}"
chrome.runtime.onMessage.addListener (event, sender, sendResponse) ->
  if event.type is 'ping'
    sendResponse { type: 'ping', startupTimestamp }
# setInterval ->
#   console.log "ping #{id}"
#   chrome.runtime.sendMessage { id, ping: yes }, (data, sender) ->
#     console.log '<--', data?.id
# , 1000
