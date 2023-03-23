"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformCst = void 0;
var comments_1 = require("./comments");
var aliasAs_1 = require("./aliasAs");
var stripTrailingCommas_1 = require("./stripTrailingCommas");
var addFinalSemicolon_1 = require("./addFinalSemicolon");
// Note that we first perform moveCommentsToRoot transform,
// so we don't need to worry about comments interfering with other transforms
var transformCst = function (cst, originalText) {
    return (0, addFinalSemicolon_1.addFinalSemicolon)((0, stripTrailingCommas_1.stripTrailingCommas)((0, aliasAs_1.processAliasAs)((0, comments_1.moveCommentsToRoot)(cst))), originalText);
};
exports.transformCst = transformCst;
