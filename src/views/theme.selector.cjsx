require './theme.selector.styl'
React = dom = require '../dom.coffee'

stylesheet = <link rel="stylesheet" type="text/css" href={"https://static.f-list.net/css/#{localStorage["/twi-light/f-editor/demo-theme"] or 'default'}.css"} />
document.head.appendChild stylesheet

module.exports = class ThemeSelector
  constructor: (@parent) ->
    @element =
      <div f-editor-theme-selector>
        <select onchange={
          ->
            stylesheet.href = "https://static.f-list.net/css/#{@.value or 'default'}.css"
            localStorage["/twi-light/f-editor/demo-theme"] = @.value
          }>
          <option value="default">Default Theme</option>
          <option value="dark">Dark Theme</option>
          <option value="light">Light Theme</option>
        </select>
      </div>
    stylesheet.href = "https://static.f-list.net/css/#{localStorage["/twi-light/f-editor/demo-theme"] or 'default'}.css"
    @parent.appendChild @element
