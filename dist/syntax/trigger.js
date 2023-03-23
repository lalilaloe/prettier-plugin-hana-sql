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
exports.triggerMap = void 0;
var print_utils_1 = require("../print_utils");
exports.triggerMap = {
    create_trigger_stmt: function (print, node) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray(__spreadArray(__spreadArray([
            print.spaced([
                "createKw",
                "temporaryKw",
                "triggerKw",
                "ifNotExistsKw",
                "name",
            ]),
            print("event")
        ], (node.forEachRowKw ? [print.spaced(["forEachRowKw"])] : []), true), (node.condition ? [print(["condition"])] : []), true), [
            print("body"),
        ], false));
    },
    trigger_event: function (print) {
        return (0, print_utils_1.group)([
            print.spaced(["timeKw", "eventKw", "ofKw"]),
            (0, print_utils_1.indent)([
                print_utils_1.line,
                (0, print_utils_1.join)(print_utils_1.line, __spreadArray(__spreadArray([], print(["columns"]), true), [print.spaced(["onKw", "table"])], false)),
            ]),
        ]);
    },
    trigger_condition: function (print) {
        return (0, print_utils_1.group)([print("whenKw"), (0, print_utils_1.indent)([print_utils_1.line, print("expr")])]);
    },
    drop_trigger_stmt: function (print) {
        return print.spaced(["dropTriggerKw", "ifExistsKw", "trigger"]);
    },
};
