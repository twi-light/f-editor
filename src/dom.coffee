export default dom = (element, props = {}, children...) ->
  if typeof element is 'string'
    element = document.createElement element
  for own attributeKey, attributeValue of props or {}
    if /^on/.test attributeKey
      dom.on element, attributeKey, attributeValue
    else if attributeKey is 'style'
      dom.style element, attributeValue
    else if attributeKey is 'className'
      dom.className element, attributeValue
    else
      if attributeValue is yes
        dom.className element, attributeKey
      element[attributeKey] = attributeValue
  if children.length
    appendChildren = (children) ->
      for child in children
        if Array.isArray child
          appendChildren child
        else
          element.appendChild if typeof child is 'string'
            document.createTextNode child
          else
            child
    appendChildren children
  if props.dangerouslySetInnerHTML?.__html?
    element.innerHTML = props.dangerouslySetInnerHTML?.__html
  element
export {dom as React}

export className = (element, classNames) ->
  classes = new Set element.className.split /\s+/g
  unless Array.isArray classNames
    if DEBUG and typeof classNames isnt 'string'
      throw new Error 'classNames second parameter must be a string or [string array]'
    classNames = classNames.split /\s+/g
  for className in classNames
    if /^!/.test className
      classes.delete className.substring 1
    else if /^~/.test className
      className = className.substring 1
      if classes.has className
        classes.delete className
      else
        classes.add className
    else
      classes.add className
  element.className = Array.from(classes).join ' '

export style = (element, styles) ->
  if typeof styles is 'string'
    element.style = styles
  else
    for own style, value of styles
      element.style[style] = value

Object.assign dom, {
  dom
  React: dom
  createElement: dom
  className
  on: (element, types, handler) ->
    if typeof types is 'string'
      types = types.split /\s+/g
    for type in types when type
      if /^on/i.test type
        type = type.substring 2
      element.addEventListener type, handler
    ->
      dom.off element, types, handler
  off: (element, types, handler) ->
    if typeof types is 'string'
      types = types.split /\s+/g
    for type of types
      if /^on/i.test type
        type = type.substring 2
      element.removeEventListener type, handler
  style
}
