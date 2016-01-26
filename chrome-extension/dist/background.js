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
/***/ function(module, exports) {

	chrome.tabs.query({
	  url: 'https://www.f-list.net/*'
	}, function(tabs) {
	  var i, len, results, tab;
	  results = [];
	  for (i = 0, len = tabs.length; i < len; i++) {
	    tab = tabs[i];
	    results.push(chrome.tabs.executeScript(tab.id, {
	      file: 'dist/content_script.js'
	    }, function() {}));
	  }
	  return results;
	});
	
	chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
	  return sendResponse({
	    pong: true
	  });
	});


/***/ }
/******/ ]);
//# sourceMappingURL=background.js.map