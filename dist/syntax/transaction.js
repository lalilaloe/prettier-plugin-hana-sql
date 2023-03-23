"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionMap = void 0;
exports.transactionMap = {
    start_transaction_stmt: function (print) {
        return print.spaced(["startKw", "behaviorKw", "transactionKw"]);
    },
    commit_transaction_stmt: function (print) {
        return print.spaced(["commitKw", "transactionKw"]);
    },
    rollback_transaction_stmt: function (print) {
        return print.spaced(["rollbackKw", "transactionKw", "savepoint"]);
    },
    rollback_to_savepoint: function (print) {
        return print.spaced(["toKw", "savepointKw", "savepoint"]);
    },
    savepoint_stmt: function (print) { return print.spaced(["savepointKw", "savepoint"]); },
    release_savepoint_stmt: function (print) {
        return print.spaced(["releaseKw", "savepointKw", "savepoint"]);
    },
};
