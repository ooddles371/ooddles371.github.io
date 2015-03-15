(function(e){if("function"==typeof bootstrap)bootstrap("flippant",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeFlippant=e}else"undefined"!=typeof window?window.flippant=e():global.flippant=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
exports.flip = flip

function flip(flipper, content, type, class_name, timeout) {
  var position
    , back
    , style_func
  timeout = timeout || 400
  type = type || "card"

  if (type === "modal") {
    class_name = class_name || "flippant-modal-dark"
    position = "fixed"
    style_func = null_styles
  }

  if (type === "card") {
    class_name = class_name || "flippant-modal-light"
    position = "absolute"
    style_func = card_styles
  }

  back = document.createElement('div')
  document.body.appendChild(back)
  set_styles(back, flipper, position)
  back.innerHTML = content

  flipper.classList.add('flippant')
  back.classList.add('flippant-back')
  back.classList.add(class_name)
  if (position == "absolute") {
    style_func(back)
  } else {
    window.setTimeout(function () {
      style_func(back)
    }, 0)
  }
  window.setTimeout(function () {
    back.classList.add('flipper')
    back.classList.add('flipped')
    flipper.classList.add('flipped')
  }, 0)

  back.addEventListener('close', close)
  back.close = close

  function close() {
    set_styles(back, flipper, position)
    back.classList.remove('flipped')
    back.classList.remove('flipped')
    flipper.classList.remove('flipped')
    window.setTimeout(function () {
      back.classList.remove(class_name)
      document.body.removeChild(back)
    }, timeout)
  }

  return back
}

function set_styles(back, front, position) {
  back.style.position = position
  back.style.top = front.offsetTop + "px"
  back.style.left = front.offsetLeft + "px"
  back.style['min-height'] = front.offsetHeight + "px"
  back.style.width = front.offsetWidth + "px"
  back.style["z-index"] = 9999
}

function null_styles(back) {
  back.style.top = null
  back.style.left = null
  back.style.height = null
  back.style.width = null
}

function card_styles(back) {
  back.style.height = 'auto'
}
},{}]},{},[1])(1)
});
;

;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
// index.js

var flip = flippant.flip
var event = require('./event')

document.addEventListener('click', function(e) {
  if (e.target.classList.contains('btnflip')) {
    e.preventDefault()
    var flipper = e.target.parentNode.parentNode
    var back
    var input = '<p><input type="text" value="' + flipper.querySelector('h2').innerText + '"></p>'
    var textarea = '<textarea style="width:100%; max-width:32em; height:12em;">' + flipper.querySelector('p').innerText + '</textarea><br><button class="btn">Update</button>'

    if (e.target.classList.contains('card')) {
      back = flip(flipper, "<p>It's a card!</p>" + input + textarea)
    } else {
      back = flip(flipper, "<p>It's a modal!</p>" + input + textarea, 'modal')
    }

    back.addEventListener('click', function(e) {
      if (e.target.classList.contains('btn')) {
        flipper.querySelector('h2').innerText = back.querySelector('input').value
        flipper.querySelector('p').innerText = back.querySelector('textarea').value
        event.trigger(back, 'close')
      }
    })

  }
})


},{"./event":2}],2:[function(require,module,exports){
exports.trigger = function(elm, event_name, data) {
  var evt = new CustomEvent(event_name, data)
  elm.dispatchEvent(evt)
}
},{}]},{},[1])
;