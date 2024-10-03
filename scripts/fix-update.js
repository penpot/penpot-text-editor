import fs from "node:fs";
import path from "node:path";

const content = fs.readFileSync("dist/TextEditor.js", "utf-8");

if (!process.env.PENPOT_SOURCE_PATH) {
  console.log("\x1B[0;31mPlease, specify where do you have Penpot repository installed using the environment variable PENPOT_SOURCE_PATH\x1B[0m");
  console.log('Example: export PENPOT_SOURCE_PATH=~/Projects/penpot');
  process.exit(1);
}

const textEditorPath = path.resolve(process.env.PENPOT_SOURCE_PATH, "frontend/vendor/text_editor_v2.js");
if (!fs.existsSync(textEditorPath)) {
  console.log("\x1B[0;31mCan't find TextEditor.js in the specified path, please check the exported path PENPOT_SOURCE_PATH", textEditorPath, "\x1B[0m");
  process.exit(1);
}

fs.writeFileSync(
  textEditorPath,
  content,
);
