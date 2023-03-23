import { Doc, doc } from "prettier";
import { Node } from "sql-parser-cst";
export declare const line: doc.builders.Line, hardline: doc.builders.Concat, softline: doc.builders.Softline, indent: typeof doc.builders.indent, group: typeof doc.builders.group, lineSuffix: typeof doc.builders.lineSuffix, ifBreak: typeof doc.builders.ifBreak, breakParent: doc.builders.BreakParent;
export declare const stripTrailingHardline: typeof doc.utils.stripTrailingHardline;
/** Improved join() that also accepts a non-array docs parameter */
export declare const join: (sep: Doc, docs: Doc) => Doc;
/** True when the Node contains a newline in original source code */
export declare const containsNewline: (node: Node, opts: {
    originalText: string;
}) => boolean;
export declare const hasEmptyLineBetweenNodes: (node1: Node, node2: Node, opts: {
    originalText: string;
}) => boolean;
