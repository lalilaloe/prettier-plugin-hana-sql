"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processAliasAs = void 0;
var sql_parser_cst_1 = require("sql-parser-cst");
// Adds AS keyword to aliases if none exists
var processAliasAs = function (cst) {
    var mutateAliases = (0, sql_parser_cst_1.cstVisitor)({
        alias: function (node) {
            node.asKw = node.asKw || { type: "keyword", name: "AS", text: "AS" };
        },
    });
    mutateAliases(cst);
    return cst;
};
exports.processAliasAs = processAliasAs;
