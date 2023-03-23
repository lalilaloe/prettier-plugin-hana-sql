import { Node } from "sql-parser-cst";
import { AstPath, Doc } from "prettier";
import { OldPrintFn } from "./PrintFn";
import { AllPrettierOptions } from "./options";
export declare function printSql(path: AstPath<Node>, options: AllPrettierOptions, oldPrint: OldPrintFn): Doc;
