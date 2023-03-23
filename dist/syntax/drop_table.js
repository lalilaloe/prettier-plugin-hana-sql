"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dropTableMap = void 0;
exports.dropTableMap = {
    drop_table_stmt: function (print) {
        return print.spaced([
            "dropKw",
            "externalKw",
            "snapshotKw",
            "tableKw",
            "ifExistsKw",
            "tables",
        ]);
    },
};
