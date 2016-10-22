import './message.styl'
import {React, dom} from '../../../src/dom.coffee'

module.exports =
  class Message
    constructor: (data, sender) ->
      @element =
        <p message>
          {
            JSON.stringify [
              data
              if sender.tab
                'from a content script:' + sender.tab.url
              else
                'from the extension'
            ]
          }
        </p>
      document.body.insertBefore @element, document.body.firstChild
