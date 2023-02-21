import { AllTriggerNodes } from "sql-parser-cst";
import { group, hardline, indent, join, line } from "../print_utils";
import { CstToDocMap } from "../CstToDocMap";

export const triggerMap: Partial<CstToDocMap<AllTriggerNodes>> = {
  create_trigger_stmt: (print, node) =>
    join(hardline, [
      print.spaced([
        "createKw",
        "temporaryKw",
        "triggerKw",
        "ifNotExistsKw",
        "name",
      ]),
      print.spaced(["event", "onKw", "table"]),
      ...(node.forEachRowKw ? [print.spaced(["forEachRowKw"])] : []),
      ...(node.condition ? [print(["condition"])] : []),
      print("body"),
    ]),
  trigger_event: (print) =>
    print.spaced(["timeKw", "eventKw", "ofKw", "columns"]),
  trigger_condition: (print) =>
    group([print("whenKw"), indent([line, print("expr")])]),
};
