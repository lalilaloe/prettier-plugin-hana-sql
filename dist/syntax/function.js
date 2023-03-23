"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionMap = void 0;
var print_utils_1 = require("../print_utils");
var node_utils_1 = require("../node_utils");
exports.functionMap = {
    create_function_stmt: function (print, node) { return [
        print.spaced([
            "createKw",
            "orReplaceKw",
            "temporaryKw",
            "tableKw",
            "functionKw",
            "ifNotExistsKw",
            "name",
        ]),
        print("params"),
        hasOnlyAsClause(node)
            ? [" ", (0, print_utils_1.group)(print("clauses"))]
            : [
                print_utils_1.hardline,
                (0, print_utils_1.join)(print_utils_1.hardline, print("clauses").map(function (cls) { return (0, print_utils_1.group)(cls); })),
            ],
    ]; },
    function_param: function (print) { return print.spaced(["name", "dataType"]); },
    drop_function_stmt: function (print) {
        return print.spaced(["dropKw", "tableKw", "functionKw", "ifExistsKw", "name"]);
    },
};
var hasOnlyAsClause = function (node) {
    return node.clauses.length === 1 && (0, node_utils_1.isAsClause)(node.clauses[0]);
};
