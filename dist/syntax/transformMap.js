"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformMap = void 0;
var alias_1 = require("./alias");
var alter_table_1 = require("./alter_table");
var analyze_1 = require("./analyze");
var base_1 = require("./base");
var bigquery_1 = require("./bigquery");
var constraint_1 = require("./constraint");
var create_table_1 = require("./create_table");
var data_type_1 = require("./data_type");
var dcl_1 = require("./dcl");
var delete_1 = require("./delete");
var drop_table_1 = require("./drop_table");
var explain_1 = require("./explain");
var expr_1 = require("./expr");
var frame_1 = require("./frame");
var function_1 = require("./function");
var index_1 = require("./index");
var insert_1 = require("./insert");
var merge_1 = require("./merge");
var prepared_statements_1 = require("./prepared_statements");
var procedural_language_1 = require("./procedural_language");
var procedure_1 = require("./procedure");
var proc_clause_1 = require("./proc_clause");
var program_1 = require("./program");
var schema_1 = require("./schema");
var select_1 = require("./select");
var sqlite_1 = require("./sqlite");
var transaction_1 = require("./transaction");
var trigger_1 = require("./trigger");
var truncate_1 = require("./truncate");
var update_1 = require("./update");
var view_1 = require("./view");
exports.transformMap = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, alias_1.aliasMap), alter_table_1.alterTableMap), analyze_1.analyzeMap), base_1.baseMap), bigquery_1.bigqueryMap), constraint_1.constraintMap), create_table_1.createTableMap), data_type_1.dataTypeMap), dcl_1.dclMap), delete_1.deleteMap), drop_table_1.dropTableMap), explain_1.explainMap), expr_1.exprMap), frame_1.frameMap), function_1.functionMap), index_1.indexMap), insert_1.insertMap), merge_1.mergeMap), prepared_statements_1.preparedStatementsMap), proc_clause_1.procClauseMap), procedural_language_1.proceduralLanguageMap), procedure_1.procedureMap), program_1.programMap), schema_1.schemaMap), select_1.selectMap), sqlite_1.sqliteMap), transaction_1.transactionMap), trigger_1.triggerMap), truncate_1.truncateMap), update_1.updateMap), view_1.viewMap);
