ThemeSelector = require './views/theme.selector.cjsx'
Editor = require './views/editor.cjsx'

module?.exports = Editor
if window?
  window.FEditor = Editor
  window.addEventListener 'load', ->
    new ThemeSelector node for node in document.querySelectorAll '[type=f-editor-theme-selector]'
    new Editor node for node in document.querySelectorAll 'textarea'
