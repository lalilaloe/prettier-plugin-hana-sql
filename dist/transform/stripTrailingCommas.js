"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripTrailingCommas = void 0;
var sql_parser_cst_1 = require("sql-parser-cst");
var node_utils_1 = require("../node_utils");
var utils_1 = require("../utils");
// Removes trailing comma from SELECT clauses
var stripTrailingCommas = function (cst) {
    // Trailing comma is represented as an empty element at the end of column list
    var removeLastEmptyColumn = (0, sql_parser_cst_1.cstVisitor)({
        select_clause: function (node) {
            if ((0, node_utils_1.isEmpty)((0, utils_1.last)(node.columns.items))) {
                node.columns.items = node.columns.items.slice(0, -1);
            }
        },
    });
    removeLastEmptyColumn(cst);
    return cst;
};
exports.stripTrailingCommas = stripTrailingCommas;
