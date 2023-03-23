"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alterTableMap = void 0;
var print_utils_1 = require("../print_utils");
exports.alterTableMap = {
    alter_table_stmt: function (print) { return [
        print.spaced(["alterTableKw", "ifExistsKw", "table"]),
        print_utils_1.hardline,
        print("actions"),
    ]; },
    alter_action_rename_table: function (print) { return print.spaced(["renameKw", "newName"]); },
    alter_action_rename_column: function (print) {
        return print.spaced(["renameKw", "ifExistsKw", "oldName", "toKw", "newName"]);
    },
    alter_action_add_column: function (print) {
        return print.spaced(["addKw", "ifNotExistsKw", "column"]);
    },
    alter_action_drop_column: function (print) {
        return print.spaced(["dropKw", "ifExistsKw", "column"]);
    },
    alter_action_set_options: function (print) { return print.spaced(["setKw", "options"]); },
    alter_action_set_default_collate: function (print) {
        return print.spaced(["setDefaultCollateKw", "collation"]);
    },
    alter_action_alter_column: function (print) { return [
        print.spaced(["alterKw", "ifExistsKw", "column"]),
        print_utils_1.hardline,
        print("action"),
    ]; },
    alter_action_set_default: function (print) { return print.spaced(["setDefaultKw", "expr"]); },
    alter_action_drop_default: function (print) { return print.spaced("dropDefaultKw"); },
    alter_action_drop_not_null: function (print) { return print.spaced("dropNotNullKw"); },
    alter_action_set_data_type: function (print) {
        return print.spaced(["setDataTypeKw", "dataType"]);
    },
};
