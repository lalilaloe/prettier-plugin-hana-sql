"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataTypeMap = void 0;
var utils_1 = require("../utils");
exports.dataTypeMap = {
    // print single-word types as `TYPE(10)` and multi-word types as `MY TYPE (10)`
    data_type: function (print, node) {
        return ((0, utils_1.isArray)(node.nameKw) ? print.spaced : print)(["nameKw", "params"]);
    },
    generic_type_params: function (print) { return ["<", print("params"), ">"]; },
    array_type_param: function (print) { return print.spaced(["dataType", "constraints"]); },
    struct_type_param: function (print) {
        return print.spaced(["name", "dataType", "constraints"]);
    },
};
