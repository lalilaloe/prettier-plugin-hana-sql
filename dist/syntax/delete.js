"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMap = void 0;
var print_utils_1 = require("../print_utils");
exports.deleteMap = {
    delete_stmt: function (print) { return (0, print_utils_1.join)(print_utils_1.hardline, print("clauses")); },
    delete_clause: function (print) { return print.spaced(["deleteKw", "fromKw", "table"]); },
};
