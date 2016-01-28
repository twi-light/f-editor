#chrome.runtime.reload()
chrome.tabs.query { url: 'https://www.f-list.net/*' }, (tabs) ->
  for tab in tabs
    chrome.tabs.executeScript tab.id, {
      file: 'content-script.js'
    }
    chrome.tabs.insertCSS tab.id, {
      file: 'content-script.css'
    }
id = "background#{+Date.now()}"
chrome.runtime.onMessage.addListener (data, sender, sendResponse) ->
  console.log '-->', data?.id
  sendResponse { id, 'is ping': yes }
setInterval ->
  console.log "ping #{id}"
  chrome.runtime.sendMessage { id, ping: yes }, (data, sender) ->
    console.log '<--', data?.id
, 1000
