"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEmptyLineBetweenNodes = exports.containsNewline = exports.join = exports.stripTrailingHardline = exports.breakParent = exports.ifBreak = exports.lineSuffix = exports.group = exports.indent = exports.softline = exports.hardline = exports.line = void 0;
var prettier_1 = require("prettier");
var utils_1 = require("./utils");
exports.line = (_a = prettier_1.doc.builders, _a.line), exports.hardline = _a.hardline, exports.softline = _a.softline, exports.indent = _a.indent, exports.group = _a.group, exports.lineSuffix = _a.lineSuffix, exports.ifBreak = _a.ifBreak, exports.breakParent = _a.breakParent;
var origJoin = prettier_1.doc.builders.join;
exports.stripTrailingHardline = prettier_1.doc.utils.stripTrailingHardline;
/** Improved join() that also accepts a non-array docs parameter */
var join = function (sep, docs) {
    return (0, utils_1.isArray)(docs) ? origJoin(sep, docs) : docs;
};
exports.join = join;
/** True when the Node contains a newline in original source code */
var containsNewline = function (node, opts) {
    if (!node.range) {
        throw new Error("containsNewline() expected a Node with range info");
    }
    return prettier_1.util.hasNewlineInRange(opts.originalText, node.range[0], node.range[1]);
};
exports.containsNewline = containsNewline;
var hasEmptyLineBetweenNodes = function (node1, node2, opts) {
    if (!node1.range || !node2.range) {
        throw new Error("emptyLineBetweenNodes() expects Nodes with range info");
    }
    return /\n[ \t]*\r?\n/.test(opts.originalText.slice(node1.range[1], node2.range[0]));
};
exports.hasEmptyLineBetweenNodes = hasEmptyLineBetweenNodes;
