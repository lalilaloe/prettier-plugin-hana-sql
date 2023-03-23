"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMap = void 0;
var utils_1 = require("../utils");
var print_utils_1 = require("../print_utils");
exports.selectMap = {
    compound_select_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [print("left"), print.spaced("operator"), print("right")]);
    },
    select_stmt: function (print, node, path, opts) {
        var lineType = (0, print_utils_1.containsNewline)(node, opts) ? print_utils_1.hardline : print_utils_1.line;
        return (0, print_utils_1.group)((0, print_utils_1.join)(lineType, print("clauses")));
    },
    with_clause: function (print) {
        return (0, print_utils_1.group)([
            print.spaced(["withKw", "recursiveKw"]),
            (0, print_utils_1.indent)([print_utils_1.line, print("tables")]),
        ]);
    },
    common_table_expression: function (print) { return [
        print(["table", "columns"]),
        " ",
        print.spaced(["asKw", "materializedKw", "expr"]),
    ]; },
    select_clause: function (print, node, path, opts) {
        return (0, print_utils_1.group)([
            print.spaced(["selectKw", "distinctKw", "asStructOrValueKw"]),
            (0, print_utils_1.indent)([print_utils_1.line, print("columns")]),
            (0, print_utils_1.containsNewline)(node, opts) ? print_utils_1.breakParent : [],
        ]);
    },
    except_columns: function (print) { return print.spaced(["expr", "exceptKw", "columns"]); },
    replace_columns: function (print) { return print.spaced(["expr", "replaceKw", "columns"]); },
    from_clause: function (print) {
        return (0, print_utils_1.group)([print("fromKw"), (0, print_utils_1.indent)([print_utils_1.line, print("expr")])]);
    },
    join_expr: function (print, node) {
        if (node.operator === ",") {
            return (0, print_utils_1.join)([",", print_utils_1.hardline], print(["left", "right"]));
        }
        else {
            return [
                print("left"),
                print_utils_1.hardline,
                (0, print_utils_1.group)((0, print_utils_1.join)(" ", [
                    print.spaced("operator"),
                    [
                        print("right"),
                        node.specification
                            ? (0, print_utils_1.indent)([print_utils_1.line, print(["specification"])])
                            : [],
                    ],
                ])),
            ];
        }
    },
    join_on_specification: function (print) { return (0, print_utils_1.group)(print.spaced(["onKw", "expr"])); },
    join_using_specification: function (print) { return (0, print_utils_1.group)(print.spaced(["usingKw", "expr"])); },
    indexed_table: function (print) { return print.spaced(["table", "indexedByKw", "index"]); },
    not_indexed_table: function (print) { return print.spaced(["table", "notIndexedKw"]); },
    unnest_expr: function (print) { return print(["unnestKw", "expr"]); },
    unnest_with_offset_expr: function (print) { return print.spaced(["unnest", "withOffsetKw"]); },
    pivot_expr: function (print) { return [print("left"), print_utils_1.hardline, print(["pivotKw", "args"])]; },
    pivot_for_in: function (print) {
        return (0, print_utils_1.group)((0, print_utils_1.join)(print_utils_1.line, [
            (0, print_utils_1.group)(print("aggregations")),
            print.spaced(["forKw", "inputColumn"]),
            print.spaced(["inKw", "pivotColumns"]),
        ]));
    },
    unpivot_expr: function (print, node) { return [
        print("left"),
        print_utils_1.hardline,
        (node.nullHandlingKw ? print.spaced : print)([
            "unpivotKw",
            "nullHandlingKw",
            "args",
        ]),
    ]; },
    unpivot_for_in: function (print) {
        return (0, print_utils_1.group)((0, print_utils_1.join)(print_utils_1.line, [
            print("valuesColumn"),
            print.spaced(["forKw", "nameColumn"]),
            print.spaced(["inKw", "unpivotColumns"]),
        ]));
    },
    tablesample_expr: function (print) {
        return (0, print_utils_1.group)([print("left"), print_utils_1.line, print.spaced(["tablesampleKw", "args"])]);
    },
    tablesample_percent: function (print) { return print.spaced(["percent", "percentKw"]); },
    for_system_time_as_of_expr: function (print) {
        return (0, print_utils_1.group)([print("left"), print_utils_1.line, print.spaced(["forSystemTimeAsOfKw", "expr"])]);
    },
    where_clause: function (print) {
        return (0, print_utils_1.group)([print("whereKw"), (0, print_utils_1.indent)([print_utils_1.line, print("expr")])]);
    },
    order_by_clause: function (print) {
        return (0, print_utils_1.group)([print.spaced("orderByKw"), (0, print_utils_1.indent)([print_utils_1.line, print("specifications")])]);
    },
    group_by_clause: function (print) {
        return (0, print_utils_1.group)([print.spaced("groupByKw"), (0, print_utils_1.indent)([print_utils_1.line, print("columns")])]);
    },
    group_by_rollup: function (print) { return print(["rollupKw", "columns"]); },
    partition_by_clause: function (print) {
        return (0, print_utils_1.group)([
            print.spaced("partitionByKw"),
            (0, print_utils_1.indent)([print_utils_1.line, print("specifications")]),
        ]);
    },
    cluster_by_clause: function (print) {
        return (0, print_utils_1.group)([print.spaced("clusterByKw"), (0, print_utils_1.indent)([print_utils_1.line, print("columns")])]);
    },
    having_clause: function (print) {
        return (0, print_utils_1.group)([print("havingKw"), (0, print_utils_1.indent)([print_utils_1.line, print("expr")])]);
    },
    qualify_clause: function (print) {
        return (0, print_utils_1.group)([print("qualifyKw"), (0, print_utils_1.indent)([print_utils_1.line, print("expr")])]);
    },
    returning_clause: function (print) {
        return (0, print_utils_1.group)([print("returningKw"), (0, print_utils_1.indent)([print_utils_1.line, print("columns")])]);
    },
    limit_clause: function (print, node) {
        return (0, print_utils_1.group)([print("limitKw"), (0, print_utils_1.indent)([print_utils_1.line, printLimitValues(print, node)])]);
    },
    sort_specification: function (print) {
        return print.spaced(["expr", "orderKw", "nullHandlingKw"]);
    },
    window_clause: function (print, node) {
        var lineType = node.namedWindows.items.length > 1 ? print_utils_1.hardline : print_utils_1.line;
        return (0, print_utils_1.group)([
            print("windowKw"),
            (0, print_utils_1.indent)([lineType, print("namedWindows")]),
        ]);
    },
    named_window: function (print) { return print.spaced(["name", "asKw", "window"]); },
    window_definition: function (print, node) {
        var itemCount = [
            node.baseWindowName,
            node.partitionBy,
            node.orderBy,
            node.frame,
        ].filter(utils_1.isDefined).length;
        var lineType = itemCount > 1 ? print_utils_1.hardline : print_utils_1.line;
        return (0, print_utils_1.group)((0, print_utils_1.join)(lineType, print(["baseWindowName", "partitionBy", "orderBy", "frame"])));
    },
};
var printLimitValues = function (print, node) {
    if (node.offsetKw) {
        return print.spaced(["count", "offsetKw", "offset"]);
    }
    else if (node.offset) {
        return (0, print_utils_1.join)([",", " "], print(["offset", "count"]));
    }
    else {
        return print("count");
    }
};
