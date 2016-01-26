/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Message, id;
	
	id = "content" + (+Date.now());
	
	Message = __webpack_require__(1);
	
	window.addEventListener('load', function() {
	  chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
	    return new Message(data, sender);
	  });
	  return new Message({
	    loaded: true
	  }, {});
	});
	
	setInterval(function() {
	  console.log('ping');
	  return chrome.runtime.sendMessage({
	    id: id,
	    ping: true
	  }, function(response) {
	    return console.log(response);
	  });
	}, 1000);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Message, React, dom;
	
	__webpack_require__(2);
	
	React = dom = __webpack_require__(6);
	
	module.exports = Message = (function() {
	  function Message(data, sender) {
	    this.element = React.createElement("p", {
	      "message": true
	    }, JSON.stringify([data, sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension']));
	    document.body.insertBefore(this.element, document.body.firstChild);
	  }
	
	  return Message;

	})();


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	var dom,
	  slice = [].slice,
	  hasProp = {}.hasOwnProperty;
	
	dom = module.exports = function() {
	  var attributeKey, attributeValue, child, children, element, i, len, options, ref;
	  element = arguments[0], options = arguments[1], children = 3 <= arguments.length ? slice.call(arguments, 2) : [];
	  if (typeof element === 'string') {
	    element = document.createElement(element);
	  }
	  ref = options || {};
	  for (attributeKey in ref) {
	    if (!hasProp.call(ref, attributeKey)) continue;
	    attributeValue = ref[attributeKey];
	    if (/^on/.test(attributeKey)) {
	      dom.on(element, attributeKey, attributeValue);
	    } else if (attributeKey === 'style') {
	      dom.style(element, attributeValue);
	    } else if (attributeKey === 'className') {
	      dom.className(element, attributeValue);
	    } else {
	      if (attributeValue === true) {
	        dom.className(element, attributeKey);
	      }
	      element[attributeKey] = attributeValue;
	    }
	  }
	  if (children.length) {
	    for (i = 0, len = children.length; i < len; i++) {
	      child = children[i];
	      element.appendChild((typeof child === 'string' ? document.createTextNode(child) : child));
	    }
	  }
	  return element;
	};
	
	Object.assign(dom, {
	  dom: dom,
	  createElement: dom,
	  className: function(element, classNames) {
	    var className, classes, i, len;
	    classes = new Set(element.className.split(/\s+/g));
	    if (!Array.isArray(classNames)) {
	      if (typeof classNames !== 'string') {
	        throw new Error('classNames second parameter must be a string or [string array]');
	      }
	      classNames = classNames.split(/\s+/g);
	    }
	    for (i = 0, len = classNames.length; i < len; i++) {
	      className = classNames[i];
	      if (/^!/.test(className)) {
	        classes["delete"](className.substring(1));
	      } else if (/^~/.test(className)) {
	        className = className.substring(1);
	        if (classes.has(className)) {
	          classes["delete"](className);
	        } else {
	          classes.add(className);
	        }
	      } else {
	        classes.add(className);
	      }
	    }
	    return element.className = Array.from(classes).join(' ');
	  },
	  on: function(element, types, handler) {
	    var i, len, type;
	    if (typeof types === 'string') {
	      types = types.split(/\s+/g);
	    }
	    for (i = 0, len = types.length; i < len; i++) {
	      type = types[i];
	      if (!(type)) {
	        continue;
	      }
	      if (/^on/i.test(type)) {
	        type = type.substring(2);
	      }
	      element.addEventListener(type, handler);
	    }
	    return function() {
	      return dom.off(element, types, handler);
	    };
	  },
	  off: function(element, types, handler) {
	    var results, type;
	    if (typeof types === 'string') {
	      types = types.split(/\s+/g);
	    }
	    results = [];
	    for (type in types) {
	      if (/^on/i.test(type)) {
	        type = type.substring(2);
	      }
	      results.push(element.removeEventListener(type, handler));
	    }
	    return results;
	  },
	  style: function(element, styles) {
	    var results, style, value;
	    if (typeof styles === 'string') {
	      return element.style = styles;
	    } else {
	      results = [];
	      for (style in styles) {
	        if (!hasProp.call(styles, style)) continue;
	        value = styles[style];
	        results.push(element.style[style] = value);
	      }
	      return results;
	    }
	  }
	});


/***/ }
/******/ ]);
//# sourceMappingURL=content-script.js.map