"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
    sqlKeywordCase: {
        type: "choice",
        category: "SQL",
        since: "0.1.0",
        default: "upper",
        description: "Enforces upper/lower case for SQL keywords",
        choices: [
            {
                value: "preserve",
                description: "preserves the existing case",
            },
            { value: "upper", description: "forces all keywords to uppercase" },
            { value: "lower", description: "forces all keywords to lowercase" },
        ],
    },
    sqlParamTypes: {
        type: "string",
        array: true,
        category: "SQL",
        since: "0.7.0",
        default: [{ value: [] }],
        description: "Syntax for bound parameters",
        // Possible values in array: "?" | "?nr" | ":name" | "$name" | "@name"
    },
};
