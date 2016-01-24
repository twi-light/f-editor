React = dom = require '../dom.coffee'
module.exports = class Toolbar
  constructor: (@editor) ->
    console.log @
    @element = (
      <div f-editor-toolbar>
        <button ui-state-default ui-corner-all
          onclick={ @showTags() }>
            Show BBCode Tags
        </button>
        <button ui-state-default ui-corner-all
          onclick={ @theme 'default' }>
            Default Theme
        </button>
        <button ui-state-default ui-corner-all
          onclick={ @theme 'dark' }>
            Dark Theme
        </button>
        <button ui-state-default ui-corner-all
          onclick={ @theme 'light' }>
            Light Theme
        </button>
      </div>
    )
  showTags: -> =>
    dom.className @editor.editable, '~f-editor-show-tags'
  theme: (themeName) -> =>
    @editor.theme.href = "https://static.f-list.net/css/#{themeName or 'default'}.css"
    localStorage["/twi-light/f-editor/demo-theme"] = themeName
