import './editor.styl'
import dom, {React} from '../dom.coffee'

import parse from '../parse.cjsx'
import { debounce } from '../timing.coffee'
import Editable from './editable.cjsx'
import Toolbar from './toolbar.cjsx'

name = (text) -> "#{text or ''}".toLowerCase().replace /^\s+|\s+$/g, ''

isValidColor = (color) ->
  /^(|blue|white|black|red|yellow|green|pink|gray|orange|purple|brown|cyan)$/i.test color

module.exports = class FEditor
  command: (command, args...) => (event) =>
    event.stopPropagation()
    event.preventDefault()
    document.execCommand 'styleWithCSS', 0, false
    if command is 'color'
      color = args[1] or ''
      for element in @editable.element.querySelectorAll '[color]'
        element.removeAttribute 'class'
      document.execCommand 'foreColor', 0, color or 'lime'
      for element in @editable.element.querySelectorAll '[color]'
        unless isValidColor element.color
          element.color = color
        else
          element.className = "#{element.color}font"
    else if command in ['icon', 'eicon', 'user']
      document.execCommand 'insertHTML', 0, """<span class="#{command}">#{document.getSelection()}</span>"""
    else
      document.execCommand command, args...
    # div = <div/>
    # div.appendChild document.getSelection().cloneContents()
    # console.log div.innerHTML
    @save()
    false
  save: =>
    @editable.element.normalize()
    for eicon in @editable.element.querySelectorAll '.eicon'
      eicon.style.backgroundImage = "url('https://static.f-list.net/images/eicon/#{name eicon.textContent}.gif')"
    for icon in @editable.element.querySelectorAll '.icon'
      icon.style.backgroundImage = "url('https://static.f-list.net/images/avatar/#{name icon.textContent}.png')"
    @textarea.value = parse @editable.element
    # localStorage["/twi-light/f-editor/demo-html"] = @editable.element.innerHTML
  constructor: (@textarea) ->
    @parent = @textarea.parentElement
    if DEBUG and @textarea?.tagName isnt 'TEXTAREA'
      throw new Error 'Editor not of type <textarea />'

    if DEBUG and /\bf-editor-enhanced\b/.test @textarea.className
      throw new Error 'Editor already enhanced.'
    dom.className @textarea, 'f-editor-enhanced'

    @element = <div f-editor show-tags editing />
    @parent.insertBefore @element, @textarea

    @toolbar = new Toolbar @
    @element.appendChild @toolbar.element

    @editable = new Editable @
    @element.appendChild @editable.element

    dom.on @editable.element, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', debounce 300, @save
    @save()
