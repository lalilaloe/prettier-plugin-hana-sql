"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embed = void 0;
var embedJs_1 = require("./embedJs");
var embedJson_1 = require("./embedJson");
var embed = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return embedJson_1.embedJson.apply(void 0, args) || embedJs_1.embedJs.apply(void 0, args);
};
exports.embed = embed;
