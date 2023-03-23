"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteMap = void 0;
var print_utils_1 = require("../print_utils");
exports.sqliteMap = {
    attach_database_stmt: function (print) {
        return print.spaced(["attachKw", "databaseKw", "file", "asKw", "schema"]);
    },
    detach_database_stmt: function (print) {
        return print.spaced(["detachKw", "databaseKw", "schema"]);
    },
    vacuum_stmt: function (print) {
        return print.spaced(["vacuumKw", "schema", "intoKw", "file"]);
    },
    reindex_stmt: function (print) { return print.spaced(["reindexKw", "table"]); },
    pragma_stmt: function (print) { return print.spaced(["pragmaKw", "pragma"]); },
    pragma_assignment: function (print) { return (0, print_utils_1.join)(" = ", print(["name", "value"])); },
    pragma_func_call: function (print) { return print(["name", "args"]); },
};
