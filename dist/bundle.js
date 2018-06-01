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
        //  let _user = new user();
        //  _user.id = "abc";
        this.query();
        //  this.insert().then();
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
        return __awaiter(this, void 0, void 0, function () {
            var result1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_src_decorators_entity__WEBPACK_IMPORTED_MODULE_1__["entity"])(_user__WEBPACK_IMPORTED_MODULE_0__["user"]).queryFirst(function (m) { return m.id == "iiiiiddddd"; })];
                    case 1:
                        result1 = _a.sent();
                        console.log("查询表user第一条数据:");
                        console.log(result1);
                        // 查询到的数据，修改，然后保存
                        result1.name = "修改后的记录";
                        result1.save();
                        return [2 /*return*/];
                }
            });
        });
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
/* harmony import */ var _src_decorators_BaseMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/decorators/BaseMetadata */ "./src/decorators/BaseMetadata.ts");
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
        Object(_src_decorators_column__WEBPACK_IMPORTED_MODULE_2__["column"])(_src_model_ColumnType__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].STRING | _src_model_ColumnType__WEBPACK_IMPORTED_MODULE_1__["ColumnType"].PRIMARY),
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
}(_src_decorators_BaseMetadata__WEBPACK_IMPORTED_MODULE_3__["BaseMetadata"]));



/***/ }),

/***/ "./src/decorators/BaseMetadata.ts":
/*!****************************************!*\
  !*** ./src/decorators/BaseMetadata.ts ***!
  \****************************************/
/*! exports provided: BaseMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseMetadata", function() { return BaseMetadata; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/decorators/entity.ts");
/* harmony import */ var _gsql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gsql */ "./src/decorators/gsql.ts");
/* harmony import */ var _model_ColumnType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/ColumnType */ "./src/model/ColumnType.ts");
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



var BaseMetadata = /** @class */ (function () {
    function BaseMetadata() {
        this.gSql = new _gsql__WEBPACK_IMPORTED_MODULE_1__["GenerateSql"]();
        this.columnsDef = this.constructor["__columns__"];
        this.primaryColDef = this.columnsDef.find(function (m) { return (m.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_2__["ColumnType"].PRIMARY) == _model_ColumnType__WEBPACK_IMPORTED_MODULE_2__["ColumnType"].PRIMARY; });
        this.tableName = this.constructor["__table_name__"];
    }
    BaseMetadata.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var change, diff, isExist, sql, _entity, resultN;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        change = this.queryChange();
                        diff = this["__diff__"];
                        return [4 /*yield*/, this.existRecord()];
                    case 1:
                        isExist = _a.sent();
                        if (isExist) {
                            sql = this.gSql.gUpdateSql(this.tableName, this.primaryColDef.name, diff[this.primaryColDef.name], change);
                        }
                        else {
                            sql = this.gSql.gInsertSql(this.tableName, this.columnsDef, this);
                        }
                        _entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this.constructor);
                        return [4 /*yield*/, _entity.execSql(sql[0], sql[1])];
                    case 2:
                        resultN = _a.sent();
                        return [2 /*return*/, resultN > 0];
                }
            });
        });
    };
    /**
     * 查询被修改的字段信息
     */
    BaseMetadata.prototype.queryChange = function () {
        // 取变化的值
        var change = {};
        var diff = this["__diff__"];
        if (diff != null) {
            for (var key in diff) {
                if (diff.hasOwnProperty(key)) {
                    var element = diff[key];
                    if (this[key] != element) {
                        // 变化的值
                        change[key] = this[key];
                    }
                }
            }
        }
        return change;
    };
    /**
     * 是否存在记录
     */
    BaseMetadata.prototype.existRecord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var diff, _entity, isExist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        diff = this["__diff__"];
                        _entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this.constructor);
                        return [4 /*yield*/, _entity.existRecord(diff[this.primaryColDef.name])];
                    case 1:
                        isExist = _a.sent();
                        return [2 /*return*/, isExist];
                }
            });
        });
    };
    return BaseMetadata;
}());



/***/ }),

/***/ "./src/decorators/DatabaseManage.ts":
/*!******************************************!*\
  !*** ./src/decorators/DatabaseManage.ts ***!
  \******************************************/
/*! exports provided: DatabaseManage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManage", function() { return DatabaseManage; });
var DatabaseManage = /** @class */ (function () {
    function DatabaseManage() {
    }
    DatabaseManage.getDataBase = function (dbName, dbMaxSize) {
        if (this.db == null) {
            this.db = {};
        }
        if (this.db[dbName] == null) {
            this.db[dbName] = window.openDatabase(dbName, '1.0.0', '', dbMaxSize);
        }
        return this.db[dbName];
    };
    return DatabaseManage;
}());



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
/* harmony import */ var _gsql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gsql */ "./src/decorators/gsql.ts");
/* harmony import */ var _DatabaseManage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatabaseManage */ "./src/decorators/DatabaseManage.ts");
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



/// <reference types="websql" />
var Entity = /** @class */ (function () {
    function Entity(objClass) {
        this.objClass = objClass;
        this.gSql = new _gsql__WEBPACK_IMPORTED_MODULE_1__["GenerateSql"]();
        this.init().then();
    }
    Entity.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.tableName = this.objClass["__table_name__"];
                        this.dbName = this.objClass["__db_name__"];
                        this.columnsDef = this.objClass["__columns__"];
                        this.db = _DatabaseManage__WEBPACK_IMPORTED_MODULE_2__["DatabaseManage"].getDataBase(this.dbName, 65536 * 10);
                        return [4 /*yield*/, this.createTable(this.columnsDef)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Entity.prototype.queryFirst = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var that, result, index, element, fResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.queryAll()];
                    case 1:
                        result = _a.sent();
                        if (result != null && result.length > 0) {
                            for (index = 0; index < result.length; index++) {
                                element = result[index];
                                fResult = predicate(element);
                                if (fResult) {
                                    return [2 /*return*/, that.convertToMetadata(element)];
                                }
                            }
                        }
                        return [2 /*return*/, null];
                }
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
                    resolve(result.rows);
                }, that.fail);
            });
        });
        return promise;
    };
    /**
     * 是否存在记录
     */
    Entity.prototype.existRecord = function (primaryValue) {
        // 主键字段
        var that = this;
        var primaryCol = this.columnsDef.find(function (m) { return (m.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].PRIMARY) == _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].PRIMARY; });
        var sql = "select * from " + this.tableName + " where " + primaryCol.name + " = ? ;";
        var promise = new Promise(function (resolve) {
            that.db.transaction(function (t) {
                t.executeSql(sql, [primaryValue], function (b, result) {
                    resolve(result.rows != null && result.rows.length > 0);
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
                t.executeSql(that.gSql.gCreateTableSql(that.tableName, columns), [], function (t, result) {
                    resolve(result.insertId == 1);
                }, function (t, info) {
                    that.fail(t, info);
                    resolve(false);
                    return true;
                });
            });
        });
        return promise;
    };
    /**
     * 插入记录
     */
    Entity.prototype.insert = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var sqlResult, that, promise;
            return __generator(this, function (_a) {
                console.log(value);
                sqlResult = this.gSql.gInsertSql(this.tableName, this.objClass["__columns__"], value);
                that = this;
                promise = new Promise(function (resolve) {
                    that.db.transaction(function (t) {
                        t.executeSql(sqlResult[0], sqlResult[1], function (t, result) {
                            resolve(result.insertId == 1);
                        }, function (t, info) {
                            that.fail(t, info);
                            resolve(false);
                            return true;
                        });
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    Entity.prototype.convertToMetadata = function (value) {
        var result = new this.objClass();
        result["__diff__"] = {};
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                var element = value[key];
                result[key] = element;
                result["__diff__"][key] = element;
            }
        }
        return result;
    };
    /**
     * 执行sql语句
     * @returns {Promise<number>} 返回受影响行数
     */
    Entity.prototype.execSql = function (sql, value) {
        var that = this;
        var promise = new Promise(function (resolve) {
            that.db.transaction(function (t) {
                t.executeSql(sql, value, function (b, result) {
                    resolve(result.rowsAffected);
                }, that.fail);
            });
        });
        return promise;
    };
    Entity.prototype.fail = function (transaction, error) {
        console.error(error.message);
        return true;
    };
    return Entity;
}());

function entity(objClass) {
    var _entity = new Entity(objClass);
    return _entity;
}


/***/ }),

/***/ "./src/decorators/gsql.ts":
/*!********************************!*\
  !*** ./src/decorators/gsql.ts ***!
  \********************************/
/*! exports provided: GenerateSql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateSql", function() { return GenerateSql; });
/* harmony import */ var _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/ColumnType */ "./src/model/ColumnType.ts");

var GenerateSql = /** @class */ (function () {
    function GenerateSql() {
    }
    /**
     * 生成创建表sql语句
     */
    GenerateSql.prototype.gCreateTableSql = function (tableName, columnDef) {
        var sql = "CREATE TABLE IF NOT EXISTS " + tableName;
        var colSql = [];
        if (columnDef instanceof Array && columnDef.length > 0) {
            for (var index = 0; index < columnDef.length; index++) {
                var element = columnDef[index];
                var _type = void 0;
                _type = "TEXT";
                if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING) === _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].STRING) {
                    _type = "TEXT";
                }
                if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].NUMBER) === _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].NUMBER) {
                    _type = "NUMERIC";
                }
                if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].BOOLEAN) === _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].BOOLEAN) {
                    _type = "INTEGER";
                }
                if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].ARRAY) === _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].ARRAY) {
                    _type = "TEXT";
                }
                if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].ANY) === _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].ANY) {
                    _type = "TEXT";
                }
                if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].PRIMARY) === _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].PRIMARY) {
                    _type += " PRIMARY KEY NOT NULL";
                }
                colSql.push(element.name + ' ' + _type);
            }
        }
        sql = sql + " (" + colSql.join(', ') + ")";
        return sql;
    };
    /**
     * 生成插入记录sql语句
     */
    GenerateSql.prototype.gInsertSql = function (tableName, columnsDef, value) {
        var that = this;
        var sql = "insert into " + tableName + " ";
        var cols = [];
        var qs = [];
        if (columnsDef instanceof Array && columnsDef.length > 0) {
            var param = [];
            for (var index = 0; index < columnsDef.length; index++) {
                var col = columnsDef[index];
                cols.push(col.name);
                qs.push('?');
                param.push(value[col.name]);
            }
            sql += " (" + cols.join(',') + ") values (" + qs.join(',') + ")";
            var tuple = [sql, param];
            return tuple;
        }
        else {
            return null;
        }
    };
    /**
    * 生成更新记录sql语句
    */
    GenerateSql.prototype.gUpdateSql = function (tableName, primaryKeyName, primaryKeyValue, diffValue) {
        var that = this;
        var sql = "update " + tableName + " set ";
        var cols = [];
        var param = [];
        if (diffValue != null) {
            for (var key in diffValue) {
                if (diffValue.hasOwnProperty(key)) {
                    if (key == primaryKeyName) {
                        continue;
                    }
                    var element = diffValue[key];
                    cols.push(key);
                    param.push(element);
                }
            }
        }
        sql += cols.join(" = ? , ") + " = ? where " + primaryKeyName + " = " + "?" + " ;";
        param.push(primaryKeyValue);
        var tuple = [sql, param];
        return tuple;
    };
    return GenerateSql;
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
    ColumnType[ColumnType["BOOLEAN"] = 2] = "BOOLEAN";
    ColumnType[ColumnType["NUMBER"] = 4] = "NUMBER";
    ColumnType[ColumnType["STRING"] = 8] = "STRING";
    ColumnType[ColumnType["ARRAY"] = 16] = "ARRAY";
    ColumnType[ColumnType["DATE"] = 32] = "DATE";
    ColumnType[ColumnType["ANY"] = 64] = "ANY";
    ColumnType[ColumnType["PRIMARY"] = 128] = "PRIMARY";
})(ColumnType || (ColumnType = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvQmFzZU1ldGFkYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL0RhdGFiYXNlTWFuYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL2NvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvZ3NxbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvQ29sdW1uVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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Q0FBQyxTQUFTLENBQUMsR0FBRyxhQUFhLEdBQUcsY0FBYyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDO1FBQ2xGLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUIsSUFBSSxLQUFLLEdBQXlCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlGRDtBQUFBOztHQUVHO0FBQ0csZUFBZ0IsTUFBYztJQUNoQyxPQUFPLFVBQVUsTUFBTTtRQUNuQixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUkQsSUFBWSxVQVFYO0FBUkQsV0FBWSxVQUFVO0lBQ2xCLGlEQUFXO0lBQ1gsK0NBQVU7SUFDViwrQ0FBVTtJQUNWLDhDQUFVO0lBQ1YsNENBQVM7SUFDVCwwQ0FBUTtJQUNSLG1EQUFhO0FBQ2pCLENBQUMsRUFSVyxVQUFVLEtBQVYsVUFBVSxRQVFyQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGUvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBlbnRpdHkgfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvZW50aXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgZGVtbyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyAgbGV0IF91c2VyID0gbmV3IHVzZXIoKTtcclxuICAgICAgICAvLyAgX3VzZXIuaWQgPSBcImFiY1wiO1xyXG4gICAgICAgIHRoaXMucXVlcnkoKTtcclxuICAgICAgICAvLyAgdGhpcy5pbnNlcnQoKS50aGVuKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbnNlcnQoKSB7XHJcbiAgICAgICAgbGV0IF91c2VyID0gbmV3IHVzZXIoKTtcclxuICAgICAgICBfdXNlci5pZCA9IFwiaWlpaWlkZGRkZFwiO1xyXG4gICAgICAgIF91c2VyLm5hbWUgPSBcInhpeGl4aXhpeGl4aVwiO1xyXG4gICAgICAgIGxldCBpbnNlcnRSZXN1bHQgPSBhd2FpdCBlbnRpdHkodXNlcikuaW5zZXJ0KF91c2VyKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB9XHJcbiAgICBkZWxldGUoKSB7XHJcblxyXG4gICAgfVxyXG4gICAgYXN5bmMgcXVlcnkoKSB7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgZW50aXR5KHVzZXIpLnF1ZXJ5Rmlyc3QobSA9PiBtLmlkID09IFwiaWlpaWlkZGRkZFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuafpeivouihqHVzZXLnrKzkuIDmnaHmlbDmja46XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdDEpO1xyXG4gICAgICAgIC8vIOafpeivouWIsOeahOaVsOaNru+8jOS/ruaUue+8jOeEtuWQjuS/neWtmFxyXG4gICAgICAgIHJlc3VsdDEubmFtZSA9IFwi5L+u5pS55ZCO55qE6K6w5b2VXCI7XHJcbiAgICAgICAgcmVzdWx0MS5zYXZlKCk7XHJcblxyXG4gICAgICAgIC8vIGxldCByZXN1bHQxID0gZW50aXR5PHVzZXI+LmZpcnN0KG0gPT4gbS5pZCA9PSBcImd1aWRcIikucmVzdWx0KCk7XHJcbiAgICAgICAgLy8gbGV0IHJlc3VsdDIgPSBlbnRpdHk8dXNlcj4ud2hlcmUobSA9PiBtLnVzZXJfbmFtZS5pbmRleE9mKFwi5bCP5piOXCIpID49IDApLnRvQXJyYXkoKTtcclxuICAgIH1cclxufVxyXG5uZXcgZGVtbygpOyIsImltcG9ydCB7IHRhYmxlIH0gZnJvbSBcIi4uL3NyYy9kZWNvcmF0b3JzL3RhYmxlXCI7XHJcbmltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vc3JjL21vZGVsL0NvbHVtblR5cGVcIjtcclxuaW1wb3J0IHsgY29sdW1uIH0gZnJvbSBcIi4uL3NyYy9kZWNvcmF0b3JzL2NvbHVtblwiO1xyXG5pbXBvcnQgeyBCYXNlTWV0YWRhdGEgfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvQmFzZU1ldGFkYXRhXCI7XHJcblxyXG5AdGFibGUoXCJzdHVkZW50X2RiXCIpXHJcbmV4cG9ydCBjbGFzcyB1c2VyIGV4dGVuZHMgQmFzZU1ldGFkYXRhIHtcclxuICAgIEBjb2x1bW4oQ29sdW1uVHlwZS5TVFJJTkcgfCBDb2x1bW5UeXBlLlBSSU1BUlkpXHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgQGNvbHVtbihDb2x1bW5UeXBlLlNUUklORylcclxuICAgIG5hbWU6IHN0cmluZztcclxufSIsImltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL2VudGl0eVwiO1xyXG5pbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcclxuaW1wb3J0IHsgR2VuZXJhdGVTcWwgfSBmcm9tIFwiLi9nc3FsXCI7XHJcbmltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNZXRhZGF0YSB7XHJcbiAgICBwcml2YXRlIGdTcWw6IEdlbmVyYXRlU3FsO1xyXG4gICAgcHJpdmF0ZSBjb2x1bW5zRGVmOiBBcnJheTxDb2x1bW5JbmZvPjtcclxuICAgIHByaXZhdGUgcHJpbWFyeUNvbERlZjogQ29sdW1uSW5mbztcclxuICAgIHByaXZhdGUgdGFibGVOYW1lOiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdTcWwgPSBuZXcgR2VuZXJhdGVTcWwoKTtcclxuICAgICAgICB0aGlzLmNvbHVtbnNEZWYgPSB0aGlzLmNvbnN0cnVjdG9yW1wiX19jb2x1bW5zX19cIl07XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sRGVmID0gdGhpcy5jb2x1bW5zRGVmLmZpbmQobSA9PiAobS50eXBlICYgQ29sdW1uVHlwZS5QUklNQVJZKSA9PSBDb2x1bW5UeXBlLlBSSU1BUlkpO1xyXG4gICAgICAgIHRoaXMudGFibGVOYW1lID0gdGhpcy5jb25zdHJ1Y3RvcltcIl9fdGFibGVfbmFtZV9fXCJdXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2F2ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgICAgICAvLyDlj5blj5jljJbnmoTlgLxcclxuICAgICAgICBsZXQgY2hhbmdlID0gdGhpcy5xdWVyeUNoYW5nZSgpO1xyXG4gICAgICAgIGxldCBkaWZmID0gdGhpc1tcIl9fZGlmZl9fXCJdO1xyXG4gICAgICAgIGxldCBpc0V4aXN0ID0gYXdhaXQgdGhpcy5leGlzdFJlY29yZCgpO1xyXG4gICAgICAgIGxldCBzcWw6IFtzdHJpbmcsIGFueVtdXTtcclxuICAgICAgICBpZiAoaXNFeGlzdCkge1xyXG4gICAgICAgICAgICBzcWwgPSB0aGlzLmdTcWwuZ1VwZGF0ZVNxbCh0aGlzLnRhYmxlTmFtZSwgdGhpcy5wcmltYXJ5Q29sRGVmLm5hbWUsIGRpZmZbdGhpcy5wcmltYXJ5Q29sRGVmLm5hbWVdLCBjaGFuZ2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNxbCA9IHRoaXMuZ1NxbC5nSW5zZXJ0U3FsKHRoaXMudGFibGVOYW1lLCB0aGlzLmNvbHVtbnNEZWYsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgX2VudGl0eSA9IG5ldyBFbnRpdHkoPGFueT50aGlzLmNvbnN0cnVjdG9yKTtcclxuICAgICAgICBsZXQgcmVzdWx0TiA9IGF3YWl0IF9lbnRpdHkuZXhlY1NxbChzcWxbMF0sIHNxbFsxXSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdE4gPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5p+l6K+i6KKr5L+u5pS555qE5a2X5q615L+h5oGvXHJcbiAgICAgKi9cclxuICAgIHF1ZXJ5Q2hhbmdlKCk6IGFueSB7XHJcbiAgICAgICAgLy8g5Y+W5Y+Y5YyW55qE5YC8XHJcbiAgICAgICAgbGV0IGNoYW5nZSA9IHt9O1xyXG4gICAgICAgIGxldCBkaWZmID0gdGhpc1tcIl9fZGlmZl9fXCJdO1xyXG4gICAgICAgIGlmIChkaWZmICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGlmZikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkaWZmW2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPSBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWPmOWMlueahOWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2Vba2V5XSA9IHRoaXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a2Y5Zyo6K6w5b2VXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXN5bmMgZXhpc3RSZWNvcmQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgLy8g5Y+W5Li76ZSu5a2X5q615ZCNXHJcbiAgICAgICAgbGV0IGRpZmYgPSB0aGlzW1wiX19kaWZmX19cIl07XHJcbiAgICAgICAgbGV0IF9lbnRpdHkgPSBuZXcgRW50aXR5KDxhbnk+dGhpcy5jb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgbGV0IGlzRXhpc3QgPSBhd2FpdCBfZW50aXR5LmV4aXN0UmVjb3JkKGRpZmZbdGhpcy5wcmltYXJ5Q29sRGVmLm5hbWVdKTtcclxuICAgICAgICByZXR1cm4gaXNFeGlzdDtcclxuICAgIH1cclxuXHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIERhdGFiYXNlTWFuYWdlIHtcclxuICAgIHByaXZhdGUgc3RhdGljIGRiOiBhbnk7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGFCYXNlKGRiTmFtZTogc3RyaW5nLCBkYk1heFNpemU6IG51bWJlcik6IERhdGFiYXNlIHtcclxuICAgICAgICBpZiAodGhpcy5kYiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGIgPSB7fTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZGJbZGJOYW1lXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGJbZGJOYW1lXSA9IHdpbmRvdy5vcGVuRGF0YWJhc2UoZGJOYW1lLCAnMS4wLjAnLCAnJywgZGJNYXhTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJbZGJOYW1lXTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtblR5cGVcIjtcclxuaW1wb3J0IHsgQ29sdW1uSW5mbyB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5JbmZvXCI7XHJcblxyXG4vKipcclxuICog55So5LqO5a6a5LmJ5YiX55qE6KOF6aWw5ZmoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29sdW1uKHR5cGU6IENvbHVtblR5cGUpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBfY29sdW1uOkNvbHVtbkluZm8gPSB7XHJcbiAgICAgICAgICAgIG5hbWU6bmFtZSxcclxuICAgICAgICAgICAgdHlwZTp0eXBlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBfdGFyZ2V0ID0gdGFyZ2V0LmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGlmICghX3RhcmdldFtcIl9fY29sdW1uc19fXCJdKSB7XHJcbiAgICAgICAgICAgIF90YXJnZXRbXCJfX2NvbHVtbnNfX1wiXSA9IG5ldyBBcnJheTxDb2x1bW5JbmZvPigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBfdGFyZ2V0W1wiX19jb2x1bW5zX19cIl0ucHVzaChfY29sdW1uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VNZXRhZGF0YSB9IGZyb20gXCIuL0Jhc2VNZXRhZGF0YVwiO1xyXG5pbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcclxuaW1wb3J0IHsgQ29sdW1uVHlwZSB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5UeXBlXCI7XHJcbmltcG9ydCB7IEdlbmVyYXRlU3FsIH0gZnJvbSBcIi4vZ3NxbFwiO1xyXG5pbXBvcnQgeyBEYXRhYmFzZU1hbmFnZSB9IGZyb20gXCIuL0RhdGFiYXNlTWFuYWdlXCI7XHJcbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwid2Vic3FsXCIgLz5cclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHk8VCBleHRlbmRzIEJhc2VNZXRhZGF0YT57XHJcbiAgICBwcml2YXRlIGRiOiBEYXRhYmFzZTtcclxuICAgIHByaXZhdGUgdGFibGVOYW1lOiBzdHJpbmc7IC8v6KGo5ZCNXHJcbiAgICBwcml2YXRlIGRiTmFtZTogc3RyaW5nOy8v5pWw5o2u5bqT5ZCNXHJcbiAgICBwcml2YXRlIGNvbHVtbnNEZWY6IEFycmF5PENvbHVtbkluZm8+O1xyXG4gICAgcHJpdmF0ZSBnU3FsOiBHZW5lcmF0ZVNxbDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBvYmpDbGFzczogeyBuZXcoKTogVCB9KSB7XHJcbiAgICAgICAgdGhpcy5nU3FsID0gbmV3IEdlbmVyYXRlU3FsKCk7XHJcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZU5hbWUgPSB0aGlzLm9iakNsYXNzW1wiX190YWJsZV9uYW1lX19cIl07XHJcbiAgICAgICAgdGhpcy5kYk5hbWUgPSB0aGlzLm9iakNsYXNzW1wiX19kYl9uYW1lX19cIl07XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zRGVmID0gdGhpcy5vYmpDbGFzc1tcIl9fY29sdW1uc19fXCJdO1xyXG4gICAgICAgIHRoaXMuZGIgPSBEYXRhYmFzZU1hbmFnZS5nZXREYXRhQmFzZSh0aGlzLmRiTmFtZSwgNjU1MzYgKiAxMCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVUYWJsZSh0aGlzLmNvbHVtbnNEZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHF1ZXJ5Rmlyc3QocHJlZGljYXRlOiAobTogVCkgPT4gdm9pZCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgcmVzdWx0OiBBcnJheTxhbnk+ID0gYXdhaXQgdGhpcy5xdWVyeUFsbCgpO1xyXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHJlc3VsdFtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgZlJlc3VsdCA9IHByZWRpY2F0ZShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIGlmIChmUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoYXQuY29udmVydFRvTWV0YWRhdGEoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmn6Xor6LooajmiYDmnInmlbDmja5cclxuICAgICAqL1xyXG4gICAgcXVlcnlBbGw8VD4oKTogUHJvbWlzZTxBcnJheTxUPj4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgc3FsID0gYHNlbGVjdCAqIGZyb20gJHt0aGlzLnRhYmxlTmFtZX1gO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8QXJyYXk8VD4+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKCh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsLCBbXSwgKGIsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoPGFueT5yZXN1bHQucm93cyk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGF0LmZhaWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5a2Y5Zyo6K6w5b2VXHJcbiAgICAgKi9cclxuICAgIGV4aXN0UmVjb3JkKHByaW1hcnlWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgLy8g5Li76ZSu5a2X5q61XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBwcmltYXJ5Q29sID0gdGhpcy5jb2x1bW5zRGVmLmZpbmQobSA9PiAobS50eXBlICYgQ29sdW1uVHlwZS5QUklNQVJZKSA9PSBDb2x1bW5UeXBlLlBSSU1BUlkpO1xyXG4gICAgICAgIGxldCBzcWwgPSBgc2VsZWN0ICogZnJvbSAke3RoaXMudGFibGVOYW1lfSB3aGVyZSAke3ByaW1hcnlDb2wubmFtZX0gPSA/IDtgO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIFtwcmltYXJ5VmFsdWVdLCAoYiwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93cyAhPSBudWxsICYmIHJlc3VsdC5yb3dzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgICAgICAgICAgfSwgdGhhdC5mYWlsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuihqFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVUYWJsZShjb2x1bW5zOiBBcnJheTxDb2x1bW5JbmZvPik6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwodGhhdC5nU3FsLmdDcmVhdGVUYWJsZVNxbCh0aGF0LnRhYmxlTmFtZSwgY29sdW1ucyksIFtdLCAodDogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuaW5zZXJ0SWQgPT0gMSk7XHJcbiAgICAgICAgICAgICAgICB9LCAodCwgaW5mbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFpbCh0LCBpbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5o+S5YWl6K6w5b2VXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluc2VydCh2YWx1ZSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBsZXQgc3FsUmVzdWx0ID0gdGhpcy5nU3FsLmdJbnNlcnRTcWwodGhpcy50YWJsZU5hbWUsIHRoaXMub2JqQ2xhc3NbXCJfX2NvbHVtbnNfX1wiXSwgdmFsdWUpO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsUmVzdWx0WzBdLCBzcWxSZXN1bHRbMV0sICh0OiBTUUxUcmFuc2FjdGlvbiwgcmVzdWx0OiBTUUxSZXN1bHRTZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5pbnNlcnRJZCA9PSAxKTtcclxuICAgICAgICAgICAgICAgIH0sICh0LCBpbmZvKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5mYWlsKHQsIGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBjb252ZXJ0VG9NZXRhZGF0YSh2YWx1ZTogVCk6IFQge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IFQgPSBuZXcgdGhpcy5vYmpDbGFzcygpO1xyXG4gICAgICAgIHJlc3VsdFtcIl9fZGlmZl9fXCJdID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB2YWx1ZVtrZXldO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBlbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W1wiX19kaWZmX19cIl1ba2V5XSA9IGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5omn6KGMc3Fs6K+t5Y+lXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSDov5Tlm57lj5flvbHlk43ooYzmlbBcclxuICAgICAqL1xyXG4gICAgZXhlY1NxbChzcWw6IHN0cmluZywgdmFsdWU6IEFycmF5PGFueT4pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPG51bWJlcj4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIHZhbHVlLCAoYiwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93c0FmZmVjdGVkKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoYXQuZmFpbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZhaWwodHJhbnNhY3Rpb246IFNRTFRyYW5zYWN0aW9uLCBlcnJvcjogU1FMRXJyb3IpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW50aXR5PFQgZXh0ZW5kcyBCYXNlTWV0YWRhdGE+KG9iakNsYXNzOiB7IG5ldygpOiBUIH0pIHtcclxuICAgIGxldCBfZW50aXR5ID0gbmV3IEVudGl0eTxUPihvYmpDbGFzcyk7XHJcbiAgICByZXR1cm4gX2VudGl0eTtcclxufSIsImltcG9ydCB7IENvbHVtbkluZm8gfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uSW5mb1wiO1xyXG5pbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtblR5cGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHZW5lcmF0ZVNxbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/miJDliJvlu7rooahzcWzor63lj6VcclxuICAgICAqL1xyXG4gICAgZ0NyZWF0ZVRhYmxlU3FsKHRhYmxlTmFtZTogc3RyaW5nLCBjb2x1bW5EZWY6IEFycmF5PENvbHVtbkluZm8+KTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgc3FsID0gXCJDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyBcIiArIHRhYmxlTmFtZTtcclxuICAgICAgICBsZXQgY29sU3FsID0gW107XHJcbiAgICAgICAgaWYgKGNvbHVtbkRlZiBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbHVtbkRlZi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2x1bW5EZWYubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29sdW1uRGVmW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCBfdHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgX3R5cGUgPSBcIlRFWFRcIjtcclxuICAgICAgICAgICAgICAgIGlmICgoZWxlbWVudC50eXBlICYgQ29sdW1uVHlwZS5TVFJJTkcpID09PSBDb2x1bW5UeXBlLlNUUklORykge1xyXG4gICAgICAgICAgICAgICAgICAgIF90eXBlID0gXCJURVhUXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuTlVNQkVSKSA9PT0gQ29sdW1uVHlwZS5OVU1CRVIpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiTlVNRVJJQ1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLkJPT0xFQU4pID09PSBDb2x1bW5UeXBlLkJPT0xFQU4pIHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiSU5URUdFUlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLkFSUkFZKSA9PT0gQ29sdW1uVHlwZS5BUlJBWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90eXBlID0gXCJURVhUXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuQU5ZKSA9PT0gQ29sdW1uVHlwZS5BTlkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLlBSSU1BUlkpID09PSBDb2x1bW5UeXBlLlBSSU1BUlkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdHlwZSArPSBcIiBQUklNQVJZIEtFWSBOT1QgTlVMTFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29sU3FsLnB1c2goZWxlbWVudC5uYW1lICsgJyAnICsgX3R5cGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBzcWwgPSBzcWwgKyBcIiAoXCIgKyBjb2xTcWwuam9pbignLCAnKSArIFwiKVwiO1xyXG4gICAgICAgIHJldHVybiBzcWw7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlJ/miJDmj5LlhaXorrDlvZVzcWzor63lj6VcclxuICAgICAqL1xyXG4gICAgZ0luc2VydFNxbCh0YWJsZU5hbWU6IHN0cmluZywgY29sdW1uc0RlZjogYW55LCB2YWx1ZTogYW55KTogW3N0cmluZywgQXJyYXk8YW55Pl0ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgc3FsOiBzdHJpbmcgPSBgaW5zZXJ0IGludG8gJHt0YWJsZU5hbWV9IGA7XHJcbiAgICAgICAgbGV0IGNvbHMgPSBbXTtcclxuICAgICAgICBsZXQgcXMgPSBbXTtcclxuICAgICAgICBpZiAoY29sdW1uc0RlZiBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbHVtbnNEZWYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW06IEFycmF5PGFueT4gPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnNEZWYubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBjb2x1bW5zRGVmW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGNvbHMucHVzaChjb2wubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBxcy5wdXNoKCc/Jyk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbS5wdXNoKHZhbHVlW2NvbC5uYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3FsICs9IFwiIChcIiArIGNvbHMuam9pbignLCcpICsgXCIpIHZhbHVlcyAoXCIgKyBxcy5qb2luKCcsJykgKyBcIilcIjtcclxuICAgICAgICAgICAgbGV0IHR1cGxlOiBbc3RyaW5nLCBBcnJheTxhbnk+XSA9IFtzcWwsIHBhcmFtXTtcclxuICAgICAgICAgICAgcmV0dXJuIHR1cGxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICog55Sf5oiQ5pu05paw6K6w5b2Vc3Fs6K+t5Y+lXHJcbiAgICAqL1xyXG4gICAgZ1VwZGF0ZVNxbCh0YWJsZU5hbWU6IHN0cmluZywgcHJpbWFyeUtleU5hbWU6IHN0cmluZywgcHJpbWFyeUtleVZhbHVlOiBzdHJpbmcsIGRpZmZWYWx1ZTogYW55KTogW3N0cmluZywgQXJyYXk8YW55Pl0ge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgc3FsOiBzdHJpbmcgPSBgdXBkYXRlICR7dGFibGVOYW1lfSBzZXQgYDtcclxuICAgICAgICBsZXQgY29scyA9IFtdO1xyXG4gICAgICAgIGxldCBwYXJhbTogQXJyYXk8YW55PiA9IFtdO1xyXG4gICAgICAgIGlmIChkaWZmVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkaWZmVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkaWZmVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gcHJpbWFyeUtleU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkaWZmVmFsdWVba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbS5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNxbCArPSBjb2xzLmpvaW4oXCIgPSA/ICwgXCIpICsgXCIgPSA/IHdoZXJlIFwiICsgcHJpbWFyeUtleU5hbWUgKyBcIiA9IFwiICsgXCI/XCIgKyBcIiA7XCI7XHJcbiAgICAgICAgcGFyYW0ucHVzaChwcmltYXJ5S2V5VmFsdWUpO1xyXG4gICAgICAgIGxldCB0dXBsZTogW3N0cmluZywgQXJyYXk8YW55Pl0gPSBbc3FsLCBwYXJhbV07XHJcbiAgICAgICAgcmV0dXJuIHR1cGxlO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOeUqOS6juWumuS5ieihqOeahOijhemlsOWZqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlKGRiTmFtZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHRhcmdldFtcIl9fZGJfbmFtZV9fXCJdID0gZGJOYW1lO1xyXG4gICAgICAgIHRhcmdldFtcIl9fdGFibGVfbmFtZV9fXCJdID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICB9O1xyXG59XHJcbiIsImV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xyXG4gICAgQk9PTEVBTiA9IDIsXHJcbiAgICBOVU1CRVIgPSA0LFxyXG4gICAgU1RSSU5HID0gOCxcclxuICAgIEFSUkFZID0gMTYsXHJcbiAgICBEQVRFID0gMzIsXHJcbiAgICBBTlkgPSA2NCxcclxuICAgIFBSSU1BUlkgPSAxMjhcclxufSJdLCJzb3VyY2VSb290IjoiIn0=