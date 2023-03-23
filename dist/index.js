"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printers = exports.parsers = exports.languages = exports.options = void 0;
var sql_parser_cst_1 = require("sql-parser-cst");
var printSql_1 = require("./printSql");
var printComment_1 = require("./printComment");
var embed_1 = require("./embed");
var utils_1 = require("./utils");
var transformCst_1 = require("./transform/transformCst");
var options_1 = require("./options");
Object.defineProperty(exports, "options", { enumerable: true, get: function () { return options_1.options; } });
exports.languages = [
    {
        extensions: [".sql", ".sqlite"],
        name: "SQLite SQL",
        parsers: ["sqlite"],
    },
    {
        extensions: [".bigquery"],
        name: "BigQuery SQL",
        parsers: ["bigquery"],
    },
    {
        extensions: [".hdbprocedure"],
        name: "HANA SQL",
        parsers: ["hana"],
    },
];
var createParser = function (dialect) { return ({
    parse: function (text, parsers, options) {
        return (0, transformCst_1.transformCst)((0, sql_parser_cst_1.parse)(text, {
            dialect: dialect,
            includeRange: true,
            includeComments: true,
            filename: options.filepath,
            paramTypes: options.sqlParamTypes,
        }), text);
    },
    astFormat: "sql-cst",
    locStart: function (node) { var _a; return (_a = node.range) === null || _a === void 0 ? void 0 : _a[0]; },
    locEnd: function (node) { var _a; return (_a = node.range) === null || _a === void 0 ? void 0 : _a[1]; },
}); };
exports.parsers = {
    sqlite: createParser("sqlite"),
    bigquery: createParser("bigquery"),
    hana: createParser("sqlite"),
};
exports.printers = {
    "sql-cst": {
        print: printSql_1.printSql,
        embed: embed_1.embed,
        printComment: printComment_1.printComment,
        canAttachComment: utils_1.isNode,
        isBlockComment: function (node) { return node.type === "block_comment"; },
    },
};
