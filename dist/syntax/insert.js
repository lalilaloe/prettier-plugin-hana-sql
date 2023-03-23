"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMap = void 0;
var print_utils_1 = require("../print_utils");
exports.insertMap = {
    insert_stmt: function (print) { return (0, print_utils_1.join)(print_utils_1.hardline, print("clauses")); },
    insert_clause: function (print, node) {
        return (0, print_utils_1.group)([
            print.spaced(["insertKw", "orAction", "intoKw", "table"]),
            node.columns ? (0, print_utils_1.indent)([print_utils_1.hardline, print("columns")]) : [],
        ]);
    },
    values_clause: function (print) {
        return (0, print_utils_1.group)([print("valuesKw"), (0, print_utils_1.indent)([print_utils_1.hardline, print("values")])]);
    },
    or_alternate_action: function (print) { return print.spaced(["orKw", "actionKw"]); },
    default: function (print) { return print("defaultKw"); },
    default_values: function (print) { return print.spaced("defaultValuesKw"); },
    upsert_clause: function (print) {
        return print.spaced(["onConflictKw", "columns", "where", "doKw", "action"]);
    },
    upsert_action_nothing: function (print) { return print("nothingKw"); },
    upsert_action_update: function (print) { return [
        print("updateKw"),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.join)(print_utils_1.hardline, print(["set", "where"]))]),
    ]; },
};
