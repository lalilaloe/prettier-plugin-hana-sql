"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procClauseMap = void 0;
var node_utils_1 = require("../node_utils");
var print_utils_1 = require("../print_utils");
exports.procClauseMap = {
    returns_clause: function (print) { return print.spaced(["returnsKw", "dataType"]); },
    determinism_clause: function (print) { return print.spaced("deterministicKw"); },
    language_clause: function (print) { return print.spaced(["languageKw", "name"]); },
    as_clause: function (print, node) {
        if ((0, node_utils_1.isStringLiteral)(node.expr)) {
            return print.spaced(["asKw", "expr"]);
        }
        return [print("asKw"), (0, print_utils_1.indent)([print_utils_1.hardline, print("expr")])];
    },
    with_connection_clause: function (print) {
        return print.spaced(["withConnectionKw", "connection"]);
    },
};
