"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visitAllNodes = void 0;
var utils_1 = require("./utils");
/* Executes a function with all nodes in syntax tree */
var visitAllNodes = function (node, visit) {
    visit(node);
    // Visit all children
    for (var _i = 0, _a = Object.values(node); _i < _a.length; _i++) {
        var child = _a[_i];
        if ((0, utils_1.isNode)(child)) {
            (0, exports.visitAllNodes)(child, visit);
        }
        else if ((0, utils_1.isArray)(child)) {
            child
                .filter(utils_1.isNode)
                .forEach(function (childNode) { return (0, exports.visitAllNodes)(childNode, visit); });
        }
    }
};
exports.visitAllNodes = visitAllNodes;
