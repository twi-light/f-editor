require './editor.styl'
React = dom = require '../dom.coffee'

parse = require '../parse.cjsx'
{ debounce } = require '../timing.coffee'
Editable = require './editable.cjsx'
Toolbar = require './toolbar.cjsx'

module.exports = class FEditor
  constructor: (@textarea) ->
    @parent = @textarea.parentElement
    unless @textarea?.tagName is 'TEXTAREA'
      throw new Error 'Editor not of type <textarea />'

    if /\bf-editor-enhanced\b/.test @textarea.className
      throw new Error 'Editor already enhanced.'
    dom.className @textarea, 'f-editor-enhanced'

    @element =
      <div f-editor f-editor-show-tags f-editor-editing />
    @parent.insertBefore @element, @textarea

    @toolbar = new Toolbar @
    @element.appendChild @toolbar.element

    @editable = new Editable @
    @element.appendChild @editable.element

    @textarea.value = parse @editable.element
    dom.on @editable.element, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', debounce 300, =>
      @textarea.value = parse @editable.element
      localStorage["/twi-light/f-editor/demo-html"] = @editable.element.innerHTML
