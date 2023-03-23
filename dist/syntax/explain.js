"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.explainMap = void 0;
var print_utils_1 = require("../print_utils");
exports.explainMap = {
    explain_stmt: function (print) {
        return (0, print_utils_1.group)([
            print.spaced(["explainKw", "queryPlanKw"]),
            (0, print_utils_1.indent)([print_utils_1.line, print("statement")]),
        ]);
    },
};
