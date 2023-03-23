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
Object.defineProperty(exports, "__esModule", { value: true });
exports.embedJson = void 0;
var node_utils_1 = require("./node_utils");
var print_utils_1 = require("./print_utils");
var embedJson = function (path, print, textToDoc, options) {
    var node = path.getValue();
    var parent = path.getParentNode();
    if ((0, node_utils_1.isStringLiteral)(node) && (0, node_utils_1.isJsonLiteral)(parent)) {
        if (containsTripleQuote(node.value) ||
            containsBackslash(node.value) ||
            isRawString(node)) {
            // Give up for now. Don't format JSON inside the string.
            // Tackle these corner-case in the future.
            return null;
        }
        var json = textToDoc(node.value, __assign(__assign({}, options), { parser: "json" }));
        var inlineQuote = containsSingleQuote(node.value) ? "'''" : "'";
        return [
            (0, print_utils_1.ifBreak)("'''", inlineQuote),
            (0, print_utils_1.indent)([print_utils_1.softline, (0, print_utils_1.stripTrailingHardline)(json)]),
            print_utils_1.softline,
            (0, print_utils_1.ifBreak)("'''", inlineQuote),
        ];
    }
    return null;
};
exports.embedJson = embedJson;
var containsSingleQuote = function (json) { return /'/.test(json); };
var containsTripleQuote = function (json) { return /'''/.test(json); };
var containsBackslash = function (json) { return /\\/.test(json); };
var isRawString = function (node) { return /^R/i.test(node.text); };
