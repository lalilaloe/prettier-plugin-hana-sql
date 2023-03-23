"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frameMap = void 0;
var print_utils_1 = require("../print_utils");
exports.frameMap = {
    frame_clause: function (print, node) { return [
        print.spaced(["unitKw", "extent"]),
        node.exclusion ? [print_utils_1.hardline, print("exclusion")] : [],
    ]; },
    frame_bound_current_row: function (print) { return print.spaced("currentRowKw"); },
    frame_bound_preceding: function (print) { return print.spaced(["expr", "precedingKw"]); },
    frame_bound_following: function (print) { return print.spaced(["expr", "followingKw"]); },
    frame_unbounded: function (print) { return print.spaced("unboundedKw"); },
    frame_between: function (print) {
        return print.spaced(["betweenKw", "begin", "andKw", "end"]);
    },
    frame_exclusion: function (print) { return print.spaced(["excludeKw", "kindKw"]); },
};
