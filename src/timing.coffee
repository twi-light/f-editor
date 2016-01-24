module.exports =
  debounce: (delay, fn) ->
    waiting = no
    last = 0
    (args...) ->
      unless waiting
        waiting = yes
        setTimeout =>
          waiting = no
          last = Date.now()
          fn.apply @, args
        , last - Date.now() + delay
