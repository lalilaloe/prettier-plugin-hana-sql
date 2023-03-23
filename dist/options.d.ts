import { ParserOptions, SupportOptions } from "prettier";
import { Node, ParserOptions as CstParserOptions } from "sql-parser-cst";
export interface SqlPluginOptions {
    sqlKeywordCase: "preserve" | "upper" | "lower";
    sqlParamTypes: NonNullable<CstParserOptions["paramTypes"]>;
}
export type AllPrettierOptions<T = Node> = ParserOptions<T> & SqlPluginOptions;
export declare const options: SupportOptions;
