"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dclMap = void 0;
var print_utils_1 = require("../print_utils");
exports.dclMap = {
    grant_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [
            (0, print_utils_1.group)([print("grantKw"), (0, print_utils_1.indent)([print_utils_1.line, print("roles")])]),
            (0, print_utils_1.group)(print.spaced(["onKw", "resourceType", "resourceName"])),
            (0, print_utils_1.group)([print("toKw"), (0, print_utils_1.indent)([print_utils_1.line, print("users")])]),
        ]);
    },
    revoke_stmt: function (print) {
        return (0, print_utils_1.join)(print_utils_1.hardline, [
            (0, print_utils_1.group)([print("revokeKw"), (0, print_utils_1.indent)([print_utils_1.line, print("roles")])]),
            (0, print_utils_1.group)(print.spaced(["onKw", "resourceType", "resourceName"])),
            (0, print_utils_1.group)([print("fromKw"), (0, print_utils_1.indent)([print_utils_1.line, print("users")])]),
        ]);
    },
};
