"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.moveCommentsToRoot = void 0;
var visitAllNodes_1 = require("../visitAllNodes");
/**
 * Gathers comments from .leading and .trailing fields of all nodes
 * into a single .comments field in root Program node.
 *
 * Deletes the .leading and .trailing fields of all nodes.
 */
var moveCommentsToRoot = function (cst) {
    return __assign(__assign({}, cst), { comments: extractComments(cst) });
};
exports.moveCommentsToRoot = moveCommentsToRoot;
var extractComments = function (cst) {
    var comments = [];
    (0, visitAllNodes_1.visitAllNodes)(cst, function (node) {
        comments.push.apply(comments, __spreadArray(__spreadArray([], (node.leading || []), false), (node.trailing || []), false));
        delete node.leading;
        delete node.trailing;
    });
    return comments;
};
