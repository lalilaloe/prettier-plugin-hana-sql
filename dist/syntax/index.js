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
exports.indexMap = void 0;
var print_utils_1 = require("../print_utils");
exports.indexMap = {
    create_index_stmt: function (print, node) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray([
            print.spaced([
                "createKw",
                "indexTypeKw",
                "indexKw",
                "ifNotExistsKw",
                "name",
                "onKw",
                "table",
                "columns",
            ])
        ], (node.clauses.length > 0 ? [(0, print_utils_1.join)(print_utils_1.hardline, print("clauses"))] : []), true));
    },
    drop_index_stmt: function (print) {
        return print.spaced([
            "dropKw",
            "indexTypeKw",
            "indexKw",
            "ifExistsKw",
            "indexes",
            "onKw",
            "table",
        ]);
    },
    verbose_all_columns: function (print) { return print.spaced("allColumnsKw"); },
};
