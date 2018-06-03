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
            var str, delResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = "iiiiiddddd";
                        return [4 /*yield*/, _user__WEBPACK_IMPORTED_MODULE_0__["user"].delete(function (m) { return m.id == str; })];
                    case 1:
                        delResult = _a.sent();
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
            var entity, result, list, index, element, fResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this);
                        return [4 /*yield*/, entity.queryAll()];
                    case 1:
                        result = _a.sent();
                        if (result != null && result.length > 0) {
                            list = [];
                            for (index = 0; index < result.length; index++) {
                                element = result[index];
                                fResult = predicate(element);
                                if (fResult) {
                                    list.push(entity.convertToMetadata(element));
                                }
                            }
                            return [2 /*return*/, list];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    BaseMetadata.queryFirst = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var entity, result, index, element, fResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this);
                        return [4 /*yield*/, entity.queryAll()];
                    case 1:
                        result = _a.sent();
                        if (result != null && result.length > 0) {
                            for (index = 0; index < result.length; index++) {
                                element = result[index];
                                fResult = predicate(element);
                                if (fResult) {
                                    return [2 /*return*/, entity.convertToMetadata(element)];
                                }
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    BaseMetadata.delete = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var result, entity, delResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queryFirst(predicate)];
                    case 1:
                        result = _a.sent();
                        entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this);
                        return [4 /*yield*/, entity.delete(predicate)];
                    case 2:
                        delResult = _a.sent();
                        return [2 /*return*/, delResult];
                }
            });
        });
    };
    BaseMetadata.import = function (value) {
        var entity = new _entity__WEBPACK_IMPORTED_MODULE_0__["Entity"](this);
        return entity.convertToMetadata(value);
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
    Entity.prototype.delete = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            var that, result, primaryKeyName, index, element, sql, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.queryFirst(predicate)];
                    case 1:
                        result = _a.sent();
                        for (index = 0; index < this.columnsDef.length; index++) {
                            element = this.columnsDef[index];
                            if ((element.type & _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].PRIMARY) == _model_ColumnType__WEBPACK_IMPORTED_MODULE_0__["ColumnType"].PRIMARY) {
                                primaryKeyName = element.name;
                            }
                        }
                        sql = "delete from " + this.tableName + " where " + primaryKeyName + " = ? ;";
                        promise = new Promise(function (resolve) {
                            that.db.transaction(function (t) {
                                t.executeSql(sql, [result[primaryKeyName]], function (b, result) {
                                    resolve(result.rows);
                                }, that.fail);
                            });
                        });
                        return [2 /*return*/, promise];
                }
            });
        });
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
    GenerateSql.prototype.gWhereSql = function (whereSql, param) {
        // this.gWhereSql(m => m.id == str) //把变量 str 的值取出来就可以转换成sql了
        // 正则取条件
        return null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlL3VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvQmFzZU1ldGFkYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL0RhdGFiYXNlTWFuYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9kZWNvcmF0b3JzL2NvbHVtbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy9lbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RlY29yYXRvcnMvZ3NxbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVjb3JhdG9ycy90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvQ29sdW1uVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7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bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2V4YW1wbGUvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyB1c2VyIH0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgZW50aXR5IH0gZnJvbSBcIi4uL3NyYy9kZWNvcmF0b3JzL2VudGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgZGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vICBsZXQgX3VzZXIgPSBuZXcgdXNlcigpO1xuICAgICAgICAvLyAgX3VzZXIuaWQgPSBcImFiY1wiO1xuICAgICAgICB0aGlzLnF1ZXJ5KCk7XG4gICAgICAgIC8vdGhpcy5pbnNlcnQoKS50aGVuKCk7XG4gICAgfVxuICAgIGFzeW5jIGluc2VydCgpIHtcbiAgICAgICAgbGV0IF91c2VyID0gbmV3IHVzZXIoKTtcbiAgICAgICAgX3VzZXIuaWQgPSBcImlpaWlpZGRkZGRcIjtcbiAgICAgICAgX3VzZXIubmFtZSA9IFwieGl4aXhpeGl4aXhpXCI7XG4gICAgICAgIGxldCBpbnNlcnRSZXN1bHQgPSBhd2FpdCBlbnRpdHkodXNlcikuaW5zZXJ0KF91c2VyKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuXG4gICAgfVxuICAgIGRlbGV0ZSgpIHtcblxuICAgIH1cbiAgICBhc3luYyBxdWVyeSgpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiaWlpaWlkZGRkZFwiO1xuICAgICAgICBsZXQgZGVsUmVzdWx0ID0gYXdhaXQgdXNlci5kZWxldGUoKG06IHVzZXIpID0+IG0uaWQgPT0gc3RyKTtcbiAgICAgICAgLy8gbGV0IHJlc3VsdDEgPSBhd2FpdCB1c2VyLnF1ZXJ5Rmlyc3QoKG06IHVzZXIpID0+IG0uaWQgPT0gc3RyKTtcbiAgICAgICAgLy8gbGV0IHJlc3VsdDEgPSBhd2FpdCBlbnRpdHkodXNlcikucXVlcnlGaXJzdChtID0+IG0uaWQgPT0gXCJpaWlpaWRkZGRkXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuafpeivouihqHVzZXLnrKzkuIDmnaHmlbDmja46XCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQxKTtcbiAgICAgICAgLy8g5p+l6K+i5Yiw55qE5pWw5o2u77yM5L+u5pS577yM54S25ZCO5L+d5a2YXG4gICAgICAgIC8vIHJlc3VsdDEubmFtZSA9IFwi5L+u5pS55ZCO55qE6K6w5b2VXCI7XG4gICAgICAgIC8vIHJlc3VsdDEuc2F2ZSgpO1xuXG4gICAgICAgIC8vIGxldCByZXN1bHQxID0gZW50aXR5PHVzZXI+LmZpcnN0KG0gPT4gbS5pZCA9PSBcImd1aWRcIikucmVzdWx0KCk7XG4gICAgICAgIC8vIGxldCByZXN1bHQyID0gZW50aXR5PHVzZXI+LndoZXJlKG0gPT4gbS51c2VyX25hbWUuaW5kZXhPZihcIuWwj+aYjlwiKSA+PSAwKS50b0FycmF5KCk7XG4gICAgfVxuXG59XG5uZXcgZGVtbygpOyIsImltcG9ydCB7IHRhYmxlIH0gZnJvbSBcIi4uL3NyYy9kZWNvcmF0b3JzL3RhYmxlXCI7XG5pbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL3NyYy9tb2RlbC9Db2x1bW5UeXBlXCI7XG5pbXBvcnQgeyBjb2x1bW4gfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvY29sdW1uXCI7XG5pbXBvcnQgeyBCYXNlTWV0YWRhdGEgfSBmcm9tIFwiLi4vc3JjL2RlY29yYXRvcnMvQmFzZU1ldGFkYXRhXCI7XG5cbkB0YWJsZShcInN0dWRlbnRfZGJcIilcbmV4cG9ydCBjbGFzcyB1c2VyIGV4dGVuZHMgQmFzZU1ldGFkYXRhIHtcbiAgICBAY29sdW1uKENvbHVtblR5cGUuU1RSSU5HIHwgQ29sdW1uVHlwZS5QUklNQVJZKVxuICAgIGlkOiBzdHJpbmc7XG4gICAgQGNvbHVtbihDb2x1bW5UeXBlLlNUUklORylcbiAgICBuYW1lOiBzdHJpbmc7XG59IiwiaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vZW50aXR5XCI7XG5pbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcbmltcG9ydCB7IEdlbmVyYXRlU3FsIH0gZnJvbSBcIi4vZ3NxbFwiO1xuaW1wb3J0IHsgQ29sdW1uVHlwZSB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5UeXBlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTWV0YWRhdGEge1xuICAgIHByaXZhdGUgZ1NxbDogR2VuZXJhdGVTcWw7XG4gICAgcHJpdmF0ZSBjb2x1bW5zRGVmOiBBcnJheTxDb2x1bW5JbmZvPjtcbiAgICBwcml2YXRlIHByaW1hcnlDb2xEZWY6IENvbHVtbkluZm87XG4gICAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nU3FsID0gbmV3IEdlbmVyYXRlU3FsKCk7XG4gICAgICAgIHRoaXMuY29sdW1uc0RlZiA9IHRoaXMuY29uc3RydWN0b3JbXCJfX2NvbHVtbnNfX1wiXTtcbiAgICAgICAgdGhpcy5wcmltYXJ5Q29sRGVmID0gdGhpcy5jb2x1bW5zRGVmLmZpbmQobSA9PiAobS50eXBlICYgQ29sdW1uVHlwZS5QUklNQVJZKSA9PSBDb2x1bW5UeXBlLlBSSU1BUlkpO1xuICAgICAgICB0aGlzLnRhYmxlTmFtZSA9IHRoaXMuY29uc3RydWN0b3JbXCJfX3RhYmxlX25hbWVfX1wiXVxuICAgIH1cblxuICAgIGFzeW5jIHNhdmUoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIC8vIOWPluWPmOWMlueahOWAvFxuICAgICAgICBsZXQgY2hhbmdlID0gdGhpcy5xdWVyeUNoYW5nZSgpO1xuICAgICAgICBsZXQgZGlmZiA9IHRoaXNbXCJfX2RpZmZfX1wiXTtcbiAgICAgICAgbGV0IGlzRXhpc3QgPSBhd2FpdCB0aGlzLmV4aXN0UmVjb3JkKCk7XG4gICAgICAgIGxldCBzcWw6IFtzdHJpbmcsIGFueVtdXTtcbiAgICAgICAgaWYgKGlzRXhpc3QpIHtcbiAgICAgICAgICAgIHNxbCA9IHRoaXMuZ1NxbC5nVXBkYXRlU3FsKHRoaXMudGFibGVOYW1lLCB0aGlzLnByaW1hcnlDb2xEZWYubmFtZSwgZGlmZlt0aGlzLnByaW1hcnlDb2xEZWYubmFtZV0sIGNoYW5nZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzcWwgPSB0aGlzLmdTcWwuZ0luc2VydFNxbCh0aGlzLnRhYmxlTmFtZSwgdGhpcy5jb2x1bW5zRGVmLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgX2VudGl0eSA9IG5ldyBFbnRpdHkoPGFueT50aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgbGV0IHJlc3VsdE4gPSBhd2FpdCBfZW50aXR5LmV4ZWNTcWwoc3FsWzBdLCBzcWxbMV0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0TiA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5p+l6K+i6KKr5L+u5pS555qE5a2X5q615L+h5oGvXG4gICAgICovXG4gICAgcXVlcnlDaGFuZ2UoKTogYW55IHtcbiAgICAgICAgbGV0IGNoYW5nZSA9IHt9O1xuICAgICAgICBsZXQgZGlmZiA9IHRoaXNbXCJfX2RpZmZfX1wiXTtcbiAgICAgICAgaWYgKGRpZmYgIT0gbnVsbCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGlmZikge1xuICAgICAgICAgICAgICAgIGlmIChkaWZmLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRpZmZba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNba2V5XSAhPSBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2Vba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2hhbmdlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmmK/lkKblrZjlnKjorrDlvZVcbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGV4aXN0UmVjb3JkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBsZXQgZGlmZiA9IHRoaXNbXCJfX2RpZmZfX1wiXTtcbiAgICAgICAgbGV0IF9lbnRpdHkgPSBuZXcgRW50aXR5KDxhbnk+dGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgICAgIGxldCBpc0V4aXN0ID0gYXdhaXQgX2VudGl0eS5leGlzdFJlY29yZChkaWZmW3RoaXMucHJpbWFyeUNvbERlZi5uYW1lXSk7XG4gICAgICAgIHJldHVybiBpc0V4aXN0O1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyAgcXVlcnk8VCBleHRlbmRzIEJhc2VNZXRhZGF0YT4ocHJlZGljYXRlOiAobTogVCkgPT4gdm9pZCk6IFByb21pc2U8QXJyYXk8VD4+IHtcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyBFbnRpdHkoPGFueT50aGlzKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGVudGl0eS5xdWVyeUFsbDxUPigpXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGxpc3Q6IEFycmF5PFQ+ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBmUmVzdWx0ID0gcHJlZGljYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChmUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaCg8VD5lbnRpdHkuY29udmVydFRvTWV0YWRhdGEoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBxdWVyeUZpcnN0PFQgZXh0ZW5kcyBCYXNlTWV0YWRhdGE+KHByZWRpY2F0ZTogKG06IFQpID0+IHZvaWQpOiBQcm9taXNlPFQ+IHtcbiAgICAgICAgbGV0IGVudGl0eSA9IG5ldyBFbnRpdHk8VD4oPGFueT50aGlzKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGVudGl0eS5xdWVyeUFsbDxUPigpXG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlc3VsdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcmVzdWx0W2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgZlJlc3VsdCA9IHByZWRpY2F0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZlJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5LmNvbnZlcnRUb01ldGFkYXRhKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZGVsZXRlPFQgZXh0ZW5kcyBCYXNlTWV0YWRhdGE+KHByZWRpY2F0ZTogKG06IFQpID0+IHZvaWQpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHRoaXMucXVlcnlGaXJzdChwcmVkaWNhdGUpO1xuICAgICAgICBsZXQgZW50aXR5ID0gbmV3IEVudGl0eTxUPig8YW55PnRoaXMpO1xuICAgICAgICBsZXQgZGVsUmVzdWx0ID0gYXdhaXQgZW50aXR5LmRlbGV0ZShwcmVkaWNhdGUpO1xuICAgICAgICByZXR1cm4gZGVsUmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBpbXBvcnQ8VCBleHRlbmRzIEJhc2VNZXRhZGF0YT4odmFsdWU6IGFueSk6IFQge1xuICAgICAgICBsZXQgZW50aXR5ID0gbmV3IEVudGl0eTxUPig8YW55PnRoaXMpO1xuICAgICAgICByZXR1cm4gZW50aXR5LmNvbnZlcnRUb01ldGFkYXRhKHZhbHVlKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgY2xhc3MgRGF0YWJhc2VNYW5hZ2Uge1xuICAgIHByaXZhdGUgc3RhdGljIGRiOiBhbnk7XG4gICAgcHVibGljIHN0YXRpYyBnZXREYXRhQmFzZShkYk5hbWU6IHN0cmluZywgZGJNYXhTaXplOiBudW1iZXIpOiBEYXRhYmFzZSB7XG4gICAgICAgIGlmICh0aGlzLmRiID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGIgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kYltkYk5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGJbZGJOYW1lXSA9IHdpbmRvdy5vcGVuRGF0YWJhc2UoZGJOYW1lLCAnMS4wLjAnLCAnJywgZGJNYXhTaXplKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5kYltkYk5hbWVdO1xuICAgIH1cblxufSIsImltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xuaW1wb3J0IHsgQ29sdW1uSW5mbyB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5JbmZvXCI7XG5cbi8qKlxuICog55So5LqO5a6a5LmJ5YiX55qE6KOF6aWw5ZmoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2x1bW4odHlwZTogQ29sdW1uVHlwZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnksIG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgX2NvbHVtbjpDb2x1bW5JbmZvID0ge1xuICAgICAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICAgICAgdHlwZTp0eXBlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IF90YXJnZXQgPSB0YXJnZXQuY29uc3RydWN0b3I7XG4gICAgICAgIGlmICghX3RhcmdldFtcIl9fY29sdW1uc19fXCJdKSB7XG4gICAgICAgICAgICBfdGFyZ2V0W1wiX19jb2x1bW5zX19cIl0gPSBuZXcgQXJyYXk8Q29sdW1uSW5mbz4oKTtcbiAgICAgICAgfVxuICAgICAgICBfdGFyZ2V0W1wiX19jb2x1bW5zX19cIl0ucHVzaChfY29sdW1uKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQmFzZU1ldGFkYXRhIH0gZnJvbSBcIi4vQmFzZU1ldGFkYXRhXCI7XG5pbXBvcnQgeyBDb2x1bW5JbmZvIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtbkluZm9cIjtcbmltcG9ydCB7IENvbHVtblR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvQ29sdW1uVHlwZVwiO1xuaW1wb3J0IHsgR2VuZXJhdGVTcWwgfSBmcm9tIFwiLi9nc3FsXCI7XG5pbXBvcnQgeyBEYXRhYmFzZU1hbmFnZSB9IGZyb20gXCIuL0RhdGFiYXNlTWFuYWdlXCI7XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cIndlYnNxbFwiIC8+XG5cbmV4cG9ydCBjbGFzcyBFbnRpdHk8VCBleHRlbmRzIEJhc2VNZXRhZGF0YT57XG4gICAgcHJpdmF0ZSBkYjogRGF0YWJhc2U7XG4gICAgcHJpdmF0ZSB0YWJsZU5hbWU6IHN0cmluZzsgLy/ooajlkI1cbiAgICBwcml2YXRlIGRiTmFtZTogc3RyaW5nOy8v5pWw5o2u5bqT5ZCNXG4gICAgcHJpdmF0ZSBjb2x1bW5zRGVmOiBBcnJheTxDb2x1bW5JbmZvPjtcbiAgICBwcml2YXRlIGdTcWw6IEdlbmVyYXRlU3FsO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgb2JqQ2xhc3M6IHsgbmV3KCk6IFQgfSkge1xuICAgICAgICB0aGlzLmdTcWwgPSBuZXcgR2VuZXJhdGVTcWwoKTtcbiAgICAgICAgdGhpcy5pbml0KCkudGhlbigpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIHRoaXMudGFibGVOYW1lID0gdGhpcy5vYmpDbGFzc1tcIl9fdGFibGVfbmFtZV9fXCJdO1xuICAgICAgICB0aGlzLmRiTmFtZSA9IHRoaXMub2JqQ2xhc3NbXCJfX2RiX25hbWVfX1wiXTtcbiAgICAgICAgdGhpcy5jb2x1bW5zRGVmID0gdGhpcy5vYmpDbGFzc1tcIl9fY29sdW1uc19fXCJdO1xuICAgICAgICB0aGlzLmRiID0gRGF0YWJhc2VNYW5hZ2UuZ2V0RGF0YUJhc2UodGhpcy5kYk5hbWUsIDY1NTM2ICogMTApO1xuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVRhYmxlKHRoaXMuY29sdW1uc0RlZik7XG4gICAgfVxuXG4gICAgYXN5bmMgcXVlcnlGaXJzdChwcmVkaWNhdGU6IChtOiBUKSA9PiB2b2lkKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHJlc3VsdDogQXJyYXk8YW55PiA9IGF3YWl0IHRoaXMucXVlcnlBbGwoKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVzdWx0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHRbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGxldCBmUmVzdWx0ID0gcHJlZGljYXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChmUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGF0LmNvbnZlcnRUb01ldGFkYXRhKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmn6Xor6LooajmiYDmnInmlbDmja5cbiAgICAgKi9cbiAgICBxdWVyeUFsbDxUPigpOiBQcm9taXNlPEFycmF5PFQ+PiB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHNxbCA9IGBzZWxlY3QgKiBmcm9tICR7dGhpcy50YWJsZU5hbWV9YDtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxBcnJheTxUPj4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGF0LmRiLnRyYW5zYWN0aW9uKCh0KSA9PiB7XG4gICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKHNxbCwgW10sIChiLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSg8YW55PnJlc3VsdC5yb3dzKTtcbiAgICAgICAgICAgICAgICB9LCB0aGF0LmZhaWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBhc3luYyBkZWxldGUocHJlZGljYXRlOiAobTogVCkgPT4gdm9pZCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB0aGlzLnF1ZXJ5Rmlyc3QocHJlZGljYXRlKTtcbiAgICAgICAgLy8g5Y+W5Li76ZSuXG4gICAgICAgIGxldCBwcmltYXJ5S2V5TmFtZTogc3RyaW5nO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmNvbHVtbnNEZWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb2x1bW5zRGVmW2luZGV4XTtcbiAgICAgICAgICAgIGlmICgoZWxlbWVudC50eXBlICYgQ29sdW1uVHlwZS5QUklNQVJZKSA9PSBDb2x1bW5UeXBlLlBSSU1BUlkpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5S2V5TmFtZSA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzcWwgPSBgZGVsZXRlIGZyb20gJHt0aGlzLnRhYmxlTmFtZX0gd2hlcmUgJHtwcmltYXJ5S2V5TmFtZX0gPSA/IDtgO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhhdC5kYi50cmFuc2FjdGlvbigodCkgPT4ge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIFtyZXN1bHRbcHJpbWFyeUtleU5hbWVdXSwgKGIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKDxhbnk+cmVzdWx0LnJvd3MpO1xuICAgICAgICAgICAgICAgIH0sIHRoYXQuZmFpbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWtmOWcqOiusOW9lVxuICAgICAqL1xuICAgIGV4aXN0UmVjb3JkKHByaW1hcnlWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIC8vIOS4u+mUruWtl+autVxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIGxldCBwcmltYXJ5Q29sID0gdGhpcy5jb2x1bW5zRGVmLmZpbmQobSA9PiAobS50eXBlICYgQ29sdW1uVHlwZS5QUklNQVJZKSA9PSBDb2x1bW5UeXBlLlBSSU1BUlkpO1xuICAgICAgICBsZXQgc3FsID0gYHNlbGVjdCAqIGZyb20gJHt0aGlzLnRhYmxlTmFtZX0gd2hlcmUgJHtwcmltYXJ5Q29sLm5hbWV9ID0gPyA7YDtcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsLCBbcHJpbWFyeVZhbHVlXSwgKGIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5yb3dzICE9IG51bGwgJiYgcmVzdWx0LnJvd3MubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICAgICAgfSwgdGhhdC5mYWlsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIm+W7uuihqFxuICAgICAqL1xuICAgIGNyZWF0ZVRhYmxlKGNvbHVtbnM6IEFycmF5PENvbHVtbkluZm8+KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxib29sZWFuPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoYXQuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwodGhhdC5nU3FsLmdDcmVhdGVUYWJsZVNxbCh0aGF0LnRhYmxlTmFtZSwgY29sdW1ucyksIFtdLCAodDogU1FMVHJhbnNhY3Rpb24sIHJlc3VsdDogU1FMUmVzdWx0U2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0Lmluc2VydElkID09IDEpO1xuICAgICAgICAgICAgICAgIH0sICh0LCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZmFpbCh0LCBpbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5o+S5YWl6K6w5b2VXG4gICAgICovXG4gICAgYXN5bmMgaW5zZXJ0KHZhbHVlKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAgICAgbGV0IHNxbFJlc3VsdCA9IHRoaXMuZ1NxbC5nSW5zZXJ0U3FsKHRoaXMudGFibGVOYW1lLCB0aGlzLm9iakNsYXNzW1wiX19jb2x1bW5zX19cIl0sIHZhbHVlKTtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlPGJvb2xlYW4+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhhdC5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWxSZXN1bHRbMF0sIHNxbFJlc3VsdFsxXSwgKHQ6IFNRTFRyYW5zYWN0aW9uLCByZXN1bHQ6IFNRTFJlc3VsdFNldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdC5pbnNlcnRJZCA9PSAxKTtcbiAgICAgICAgICAgICAgICB9LCAodCwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGF0LmZhaWwodCwgaW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgY29udmVydFRvTWV0YWRhdGEodmFsdWU6IFQpOiBUIHtcbiAgICAgICAgbGV0IHJlc3VsdDogVCA9IG5ldyB0aGlzLm9iakNsYXNzKCk7XG4gICAgICAgIHJlc3VsdFtcIl9fZGlmZl9fXCJdID0ge307XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB2YWx1ZVtrZXldO1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICByZXN1bHRbXCJfX2RpZmZfX1wiXVtrZXldID0gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmiafooYxzcWzor63lj6VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSDov5Tlm57lj5flvbHlk43ooYzmlbBcbiAgICAgKi9cbiAgICBleGVjU3FsKHNxbDogc3RyaW5nLCB2YWx1ZTogQXJyYXk8YW55Pik6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxudW1iZXI+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhhdC5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHQuZXhlY3V0ZVNxbChzcWwsIHZhbHVlLCAoYiwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0LnJvd3NBZmZlY3RlZCk7XG4gICAgICAgICAgICAgICAgfSwgdGhhdC5mYWlsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZmFpbCh0cmFuc2FjdGlvbjogU1FMVHJhbnNhY3Rpb24sIGVycm9yOiBTUUxFcnJvcik6IGJvb2xlYW4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbn1cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHk8VCBleHRlbmRzIEJhc2VNZXRhZGF0YT4ob2JqQ2xhc3M6IHsgbmV3KCk6IFQgfSkge1xuICAgIGxldCBfZW50aXR5ID0gbmV3IEVudGl0eTxUPihvYmpDbGFzcyk7XG4gICAgcmV0dXJuIF9lbnRpdHk7XG59IiwiaW1wb3J0IHsgQ29sdW1uSW5mbyB9IGZyb20gXCIuLi9tb2RlbC9Db2x1bW5JbmZvXCI7XG5pbXBvcnQgeyBDb2x1bW5UeXBlIH0gZnJvbSBcIi4uL21vZGVsL0NvbHVtblR5cGVcIjtcblxuZXhwb3J0IGNsYXNzIEdlbmVyYXRlU3FsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOWIm+W7uuihqHNxbOivreWPpVxuICAgICAqL1xuICAgIGdDcmVhdGVUYWJsZVNxbCh0YWJsZU5hbWU6IHN0cmluZywgY29sdW1uRGVmOiBBcnJheTxDb2x1bW5JbmZvPik6IHN0cmluZyB7XG4gICAgICAgIGxldCBzcWwgPSBcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIFwiICsgdGFibGVOYW1lO1xuICAgICAgICBsZXQgY29sU3FsID0gW107XG4gICAgICAgIGlmIChjb2x1bW5EZWYgaW5zdGFuY2VvZiBBcnJheSAmJiBjb2x1bW5EZWYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbkRlZi5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gY29sdW1uRGVmW2luZGV4XTtcbiAgICAgICAgICAgICAgICBsZXQgX3R5cGU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xuICAgICAgICAgICAgICAgIGlmICgoZWxlbWVudC50eXBlICYgQ29sdW1uVHlwZS5TVFJJTkcpID09PSBDb2x1bW5UeXBlLlNUUklORykge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuTlVNQkVSKSA9PT0gQ29sdW1uVHlwZS5OVU1CRVIpIHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGUgPSBcIk5VTUVSSUNcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLkJPT0xFQU4pID09PSBDb2x1bW5UeXBlLkJPT0xFQU4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGUgPSBcIklOVEVHRVJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLkFSUkFZKSA9PT0gQ29sdW1uVHlwZS5BUlJBWSkge1xuICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IFwiVEVYVFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSAmIENvbHVtblR5cGUuQU5ZKSA9PT0gQ29sdW1uVHlwZS5BTlkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGUgPSBcIlRFWFRcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKChlbGVtZW50LnR5cGUgJiBDb2x1bW5UeXBlLlBSSU1BUlkpID09PSBDb2x1bW5UeXBlLlBSSU1BUlkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3R5cGUgKz0gXCIgUFJJTUFSWSBLRVkgTk9UIE5VTExcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sU3FsLnB1c2goZWxlbWVudC5uYW1lICsgJyAnICsgX3R5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgc3FsID0gc3FsICsgXCIgKFwiICsgY29sU3FsLmpvaW4oJywgJykgKyBcIilcIjtcbiAgICAgICAgcmV0dXJuIHNxbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnlJ/miJDmj5LlhaXorrDlvZVzcWzor63lj6VcbiAgICAgKi9cbiAgICBnSW5zZXJ0U3FsKHRhYmxlTmFtZTogc3RyaW5nLCBjb2x1bW5zRGVmOiBhbnksIHZhbHVlOiBhbnkpOiBbc3RyaW5nLCBBcnJheTxhbnk+XSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHNxbDogc3RyaW5nID0gYGluc2VydCBpbnRvICR7dGFibGVOYW1lfSBgO1xuICAgICAgICBsZXQgY29scyA9IFtdO1xuICAgICAgICBsZXQgcXMgPSBbXTtcbiAgICAgICAgaWYgKGNvbHVtbnNEZWYgaW5zdGFuY2VvZiBBcnJheSAmJiBjb2x1bW5zRGVmLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBwYXJhbTogQXJyYXk8YW55PiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvbHVtbnNEZWYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gY29sdW1uc0RlZltpbmRleF07XG4gICAgICAgICAgICAgICAgY29scy5wdXNoKGNvbC5uYW1lKTtcbiAgICAgICAgICAgICAgICBxcy5wdXNoKCc/Jyk7XG4gICAgICAgICAgICAgICAgcGFyYW0ucHVzaCh2YWx1ZVtjb2wubmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3FsICs9IFwiIChcIiArIGNvbHMuam9pbignLCcpICsgXCIpIHZhbHVlcyAoXCIgKyBxcy5qb2luKCcsJykgKyBcIilcIjtcbiAgICAgICAgICAgIGxldCB0dXBsZTogW3N0cmluZywgQXJyYXk8YW55Pl0gPSBbc3FsLCBwYXJhbV07XG4gICAgICAgICAgICByZXR1cm4gdHVwbGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICog55Sf5oiQ5pu05paw6K6w5b2Vc3Fs6K+t5Y+lXG4gICAgKi9cbiAgICBnVXBkYXRlU3FsKHRhYmxlTmFtZTogc3RyaW5nLCBwcmltYXJ5S2V5TmFtZTogc3RyaW5nLCBwcmltYXJ5S2V5VmFsdWU6IHN0cmluZywgZGlmZlZhbHVlOiBhbnkpOiBbc3RyaW5nLCBBcnJheTxhbnk+XSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgbGV0IHNxbDogc3RyaW5nID0gYHVwZGF0ZSAke3RhYmxlTmFtZX0gc2V0IGA7XG4gICAgICAgIGxldCBjb2xzID0gW107XG4gICAgICAgIGxldCBwYXJhbTogQXJyYXk8YW55PiA9IFtdO1xuICAgICAgICBpZiAoZGlmZlZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRpZmZWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChkaWZmVmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09IHByaW1hcnlLZXlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZGlmZlZhbHVlW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGNvbHMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzcWwgKz0gY29scy5qb2luKFwiID0gPyAsIFwiKSArIFwiID0gPyB3aGVyZSBcIiArIHByaW1hcnlLZXlOYW1lICsgXCIgPSBcIiArIFwiP1wiICsgXCIgO1wiO1xuICAgICAgICBwYXJhbS5wdXNoKHByaW1hcnlLZXlWYWx1ZSk7XG4gICAgICAgIGxldCB0dXBsZTogW3N0cmluZywgQXJyYXk8YW55Pl0gPSBbc3FsLCBwYXJhbV07XG4gICAgICAgIHJldHVybiB0dXBsZTtcblxuICAgIH1cblxuICAgIGdXaGVyZVNxbCh3aGVyZVNxbDogc3RyaW5nLCBwYXJhbTogYW55KTogW3N0cmluZywgQXJyYXk8YW55Pl0ge1xuIFxuICAgICAgICAvLyB0aGlzLmdXaGVyZVNxbChtID0+IG0uaWQgPT0gc3RyKSAvL+aKiuWPmOmHjyBzdHIg55qE5YC85Y+W5Ye65p2l5bCx5Y+v5Lul6L2s5o2i5oiQc3Fs5LqGXG4gICAgICAgIC8vIOato+WImeWPluadoeS7tlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiLyoqXG4gKiDnlKjkuo7lrprkuYnooajnmoToo4XppbDlmahcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYmxlKGRiTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdGFyZ2V0W1wiX19kYl9uYW1lX19cIl0gPSBkYk5hbWU7XG4gICAgICAgIHRhcmdldFtcIl9fdGFibGVfbmFtZV9fXCJdID0gdGFyZ2V0Lm5hbWU7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBlbnVtIENvbHVtblR5cGUge1xuICAgIEJPT0xFQU4gPSAyLFxuICAgIE5VTUJFUiA9IDQsXG4gICAgU1RSSU5HID0gOCxcbiAgICBBUlJBWSA9IDE2LFxuICAgIERBVEUgPSAzMixcbiAgICBBTlkgPSA2NCxcbiAgICBQUklNQVJZID0gMTI4XG59Il0sInNvdXJjZVJvb3QiOiIifQ==