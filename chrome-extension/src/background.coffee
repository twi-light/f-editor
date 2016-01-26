#chrome.runtime.reload()
chrome.tabs.query { url: 'https://www.f-list.net/*' }, (tabs) ->
  for tab in tabs
    chrome.tabs.executeScript tab.id, { file: 'dist/content_script.js' }, ->
chrome.runtime.onMessage.addListener (data, sender, sendResponse) ->
  sendResponse { pong: yes }
