/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ToDoController.js":
/*!*******************************!*\
  !*** ./src/ToDoController.js ***!
  \*******************************/
/*! exports provided: ToDoController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToDoController\", function() { return ToDoController; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ToDoController = function ToDoController(model, view) {\n  var _this = this;\n\n  _classCallCheck(this, ToDoController);\n\n  _defineProperty(this, \"onTodoLIstChanged\", function (todos) {\n    _this.view.displayTodos(todos);\n  });\n\n  _defineProperty(this, \"handleAddTodo\", function (todoText) {\n    _this.model.addTodo(todoText);\n  });\n\n  _defineProperty(this, \"handleEditTodo\", function (id, todoText) {\n    _this.model.editTodo(id, todoText);\n  });\n\n  _defineProperty(this, \"handleDeleteTodo\", function (id) {\n    _this.model.deleteTodo(id);\n  });\n\n  _defineProperty(this, \"handleToggleTodo\", function (id) {\n    _this.model.toggleTodo(id);\n  });\n\n  this.model = model;\n  this.view = view;\n  this.onTodoLIstChanged(this.model.todos);\n  this.view.bindAddTodo(this.handleAddTodo);\n  this.view.bindDeleteTodo(this.handleDeleteTodo);\n  this.view.bindToggleTodo(this.handleToggleTodo);\n  this.view.bindEditTodo(this.handleEditTodo);\n  this.model.bindTodoListChanged(this.onTodoLIstChanged);\n};\n\n//# sourceURL=webpack:///./src/ToDoController.js?");

/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/*! exports provided: TodoList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodoList\", function() { return TodoList; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar TodoList =\n/*#__PURE__*/\nfunction () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    this.todos = JSON.parse(localStorage.getItem('todos')) || [];\n  }\n\n  _createClass(TodoList, [{\n    key: \"_commit\",\n    value: function _commit(todos) {\n      this.onTodoListChanged(todos);\n      localStorage.setItem('todos', JSON.stringify(todos));\n    }\n  }, {\n    key: \"addTodo\",\n    value: function addTodo(todoText) {\n      var todo = {\n        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,\n        text: todoText,\n        complete: false\n      };\n      this.todos.push(todo);\n\n      this._commit(this.todos);\n\n      this.onTodoListChanged(this.todos);\n    }\n  }, {\n    key: \"editTodo\",\n    value: function editTodo(id, newText) {\n      var todoToEdit = this.todos[id - 1];\n      todoToEdit.text = newText;\n\n      this._commit(this.todos);\n\n      this.onTodoListChanged(this.todos);\n    }\n  }, {\n    key: \"deleteTodo\",\n    value: function deleteTodo(id) {\n      this.todos = this.todos.filter(function (todo) {\n        return todo.id !== id;\n      });\n\n      this._commit(this.todos);\n\n      this.onTodoListChanged(this.todos);\n    }\n  }, {\n    key: \"toggleTodo\",\n    value: function toggleTodo(id) {\n      var toDoElement = this.todos[id - 1];\n      if (toDoElement.complete) toDoElement.complete = false;else toDoElement.complete = true;\n\n      this._commit(this.todos);\n\n      this.onTodoListChanged(this.todos);\n    }\n  }, {\n    key: \"bindTodoListChanged\",\n    value: function bindTodoListChanged(callback) {\n      this.onTodoListChanged = callback;\n    }\n  }]);\n\n  return TodoList;\n}();\n\n//# sourceURL=webpack:///./src/TodoList.js?");

/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar _initLocalListeners = new WeakMap();\n\nvar _temporaryTodoText = new WeakMap();\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View() {\n    var _this = this;\n\n    _classCallCheck(this, View);\n\n    this.app = this.getElement('body'); //the title of the app\n\n    this.title = this.createElement('h1');\n    this.title.textContent = 'To-dos';\n    /**\r\n     * the form, with a[type='text']\r\n     * input, and a submit button\r\n     */\n\n    this.createFormSection(); //visual representation of the todo list\n\n    this.todoList = this.createElement('ul', 'todo-list'); //append the input and submit button to the form\n\n    this.app.append(this.title, this.form, this.todoList);\n\n    _temporaryTodoText.set(this);\n\n    Object.defineProperty(this, 'temporaryTodoText', {\n      get: _temporaryTodoText.get(this)\n    });\n\n    _initLocalListeners.set(this, function () {\n      _this.todoList.addEventListener('input', function (event) {\n        if (event.target.className === 'editable') {\n          _this.temporaryTodoText = event.target.innerText;\n        }\n      });\n    });\n  }\n\n  _createClass(View, [{\n    key: \"createFormSection\",\n    value: function createFormSection() {\n      this.form = this.createElement('form');\n      this.input = this.createElement('input');\n      this.input.type = 'text';\n      this.input.placeholder = 'Add todo';\n      this.input.name = 'todo';\n      this.submitButton = this.createElement('button');\n      this.submitButton.textContent = 'Add';\n      this.form.append(this.input, this.submitButton);\n    }\n  }, {\n    key: \"createElement\",\n    value: function createElement(tag, className) {\n      var element = document.createElement(tag);\n      if (className) element.classList.add(className);\n      return element;\n    }\n  }, {\n    key: \"getElement\",\n    value: function getElement(selector) {\n      var element = document.querySelector(selector);\n      return element;\n    }\n  }, {\n    key: \"_resetInput\",\n    value: function _resetInput() {\n      this.input.value = '';\n    }\n  }, {\n    key: \"displayTodos\",\n    value: function displayTodos(todos) {\n      var _this2 = this;\n\n      while (this.todoList.firstChild) {\n        this.todoList.removeChild(this.todoList.firstChild);\n      } //show default when there are no tasks\n\n\n      if (todos.length === 0) {\n        var p = this.createElement('p');\n        p.textContent = 'Nothing to do! Add a task?';\n        this.todoList.append(p);\n      } else {\n        todos.forEach(function (todo) {\n          var li = _this2.createElement('li');\n\n          li.id = todo.id; //each todo has a check box toggle\n\n          var checkbox = _this2.createElement('input');\n\n          checkbox.type = 'checkbox';\n          checkbox.checked = todo.complete; //the todo item text is in a contenteditable span\n\n          var span = _this2.createElement('span', 'editable');\n\n          span.contentEditable = true; //if the todo is complete, it will have a strikethrough\n\n          if (todo.complete) {\n            var strike = _this2.createElement('s');\n\n            strike.textContent = todo.text;\n            span.append(strike);\n          } else {\n            span.textContent = todo.text;\n          } //the todos will also have a delete button\n\n\n          var deleteButton = _this2.createElement('button', 'delete');\n\n          deleteButton.textContent = 'Delete';\n          li.append(checkbox, span, deleteButton); //append nodes to the todo list\n\n          _this2.todoList.append(li);\n        });\n      }\n    }\n  }, {\n    key: \"bindAddTodo\",\n    value: function bindAddTodo(handler) {\n      var _this3 = this;\n\n      this.form.addEventListener('submit', function (event) {\n        event.preventDefault();\n\n        if (_this3._todoText) {\n          handler(_this3._todoText);\n\n          _this3._resetInput();\n        }\n      });\n    }\n  }, {\n    key: \"bindDeleteTodo\",\n    value: function bindDeleteTodo(handler) {\n      this.todoList.addEventListener('click', function (event) {\n        if (event.target.className === 'delete') {\n          var id = parseInt(event.target.parentElement.id);\n          handler(id);\n        }\n      });\n    }\n  }, {\n    key: \"bindToggleTodo\",\n    value: function bindToggleTodo(handler) {\n      this.todoList.addEventListener('change', function (event) {\n        if (event.target.type === 'checkbox') {\n          var id = parseInt(event.target.parentElement.id);\n          handler(id);\n        }\n      });\n    }\n  }, {\n    key: \"bindEditTodo\",\n    value: function bindEditTodo(handler) {\n      var _this4 = this;\n\n      this.todoList.addEventListener('focusout', function (event) {\n        if (_this4.temporaryTodoText) {\n          var id = parseInt(event.target.parentElement.id);\n          handler(id, _this4._temporaryTodoText);\n          _this4.temporaryTodoText = '';\n        }\n      });\n    }\n  }, {\n    key: \"initLocalListeners\",\n    get: function get() {\n      return _initLocalListeners.get(this);\n    }\n  }, {\n    key: \"temporaryTodoText\",\n    get: function get() {\n      return _temporaryTodoText.get(this);\n    }\n  }, {\n    key: \"_todoText\",\n    get: function get() {\n      return this.input.value;\n    }\n  }]);\n\n  return View;\n}();\n\n//# sourceURL=webpack:///./src/View.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ \"./src/TodoList.js\");\n/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View */ \"./src/View.js\");\n/* harmony import */ var _ToDoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToDoController */ \"./src/ToDoController.js\");\n\n\n\nvar list = new _TodoList__WEBPACK_IMPORTED_MODULE_0__[\"TodoList\"]();\nvar view = new _View__WEBPACK_IMPORTED_MODULE_1__[\"View\"]();\nvar controller = new _ToDoController__WEBPACK_IMPORTED_MODULE_2__[\"ToDoController\"](list, view);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });