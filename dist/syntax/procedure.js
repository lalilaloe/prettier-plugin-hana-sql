"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.procedureMap = void 0;
var print_utils_1 = require("../print_utils");
exports.procedureMap = {
    create_procedure_stmt: function (print, node) { return [
        print.spaced([
            "createKw",
            "orReplaceKw",
            "procedureKw",
            "ifNotExistsKw",
            "name",
        ]),
        print("params"),
        print_utils_1.hardline,
        (0, print_utils_1.join)(print_utils_1.hardline, print("clauses").map(function (clause) { return (0, print_utils_1.group)(clause); })),
    ]; },
    procedure_param: function (print) { return print.spaced(["mode", "name", "dataType"]); },
    drop_procedure_stmt: function (print) {
        return print.spaced(["dropKw", "procedureKw", "ifExistsKw", "name"]);
    },
};
