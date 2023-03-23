import { Node } from "sql-parser-cst";
import { Parser, Printer, SupportLanguage } from "prettier";
export { options } from "./options";
export declare const languages: SupportLanguage[];
export declare const parsers: Record<string, Parser<Node>>;
export declare const printers: Record<string, Printer>;
