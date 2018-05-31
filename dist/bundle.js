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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.ts":
/*!**************************!*\
  !*** ./example/index.ts ***!
  \**************************/
/*! exports provided: demo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return demo; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./example/user.ts");
/* harmony import */ var _src_decorators_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/decorators/entity */ "./src/decorators/entity.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var demo = /** @class */ (function () {
    function demo() {
        var _user = new _user__WEBPACK_IMPORTED_MODULE_0__["user"]();
        _user.id = "abc";
        //  this.query();
        this.insert().then();
    }
    demo.prototype.insert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _user, insertResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _user = new _user__WEBPACK_IMPORTED_MODULE_0__["user"]();
                        _user.id = "iiiiiddddd";
                        _user.name = "xixixixixixi";
                        return [4 /*yield*/, Object(_src_decorators_entity__WEBPACK_IMPORTED_MODULE_1__["entity"])(_user__WEBPACK_IMPORTED_MODULE_0__["user"]).insert(_user)];
                    case 1:
                        insertResult = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    demo.prototype.update = function () {
    };
    demo.prototype.delete = function () {
    };
    demo.prototype.query = function () {
        var result1 = Object(_src_decorators_entity__WEBPACK_IMPORTED_MODULE_1__["entity"])(_user__WEBPACK_IMPORTED_MODULE_0__["user"]).first(function (m) { return m.id == "guid"; });
        // let result1 = entity<user>.first(m => m.id == "guid").result();
        // let result2 = entity<user>.where(m => m.user_name.indexOf("小明") >= 0).toArray();
    };
    return demo;
}());

new demo();


/***/ }),

/***/ "./example/user.ts":
/*!*************************!*\
  !*** ./example/user.ts ***!
  \*************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var _src_decorators_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/decorators/table */ "./src/decorators/table.ts");
/* harmony import */ var _src_model_ColumnType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/model/ColumnType */ "./src/model/ColumnType.ts");
/* harmony import */ var _src_decorators_column__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/decorators/column */ "./src/decorators/column.ts");
/* harmony import */ var _src_decorators_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/decorators/metadata */ "./src/decorators/metadata.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Object(_src_decorators_column__WEBPACK_IMPORTED_MODULE_2__["column"])(_src_model_ColumnType__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].STRING),
        __metadata("design:type", String)
    ], user.prototype, "id", void 0);
    __decorate([
        Object(_src_decorators_column__WEBPACK_IMPORTED_MODULE_2__["column"])(_src_model_ColumnType__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].STRING),
        __metadata("design:type", String)
    ], user.prototype, "name", void 0);
    user = __decorate([
        Object(_src_decorators_table__WEBPACK_IMPORTED_MODULE_0__["table"])("student_db")
    ], user);
    return user;
}(_src_decorators_metadata__WEBPACK_IMPORTED_MODULE_3__["metadata"]));



/***/ }),

/***/ "./src/decorators/column.ts":
/*!**********************************!*\
  !*** ./src/decorators/column.ts ***!
  \**********************************/
/*! exports provided: column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "column", function() { return column; });
/**
 * 用于定义列的装饰器
 */
function column(type) {
    return function (target, name) {
        var _column = {
            name: name,
            type: type
        };
        var _target = target.constructor;
        if (!_target["__columns__"]) {
            _target["__columns__"] = new Array();
        }
        _target["__columns__"].push(_column);
    };
}


/***/ }),

/***/ "./src/decorators/entity.ts":
/*!**********************************!*\
  !*** ./src/decorators/entity.ts ***!
  \**********************************/
/*! exports provided: Entity, entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entity", function() { return entity; });
/* harmony import */ var _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ColumnType */ "./src/model/ColumnType.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Entity = /** @class */ (function () {
    function Entity(objClass) {
        this.objClass = objClass;
        this.init().then();
    }
    Entity.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tableName = this.objClass["__table_name__"];
                        this.dbName = this.objClass["__db_name__"];
                        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 100);
                        return [4 /*yield*/, this.createTable(this.objClass["__columns__"])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Entity.prototype.first = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.queryAll().then();
                return [2 /*return*/];
            });
        });
    };
    /**
     * 查询表所有数据
     */
    Entity.prototype.queryAll = function () {
        var that = this;
        var sql = "select * from " + this.tableName;
        var promise = new Promise(function (resolve) {
            that.db.transaction(function (t) {
                t.executeSql(sql, [], function (b, result) {
                    resolve();
                }, that.fail);
            });
        });
        return promise;
    };
    /**
     * 创建表
     */
    Entity.prototype.createTable = function (columns) {
        var that = this;
        var promise = new Promise(function (resolve) {
            that.db.transaction(function (t) {
                t.executeSql(that.gCreateTableSql(columns), [], function (t, result) {
                    resolve(result.insertId == 1);
                }, function (t, info) {
                    that.fail(t, info);
                    resolve(false);
                });
            });
        });
        return promise;
    };
    Entity.prototype.insert = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, that, promise;
            return __generator(this, function (_a) {
                console.log(value);
                sql = this.gInsertSql(this.tableName, this.objClass["__columns__"]);
                that = this;
                promise = new Promise(function (resolve) {
                    that.db.transaction(function (t) {
                        t.executeSql(sql, [], function (t, result) {
                            resolve(result.insertId == 1);
                        }, function (t, info) {
                            that.fail(t, info);
                            resolve(false);
                        });
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    Entity.prototype.gInsertSql = function (tableName, data) {
        var that = this;
        var sql = "insert into " + tableName + " ";
        var cols = [];
        var qs = [];
        if (data instanceof Array && data.length > 0) {
            for (var index = 0; index < data.length; index++) {
                var col = data[index];
                cols.push(col.name);
                qs.push('?');
            }
            sql += " (" + cols.join(',') + ") Values (" + qs.join(',') + ")";
            return sql;
        }
        else {
            return null;
        }
    };
    Entity.prototype.gCreateTableSql = function (colums) {
        var sql = "CREATE TABLE IF NOT EXISTS " + this.tableName;
        var colSql = [];
        if (colums instanceof Array && colums.length > 0) {
            for (var i in colums) {
                var _type = void 0;
                switch (colums[i].type) {
                    case _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING:
                        _type = "TEXT";
                        break;
                    case _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].NUMBER:
                        _type = "NUMERIC";
                        break;
                    case _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].BOOLEAN:
                        _type = "INTEGER";
                        break;
                    case _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].ARRAY:
                        _type = "TEXT";
                        break;
                    case _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].ANY:
                        _type = "TEXT";
                        break;
                    default:
                        break;
                }
                colSql.push(colums[i].name + ' ' + _type);
            }
        }
        sql = sql + " (" + colSql.join(', ') + ")";
        return sql;
    };
    Entity.prototype.fail = function (t, info) {
        console.error(info.message);
    };
    return Entity;
}());

function entity(objClass) {
    var _entity = new Entity(objClass);
    return _entity;
}


/***/ }),

/***/ "./src/decorators/metadata.ts":
/*!************************************!*\
  !*** ./src/decorators/metadata.ts ***!
  \************************************/
/*! exports provided: metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return metadata; });
var metadata = /** @class */ (function () {
    function metadata() {
        this.tableName = this["__table_name__"];
        this.dbName = this["__db_name__"];
        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 100);
    }
    metadata.prototype.update = function () { };
    metadata.prototype.delete = function () { };
    metadata.prototype.query = function () { };
    return metadata;
}());



/***/ }),

/***/ "./src/decorators/table.ts":
/*!*********************************!*\
  !*** ./src/decorators/table.ts ***!
  \*********************************/
/*! exports provided: table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "table", function() { return table; });
/**
 * 用于定义表的装饰器
 */
function table(dbName) {
    return function (target) {
        target["__db_name__"] = dbName;
        target["__table_name__"] = target.name;
    };
}


/***/ }),

/***/ "./src/model/ColumnType.ts":
/*!*********************************!*\
  !*** ./src/model/ColumnType.ts ***!
  \*********************************/
/*! exports provided: ColumnType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnType", function() { return ColumnType; });
var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["BOOLEAN"] = 1] = "BOOLEAN";
    ColumnType[ColumnType["NUMBER"] = 2] = "NUMBER";
    ColumnType[ColumnType["STRING"] = 3] = "STRING";
    ColumnType[ColumnType["ARRAY"] = 4] = "ARRAY";
    ColumnType[ColumnType["DATE"] = 5] = "DATE";
    ColumnType[ColumnType["ANY"] = 6] = "ANY";
})(ColumnType || (ColumnType = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvY29sdW1uLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL2VudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy9tZXRhZGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvQ29sdW1uVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEY4QjtBQUNvQjtBQUVsRDtJQUNJO1FBQ0ks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QUFDO0lBQ1osd0JBQUssR0FBTCxjQUFVLENBQUM7SUFFZixlQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQUE7O0dBRUc7QUFDRyxlQUFnQixNQUFjO0lBQ2hDLE9BQU8sVUFBVSxNQUFNO1FBQ25CLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDL0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNSRCxJQUFZLFVBT1g7QUFQRCxXQUFZLFVBQVU7SUFDbEIsaURBQVc7SUFDWCwrQ0FBVTtJQUNWLCtDQUFVO0lBQ1YsNkNBQVM7SUFDVCwyQ0FBUTtJQUNSLHlDQUFPO0FBQ1gsQ0FBQyxFQVBXLFVBQVUsS0FBVixVQUFVLFFBT3JCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IHVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IGVudGl0eSB9IGZyb20gXCIuLi9zcmMvZGVjb3JhdG9ycy9lbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBkZW1vIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGxldCBfdXNlciA9IG5ldyB1c2VyKCk7XHJcbiAgICAgICAgX3VzZXIuaWQgPSBcImFiY1wiO1xyXG4gICAgICAgIC8vICB0aGlzLnF1ZXJ5KCk7XHJcbiAgICAgICAgdGhpcy5pbnNlcnQoKS50aGVuKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbnNlcnQoKSB7XHJcbiAgICAgICAgbGV0IF91c2VyID0gbmV3IHVzZXIoKTtcclxuICAgICAgICBfdXNlci5pZCA9IFwiaWlpaWlkZGRkZFwiO1xyXG4gICAgICAgIF91c2VyLm5hbWUgPSBcInhpeGl4aXhpeGl4aVwiO1xyXG4gICAgICAgIGxldCBpbnNlcnRSZXN1bHQgPSBhd2FpdCBlbnRpdHkodXNlcikuaW5zZXJ0KF91c2VyKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBkZWxldGUoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgcXVlcnkoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBlbnRpdHkodXNlcikuZmlyc3QobSA9PiBtLmlkID09IFwiZ3VpZFwiKTtcclxuICAgICAgICAvLyBsZXQgcmVzdWx0MSA9IGVudGl0eTx1c2VyPi5maXJzdChtID0+IG0uaWQgPT0gXCJndWlkXCIpLnJlc3VsdCgpO1xyXG4gICAgICAgIC8vIGxldCByZXN1bHQyID0gZW50aXR5PHVzZXI+LndoZXJlKG0gPT4gbS51c2VyX25hbWUuaW5kZXhPZihcIuWwj+aYjlwiKSA+PSAwKS50b0FycmF5KCk7XHJcbiAgICB9XHJcbn1cclxubmV3IGRlbW8oKTsiLCJpbXBvcnQgeyB0YWJsZSB9IGZyb20gXCIuLi9zcmMvZGVjb3JhdG9ycy90YWJsZVwiO1xyXG5pbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL3NyYy9tb2RlbC9Db2x1bW5UeXBlXCI7XHJcbmltcG9ydCB7IGNvbHVtbiB9IGZyb20gXCIuLi9zcmMvZGVjb3JhdG9ycy9jb2x1bW5cIjtcclxuaW1wb3J0IHsgbWV0YWRhdGEgfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvbWV0YWRhdGFcIjtcclxuXHJcbkB0YWJsZShcInN0dWRlbnRfZGJcIilcclxuZXhwb3J0IGNsYXNzIHVzZXIgZXh0ZW5kcyBtZXRhZGF0YXtcclxuICAgIEBjb2x1bW4oQ29sdW1uVHlwZS5TVFJJTkcpXHJcbiAgICBpZDpzdHJpbmc7XHJcbiAgICBAY29sdW1uKENvbHVtblR5cGUuU1RSSU5HKVxyXG4gICAgbmFtZTpzdHJpbmc7XHJcbn0iLCJpbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtblR5cGVcIjtcclxuaW1wb3J0IHsgQ29sdW1uSW5mbyB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5JbmZvXCI7XHJcblxyXG4vKipcclxuICog55So5LqO5a6a5LmJ5YiX55qE6KOF6aWw5ZmoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uKHR5cGU6IENvbHVtblR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfY29sdW1uOkNvbHVtbkluZm8gPSB7XHJcbiAgICAgICAgICAgIG5hbWU6bmFtZSxcclxuICAgICAgICAgICAgdHlwZTp0eXBlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfdGFyZ2V0ID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGlmICghX3RhcmdldFtcIl9fY29sdW1uc19fXCJdKSB7XHJcbiAgICAgICAgICAgIF90YXJnZXRbXCJfX2NvbHVtbnNfX1wiXSA9IG5ldyBBcnJheTxDb2x1bW5JbmZvPigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGFyZ2V0W1wiX19jb2x1bW5zX19cIl0ucHVzaChfY29sdW1uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IG1ldGFkYXRhIH0gZnJvbSBcIi4vbWV0YWRhdGFcIjtcclxuaW1wb3J0IHsgQ29sdW1uSW5mbyB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5JbmZvXCI7XHJcbmltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eTxUPntcclxuICAgIHByaXZhdGUgZGI6IERhdGFiYXNlO1xyXG4gICAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZzsgLy/ooajlkI1cclxuICAgIHByaXZhdGUgZGJOYW1lOiBzdHJpbmc7Ly/mlbDmja7lupPlkI1cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBvYmpDbGFzczogeyBuZXcoKTogVCB9KSB7XHJcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZU5hbWUgPSB0aGlzLm9iakNsYXNzW1wiX190YWJsZV9uYW1lX19cIl07XHJcbiAgICAgICAgdGhpcy5kYk5hbWUgPSB0aGlzLm9iakNsYXNzW1wiX19kYl9uYW1lX19cIl07XHJcbiAgICAgICAgdGhpcy5kYiA9IHdpbmRvdy5vcGVuRGF0YWJhc2UodGhpcy5kYk5hbWUsICcxLjAuMCcsICcnLCA2NTUzNiAqIDEwMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVUYWJsZSh0aGlzLm9iakNsYXNzW1wiX19jb2x1bW5zX19cIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZpcnN0KHByZWRpY2F0ZTogKG06IFQpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLnF1ZXJ5QWxsKCkudGhlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+i6KGo5omA5pyJ5pWw5o2uXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5QWxsKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgc3FsID0gYHNlbGVjdCAqIGZyb20gJHt0aGlzLnRhYmxlTmFtZX1gO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIFtdLCAoYiwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgICAgICB9LCB0aGF0LmZhaWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5Yib5bu66KGoXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVRhYmxlKGNvbHVtbnM6IEFycmF5PENvbHVtbkluZm8+KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCh0aGF0LmdDcmVhdGVUYWJsZVNxbChjb2x1bW5zKSwgW10sICh0OiBTcWxUcmFuc2FjdGlvbiwgcmVzdWx0OiBTcWxSZXN1bHRTZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5pbnNlcnRJZCA9PSAxKTtcclxuICAgICAgICAgICAgICAgIH0sICh0LCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5mYWlsKHQsIGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgaW5zZXJ0KHZhbHVlKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIGxldCBzcWwgPSB0aGlzLmdJbnNlcnRTcWwodGhpcy50YWJsZU5hbWUsIHRoaXMub2JqQ2xhc3NbXCJfX2NvbHVtbnNfX1wiXSk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIFtdLCAodDogU3FsVHJhbnNhY3Rpb24sIHJlc3VsdDogU3FsUmVzdWx0U2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuaW5zZXJ0SWQgPT0gMSk7XHJcbiAgICAgICAgICAgICAgICB9LCAodCwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFpbCh0LCBpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ0luc2VydFNxbCh0YWJsZU5hbWU6IHN0cmluZywgZGF0YTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHNxbDogc3RyaW5nID0gYGluc2VydCBpbnRvICR7dGFibGVOYW1lfSBgO1xyXG4gICAgICAgIGxldCBjb2xzID0gW107XHJcbiAgICAgICAgbGV0IHFzID0gW107XHJcbiAgICAgICAgaWYgKGRhdGEgaW5zdGFuY2VvZiBBcnJheSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBkYXRhW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbHMucHVzaChjb2wubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBxcy5wdXNoKCc/Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3FsICs9IFwiIChcIiArIGNvbHMuam9pbignLCcpICsgXCIpIFZhbHVlcyAoXCIgKyBxcy5qb2luKCcsJykgKyBcIilcIjtcclxuICAgICAgICAgICAgcmV0dXJuIHNxbDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnQ3JlYXRlVGFibGVTcWwoY29sdW1zOiBBcnJheTxDb2x1bW5JbmZvPik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHNxbCA9IFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgXCIgKyB0aGlzLnRhYmxlTmFtZTtcclxuICAgICAgICBsZXQgY29sU3FsID0gW107XHJcbiAgICAgICAgaWYgKGNvbHVtcyBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbHVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gY29sdW1zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3R5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29sdW1zW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbHVtblR5cGUuU1RSSU5HOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbHVtblR5cGUuTlVNQkVSOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiTlVNRVJJQ1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbHVtblR5cGUuQk9PTEVBTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3R5cGUgPSBcIklOVEVHRVJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBDb2x1bW5UeXBlLkFSUkFZOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIENvbHVtblR5cGUuQU5ZOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbFNxbC5wdXNoKGNvbHVtc1tpXS5uYW1lICsgJyAnICsgX3R5cGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNxbCA9IHNxbCArIFwiIChcIiArIGNvbFNxbC5qb2luKCcsICcpICsgXCIpXCI7XHJcbiAgICAgICAgcmV0dXJuIHNxbDtcclxuICAgIH1cclxuXHJcbiAgICBmYWlsKHQsIGluZm8pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGluZm8ubWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHk8VD4ob2JqQ2xhc3M6IHsgbmV3KCk6IFQgfSkge1xyXG4gICAgbGV0IF9lbnRpdHkgPSBuZXcgRW50aXR5KG9iakNsYXNzKTtcclxuICAgIHJldHVybiBfZW50aXR5O1xyXG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBtZXRhZGF0YSB7XHJcbiAgICBwcml2YXRlIGRiOiBEYXRhYmFzZTtcclxuICAgIHByaXZhdGUgdGFibGVOYW1lOiBzdHJpbmc7IC8v6KGo5ZCNXHJcbiAgICBwcml2YXRlIGRiTmFtZTogc3RyaW5nOy8v5pWw5o2u5bqT5ZCNXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYmxlTmFtZSA9IHRoaXNbXCJfX3RhYmxlX25hbWVfX1wiXTtcclxuICAgICAgICB0aGlzLmRiTmFtZSA9IHRoaXNbXCJfX2RiX25hbWVfX1wiXTtcclxuICAgICAgICB0aGlzLmRiID0gd2luZG93Lm9wZW5EYXRhYmFzZSh0aGlzLmRiTmFtZSwgJzEuMC4wJywgJycsIDY1NTM2ICogMTAwKTtcclxuICAgIH1cclxuICAgXHJcbiAgICB1cGRhdGUoKSB7IH1cclxuICAgIGRlbGV0ZSgpIHsgfVxyXG4gICAgcXVlcnkoKSB7IH1cclxuIFxyXG59IiwiLyoqXHJcbiAqIOeUqOS6juWumuS5ieihqOeahOijhemlsOWZqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlKGRiTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHRhcmdldFtcIl9fZGJfbmFtZV9fXCJdID0gZGJOYW1lO1xyXG4gICAgICAgIHRhcmdldFtcIl9fdGFibGVfbmFtZV9fXCJdID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xyXG4gICAgQk9PTEVBTiA9IDEsXHJcbiAgICBOVU1CRVIgPSAyLFxyXG4gICAgU1RSSU5HID0gMyxcclxuICAgIEFSUkFZID0gNCxcclxuICAgIERBVEUgPSA1LFxyXG4gICAgQU5ZID0gNlxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==