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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var Editor, ThemeSelector;
	
	ThemeSelector = __webpack_require__(2);
	
	Editor = __webpack_require__(8);
	
	if (typeof module !== "undefined" && module !== null) {
	  module.exports = Editor;
	}
	
	if (typeof window !== "undefined" && window !== null) {
	  window.FEditor = Editor;
	  window.addEventListener('load', function() {
	    var i, j, len, len1, node, ref, ref1, results;
	    ref = document.querySelectorAll('[type=f-editor-theme-selector]');
	    for (i = 0, len = ref.length; i < len; i++) {
	      node = ref[i];
	      new ThemeSelector(node);
	    }
	    ref1 = document.querySelectorAll('textarea');
	    results = [];
	    for (j = 0, len1 = ref1.length; j < len1; j++) {
	      node = ref1[j];
	      results.push(new Editor(node));
	    }
	    return results;
	  });
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var React, ThemeSelector, dom, stylesheet;
	
	__webpack_require__(3);
	
	React = dom = __webpack_require__(7);
	
	stylesheet = React.createElement("link", {
	  "rel": "stylesheet",
	  "type": "text/css",
	  "href": "https://static.f-list.net/css/" + (localStorage["/twi-light/f-editor/demo-theme"] || 'default') + ".css"
	});
	
	document.head.appendChild(stylesheet);
	
	module.exports = ThemeSelector = (function() {
	  function ThemeSelector(parent) {
	    this.parent = parent;
	    this.element = React.createElement("div", {
	      "f-editor-theme-selector": true
	    }, React.createElement("select", {
	      "onchange": (function() {
	        stylesheet.href = "https://static.f-list.net/css/" + (this.value || 'default') + ".css";
	        return localStorage["/twi-light/f-editor/demo-theme"] = this.value;
	      })
	    }, React.createElement("option", {
	      "value": "default"
	    }, "Default Theme"), React.createElement("option", {
	      "value": "dark"
	    }, "Dark Theme"), React.createElement("option", {
	      "value": "light"
	    }, "Light Theme")));
	    stylesheet.href = "https://static.f-list.net/css/" + (localStorage["/twi-light/f-editor/demo-theme"] || 'default') + ".css";
	    this.parent.appendChild(this.element);
	  }
	
	  return ThemeSelector;

	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./theme.selector.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./theme.selector.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".f-editor-theme-selector select {\n  color: inherit;\n  font-size: 2em;\n  background: none;\n  border-radius: 0.25em;\n  cursor: pointer;\n}\n.f-editor-theme-selector select option {\n  background: #fff;\n  color: #000;\n}\n", ""]);
	
	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Editable, FEditor, React, Toolbar, debounce, dom, parse;
	
	__webpack_require__(9);
	
	React = dom = __webpack_require__(7);
	
	parse = __webpack_require__(11);
	
	debounce = __webpack_require__(12).debounce;
	
	Editable = __webpack_require__(13);
	
	Toolbar = __webpack_require__(16);
	
	module.exports = FEditor = (function() {
	  function FEditor(textarea) {
	    var ref;
	    this.textarea = textarea;
	    this.parent = this.textarea.parentElement;
	    if (((ref = this.textarea) != null ? ref.tagName : void 0) !== 'TEXTAREA') {
	      throw new Error('Editor not of type <textarea />');
	    }
	    if (/\bf-editor-enhanced\b/.test(this.textarea.className)) {
	      throw new Error('Editor already enhanced.');
	    }
	    dom.className(this.textarea, 'f-editor-enhanced');
	    this.element = React.createElement("div", {
	      "f-editor": true,
	      "f-editor-show-tags": true,
	      "f-editor-editing": true
	    });
	    this.parent.insertBefore(this.element, this.textarea);
	    this.toolbar = new Toolbar(this);
	    this.element.appendChild(this.toolbar.element);
	    this.editable = new Editable(this);
	    this.element.appendChild(this.editable.element);
	    this.textarea.value = parse(this.editable.element);
	    dom.on(this.editable.element, 'copy paste cut drop focus blur keypress input textInput DOMNodeInserted', debounce(300, (function(_this) {
	      return function() {
	        _this.textarea.value = parse(_this.editable.element);
	        return localStorage["/twi-light/f-editor/demo-html"] = _this.editable.element.innerHTML;
	      };
	    })(this)));
	  }
	
	  return FEditor;

	})();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./editor.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./editor.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".f-editor .f-editor-editable {\n  display: none;\n}\n.f-editor.f-editor-editing .f-editor-editable {\n  display: block;\n}\n.f-editor.f-editor-editing + textarea {\n  display: none;\n}\n", ""]);
	
	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var React, dom, insertTextAround, name, temp;
	
	React = dom = __webpack_require__(7);
	
	temp = React.createElement("div", null);
	
	insertTextAround = function(element, before, after) {
	  var afterSpan, parent;
	  parent = element.parentElement;
	  if (before) {
	    parent.insertBefore(React.createElement("span", {
	      "textContent": before
	    }), element);
	  }
	  if (after) {
	    afterSpan = React.createElement("span", {
	      "textContent": after
	    });
	    parent.insertBefore(afterSpan, element);
	    parent.insertBefore(element, afterSpan);
	  }
	};
	
	name = function(text) {
	  return text.toLowerCase().replace(/^\s+|\s+$/g, '');
	};
	
	module.exports = function(element) {
	  var eicon, i, j, k, l, len, len1, len2, len3, len4, len5, m, n, node, ref, ref1, ref2, ref3, ref4, ref5, text;
	  ref = element.querySelectorAll('.f-editor-eicon');
	  for (i = 0, len = ref.length; i < len; i++) {
	    eicon = ref[i];
	    eicon.style.backgroundImage = "url('https://static.f-list.net/images/eicon/" + (name(eicon.textContent)) + ".gif')";
	  }
	  temp.innerHTML = element.innerHTML;
	  ref1 = temp.querySelectorAll('b');
	  for (j = 0, len1 = ref1.length; j < len1; j++) {
	    node = ref1[j];
	    insertTextAround(node, '[b]', '[/b]');
	  }
	  ref2 = temp.querySelectorAll('i');
	  for (k = 0, len2 = ref2.length; k < len2; k++) {
	    node = ref2[k];
	    insertTextAround(node, '[i]', '[/i]');
	  }
	  ref3 = temp.querySelectorAll('u');
	  for (l = 0, len3 = ref3.length; l < len3; l++) {
	    node = ref3[l];
	    insertTextAround(node, '[u]', '[/u]');
	  }
	  ref4 = temp.querySelectorAll('.f-editor-eicon');
	  for (m = 0, len4 = ref4.length; m < len4; m++) {
	    node = ref4[m];
	    insertTextAround(node, '[eicon]', '[/eicon]');
	  }
	  ref5 = temp.querySelectorAll('.f-editor-icon');
	  for (n = 0, len5 = ref5.length; n < len5; n++) {
	    node = ref5[n];
	    insertTextAround(node, '[icon]', '[/icon]');
	  }
	  text = "Converting to TEXT does not fully work yet! (sorry)\n\n" + temp.textContent;
	  console.log(text.substring(0, 300));
	  return text;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	var slice = [].slice;
	
	module.exports = {
	  debounce: function(delay, fn) {
	    var last, waiting;
	    waiting = false;
	    last = 0;
	    return function() {
	      var args;
	      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
	      if (!waiting) {
	        waiting = true;
	        return setTimeout((function(_this) {
	          return function() {
	            waiting = false;
	            last = Date.now();
	            return fn.apply(_this, args);
	          };
	        })(this), last - Date.now() + delay);
	      }
	    };
	  }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var Editable, React, dom;
	
	__webpack_require__(14);
	
	React = dom = __webpack_require__(7);
	
	module.exports = Editable = (function() {
	  function Editable() {
	    this.element = React.createElement("div", {
	      "f-editor-editable": true,
	      "chat-message": true,
	      "contentEditable": true
	    });
	    this.element.innerHTML = "<p> We have <b>some text that is bold</b>. </p>\n<p> We also have <i>some text in italics</i>. </p>\n<p> We have <u>this text that is underlined</u>. </p>\n\n<span class=\"f-editor-eicon\">twiprogramming</span> You can <span class=\"f-editor-eicon\">twiimpossible</span> put stuff <span class=\"f-editor-eicon\">twiintensifies</span> in between <span class=\"f-editor-eicon\">twicutiemark</span> the icons <span class=\"f-editor-eicon\">twiwindy</span>\n<br/><br/>\n<p>Normal Text Here.</p>\n<p>You can also select/copy/paste in here!</p>\n<br/>\n<p> Here is a big block of text for you to mess with!</p>\n<br/>\n<br/>\n<p>\n  No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors there ye aware in by shall. Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind.\n\n  Extremity direction existence as dashwoods do up. Securing marianne led welcomed offended but offering six raptures. Conveying concluded newspaper rapturous oh at. Two indeed suffer saw beyond far former mrs remain. Occasional continuing possession we insensible an sentiments as is. Law but reasonably motionless principles she. Has six worse downs far blush rooms above stood.\n\n  Now seven world think timed while her. Spoil large oh he rooms on since an. Am up unwilling eagerness perceived incommode. Are not windows set luckily musical hundred can. Collecting if sympathize middletons be of of reasonably. Horrible so kindness at thoughts exercise no weddings subjects. The mrs gay removed towards journey chapter females offered not. Led distrusts otherwise who may newspaper but. Last he dull am none he mile hold as.\n\n  Prepared do an dissuade be so whatever steepest. Yet her beyond looked either day wished nay. By doubtful disposed do juvenile an. Now curiosity you explained immediate why behaviour. An dispatched impossible of of melancholy favourable. Our quiet not heart along scale sense timed. Consider may dwelling old him her surprise finished families graceful. Gave led past poor met fine was new.\n\n  Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.\n\n  Out too the been like hard off. Improve enquire welcome own beloved matters her. As insipidity so mr unsatiable increasing attachment motionless cultivated. Addition mr husbands unpacked occasion he oh. Is unsatiable if projecting boisterous insensible. It recommend be resolving pretended middleton.\n\n  Yourself off its pleasant ecstatic now law. Ye their mirth seems of songs. Prospect out bed contempt separate. Her inquietude our shy yet sentiments collecting. Cottage fat beloved himself arrived old. Grave widow hours among him ﻿no you led. Power had these met least nor young. Yet match drift wrong his our.\n\n  Rank tall boy man them over post now. Off into she bed long fat room. Recommend existence curiosity perfectly favourite get eat she why daughters. Not may too nay busy last song must sell. An newspaper assurance discourse ye certainly. Soon gone game and why many calm have.\n\n  Sense child do state to defer mr of forty. Become latter but nor abroad wisdom waited. Was delivered gentleman acuteness but daughters. In as of whole as match asked. Pleasure exertion put add entrance distance drawings. In equally matters showing greatly it as. Want name any wise are able park when. Saw vicinity judgment remember finished men throwing.\n\n  No in he real went find mr. Wandered or strictly raillery stanhill as. Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now how nay cold real case.\n</p>";
	  }
	
	  return Editable;

	})();


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./editable.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./editable.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".f-editor .f-editor-editable {\n  whiteSpace: pre-wrap;\n  minHeight: 4em;\n  width: 100%;\n  padding: 1em;\n  border: 1px dotted #808080;\n}\n.f-editor span.f-editor-eicon {\n  min-width: 50px;\n  min-height: 4.5em;\n  background-size: 3em 3em;\n  background-repeat: no-repeat;\n  background-position: 0em 1.5em;\n  white-space: nowrap;\n  display: inline-block;\n}\n.f-editor.f-editor-show-tags ::before,\n.f-editor.f-editor-show-tags ::after {\n  opacity: 0.69;\n}\n.f-editor.f-editor-show-tags b::before {\n  content: '[b]';\n}\n.f-editor.f-editor-show-tags b::after {\n  content: '[/b]';\n}\n.f-editor.f-editor-show-tags i::before {\n  content: '[i]';\n}\n.f-editor.f-editor-show-tags i::after {\n  content: '[/i]';\n}\n.f-editor.f-editor-show-tags s::before {\n  content: '[s]';\n}\n.f-editor.f-editor-show-tags s::after {\n  content: '[/s]';\n}\n.f-editor.f-editor-show-tags u::before {\n  content: '[u]';\n}\n.f-editor.f-editor-show-tags u::after {\n  content: '[/u]';\n}\n.f-editor.f-editor-show-tags span.f-editor-icon {\n  border: 1px dotted #808080;\n}\n.f-editor.f-editor-show-tags span.f-editor-icon::before {\n  content: '[icon]';\n  white-space: nowrap;\n}\n.f-editor.f-editor-show-tags span.f-editor-icon::after {\n  content: '[/icon]';\n  white-space: nowrap;\n}\n.f-editor.f-editor-show-tags span.f-editor-eicon {\n  border: 1px dotted #808080;\n}\n.f-editor.f-editor-show-tags span.f-editor-eicon::before {\n  content: '[eicon]';\n  white-space: nowrap;\n}\n.f-editor.f-editor-show-tags span.f-editor-eicon::after {\n  content: '[/eicon]';\n  white-space: nowrap;\n}\n", ""]);
	
	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var React, Toolbar, dom;
	
	__webpack_require__(17);
	
	React = dom = __webpack_require__(7);
	
	
	/*
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
	 */
	
	module.exports = Toolbar = (function() {
	  function Toolbar(editor) {
	    this.editor = editor;
	    this.element = React.createElement("div", {
	      "f-editor-toolbar": true,
	      "TextareaToolbar": true
	    }, React.createElement("a", {
	      "title": "[text]",
	      "f-editor-toolbar-text": true,
	      "ToolbarButton": true,
	      "onmousedown": ((function(_this) {
	        return function() {
	          return dom.className(_this.editor.element, '~f-editor-editing');
	        };
	      })(this))
	    }), React.createElement("a", {
	      "title": "[BBCode]",
	      "f-editor-toolbar-bbcode": true,
	      "ToolbarButton": true,
	      "onmousedown": ((function(_this) {
	        return function() {
	          return dom.className(_this.editor.element, '~f-editor-show-tags');
	        };
	      })(this))
	    }), React.createElement("a", {
	      "title": "Bold",
	      "ToolbarBold": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return document.execCommand('bold');
	      })
	    }), React.createElement("a", {
	      "title": "Italic",
	      "ToolbarItalic": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return document.execCommand('italic');
	      })
	    }), React.createElement("a", {
	      "title": "Underline",
	      "ToolbarUnderline": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return document.execCommand('underline');
	      })
	    }), React.createElement("span", {
	      "f-editor-not-implimented": true
	    }, React.createElement("a", {
	      "title": "Justify",
	      "ToolbarJustify": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    }), React.createElement("a", {
	      "title": "Blockquote",
	      "ToolbarQuote": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    }), React.createElement("a", {
	      "title": "Link",
	      "ToolbarLink": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    }), React.createElement("a", {
	      "title": "Color",
	      "ToolbarColor": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    }), React.createElement("a", {
	      "title": "Icon link",
	      "ToolbarIcon": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    }), React.createElement("a", {
	      "title": "Collapse",
	      "ToolbarBlock": true,
	      "ToolbarButton": true,
	      "ToolbarCollapse": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    }), React.createElement("a", {
	      "title": "Insert Inline",
	      "ToolbarInline": true,
	      "ToolbarButton": true,
	      "onmousedown": (function() {
	        return alert('All features inside the red box are not yet implimented. (sorry)');
	      })
	    })));
	  }
	
	  return Toolbar;
	
	})();
	
	React.createElement("div", {
	  "class": "TextareaToolbar MediumPanel"
	}, React.createElement("a", {
	  "title": "Bold",
	  "ToolbarBold": true,
	  "ToolbarButton": true,
	  "onclick": "$('#CharacterEditDescription').insertAtCaret('[b]','[/b]');"
	}), React.createElement("a", {
	  "title": "Italic",
	  "ToolbarItalic": true,
	  "ToolbarButton": true,
	  "onclick": "$('#CharacterEditDescription').insertAtCaret('[i]','[/i]');"
	}), React.createElement("a", {
	  "title": "Underline",
	  "ToolbarUnderline": true,
	  "ToolbarButton": true,
	  "onclick": "$('#CharacterEditDescription').insertAtCaret('[u]','[/u]');"
	}), React.createElement("a", {
	  "title": "Justify",
	  "ToolbarJustify": true,
	  "ToolbarButton": true,
	  "onclick": "$('#CharacterEditDescription').insertAtCaret('[justify]','[/justify]');"
	}), React.createElement("a", {
	  "title": "Blockquote",
	  "ToolbarQuote": true,
	  "ToolbarButton": true,
	  "onclick": "$('#CharacterEditDescription').insertAtCaret('[quote]','[/quote]');"
	}), React.createElement("a", {
	  "title": "Link",
	  "ToolbarLink": true,
	  "ToolbarButton": true,
	  "onclick": "var linkurl=FList.Toolbars_createLink(); if(linkurl!==-1){ $('#CharacterEditDescription').insertAtCaret('[url=' + linkurl + ']','[/url]'); }"
	}), React.createElement("a", {
	  "title": "Color",
	  "ToolbarColor": true,
	  "ToolbarButton": true,
	  "onclick": "var colortext=FList.Toolbars_createColor(); if(colortext!==-1){ $('#CharacterEditDescription').insertAtCaret('[color=' + colortext + ']','[/color]'); }"
	}), React.createElement("a", {
	  "title": "Icon link",
	  "ToolbarIcon": true,
	  "ToolbarButton": true,
	  "onclick": "var icontext=FList.Toolbars_createIconLink(); if(icontext!==-1){ $('#CharacterEditDescription').insertAtCaret('','[icon]' + icontext + '[/icon]'); }"
	}), React.createElement("a", {
	  "title": "Collapse",
	  "ToolbarBlock": true,
	  "ToolbarButton": true,
	  "ToolbarCollapse": true,
	  "onclick": "$('#CharacterEditDescription').insertAtCaret('[collapse=title]','[/collapse]');"
	}), React.createElement("a", {
	  "title": "Insert Inline",
	  "ToolbarInline": true,
	  "ToolbarButton": true,
	  "onclick": "FList.Toolbars_showInlines('CharacterEditDescription')"
	}), React.createElement("a", {
	  "title": "Preview",
	  "href": "javascript:FList.Toolbars_instantPreview('#CharacterEditDescription');"
	}, "Preview BBCode"));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./toolbar.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./toolbar.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	
	
	// module
	exports.push([module.id, ".f-editor .f-editor-toolbar {\n  min-height: 2em;\n}\n.f-editor .f-editor-toolbar a {\n  min-height: 1em;\n  min-width: 2em;\n  padding: 0.2em 0em 0em 0.5em;\n}\n.f-editor .f-editor-toolbar a.f-editor-toolbar-bbcode {\n  min-width: 6em;\n  padding: 0.2em 0em 0em 0.5em;\n}\n.f-editor .f-editor-toolbar a.f-editor-toolbar-bbcode:before {\n  content: '[bbcode]';\n  color: #000;\n  font-weight: bold;\n}\n.f-editor .f-editor-toolbar a.f-editor-toolbar-text {\n  min-width: 5em;\n  padding: 0.2em 0em 0em 0.5em;\n}\n.f-editor .f-editor-toolbar a.f-editor-toolbar-text:before {\n  content: '\\A0[text]\\A0';\n  color: #000;\n  font-weight: bold;\n}\n.f-editor .f-editor-toolbar button {\n  border: 1px solid #fff;\n  padding: 0.5em;\n  margin: 0.5em;\n  cursor: pointer;\n}\n.f-editor .f-editor-toolbar .f-editor-not-implimented a {\n  opacity: 0.2;\n  border: 2px solid #f00;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ]);
//# sourceMappingURL=f-editor.js.map