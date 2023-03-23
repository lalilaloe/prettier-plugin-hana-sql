"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printComment = void 0;
var printComment = function (path) {
    var node = path.getValue();
    if (node.type === "line_comment") {
        if (/^--[^ \t]/.test(node.text)) {
            return node.text.replace(/^--/, "-- ");
        }
        if (/^#[^ \t!]/.test(node.text)) {
            return node.text.replace(/^#/, "# ");
        }
    }
    return node.text;
};
exports.printComment = printComment;
