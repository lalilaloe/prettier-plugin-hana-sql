"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeMap = void 0;
var print_utils_1 = require("../print_utils");
exports.mergeMap = {
    merge_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.line, __spreadArray([
            print.spaced(["mergeKw", "intoKw", "target"]),
            print.spaced(["usingKw", "source"]),
            (0, print_utils_1.group)([print("onKw"), (0, print_utils_1.indent)([print_utils_1.line, print("condition")])])
        ], print("clauses").map(function (clause) { return (0, print_utils_1.group)(clause); }), true));
    },
    merge_when_clause: function (print, node) { return [
        (0, print_utils_1.group)([
            print.spaced(["whenKw", "matchedKw", "byKw"]),
            node.condition ? (0, print_utils_1.indent)([print_utils_1.line, print("condition")]) : [],
            [print_utils_1.line, print("thenKw")],
        ]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.group)(print("action"))]),
    ]; },
    merge_when_condition: function (print) { return print.spaced(["andKw", "expr"]); },
    merge_action_delete: function (print) { return print("deleteKw"); },
    merge_action_insert: function (print, node) { return [
        (0, print_utils_1.group)([
            print("insertKw"),
            node.columns ? (0, print_utils_1.indent)([print_utils_1.hardline, print("columns")]) : [],
        ]),
        print_utils_1.line,
        (0, print_utils_1.group)(print("values")),
    ]; },
    merge_action_insert_row_clause: function (print) { return print("rowKw"); },
    merge_action_update: function (print) { return print.spaced(["updateKw", "set"]); },
};
