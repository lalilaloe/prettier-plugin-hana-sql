"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFinalSemicolon = void 0;
var node_utils_1 = require("../node_utils");
var utils_1 = require("../utils");
var addFinalSemicolon = function (program, originalText) {
    if (!(0, node_utils_1.isEmpty)((0, utils_1.last)(program.statements))) {
        var end = originalText.length;
        program.statements.push({ type: "empty", range: [end, end] });
    }
    return program;
};
exports.addFinalSemicolon = addFinalSemicolon;
