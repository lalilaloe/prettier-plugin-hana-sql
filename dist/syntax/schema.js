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
exports.schemaMap = void 0;
var print_utils_1 = require("../print_utils");
exports.schemaMap = {
    create_schema_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray([
            print.spaced(["createSchemaKw", "ifNotExistsKw", "name"])
        ], print("options"), true));
    },
    drop_schema_stmt: function (print) {
        return print.spaced(["dropSchemaKw", "ifExistsKw", "name", "behaviorKw"]);
    },
    alter_schema_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray([
            print.spaced(["alterSchemaKw", "ifExistsKw", "name"])
        ], print("actions"), true));
    },
};
