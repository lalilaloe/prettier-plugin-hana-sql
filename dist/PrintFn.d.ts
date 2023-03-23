import { AstPath, Doc } from "prettier";
import { Node } from "sql-parser-cst";
export type OldPrintFn = (path: AstPath<Node> | string) => Doc;
export type PrintFn<T, K = PrintableKey<T>> = {
    (path: AstPath<Node>): Doc;
    (path: K extends keyof T ? (T[K] extends any[] ? K : never) : never): Doc[];
    (path: K): Doc;
    (path: K[]): Doc[];
    spaced(path: K): Doc[];
    spaced(path: K[]): Doc[];
};
export type PrintableKey<T> = Exclude<keyof T, ReservedKey>;
type ReservedKey = "type" | "range" | "leading" | "trailing";
export {};
