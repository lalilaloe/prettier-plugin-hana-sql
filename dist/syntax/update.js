"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMap = void 0;
var print_utils_1 = require("../print_utils");
exports.updateMap = {
    update_stmt: function (print) { return (0, print_utils_1.join)(print_utils_1.hardline, print("clauses")); },
    update_clause: function (print) {
        return print.spaced(["updateKw", "options", "orAction", "tables"]);
    },
    set_clause: function (print, node) {
        if (node.assignments.items.length > 1) {
            return [print("setKw"), (0, print_utils_1.indent)([print_utils_1.hardline, print("assignments")])];
        }
        else {
            return print.spaced(["setKw", "assignments"]);
        }
    },
    column_assignment: function (print) {
        return (0, print_utils_1.join)([" ", "=", " "], print(["column", "expr"]));
    },
};
