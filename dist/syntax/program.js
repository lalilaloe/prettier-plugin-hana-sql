"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.programMap = void 0;
var print_utils_1 = require("../print_utils");
exports.programMap = {
    program: function (print, node, path, options) {
        return print("statements").map(function (doc, i) {
            return printStatement(doc, i, node.statements, options);
        });
    },
};
var printStatement = function (doc, i, statements, options) {
    var prevNode = statements[i - 1];
    var node = statements[i];
    if (i === 0) {
        return doc;
    }
    else if (node.type !== "empty") {
        if ((0, print_utils_1.hasEmptyLineBetweenNodes)(prevNode, node, options)) {
            return [";", print_utils_1.hardline, print_utils_1.hardline, doc];
        }
        else {
            return [";", print_utils_1.hardline, doc];
        }
    }
    else {
        return [";", print_utils_1.hardline, doc];
    }
};
