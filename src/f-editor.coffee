FEditor = require './views/editor.cjsx'

module?.exports = FEditor
if window?
  window.FEditor = FEditor
  window.addEventListener 'load', ->
    new FEditor node for node in document.querySelectorAll '.f-editor'
