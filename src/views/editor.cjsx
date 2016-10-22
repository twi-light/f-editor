import './editor.styl'
import dom, {React} from '../dom.coffee'

import parse from '../parse.cjsx'
import { debounce } from '../timing.coffee'
import Editable from './editable.cjsx'
import Toolbar from './toolbar.cjsx'


module.exports = class FEditor
  command: (command, args...) => (event) =>
    event.stopPropagation()
    event.preventDefault()
    document.execCommand 'styleWithCSS', 0, false
    if command is 'color'
      color = args[1]
      for element in @editable.element.querySelectorAll '[color]'
        element.removeAttribute 'class'
      document.execCommand 'foreColor', 0, color or 'black'
      element = document.getSelection().focusNode.parentElement
      element.color = color or ''
      for element in @editable.element.querySelectorAll '[color]'
        element.className = "#{element.color}font"
    else if command in ['icon', 'eicon', 'user']
      document.execCommand 'insertHTML', 0, """<span class="#{command}">#{document.getSelection()}</span>"""
    else
      document.execCommand command, args...
    # div = <div/>
    # div.appendChild document.getSelection().getRangeAt(0).cloneContents()
    # console.log div.innerHTML
    @save()
    false
  save: =>
    @textarea.value = parse @editable.element
    # localStorage["/twi-light/f-editor/demo-html"] = @editable.element.innerHTML
  constructor: (@textarea) ->
    @parent = @textarea.parentElement
    unless @textarea?.tagName is 'TEXTAREA'
      throw new Error 'Editor not of type <textarea />'

    if /\bf-editor-enhanced\b/.test @textarea.className
      throw new Error 'Editor already enhanced.'
    dom.className @textarea, 'f-editor-enhanced'

    @element = <div f-editor show-tags editing />
    @parent.insertBefore @element, @textarea

    @toolbar = new Toolbar @
    @element.appendChild @toolbar.element

    @editable = new Editable @
    @element.appendChild @editable.element

    @textarea.value = parse @editable.element
    dom.on @editable.element, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', debounce 300, @save
