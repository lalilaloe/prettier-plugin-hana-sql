"use strict";
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
exports.proceduralLanguageMap = void 0;
var print_utils_1 = require("../print_utils");
exports.proceduralLanguageMap = {
    // BEGIN .. END
    block_stmt: function (print, node) { return [
        print("beginKw"),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("program"))]),
        node.exception ? [print_utils_1.hardline, print("exception")] : [],
        print_utils_1.hardline,
        print("endKw"),
    ]; },
    exception_clause: function (print) { return [
        print.spaced(["exceptionKw", "whenKw", "condition", "thenKw"]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("program"))]),
    ]; },
    error_category: function (print) { return print("errorKw"); },
    // DECLARE
    declare_stmt: function (print) {
        return (0, print_utils_1.join)(" ", __spreadArray([
            print("declareKw"),
            (0, print_utils_1.group)(print("names"))
        ], print.spaced(["dataType", "default"]), true));
    },
    declare_default: function (print) { return print.spaced(["defaultKw", "expr"]); },
    // SET
    set_stmt: function (print) { return print.spaced(["setKw", "assignments"]); },
    // IF
    if_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, __spreadArray(__spreadArray([], print("clauses"), true), [print.spaced("endIfKw")], false));
    },
    if_clause: function (print) { return [
        (0, print_utils_1.group)([
            print("ifKw"),
            (0, print_utils_1.indent)([print_utils_1.line, print("condition")]),
            print_utils_1.line,
            print("thenKw"),
        ]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("consequent"))]),
    ]; },
    elseif_clause: function (print) { return [
        (0, print_utils_1.group)([
            print("elseifKw"),
            (0, print_utils_1.indent)([print_utils_1.line, print("condition")]),
            print_utils_1.line,
            print("thenKw"),
        ]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("consequent"))]),
    ]; },
    else_clause: function (print) { return [
        print("elseKw"),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("consequent"))]),
    ]; },
    // CASE
    case_stmt: function (print) { return [
        print.spaced(["caseKw", "expr"]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.join)(print_utils_1.hardline, print("clauses"))]),
        print_utils_1.hardline,
        print.spaced("endCaseKw"),
    ]; },
    // LOOP
    loop_stmt: function (print) { return [
        print("loopKw"),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("body"))]),
        print_utils_1.hardline,
        print.spaced("endLoopKw"),
    ]; },
    // REPEAT
    repeat_stmt: function (print) { return [
        print("repeatKw"),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("body"))]),
        print_utils_1.hardline,
        print.spaced(["untilKw", "condition", "endRepeatKw"]),
    ]; },
    // WHILE
    while_stmt: function (print) { return [
        print.spaced(["whileKw", "condition", "doKw"]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("body"))]),
        print_utils_1.hardline,
        print.spaced("endWhileKw"),
    ]; },
    // FOR .. IN
    for_stmt: function (print) { return [
        print.spaced(["forKw", "left", "inKw", "right", "doKw"]),
        (0, print_utils_1.indent)([print_utils_1.hardline, (0, print_utils_1.stripTrailingHardline)(print("body"))]),
        print_utils_1.hardline,
        print.spaced("endForKw"),
    ]; },
    // BREAK/CONTINUE
    break_stmt: function (print) { return print.spaced(["breakKw", "label"]); },
    continue_stmt: function (print) { return print.spaced(["continueKw", "label"]); },
    labeled_stmt: function (print, node) { return [
        print("beginLabel"),
        ": ",
        print("statement"),
        node.endLabel ? [" ", print(["endLabel"])] : [],
    ]; },
    // CALL
    call_stmt: function (print) { return print.spaced(["callKw", "func"]); },
    // RETURN
    return_stmt: function (print) { return print("returnKw"); },
    // RAISE
    raise_stmt: function (print) { return print.spaced(["raiseKw", "message"]); },
    raise_message: function (print) { return [
        print.spaced("usingMessageKw"),
        " = ",
        print("string"),
    ]; },
};
