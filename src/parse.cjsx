import {React, dom} from './dom.coffee'

temp = <div />

insertTextAround = (element, before, after) ->
  parent = element.parentElement
  if before
    parent.insertBefore <span textContent={before} />, element
  if after
    afterSpan = <span textContent={after} />
    parent.insertBefore afterSpan, element
    parent.insertBefore element, afterSpan
  return

name = (text) ->
  text.toLowerCase().replace /^\s+|\s+$/g, ''

export default (element) ->
  for eicon in element.querySelectorAll '.eicon'
    eicon.style.backgroundImage = "url('https://static.f-list.net/images/eicon/#{name eicon.textContent}.gif')"
  for icon in element.querySelectorAll '.icon'
    icon.style.backgroundImage = "url('https://static.f-list.net/images/avatar/#{name icon.textContent}.png')"
  temp.innerHTML = element.innerHTML
  for node in temp.querySelectorAll 'b'
    insertTextAround node, '[b]', '[/b]'
  for node in temp.querySelectorAll 'i'
    insertTextAround node, '[i]', '[/i]'
  for node in temp.querySelectorAll 'u'
    insertTextAround node, '[u]', '[/u]'
  for node in temp.querySelectorAll '.eicon'
    insertTextAround node, '[eicon]', '[/eicon]'
  for node in temp.querySelectorAll '.icon'
    insertTextAround node, '[icon]', '[/icon]'
  text = "Converting to TEXT does not fully work yet! (sorry)\n\n#{temp.textContent}"
  console.log text.substring 0, 300
  text
