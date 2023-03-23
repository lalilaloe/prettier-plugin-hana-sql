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
exports.createTableMap = void 0;
var node_utils_1 = require("../node_utils");
var print_utils_1 = require("../print_utils");
exports.createTableMap = {
    create_table_stmt: function (print, node) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        return [
            print.spaced([
                "createKw",
                "orReplaceKw",
                "temporaryKw",
                "externalKw",
                "snapshotKw",
                "virtualKw",
                "tableKw",
                "ifNotExistsKw",
                "name",
                "columns",
            ]),
            printClauses.apply(void 0, __spreadArray([print, node], rest, false)),
            node.options ? [print_utils_1.line, (0, print_utils_1.group)(print("options"))] : [],
        ];
    },
    column_definition: function (print) {
        return print.spaced(["name", "dataType", "constraints"]);
    },
    table_option: function (print) { return print.spaced(["name"]); },
    create_table_like_clause: function (print) { return print.spaced(["likeKw", "name"]); },
    create_table_copy_clause: function (print) { return print.spaced(["copyKw", "name"]); },
    create_table_clone_clause: function (print) { return print.spaced(["cloneKw", "table"]); },
    with_partition_columns_clause: function (print) {
        return print.spaced(["withPartitionColumnsKw", "columns"]);
    },
    create_table_using_clause: function (print) { return print.spaced(["usingKw", "module"]); },
};
var printClauses = function (print, node) {
    if (node.clauses.length === 1 && (0, node_utils_1.isAsClause)(node.clauses[0])) {
        return [" ", print("clauses")];
    }
    else if (node.clauses.length > 0) {
        return [print_utils_1.line, (0, print_utils_1.join)(print_utils_1.line, print("clauses"))];
    }
    else {
        return [];
    }
};
