require './toolbar.styl'
React = dom = require '../dom.coffee'

###
<div f-editor-toolbar>
  <button ui-state-default ui-corner-all
    onclick={ @showTags() }>
      Show BBCode Tags
  </button>
  <select theme>
    <option>Default</option>
  </select>
  <button ui-state-default ui-corner-all
    onclick={ @theme 'default' }>
       Theme
  </button>
  <button ui-state-default ui-corner-all
    onclick={ @theme 'dark' }>
      Dark Theme
  </button>
  <button ui-state-default ui-corner-all
    onclick={ @theme 'light' }>
      Light Theme
  </button>
###

module.exports = class Toolbar
  constructor: (@editor) ->
    @element =
      <div f-editor-toolbar TextareaToolbar>
        <a title="[text]" f-editor-toolbar-text ToolbarButton onmousedown={
          => dom.className @editor.element, '~f-editor-editing'
        }></a>
        <a title="[BBCode]" f-editor-toolbar-bbcode ToolbarButton onmousedown={
          => dom.className @editor.element, '~f-editor-show-tags'
        }></a>
        <a title="Bold" ToolbarBold ToolbarButton onmousedown={
          -> document.execCommand 'bold'
        }></a>
        <a title="Italic" ToolbarItalic ToolbarButton onmousedown={
          -> document.execCommand 'italic'
        }></a>
        <a title="Underline" ToolbarUnderline ToolbarButton onmousedown={
          -> document.execCommand 'underline'
        }></a>
        <span f-editor-not-implimented>
          <a title="Justify" ToolbarJustify ToolbarButton onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'justify'
          }></a>
          <a title="Blockquote" ToolbarQuote ToolbarButton onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'quote'
          }></a>
          <a title="Link" ToolbarLink ToolbarButton onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'createLink'
          }></a>
          <a title="Color" ToolbarColor ToolbarButton onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'foreColor', 'purple'
          }></a>
          <a title="Icon link" ToolbarIcon ToolbarButton onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'icon'
          }></a>
          <a title="Collapse" ToolbarBlock ToolbarButton ToolbarCollapse onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'collapse'
          }></a>
          <a title="Insert Inline" ToolbarInline ToolbarButton onmousedown={
            -> alert 'All features inside the red box are not yet implimented. (sorry)' # document.execCommand 'Toolbars_showInlines'
          }></a>
        </span>
      </div>

<div class="TextareaToolbar MediumPanel">
  <a title="Bold" ToolbarBold ToolbarButton onclick="$('#CharacterEditDescription').insertAtCaret('[b]','[/b]');"></a>
  <a title="Italic" ToolbarItalic ToolbarButton onclick="$('#CharacterEditDescription').insertAtCaret('[i]','[/i]');"></a>
  <a title="Underline" ToolbarUnderline ToolbarButton onclick="$('#CharacterEditDescription').insertAtCaret('[u]','[/u]');"></a>
  <a title="Justify" ToolbarJustify ToolbarButton onclick="$('#CharacterEditDescription').insertAtCaret('[justify]','[/justify]');"></a>
  <a title="Blockquote" ToolbarQuote ToolbarButton onclick="$('#CharacterEditDescription').insertAtCaret('[quote]','[/quote]');"></a>
  <a title="Link" ToolbarLink ToolbarButton onclick="var linkurl=FList.Toolbars_createLink(); if(linkurl!==-1){ $('#CharacterEditDescription').insertAtCaret('[url=' + linkurl + ']','[/url]'); }"></a>
  <a title="Color" ToolbarColor ToolbarButton onclick="var colortext=FList.Toolbars_createColor(); if(colortext!==-1){ $('#CharacterEditDescription').insertAtCaret('[color=' + colortext + ']','[/color]'); }"></a>
  <a title="Icon link" ToolbarIcon ToolbarButton onclick="var icontext=FList.Toolbars_createIconLink(); if(icontext!==-1){ $('#CharacterEditDescription').insertAtCaret('','[icon]' + icontext + '[/icon]'); }"></a>
  <a title="Collapse" ToolbarBlock ToolbarButton ToolbarCollapse onclick="$('#CharacterEditDescription').insertAtCaret('[collapse=title]','[/collapse]');"></a>
  <a title="Insert Inline" ToolbarInline ToolbarButton onclick="FList.Toolbars_showInlines('CharacterEditDescription')"></a>
  <a title="Preview" href="javascript:FList.Toolbars_instantPreview('#CharacterEditDescription');">Preview BBCode</a>
</div>
