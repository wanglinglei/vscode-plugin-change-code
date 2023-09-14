import * as vscode from "vscode";
import { transStringByType, translateTypeList } from "../utils";

export function registerTranslateCommand(context: vscode.ExtensionContext) {
  translateTypeList.forEach((item) => {
    const disposable = vscode.commands.registerCommand(`changeCodeGroup_${item}`, () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const selection = editor.selection;
        const message = editor.document.getText(selection);
        try {
          const range = new vscode.Range(selection.start, selection.end);
          editor.edit((builder) => {
            const result = transStringByType({ int: message, type: item });
            builder.replace(range, result);
          });
        } catch (error) {

        }
      }
    });
    context.subscriptions.push(disposable);
  });

}