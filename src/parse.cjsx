import {React, dom} from './dom.coffee'

insertTextAround = (element, before, after) ->
  element.insertBefore (document.createTextNode before), element.firstChild
  element.appendChild document.createTextNode after

export default (element) ->
  element = element.cloneNode yes
  for node in element.querySelectorAll 'b'
    insertTextAround node, '[b]', '[/b]'
  for node in element.querySelectorAll 'i'
    insertTextAround node, '[i]', '[/i]'
  for node in element.querySelectorAll 'u'
    insertTextAround node, '[u]', '[/u]'
  for node in element.querySelectorAll '.eicon'
    insertTextAround node, '[eicon]', '[/eicon]'
  for node in element.querySelectorAll '.icon'
    insertTextAround node, '[icon]', '[/icon]'
  for node in element.querySelectorAll '.user'
    insertTextAround node, '[user]', '[/user]'
  for node in element.querySelectorAll '[color]' when node.color isnt ''
    insertTextAround node, "[color=#{node.color}]", '[/color]'
  text = "Converting to TEXT does not fully work yet! (sorry)\n\n#{element.textContent}"
  console.log text.substring 0, 300
  text
