import { Program, Whitespace } from "sql-parser-cst";
/**
 * Gathers comments from .leading and .trailing fields of all nodes
 * into a single .comments field in root Program node.
 *
 * Deletes the .leading and .trailing fields of all nodes.
 */
export declare const moveCommentsToRoot: (cst: Program) => Program & {
    comments: Whitespace[];
};
