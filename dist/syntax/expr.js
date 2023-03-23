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
exports.exprMap = void 0;
var print_utils_1 = require("../print_utils");
var node_utils_1 = require("../node_utils");
var utils_1 = require("../utils");
exports.exprMap = {
    list_expr: function (print, node, path) {
        var parent = path.getParentNode();
        var children = print("items").map(function (it) { return (0, print_utils_1.group)(it); });
        var lineType = (0, node_utils_1.isValuesClause)(parent) ? print_utils_1.hardline : print_utils_1.line;
        // When last item is type:empty, we're dealing with a trailing comma.
        // Don't add a space (or newline) after it.
        // We still want to print it though, as it might have comments attached.
        if ((0, node_utils_1.isEmpty)((0, utils_1.last)(node.items))) {
            return [
                (0, print_utils_1.join)([",", lineType], children.slice(0, -1)),
                ",",
                (0, utils_1.last)(children),
            ];
        }
        else {
            return (0, print_utils_1.join)([",", lineType], children);
        }
    },
    paren_expr: function (print, node, path) {
        // discard unnecessary nested ((parentheses))
        if ((0, node_utils_1.isParenExpr)(node.expr)) {
            return print("expr");
        }
        // Discard unnecessary parenthesis around function arguments
        if ((0, node_utils_1.isListExpr)(path.getParentNode(0)) &&
            (0, node_utils_1.isFuncArgs)(path.getParentNode(1))) {
            return print("expr");
        }
        var parent = path.getParentNode();
        var lineStyle = (0, node_utils_1.isCreateTableStmt)(parent) ? print_utils_1.hardline : print_utils_1.softline;
        return (0, print_utils_1.group)(["(", (0, print_utils_1.indent)([lineStyle, print("expr")]), lineStyle, ")"]);
    },
    binary_expr: function (print, node) {
        if ((0, node_utils_1.isKeyword)(node.operator) && isBooleanOp(node.operator)) {
            return (0, print_utils_1.join)(print_utils_1.line, [print("left"), print.spaced(["operator", "right"])]);
        }
        return print.spaced(["left", "operator", "right"]);
    },
    prefix_op_expr: function (print, node) {
        return ((0, utils_1.isString)(node.operator) ? print : print.spaced)(["operator", "expr"]);
    },
    postfix_op_expr: function (print) { return print.spaced(["expr", "operator"]); },
    between_expr: function (print) {
        return print.spaced(["left", "betweenKw", "begin", "andKw", "end"]);
    },
    case_expr: function (print) { return [
        print.spaced(["caseKw", "expr"]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.join)(print_utils_1.hardline, print("clauses"))]),
        print_utils_1.hardline,
        print("endKw"),
    ]; },
    case_when: function (print, node) {
        if ((0, node_utils_1.isProgram)(node.result)) {
            return [
                print.spaced(["whenKw", "condition", "thenKw"]),
                (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("result"))]),
            ];
        }
        return print.spaced(["whenKw", "condition", "thenKw", "result"]);
    },
    case_else: function (print, node) {
        if ((0, node_utils_1.isProgram)(node.result)) {
            return [
                print("elseKw"),
                (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("result"))]),
            ];
        }
        return print.spaced(["elseKw", "result"]);
    },
    member_expr: function (print, node) {
        return (0, node_utils_1.isArraySubscript)(node.property)
            ? print(["object", "property"])
            : [print("object"), ".", print("property")];
    },
    bigquery_quoted_member_expr: function (print) { return ["`", print("expr"), "`"]; },
    array_subscript: function (print) {
        return (0, print_utils_1.group)(["[", (0, print_utils_1.indent)([print_utils_1.softline, print("expr")]), print_utils_1.softline, "]"]);
    },
    array_subscript_specifier: function (print) { return print(["specifierKw", "args"]); },
    func_call: function (print) {
        var fnCall = print(["name", "args"]);
        var extras = print(["filter", "over"]);
        if (extras.length > 1) {
            return (0, print_utils_1.group)([fnCall, (0, print_utils_1.indent)([print_utils_1.line, (0, print_utils_1.join)(print_utils_1.line, extras)])]);
        }
        else {
            return (0, print_utils_1.group)((0, print_utils_1.join)(" ", __spreadArray([fnCall], extras, true)));
        }
    },
    func_args: function (print) { return print.spaced(["distinctKw", "args", "having"]); },
    filter_arg: function (print) { return print.spaced(["filterKw", "where"]); },
    over_arg: function (print) { return print.spaced(["overKw", "window"]); },
    having_arg: function (print) { return print.spaced(["havingKw", "minMaxKw", "expr"]); },
    cast_expr: function (print) { return print(["castKw", "args"]); },
    cast_arg: function (print) { return print.spaced(["expr", "asKw", "dataType", "format"]); },
    cast_format: function (print) { return print.spaced(["formatKw", "string", "timezone"]); },
    cast_format_timezone: function (print) { return print.spaced(["atTimeZoneKw", "timezone"]); },
    raise_expr: function (print) { return print(["raiseKw", "args"]); },
    raise_expr_type: function (print) { return print("typeKw"); },
    extract_expr: function (print) { return print(["extractKw", "args"]); },
    extract_from: function (print) { return print.spaced(["unit", "fromKw", "expr"]); },
    week_expr: function (print) { return print(["weekKw", "args"]); },
    interval_expr: function (print) { return print.spaced(["intervalKw", "expr", "unit"]); },
    interval_unit_range: function (print) {
        return print.spaced(["fromUnitKw", "toKw", "toUnitKw"]);
    },
    array_expr: function (print) {
        return (0, print_utils_1.group)(["[", (0, print_utils_1.indent)([print_utils_1.softline, print("expr")]), print_utils_1.softline, "]"]);
    },
    struct_expr: function (print) {
        return (0, print_utils_1.group)(["(", (0, print_utils_1.indent)([print_utils_1.softline, print("expr")]), print_utils_1.softline, ")"]);
    },
    typed_expr: function (print) { return print(["dataType", "expr"]); },
    number_literal: function (print) { return print("text"); },
    boolean_literal: function (print) { return print("valueKw"); },
    string_literal: function (print) { return print("text"); },
    null_literal: function (print) { return print("nullKw"); },
    numeric_literal: function (print) { return print.spaced(["numericKw", "string"]); },
    bignumeric_literal: function (print) { return print.spaced(["bignumericKw", "string"]); },
    date_literal: function (print) { return print.spaced(["dateKw", "string"]); },
    time_literal: function (print) { return print.spaced(["timeKw", "string"]); },
    datetime_literal: function (print) { return print.spaced(["datetimeKw", "string"]); },
    timestamp_literal: function (print) { return print.spaced(["timestampKw", "string"]); },
    json_literal: function (print) { return print.spaced(["jsonKw", "string"]); },
    identifier: function (print) { return print("text"); },
    variable: function (print) { return print("text"); },
    parameter: function (print) { return print("text"); },
};
var isBooleanOp = function (_a) {
    var name = _a.name;
    return name === "AND" || name === "OR";
};
