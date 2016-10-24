import './toolbar.styl'
import dom, {React} from '../dom.coffee'
# document.execCommand("insertHTML", false, "<span class='own-class'>"+ document.getSelection()+"</span>")
module.exports = class Toolbar
  constructor: (@editor) ->
    @element =
      <div toolbar>
        <a title="edit text" ToolbarButton onmousedown={=>
          dom.className @editor.element, '~editing'
        } />
        <a title="show tags" ToolbarButton onmousedown={=>
          dom.className @editor.element, '~show-tags'
        } />
        <a title="b" ToolbarButton onmousedown={@editor.command 'bold'} />
        <a title="i" ToolbarButton onmousedown={@editor.command 'italic'} />
        <a title="u" ToolbarButton onmousedown={@editor.command 'underline'} />
        <a title="sub" ToolbarButton onmousedown={@editor.command 'subscript'} />
        <a title="sup" ToolbarButton onmousedown={@editor.command 'superscript'} />
        <a title="indent" ToolbarButton onmousedown={@editor.command 'indent'} />
        <a title="justify" ToolbarButton onmousedown={@editor.command 'justifyFull'} />
        <a title="left" ToolbarButton onmousedown={@editor.command 'justifyLeft'} />
        <a title="center" ToolbarButton onmousedown={@editor.command 'justifyCenter'} />
        <a title="right" ToolbarButton onmousedown={@editor.command 'justifyRight'} />
        <a title="icon" ToolbarButton onmousedown={@editor.command 'icon'} />
        <a title="eicon" ToolbarButton onmousedown={@editor.command 'eicon'} />
        <a title="user" ToolbarButton onmousedown={@editor.command 'user'} />
        <a title="url" ToolbarButton onmousedown={(event) => (@editor.command 'createLink', 0, prompt()) event} />
        <span not-implemented>
          <a title="quote" ToolbarButton onmousedown={@editor.command 'quote'} />
          <a title="Collapse" ToolbarButton ToolbarCollapse onmousedown={@editor.command 'collapse'} />
          <a title="Insert Inline" ToolbarButton onmousedown={@editor.command 'Toolbars_showInlines'} />
        </span>
        { for color in ['blue','white','black','red','yellow','green','pink','gray','orange','purple','brown','cyan']
          <a key={color} title={"■ #{color}"} className={"#{color}font"} ToolbarButton onmousedown={@editor.command 'color', 0, color} />
        }
        <a title="■ none" ToolbarButton onmousedown={@editor.command 'color', 0, ''} />
      </div>
