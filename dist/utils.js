"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = exports.arrayWrap = exports.isNode = exports.isEmptyArray = exports.isArray = exports.isObject = exports.isString = exports.isDefined = void 0;
var isDefined = function (value) {
    return value !== undefined;
};
exports.isDefined = isDefined;
var isString = function (value) {
    return typeof value === "string";
};
exports.isString = isString;
var isObject = function (x) {
    return typeof x === "object" && x !== null && !(x instanceof Array);
};
exports.isObject = isObject;
var isArray = function (x) { return Array.isArray(x); };
exports.isArray = isArray;
var isEmptyArray = function (x) { return (0, exports.isArray)(x) && x.length === 0; };
exports.isEmptyArray = isEmptyArray;
var isNode = function (value) {
    return (0, exports.isObject)(value) && (0, exports.isString)(value.type) && !isCommentType(value.type);
};
exports.isNode = isNode;
var isCommentType = function (type) {
    return type === "block_comment" || type === "line_comment";
};
var arrayWrap = function (x) { return ((0, exports.isArray)(x) ? x : [x]); };
exports.arrayWrap = arrayWrap;
var last = function (arr) { return arr[arr.length - 1]; };
exports.last = last;
