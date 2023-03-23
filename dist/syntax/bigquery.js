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
exports.bigqueryMap = void 0;
var print_utils_1 = require("../print_utils");
exports.bigqueryMap = {
    bigquery_options: function (print) { return print.spaced(["optionsKw", "options"]); },
    bigquery_option_default_collate: function (print) {
        return print.spaced(["defaultCollateKw", "collation"]);
    },
    // ROW ACCESS POLICY
    create_row_access_policy_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray([
            print.spaced([
                "createKw",
                "orReplaceKw",
                "rowAccessPolicyKw",
                "ifNotExistsKw",
                "name",
                "onKw",
                "table",
            ])
        ], print("clauses"), true));
    },
    row_access_policy_grant_clause: function (print) {
        return print.spaced(["grantToKw", "grantees"]);
    },
    row_access_policy_filter_clause: function (print) {
        return print.spaced(["filterUsingKw", "expr"]);
    },
    drop_row_access_policy_stmt: function (print) {
        return print.spaced([
            "dropKw",
            "allKw",
            "rowAccessPolicyKw",
            "ifExistsKw",
            "name",
            "onKw",
            "table",
        ]);
    },
    // CAPACITY
    create_capacity_stmt: function (print) { return [
        print.spaced(["createKw", "capacityKw", "name"]),
        print_utils_1.hardline,
        print("options"),
    ]; },
    drop_capacity_stmt: function (print) {
        return print.spaced(["dropKw", "capacityKw", "ifExistsKw", "name"]);
    },
    // RESERVATION
    create_reservation_stmt: function (print) { return [
        print.spaced(["createKw", "reservationKw", "name"]),
        print_utils_1.hardline,
        print("options"),
    ]; },
    drop_reservation_stmt: function (print) {
        return print.spaced(["dropKw", "reservationKw", "ifExistsKw", "name"]);
    },
    // ASSIGNMENT
    create_assignment_stmt: function (print) { return [
        print.spaced(["createKw", "assignmentKw", "name"]),
        print_utils_1.hardline,
        print("options"),
    ]; },
    drop_assignment_stmt: function (print) {
        return print.spaced(["dropKw", "assignmentKw", "ifExistsKw", "name"]);
    },
    // ALTER ORGANIZATION
    alter_organization_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [print.spaced("alterOrganizationKw"), print("actions")]);
    },
    // ALTER PROJECT
    alter_project_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [
            print.spaced(["alterProjectKw", "name"]),
            print("actions"),
        ]);
    },
    alter_bi_capacity_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [
            print.spaced(["alterBiCapacityKw", "name"]),
            print("actions"),
        ]);
    },
    alter_capacity_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [
            print.spaced(["alterCapacityKw", "name"]),
            print("actions"),
        ]);
    },
    alter_reservation_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [
            print.spaced(["alterReservationKw", "name"]),
            print("actions"),
        ]);
    },
    // ASSERT
    assert_stmt: function (print) { return print.spaced(["assertKw", "expr", "as"]); },
    // EXPORT
    export_data_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray(__spreadArray([
            print.spaced("exportDataKw")
        ], print.spaced(["withConnection"]), true), [
            print.spaced("options"),
            print.spaced("as"),
        ], false));
    },
    // LOAD
    load_data_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray([
            print.spaced(["loadDataKw", "intoKw", "table", "columns"])
        ], print("clauses"), true));
    },
    from_files_options: function (print) { return print.spaced(["fromFilesKw", "options"]); },
};
