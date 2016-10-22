
export debounce = (delay, fn) ->
  waiting = no
  last = 0
  (args...) ->
    unless waiting
      waiting = yes
      bounce = last - Date.now() + delay
      setTimeout =>
        waiting = no
        last = Date.now()
        fn.apply @, args
      , if bounce < 0 then 0 else bounce

export default {
  debounce
}
