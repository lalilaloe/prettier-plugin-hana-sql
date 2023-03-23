"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constraintMap = void 0;
var print_utils_1 = require("../print_utils");
exports.constraintMap = {
    constraint: function (print, node) {
        if (node.name) {
            return (0, print_utils_1.group)([
                print("name"),
                (0, print_utils_1.indent)([print_utils_1.line, printUnnamedConstraint(print, node)]),
            ]);
        }
        else {
            return printUnnamedConstraint(print, node);
        }
    },
    constraint_name: function (print) { return print.spaced(["constraintKw", "name"]); },
    constraint_deferrable: function (print) {
        return print.spaced(["deferrableKw", "initiallyKw"]);
    },
    constraint_not_null: function (print) {
        return (0, print_utils_1.group)(print.spaced(["notNullKw", "onConflict"]));
    },
    constraint_default: function (print) { return (0, print_utils_1.group)(print.spaced(["defaultKw", "expr"])); },
    constraint_primary_key: function (print) {
        return (0, print_utils_1.group)(print.spaced(["primaryKeyKw", "orderKw", "columns", "onConflict"]));
    },
    constraint_unique: function (print) {
        return (0, print_utils_1.group)(print.spaced(["uniqueKw", "columns", "onConflict"]));
    },
    constraint_check: function (print) { return (0, print_utils_1.group)(print.spaced(["checkKw", "expr"])); },
    constraint_collate: function (print) {
        return (0, print_utils_1.group)(print.spaced(["collateKw", "collation"]));
    },
    constraint_foreign_key: function (print) {
        return (0, print_utils_1.group)(print.spaced(["foreignKeyKw", "columns", "references"]));
    },
    references_specification: function (print, node) {
        var baseDoc = print.spaced(["referencesKw", "table", "columns"]);
        if (node.options.length > 0) {
            return (0, print_utils_1.group)([
                baseDoc,
                (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.join)(print_utils_1.hardline, print("options"))]),
            ]);
        }
        else {
            return baseDoc;
        }
    },
    referential_action: function (print) { return print.spaced(["onKw", "eventKw", "actionKw"]); },
    referential_match: function (print) { return print.spaced(["matchKw", "typeKw"]); },
    constraint_generated: function (print) {
        return print.spaced(["generatedKw", "asKw", "expr", "storageKw"]);
    },
    constraint_auto_increment: function (print) { return print("autoIncrementKw"); },
    on_conflict_clause: function (print) { return print.spaced(["onConflictKw", "resolutionKw"]); },
};
var printUnnamedConstraint = function (print, node) {
    if (node.deferrable) {
        return (0, print_utils_1.group)([
            print("constraint"),
            (0, print_utils_1.indent)([print_utils_1.hardline, print("deferrable")]),
        ]);
    }
    else {
        return print("constraint");
    }
};
