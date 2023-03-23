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
exports.preparedStatementsMap = void 0;
var print_utils_1 = require("../print_utils");
exports.preparedStatementsMap = {
    execute_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray([
            (0, print_utils_1.group)([
                print.spaced(["executeKw", "immediateKw"]),
                (0, print_utils_1.indent)([print_utils_1.line, print("expr")]),
            ])
        ], print(["into", "using"]).map(function (clause) { return (0, print_utils_1.group)(clause); }), true));
    },
    execute_into_clause: function (print) { return print.spaced(["intoKw", "variables"]); },
    execute_using_clause: function (print) { return print.spaced(["usingKw", "values"]); },
};
