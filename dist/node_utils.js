"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLanguageClause = exports.isCreateFunctionStmt = exports.isListExpr = exports.isParenExpr = exports.isAsClause = exports.isArraySubscript = exports.isStringLiteral = exports.isJsonLiteral = exports.isEmpty = exports.isKeyword = exports.isCreateTableStmt = exports.isFuncArgs = exports.isFuncCall = exports.isValuesClause = exports.isProgram = void 0;
var utils_1 = require("./utils");
var is = function (type) {
    return function (node) {
        return (0, utils_1.isObject)(node) && node.type === type;
    };
};
exports.isProgram = is("program");
exports.isValuesClause = is("values_clause");
exports.isFuncCall = is("func_call");
exports.isFuncArgs = is("func_args");
exports.isCreateTableStmt = is("create_table_stmt");
exports.isKeyword = is("keyword");
exports.isEmpty = is("empty");
exports.isJsonLiteral = is("json_literal");
exports.isStringLiteral = is("string_literal");
exports.isArraySubscript = is("array_subscript");
exports.isAsClause = is("as_clause");
exports.isParenExpr = is("paren_expr");
exports.isListExpr = is("list_expr");
exports.isCreateFunctionStmt = is("create_function_stmt");
exports.isLanguageClause = is("language_clause");
