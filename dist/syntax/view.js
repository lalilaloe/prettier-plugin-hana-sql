"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewMap = void 0;
var print_utils_1 = require("../print_utils");
exports.viewMap = {
    create_view_stmt: function (print, node) {
        var hasOnlyAsClause = node.clauses.length === 1;
        var hasManyClauses = node.clauses.length > 1;
        return [
            print.spaced([
                "createKw",
                "orReplaceKw",
                "temporaryKw",
                "materializedKw",
                "viewKw",
                "ifNotExistsKw",
                "name",
                "columns",
            ]),
            hasOnlyAsClause ? [" ", print("clauses")] : [],
            hasManyClauses ? [print_utils_1.hardline, (0, print_utils_1.join)(print_utils_1.hardline, print("clauses"))] : [],
        ];
    },
    drop_view_stmt: function (print) {
        return print.spaced(["dropKw", "materializedKw", "viewKw", "ifExistsKw", "views"]);
    },
    alter_view_stmt: function (print) { return [
        print.spaced(["alterKw", "materializedKw", "viewKw", "ifExistsKw", "name"]),
        print_utils_1.hardline,
        (0, print_utils_1.join)(print_utils_1.hardline, print("actions")),
    ]; },
};
