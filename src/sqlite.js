"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="@types/websql" />
/**
 * 列类型
 * */
var ColumnType;
(function (ColumnType) {
    /**布尔型 */
    ColumnType[ColumnType["BOOLEAN"] = 2] = "BOOLEAN";
    /**数值型 */
    ColumnType[ColumnType["NUMBER"] = 4] = "NUMBER";
    /**字符串型 */
    ColumnType[ColumnType["STRING"] = 8] = "STRING";
    /**数组型 */
    ColumnType[ColumnType["ARRAY"] = 16] = "ARRAY";
    /**日期时间型 */
    ColumnType[ColumnType["DATE"] = 32] = "DATE";
    /**任意类型 */
    ColumnType[ColumnType["ANY"] = 64] = "ANY";
    /**主键型 */
    ColumnType[ColumnType["PRIMARY"] = 128] = "PRIMARY";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
/**列信息 */
var ColumnInfo = /** @class */ (function () {
    function ColumnInfo() {
    }
    return ColumnInfo;
}());
exports.ColumnInfo = ColumnInfo;
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
exports.column = column;
/**
 * 用于定义表的装饰器
 */
function table(dbName) {
    return function (target) {
        target["__db_name__"] = dbName;
        target["__table_name__"] = target.name;
    };
}
exports.table = table;
/**
 * 生成sql语句
 */
var GenerateSql = /** @class */ (function () {
    function GenerateSql() {
    }
    /**
     * 生成创建表sql语句
     */
    GenerateSql.prototype.gCreateTableSql = function (__tableName, columnDef) {
        var sql = "CREATE TABLE IF NOT EXISTS " + __tableName;
        var colSql = [];
        if (columnDef instanceof Array && columnDef.length > 0) {
            for (var index = 0; index < columnDef.length; index++) {
                var element = columnDef[index];
                var _type = void 0;
                _type = "TEXT";
                if ((element.type & ColumnType.STRING) === ColumnType.STRING) {
                    _type = "TEXT";
                }
                if ((element.type & ColumnType.NUMBER) === ColumnType.NUMBER) {
                    _type = "NUMERIC";
                }
                if ((element.type & ColumnType.BOOLEAN) === ColumnType.BOOLEAN) {
                    _type = "INTEGER";
                }
                if ((element.type & ColumnType.ARRAY) === ColumnType.ARRAY) {
                    _type = "TEXT";
                }
                if ((element.type & ColumnType.ANY) === ColumnType.ANY) {
                    _type = "TEXT";
                }
                if ((element.type & ColumnType.PRIMARY) === ColumnType.PRIMARY) {
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
    GenerateSql.prototype.gInsertSql = function (__tableName, __columnsDef, value) {
        var that = this;
        var sql = "insert into " + __tableName + " ";
        var cols = [];
        var qs = [];
        if (__columnsDef instanceof Array && __columnsDef.length > 0) {
            var param = [];
            for (var index = 0; index < __columnsDef.length; index++) {
                var col = __columnsDef[index];
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
    GenerateSql.prototype.gUpdateSql = function (__tableName, primaryKeyName, primaryKeyValue, diffValue) {
        var that = this;
        var sql = "update " + __tableName + " set ";
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
exports.GenerateSql = GenerateSql;
/**
 * 由实体类继承该类，操作sqlite
 * */
var Table = /** @class */ (function () {
    function Table() {
        this.__columnsDef = this.constructor["__columns__"];
        this.__primaryColDef = this.__columnsDef.find(function (m) { return (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY; });
        this.__tableName = this.constructor["__table_name__"];
        if (this.__primaryColDef == null) {
            throw this.__tableName + " \u5B9E\u4F53\u672A\u5B9A\u4E49\u4E3B\u952E\uFF0C\b\b\u6BCF\u4E2A\u5B9E\u4F53\u5FC5\u987B\u5B9A\u4E49\u4E00\u4E2A\u4E3B\u952E\uFF0C\u4E14\u53EA\u6709\u4E00\u4E2A\uFF0C\u4F8B\u5982\uFF1A@column(ColumnType.STRING | ColumnType.PRIMARY)";
        }
    }
    return Table;
}());
exports.Table = Table;
var DbContext = /** @class */ (function () {
    function DbContext(objClass) {
        this.objClass = objClass;
        this.gSql = new GenerateSql();
        this.__tableName = this.objClass["__table_name__"];
        this.dbName = this.objClass["__db_name__"];
        this.__columnsDef = this.objClass["__columns__"];
        this.db = window.openDatabase(this.dbName, '1.0.0', '', 65536 * 10);
    }
    /**
     * 查询表的所有记录
     * */
    DbContext.prototype.fromSql = function (sql, value) {
        return __awaiter(this, void 0, void 0, function () {
            var that, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        promise = new Promise(function (resolve) {
                            that.db.transaction(function (t) {
                                t.executeSql(sql, value, function (b, result) {
                                    var datas = [];
                                    if (result.rows != null && result.rows.length > 0) {
                                        for (var index = 0; index < result.rows.length; index++) {
                                            var element = result.rows[index];
                                            datas.push(that.convertToMetadata(element));
                                        }
                                    }
                                    resolve(datas);
                                }, that.fail);
                            });
                        });
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    /**
     * 数据库表是否存在记录，primaryValue是记录主键值
     */
    DbContext.prototype.exist = function (primaryValue) {
        return __awaiter(this, void 0, void 0, function () {
            var that, primaryCol, sql, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        primaryCol = this.__columnsDef.find(function (m) { return (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY; });
                        sql = "select * from " + this.__tableName + " where " + primaryCol.name + " = ? ;";
                        promise = new Promise(function (resolve) {
                            that.db.transaction(function (t) {
                                t.executeSql(sql, [primaryValue], function (b, result) {
                                    resolve(result.rows != null && result.rows.length > 0);
                                }, that.fail);
                            });
                        });
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    /**
     * 插入记录
     * */
    DbContext.prototype.insert = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var sqlResult, that, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sqlResult = this.gSql.gInsertSql(this.__tableName, this.objClass["__columns__"], value);
                        that = this;
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
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
                }
            });
        });
    };
    /**
     * 修改记录
     * */
    DbContext.prototype.update = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var primaryCol, sqlResult, that, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        primaryCol = this.__columnsDef.find(function (m) { return (m.type & ColumnType.PRIMARY) == ColumnType.PRIMARY; });
                        sqlResult = this.gSql.gUpdateSql(this.__tableName, primaryCol.name, value[primaryCol.name], value);
                        that = this;
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
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
                }
            });
        });
    };
    /**执行sql语句 */
    DbContext.prototype.execSql = function (sql, value) {
        return __awaiter(this, void 0, void 0, function () {
            var that, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        promise = new Promise(function (resolve) {
                            that.db.transaction(function (t) {
                                t.executeSql(sql, value, function (b, result) {
                                    resolve(result.rowsAffected);
                                }, that.fail);
                            });
                        });
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    DbContext.prototype.fail = function (transaction, error) {
        console.error(error.message);
        return true;
    };
    /**
     * 初始
     * */
    DbContext.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createTable(this.__columnsDef)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建表
     * */
    DbContext.prototype.createTable = function (columns) {
        return __awaiter(this, void 0, void 0, function () {
            var that, promise;
            return __generator(this, function (_a) {
                that = this;
                promise = new Promise(function (resolve) {
                    that.db.transaction(function (t) {
                        t.executeSql(that.gSql.gCreateTableSql(that.__tableName, columns), [], function (t, result) {
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
    /**
     * 转化到实体元数据
     * */
    DbContext.prototype.convertToMetadata = function (value) {
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
    return DbContext;
}());
exports.DbContext = DbContext;
var sqlite = /** @class */ (function () {
    function sqlite() {
    }
    /**
     * 查询表的所有记录
     **/
    sqlite.fromSql = function (tableInstance, sql, value) {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new DbContext(tableInstance.constructor);
                        return [4 /*yield*/, context.fromSql(sql, value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 数据库表是否存在记录，primaryValue是记录主键值
     */
    sqlite.exist = function (tableInstance, primaryValue) {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new DbContext(tableInstance.constructor);
                        return [4 /*yield*/, context.exist(primaryValue)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 插入记录
     * */
    sqlite.insert = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new DbContext(value.constructor);
                        return [4 /*yield*/, context.insert(value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 修改记录
     * */
    sqlite.update = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new DbContext(value.constructor);
                        return [4 /*yield*/, context.update(value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**执行sql语句 */
    sqlite.execSql = function (tableInstance, sql, value) {
        return __awaiter(this, void 0, void 0, function () {
            var context;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context = new DbContext(tableInstance.constructor);
                        return [4 /*yield*/, context.execSql(sql, value)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return sqlite;
}());
exports.sqlite = sqlite;
