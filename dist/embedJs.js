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
exports.embedJs = void 0;
var node_utils_1 = require("./node_utils");
var print_utils_1 = require("./print_utils");
var embedJs = function (path, print, textToDoc, options) {
    var node = path.getValue();
    var parent = path.getParentNode(0);
    var grandParent = path.getParentNode(1);
    if ((0, node_utils_1.isStringLiteral)(node) &&
        (0, node_utils_1.isAsClause)(parent) &&
        (0, node_utils_1.isCreateFunctionStmt)(grandParent) &&
        grandParent.clauses.some(isJavaScriptLanguageClause)) {
        var quotes = detectQuotes(node.value);
        if (!quotes) {
            // Give up for now. Don't format JavaScript inside the string.
            // Perhaps tackle this corner-case in the future.
            return null;
        }
        var js = textToDoc(node.value, __assign(__assign({}, options), { parser: "babel" }));
        return [
            quotes[0],
            (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(js)]),
            print_utils_1.hardline,
            quotes[1],
        ];
    }
    return null;
};
exports.embedJs = embedJs;
var isJavaScriptLanguageClause = function (clause) { return (0, node_utils_1.isLanguageClause)(clause) && clause.name.name === "js"; };
// Whether to quote the code with single- or double-quotes.
// Returns undefined when neither can be used without escaping.
var detectQuotes = function (js) {
    if (!/'''/.test(js)) {
        return ["r'''", "'''"];
    }
    if (!/"""/.test(js)) {
        return ['r"""', '"""'];
    }
    return undefined;
};
