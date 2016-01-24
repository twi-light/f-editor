require './editor.styl'

React = dom = require '../dom.coffee'
parse = require '../parse.coffee'
{ debounce } = require '../timing.coffee'
Toolbar = require './toolbar.cjsx'

module.exports = class FEditor
  constructor: (@textarea) ->
    unless @textarea?.tagName is 'TEXTAREA'
      throw new Error 'Editor not of type <textarea />'

    if /\bf-editor-enhanced\b/.test @textarea.className
      throw new Error 'Editor already enhanced.'
    dom.className @textarea, 'f-editor-enhanced'

    dom.className @textarea.parentElement, 'f-editor-editing'

    @editable = <div f-editor-editable chat-message contentEditable f-editor-show-tags />
    #localStorage["/twi-light/f-editor/demo-html"] or
    @editable.innerHTML = """<p>Here are some examples:</p>
<p>we have <b>ctrl+b to&nbsp; bold</b></p>
<p>we also have <i>ctrl+i for italics</i></p>
<p>We have <u>ctrl+u for underline</u></p>

<span class="eicon" style="background-image: url(https://static.f-list.net/images/eicon/twiwindy.gif)">twiwindy</span> <span class="eicon" style="background-image: url(https://static.f-list.net/images/eicon/twiwindy.gif)">twiwindy</span> <span class="eicon" style="background-image: url(https://static.f-list.net/images/eicon/twiwindy.gif)">twiwindy</span> <span class="eicon" style="background-image: url(https://static.f-list.net/images/eicon/twiwindy.gif)">twiwindy</span> <span class="eicon" style="background-image: url(https://static.f-list.net/images/eicon/twiwindy.gif)">twiwindy</span>
<p>Normal Text Here.</p>
"""
    document.head.appendChild @theme = <link rel="stylesheet" type="text/css" href={"https://static.f-list.net/css/#{localStorage["/twi-light/f-editor/demo-theme"] or 'default'}.css"} />

    @toolbar = new Toolbar @

    @textarea.parentElement.appendChild @toolbar.element
    @textarea.parentElement.appendChild @editable

    dom.on @editable, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', debounce 300, =>
      parse @editable
      localStorage["/twi-light/f-editor/demo-html"] = @editable.innerHTML
