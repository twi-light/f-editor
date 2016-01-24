require './theme.selector.styl'
React = dom = require '../dom.coffee'

stylesheet = <link rel="stylesheet" type="text/css" href={"https://static.f-list.net/css/#{localStorage["/twi-light/f-editor/demo-theme"] or 'default'}.css"} />
document.head.appendChild stylesheet

module.exports = class ThemeSelector
  stylesheet: stylesheet
  constructor: ->
    @element =
      <div ui-widget f-editor-theme-selector>
        <select>
          <option onclick={@theme 'default'}>Default</option>
          <option onclick={@theme 'dark'}>Dark</option>
          <option onclick={@theme 'lite'}>Light</option>
        </select>
      </div>
  theme: (name) -> =>
    @stylesheet.href = "https://static.f-list.net/css/#{name or 'default'}.css"
    localStorage["/twi-light/f-editor/demo-theme"] = name
