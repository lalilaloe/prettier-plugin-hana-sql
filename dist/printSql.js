"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printSql = void 0;
var utils_1 = require("./utils");
var transformMap_1 = require("./syntax/transformMap");
var print_utils_1 = require("./print_utils");
function printSql(path, options, oldPrint) {
    return printNode(path, options, createPrintFn(path, oldPrint));
}
exports.printSql = printSql;
var cachedPrintFn;
var cachedPath;
function createPrintFn(path, oldPrint) {
    // The path parameter will reference the same AstPath instance
    // during the whole printing cycle.
    // So we can keep using the same print function as long as
    // the path stays the same.
    if (cachedPath === path) {
        return cachedPrintFn;
    }
    cachedPath = path;
    cachedPrintFn = (function (selector) {
        if ((0, utils_1.isArray)(selector)) {
            var node_1 = path.getValue();
            return selector.filter(function (sel) { return (0, utils_1.isDefined)(node_1[sel]); }).map(oldPrint);
        }
        else {
            return oldPrint(selector);
        }
    });
    cachedPrintFn.spaced = function (selector) {
        var node = path.getValue();
        var docs = (0, utils_1.arrayWrap)(selector)
            .filter(function (sel) { return (0, utils_1.isDefined)(node[sel]); })
            .map(function (sel) { return [sel, oldPrint(sel)]; })
            // skip empty arrays
            .filter(function (_a) {
            var sel = _a[0], doc = _a[1];
            return !(0, utils_1.isEmptyArray)(doc);
        })
            // only join with spaces when input to print was Node[]
            .map(function (_a) {
            var sel = _a[0], doc = _a[1];
            return ((0, utils_1.isArray)(node[sel]) ? (0, print_utils_1.join)(" ", doc) : doc);
        });
        return docs.length > 0 ? [(0, print_utils_1.join)(" ", docs)] : [];
    };
    return cachedPrintFn;
}
function printNode(path, options, print) {
    var node = path.getValue();
    if ((0, utils_1.isArray)(node)) {
        return path.map(print);
    }
    if ((0, utils_1.isString)(node)) {
        return node;
    }
    if (!(node === null || node === void 0 ? void 0 : node.type)) {
        throw new Error("No type field on node: ".concat(JSON.stringify(node)));
    }
    var fn = transformMap_1.transformMap[node.type];
    if (!fn) {
        throw new Error("Unexpected node type: ".concat(node.type));
    }
    return fn(print, node, path, options);
}
