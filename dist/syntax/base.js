"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseMap = void 0;
exports.baseMap = {
    keyword: function (print, node, path, options) {
        switch (options.sqlKeywordCase) {
            case "preserve":
                return path.getValue().text;
            case "upper":
                return path.getValue().text.toUpperCase();
            case "lower":
                return path.getValue().text.toLowerCase();
        }
    },
    all_columns: function () { return "*"; },
    empty: function () { return []; },
};
