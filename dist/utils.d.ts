import { Node } from "sql-parser-cst";
export declare const isDefined: <T>(value: T | undefined) => value is T;
export declare const isString: (value: any) => value is string;
export declare const isObject: (x: any) => x is Record<string, any>;
export declare const isArray: (x: any) => x is any[];
export declare const isEmptyArray: (x: any) => x is [];
export declare const isNode: (value: any) => value is Node;
export declare const arrayWrap: <T>(x: T | T[]) => T[];
export declare const last: <T>(arr: T[]) => T;
