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
        //this.insert().then();
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
                    case 0: return [4 /*yield*/, _user__WEBPACK_IMPORTED_MODULE_0__["user"].queryFirst(function (m) { return m.id == "iiiiiddddd"; })];
                    case 1:
                        result1 = _a.sent();
                        // let result1 = await entity(user).queryFirst(m => m.id == "iiiiiddddd");
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
        var change = {};
        var diff = this["__diff__"];
        if (diff != null) {
            for (var key in diff) {
                if (diff.hasOwnProperty(key)) {
                    var element = diff[key];
                    if (this[key] != element) {
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
    BaseMetadata.query = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var _entity, result, index, element, fResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this.constructor);
                        return [4 /*yield*/, _entity.queryAll()];
                    case 1:
                        result = _a.sent();
                        if (result != null && result.length > 0) {
                            for (index = 0; index < result.length; index++) {
                                element = result[index];
                                fResult = predicate(element);
                                if (fResult) {
                                    return [2 /*return*/, _entity.convertToMetadata(element)];
                                }
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    BaseMetadata.queryFirst = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var t, _entity, result, index, element, fResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        t = this;
                        _entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](t);
                        return [4 /*yield*/, _entity.queryAll()];
                    case 1:
                        result = _a.sent();
                        if (result != null && result.length > 0) {
                            for (index = 0; index < result.length; index++) {
                                element = result[index];
                                fResult = predicate(element);
                                if (fResult) {
                                    return [2 /*return*/, _entity.convertToMetadata(element)];
                                }
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    BaseMetadata.delete = function () {
    };
    BaseMetadata.import = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvQmFzZU1ldGFkYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL0RhdGFiYXNlTWFuYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL2NvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvZ3NxbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvQ29sdW1uVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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LENBQUM7b0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2YsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDdkI7YUFDSjtTQUNKO1FBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFBYSxHQUFHLGNBQWMsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQztRQUNsRixLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVCLElBQUksS0FBSyxHQUF5QixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQyxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM5RkQ7QUFBQTs7R0FFRztBQUNHLGVBQWdCLE1BQWM7SUFDaEMsT0FBTyxVQUFVLE1BQU07UUFDbkIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMvQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUMsQ0FBQztBQUNOLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1JELElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQixpREFBVztJQUNYLCtDQUFVO0lBQ1YsK0NBQVU7SUFDViw4Q0FBVTtJQUNWLDRDQUFTO0lBQ1QsMENBQVE7SUFDUixtREFBYTtBQUNqQixDQUFDLEVBUlcsVUFBVSxLQUFWLFVBQVUsUUFRckIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9leGFtcGxlL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHsgdXNlciB9IGZyb20gXCIuL3VzZXJcIjtcbmltcG9ydCB7IGVudGl0eSB9IGZyb20gXCIuLi9zcmMvZGVjb3JhdG9ycy9lbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIGRlbW8ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyAgbGV0IF91c2VyID0gbmV3IHVzZXIoKTtcbiAgICAgICAgLy8gIF91c2VyLmlkID0gXCJhYmNcIjtcbiAgICAgICAgICB0aGlzLnF1ZXJ5KCk7XG4gICAgICAgIC8vdGhpcy5pbnNlcnQoKS50aGVuKCk7XG4gICAgfVxuICAgIGFzeW5jIGluc2VydCgpIHtcbiAgICAgICAgbGV0IF91c2VyID0gbmV3IHVzZXIoKTtcbiAgICAgICAgX3VzZXIuaWQgPSBcImlpaWlpZGRkZGRcIjtcbiAgICAgICAgX3VzZXIubmFtZSA9IFwieGl4aXhpeGl4aXhpXCI7XG4gICAgICAgIGxldCBpbnNlcnRSZXN1bHQgPSBhd2FpdCBlbnRpdHkodXNlcikuaW5zZXJ0KF91c2VyKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxuICAgIGRlbGV0ZSgpIHtcblxuICAgIH1cbiAgICBhc3luYyBxdWVyeSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCB1c2VyLnF1ZXJ5Rmlyc3QoKG06IHVzZXIpID0+IG0uaWQgPT0gXCJpaWlpaWRkZGRkXCIpO1xuICAgICAgICAvLyBsZXQgcmVzdWx0MSA9IGF3YWl0IGVudGl0eSh1c2VyKS5xdWVyeUZpcnN0KG0gPT4gbS5pZCA9PSBcImlpaWlpZGRkZGRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5p+l6K+i6KGodXNlcuesrOS4gOadoeaVsOaNrjpcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdDEpO1xuICAgICAgICAvLyDmn6Xor6LliLDnmoTmlbDmja7vvIzkv67mlLnvvIznhLblkI7kv53lrZhcbiAgICAgICAgcmVzdWx0MS5uYW1lID0gXCLkv67mlLnlkI7nmoTorrDlvZVcIjtcbiAgICAgICAgcmVzdWx0MS5zYXZlKCk7XG5cbiAgICAgICAgLy8gbGV0IHJlc3VsdDEgPSBlbnRpdHk8dXNlcj4uZmlyc3QobSA9PiBtLmlkID09IFwiZ3VpZFwiKS5yZXN1bHQoKTtcbiAgICAgICAgLy8gbGV0IHJlc3VsdDIgPSBlbnRpdHk8dXNlcj4ud2hlcmUobSA9PiBtLnVzZXJfbmFtZS5pbmRleE9mKFwi5bCP5piOXCIpID49IDApLnRvQXJyYXkoKTtcbiAgICB9XG59XG5uZXcgZGVtbygpOyIsImltcG9ydCB7IHRhYmxlIH0gZnJvbSBcIi4uL3NyYy9kZWNvcmF0b3JzL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL3NyYy9tb2RlbC9Db2x1bW5UeXBlXCI7XG5pbXBvcnQgeyBjb2x1bW4gfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvY29sdW1uXCI7XG5pbXBvcnQgeyBCYXNlTWV0YWRhdGEgfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvQmFzZU1ldGFkYXRhXCI7XG5cbkB0YWJsZShcInN0dWRlbnRfZGJcIilcbmV4cG9ydCBjbGFzcyB1c2VyIGV4dGVuZHMgQmFzZU1ldGFkYXRhIHtcbiAgICBAY29sdW1uKENvbHVtblR5cGUuU1RSSU5HIHwgQ29sdW1uVHlwZS5QUklNQVJZKVxuICAgIGlkOiBzdHJpbmc7XG4gICAgQGNvbHVtbihDb2x1bW5UeXBlLlNUUklORylcbiAgICBuYW1lOiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcbmltcG9ydCB7IEdlbmVyYXRlU3FsIH0gZnJvbSBcIi4vZ3NxbFwiO1xuaW1wb3J0IHsgQ29sdW1uVHlwZSB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5UeXBlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTWV0YWRhdGEge1xuICAgIHByaXZhdGUgZ1NxbDogR2VuZXJhdGVTcWw7XG4gICAgcHJpdmF0ZSBjb2x1bW5zRGVmOiBBcnJheTxDb2x1bW5JbmZvPjtcbiAgICBwcml2YXRlIHByaW1hcnlDb2xEZWY6IENvbHVtbkluZm87XG4gICAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdTcWwgPSBuZXcgR2VuZXJhdGVTcWwoKTtcbiAgICAgICAgdGhpcy5jb2x1bW5zRGVmID0gdGhpcy5jb25zdHJ1Y3RvcltcIl9fY29sdW1uc19fXCJdO1xuICAgICAgICB0aGlzLnByaW1hcnlDb2xEZWYgPSB0aGlzLmNvbHVtbnNEZWYuZmluZChtID0+IChtLnR5cGUgJiBDb2x1bW5UeXBlLlBSSU1BUlkpID09IENvbHVtblR5cGUuUFJJTUFSWSk7XG4gICAgICAgIHRoaXMudGFibGVOYW1lID0gdGhpcy5jb25zdHJ1Y3RvcltcIl9fdGFibGVfbmFtZV9fXCJdXG4gICAgfVxuXG4gICAgYXN5bmMgc2F2ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgLy8g5Y+W5Y+Y5YyW55qE5YC8XG4gICAgICAgIGxldCBjaGFuZ2UgPSB0aGlzLnF1ZXJ5Q2hhbmdlKCk7XG4gICAgICAgIGxldCBkaWZmID0gdGhpc1tcIl9fZGlmZl9fXCJdO1xuICAgICAgICBsZXQgaXNFeGlzdCA9IGF3YWl0IHRoaXMuZXhpc3RSZWNvcmQoKTtcbiAgICAgICAgbGV0IHNxbDogW3N0cmluZywgYW55W11dO1xuICAgICAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgICAgICAgc3FsID0gdGhpcy5nU3FsLmdVcGRhdGVTcWwodGhpcy50YWJsZU5hbWUsIHRoaXMucHJpbWFyeUNvbERlZi5uYW1lLCBkaWZmW3RoaXMucHJpbWFyeUNvbERlZi5uYW1lXSwgY2hhbmdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNxbCA9IHRoaXMuZ1NxbC5nSW5zZXJ0U3FsKHRoaXMudGFibGVOYW1lLCB0aGlzLmNvbHVtbnNEZWYsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBfZW50aXR5ID0gbmV3IEVudGl0eSg8YW55PnRoaXMuY29uc3RydWN0b3IpO1xuICAgICAgICBsZXQgcmVzdWx0TiA9IGF3YWl0IF9lbnRpdHkuZXhlY1NxbChzcWxbMF0sIHNxbFsxXSk7XG4gICAgICAgIHJldHVybiByZXN1bHROID4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmn6Xor6Looqvkv67mlLnnmoTlrZfmrrXkv6Hmga9cbiAgICAgKi9cbiAgICBxdWVyeUNoYW5nZSgpOiBhbnkge1xuICAgICAgICBsZXQgY2hhbmdlID0ge307XG4gICAgICAgIGxldCBkaWZmID0gdGhpc1tcIl9fZGlmZl9fXCJdO1xuICAgICAgICBpZiAoZGlmZiAhPSBudWxsKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkaWZmKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGlmZltrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1trZXldICE9IGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVtrZXldID0gdGhpc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFuZ2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWtmOWcqOiusOW9lVxuICAgICAqL1xuICAgIHByaXZhdGUgYXN5bmMgZXhpc3RSZWNvcmQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGxldCBkaWZmID0gdGhpc1tcIl9fZGlmZl9fXCJdO1xuICAgICAgICBsZXQgX2VudGl0eSA9IG5ldyBFbnRpdHkoPGFueT50aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgbGV0IGlzRXhpc3QgPSBhd2FpdCBfZW50aXR5LmV4aXN0UmVjb3JkKGRpZmZbdGhpcy5wcmltYXJ5Q29sRGVmLm5hbWVdKTtcbiAgICAgICAgcmV0dXJuIGlzRXhpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jICBxdWVyeShwcmVkaWNhdGU6IChtOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgbGV0IF9lbnRpdHkgPSBuZXcgRW50aXR5KDxhbnk+dGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBfZW50aXR5LnF1ZXJ5QWxsKClcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBmUmVzdWx0ID0gcHJlZGljYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChmUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZW50aXR5LmNvbnZlcnRUb01ldGFkYXRhKDxhbnk+ZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBxdWVyeUZpcnN0PFQgZXh0ZW5kcyBCYXNlTWV0YWRhdGE+KHByZWRpY2F0ZTogKG06IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgbGV0IHQ6IHsgbmV3KCk6IFQgfSA9IDxhbnk+dGhpcztcbiAgICAgICAgbGV0IF9lbnRpdHkgPSBuZXcgRW50aXR5PFQ+KHQpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgX2VudGl0eS5xdWVyeUFsbDxUPigpXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3VsdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgZlJlc3VsdCA9IHByZWRpY2F0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2VudGl0eS5jb252ZXJ0VG9NZXRhZGF0YShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZSgpIHtcblxuICAgIH1cblxuICAgIHN0YXRpYyBpbXBvcnQoKSB7XG5cbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgRGF0YWJhc2VNYW5hZ2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGRiOiBhbnk7XG4gICAgcHVibGljIHN0YXRpYyBnZXREYXRhQmFzZShkYk5hbWU6IHN0cmluZywgZGJNYXhTaXplOiBudW1iZXIpOiBEYXRhYmFzZSB7XG4gICAgICAgIGlmICh0aGlzLmRiID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYltkYk5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGJbZGJOYW1lXSA9IHdpbmRvdy5vcGVuRGF0YWJhc2UoZGJOYW1lLCAnMS4wLjAnLCAnJywgZGJNYXhTaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYltkYk5hbWVdO1xuICAgIH1cblxufSIsImltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xuaW1wb3J0IHsgQ29sdW1uSW5mbyB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5JbmZvXCI7XG5cbi8qKlxuICog55So5LqO5a6a5LmJ5YiX55qE6KOF6aWw5ZmoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW4odHlwZTogQ29sdW1uVHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgX2NvbHVtbjpDb2x1bW5JbmZvID0ge1xuICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgdHlwZTp0eXBlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IF90YXJnZXQgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICghX3RhcmdldFtcIl9fY29sdW1uc19fXCJdKSB7XG4gICAgICAgICAgICBfdGFyZ2V0W1wiX19jb2x1bW5zX19cIl0gPSBuZXcgQXJyYXk8Q29sdW1uSW5mbz4oKTtcbiAgICAgICAgfVxuICAgICAgICBfdGFyZ2V0W1wiX19jb2x1bW5zX19cIl0ucHVzaChfY29sdW1uKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZU1ldGFkYXRhIH0gZnJvbSBcIi4vQmFzZU1ldGFkYXRhXCI7XG5pbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcbmltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xuaW1wb3J0IHsgR2VuZXJhdGVTcWwgfSBmcm9tIFwiLi9nc3FsXCI7XG5pbXBvcnQgeyBEYXRhYmFzZU1hbmFnZSB9IGZyb20gXCIuL0RhdGFiYXNlTWFuYWdlXCI7XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIndlYnNxbFwiIC8+XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHk8VCBleHRlbmRzIEJhc2VNZXRhZGF0YT57XG4gICAgcHJpdmF0ZSBkYjogRGF0YWJhc2U7XG4gICAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZzsgLy/ooajlkI1cbiAgICBwcml2YXRlIGRiTmFtZTogc3RyaW5nOy8v5pWw5o2u5bqT5ZCNXG4gICAgcHJpdmF0ZSBjb2x1bW5zRGVmOiBBcnJheTxDb2x1bW5JbmZvPjtcbiAgICBwcml2YXRlIGdTcWw6IEdlbmVyYXRlU3FsO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgb2JqQ2xhc3M6IHsgbmV3KCk6IFQgfSkge1xuICAgICAgICB0aGlzLmdTcWwgPSBuZXcgR2VuZXJhdGVTcWwoKTtcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIHRoaXMudGFibGVOYW1lID0gdGhpcy5vYmpDbGFzc1tcIl9fdGFibGVfbmFtZV9fXCJdO1xuICAgICAgICB0aGlzLmRiTmFtZSA9IHRoaXMub2JqQ2xhc3NbXCJfX2RiX25hbWVfX1wiXTtcbiAgICAgICAgdGhpcy5jb2x1bW5zRGVmID0gdGhpcy5vYmpDbGFzc1tcIl9fY29sdW1uc19fXCJdO1xuICAgICAgICB0aGlzLmRiID0gRGF0YWJhc2VNYW5hZ2UuZ2V0RGF0YUJhc2UodGhpcy5kYk5hbWUsIDY1NTM2ICogMTApO1xuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVRhYmxlKHRoaXMuY29sdW1uc0RlZik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnlGaXJzdChwcmVkaWNhdGU6IChtOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHJlc3VsdDogQXJyYXk8YW55PiA9IGF3YWl0IHRoaXMucXVlcnlBbGwoKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBmUmVzdWx0ID0gcHJlZGljYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChmUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmNvbnZlcnRUb01ldGFkYXRhKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmn6Xor6LooajmiYDmnInmlbDmja5cbiAgICAgKi9cbiAgICBxdWVyeUFsbDxUPigpOiBQcm9taXNlPEFycmF5PFQ+PiB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHNxbCA9IGBzZWxlY3QgKiBmcm9tICR7dGhpcy50YWJsZU5hbWV9YDtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxBcnJheTxUPj4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKHNxbCwgW10sIChiLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSg8YW55PnJlc3VsdC5yb3dzKTtcbiAgICAgICAgICAgICAgICB9LCB0aGF0LmZhaWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5piv5ZCm5a2Y5Zyo6K6w5b2VXG4gICAgICovXG4gICAgZXhpc3RSZWNvcmQocHJpbWFyeVZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgLy8g5Li76ZSu5a2X5q61XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHByaW1hcnlDb2wgPSB0aGlzLmNvbHVtbnNEZWYuZmluZChtID0+IChtLnR5cGUgJiBDb2x1bW5UeXBlLlBSSU1BUlkpID09IENvbHVtblR5cGUuUFJJTUFSWSk7XG4gICAgICAgIGxldCBzcWwgPSBgc2VsZWN0ICogZnJvbSAke3RoaXMudGFibGVOYW1lfSB3aGVyZSAke3ByaW1hcnlDb2wubmFtZX0gPSA/IDtgO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhhdC5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIFtwcmltYXJ5VmFsdWVdLCAoYiwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnJvd3MgIT0gbnVsbCAmJiByZXN1bHQucm93cy5sZW5ndGggPiAwKTtcbiAgICAgICAgICAgICAgICB9LCB0aGF0LmZhaWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yib5bu66KGoXG4gICAgICovXG4gICAgY3JlYXRlVGFibGUoY29sdW1uczogQXJyYXk8Q29sdW1uSW5mbz4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhhdC5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbCh0aGF0LmdTcWwuZ0NyZWF0ZVRhYmxlU3FsKHRoYXQudGFibGVOYW1lLCBjb2x1bW5zKSwgW10sICh0OiBTUUxUcmFuc2FjdGlvbiwgcmVzdWx0OiBTUUxSZXN1bHRTZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQuaW5zZXJ0SWQgPT0gMSk7XG4gICAgICAgICAgICAgICAgfSwgKHQsIGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5mYWlsKHQsIGluZm8pO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmj5LlhaXorrDlvZVcbiAgICAgKi9cbiAgICBhc3luYyBpbnNlcnQodmFsdWUpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgICBsZXQgc3FsUmVzdWx0ID0gdGhpcy5nU3FsLmdJbnNlcnRTcWwodGhpcy50YWJsZU5hbWUsIHRoaXMub2JqQ2xhc3NbXCJfX2NvbHVtbnNfX1wiXSwgdmFsdWUpO1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2U8Ym9vbGVhbj4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKHNxbFJlc3VsdFswXSwgc3FsUmVzdWx0WzFdLCAodDogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0Lmluc2VydElkID09IDEpO1xuICAgICAgICAgICAgICAgIH0sICh0LCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFpbCh0LCBpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBjb252ZXJ0VG9NZXRhZGF0YSh2YWx1ZTogVCk6IFQge1xuICAgICAgICBsZXQgcmVzdWx0OiBUID0gbmV3IHRoaXMub2JqQ2xhc3MoKTtcbiAgICAgICAgcmVzdWx0W1wiX19kaWZmX19cIl0gPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHZhbHVlW2tleV07XG4gICAgICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIHJlc3VsdFtcIl9fZGlmZl9fXCJdW2tleV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOaJp+ihjHNxbOivreWPpVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IOi/lOWbnuWPl+W9seWTjeihjOaVsFxuICAgICAqL1xuICAgIGV4ZWNTcWwoc3FsOiBzdHJpbmcsIHZhbHVlOiBBcnJheTxhbnk+KTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPG51bWJlcj4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKHNxbCwgdmFsdWUsIChiLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQucm93c0FmZmVjdGVkKTtcbiAgICAgICAgICAgICAgICB9LCB0aGF0LmZhaWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBmYWlsKHRyYW5zYWN0aW9uOiBTUUxUcmFuc2FjdGlvbiwgZXJyb3I6IFNRTEVycm9yKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxufVxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eTxUIGV4dGVuZHMgQmFzZU1ldGFkYXRhPihvYmpDbGFzczogeyBuZXcoKTogVCB9KSB7XG4gICAgbGV0IF9lbnRpdHkgPSBuZXcgRW50aXR5PFQ+KG9iakNsYXNzKTtcbiAgICByZXR1cm4gX2VudGl0eTtcbn0iLCJpbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcbmltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xuXG5leHBvcnQgY2xhc3MgR2VuZXJhdGVTcWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ5Yib5bu66KGoc3Fs6K+t5Y+lXG4gICAgICovXG4gICAgZ0NyZWF0ZVRhYmxlU3FsKHRhYmxlTmFtZTogc3RyaW5nLCBjb2x1bW5EZWY6IEFycmF5PENvbHVtbkluZm8+KTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHNxbCA9IFwiQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgXCIgKyB0YWJsZU5hbWU7XG4gICAgICAgIGxldCBjb2xTcWwgPSBbXTtcbiAgICAgICAgaWYgKGNvbHVtbkRlZiBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbHVtbkRlZi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sdW1uRGVmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb2x1bW5EZWZbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBfdHlwZTogc3RyaW5nO1xuICAgICAgICAgICAgICAgIF90eXBlID0gXCJURVhUXCI7XG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLlNUUklORykgPT09IENvbHVtblR5cGUuU1RSSU5HKSB7XG4gICAgICAgICAgICAgICAgICAgIF90eXBlID0gXCJURVhUXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoZWxlbWVudC50eXBlICYgQ29sdW1uVHlwZS5OVU1CRVIpID09PSBDb2x1bW5UeXBlLk5VTUJFUikge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiTlVNRVJJQ1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuQk9PTEVBTikgPT09IENvbHVtblR5cGUuQk9PTEVBTikge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiSU5URUdFUlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuQVJSQVkpID09PSBDb2x1bW5UeXBlLkFSUkFZKSB7XG4gICAgICAgICAgICAgICAgICAgIF90eXBlID0gXCJURVhUXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgoZWxlbWVudC50eXBlICYgQ29sdW1uVHlwZS5BTlkpID09PSBDb2x1bW5UeXBlLkFOWSkge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuUFJJTUFSWSkgPT09IENvbHVtblR5cGUuUFJJTUFSWSkge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZSArPSBcIiBQUklNQVJZIEtFWSBOT1QgTlVMTFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2xTcWwucHVzaChlbGVtZW50Lm5hbWUgKyAnICcgKyBfdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBzcWwgPSBzcWwgKyBcIiAoXCIgKyBjb2xTcWwuam9pbignLCAnKSArIFwiKVwiO1xuICAgICAgICByZXR1cm4gc3FsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOaPkuWFpeiusOW9lXNxbOivreWPpVxuICAgICAqL1xuICAgIGdJbnNlcnRTcWwodGFibGVOYW1lOiBzdHJpbmcsIGNvbHVtbnNEZWY6IGFueSwgdmFsdWU6IGFueSk6IFtzdHJpbmcsIEFycmF5PGFueT5dIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgc3FsOiBzdHJpbmcgPSBgaW5zZXJ0IGludG8gJHt0YWJsZU5hbWV9IGA7XG4gICAgICAgIGxldCBjb2xzID0gW107XG4gICAgICAgIGxldCBxcyA9IFtdO1xuICAgICAgICBpZiAoY29sdW1uc0RlZiBpbnN0YW5jZW9mIEFycmF5ICYmIGNvbHVtbnNEZWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHBhcmFtOiBBcnJheTxhbnk+ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY29sdW1uc0RlZi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBjb2x1bW5zRGVmW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb2xzLnB1c2goY29sLm5hbWUpO1xuICAgICAgICAgICAgICAgIHFzLnB1c2goJz8nKTtcbiAgICAgICAgICAgICAgICBwYXJhbS5wdXNoKHZhbHVlW2NvbC5uYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcWwgKz0gXCIgKFwiICsgY29scy5qb2luKCcsJykgKyBcIikgdmFsdWVzIChcIiArIHFzLmpvaW4oJywnKSArIFwiKVwiO1xuICAgICAgICAgICAgbGV0IHR1cGxlOiBbc3RyaW5nLCBBcnJheTxhbnk+XSA9IFtzcWwsIHBhcmFtXTtcbiAgICAgICAgICAgIHJldHVybiB0dXBsZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDnlJ/miJDmm7TmlrDorrDlvZVzcWzor63lj6VcbiAgICAqL1xuICAgIGdVcGRhdGVTcWwodGFibGVOYW1lOiBzdHJpbmcsIHByaW1hcnlLZXlOYW1lOiBzdHJpbmcsIHByaW1hcnlLZXlWYWx1ZTogc3RyaW5nLCBkaWZmVmFsdWU6IGFueSk6IFtzdHJpbmcsIEFycmF5PGFueT5dIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgc3FsOiBzdHJpbmcgPSBgdXBkYXRlICR7dGFibGVOYW1lfSBzZXQgYDtcbiAgICAgICAgbGV0IGNvbHMgPSBbXTtcbiAgICAgICAgbGV0IHBhcmFtOiBBcnJheTxhbnk+ID0gW107XG4gICAgICAgIGlmIChkaWZmVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGlmZlZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmZWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT0gcHJpbWFyeUtleU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkaWZmVmFsdWVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgY29scy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNxbCArPSBjb2xzLmpvaW4oXCIgPSA/ICwgXCIpICsgXCIgPSA/IHdoZXJlIFwiICsgcHJpbWFyeUtleU5hbWUgKyBcIiA9IFwiICsgXCI/XCIgKyBcIiA7XCI7XG4gICAgICAgIHBhcmFtLnB1c2gocHJpbWFyeUtleVZhbHVlKTtcbiAgICAgICAgbGV0IHR1cGxlOiBbc3RyaW5nLCBBcnJheTxhbnk+XSA9IFtzcWwsIHBhcmFtXTtcbiAgICAgICAgcmV0dXJuIHR1cGxlO1xuICAgIH1cbn0iLCIvKipcbiAqIOeUqOS6juWumuS5ieihqOeahOijhemlsOWZqFxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFibGUoZGJOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB0YXJnZXRbXCJfX2RiX25hbWVfX1wiXSA9IGRiTmFtZTtcbiAgICAgICAgdGFyZ2V0W1wiX190YWJsZV9uYW1lX19cIl0gPSB0YXJnZXQubmFtZTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGVudW0gQ29sdW1uVHlwZSB7XG4gICAgQk9PTEVBTiA9IDIsXG4gICAgTlVNQkVSID0gNCxcbiAgICBTVFJJTkcgPSA4LFxuICAgIEFSUkFZID0gMTYsXG4gICAgREFURSA9IDMyLFxuICAgIEFOWSA9IDY0LFxuICAgIFBSSU1BUlkgPSAxMjhcbn0iXSwic291cmNlUm9vdCI6IiJ9