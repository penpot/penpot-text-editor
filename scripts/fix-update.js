import fs from "node:fs";
import path from "node:path";

// This is a workaround to prevent named exports
// in the output file.
//
// Maybe Vite have something to do it automatically
// but right now I don't know how.
const content = fs.readFileSync("dist/TextEditor.js", "utf-8");
const re = /export\s+{\s+TextEditor,\s+TextEditor\s+as\s+default\s+};/g
if (!content.match(re)) {
  throw new Error('Cannot find module export')
}
const newContent = content.replace(
  re,
  "export default TextEditor;"
);
fs.writeFileSync(
  "dist/TextEditor.js",
  newContent,
);

if (!process.env.PENPOT_SOURCE_PATH) {
  console.log("\x1B[0;31mPlease, specify where do you have Penpot repository installed using the environment variable PENPOT_SOURCE_PATH\x1B[0m");
  console.log('Example: export PENPOT_SOURCE_PATH=~/Projects/penpot');
  process.exit(1);
}

const textEditorPath = path.resolve(process.env.PENPOT_SOURCE_PATH, "frontend/src/app/main/ui/workspace/shapes/text/new_editor/TextEditor.js");
if (!fs.existsSync(textEditorPath)) {
  console.log("\x1B[0;31mCan't find TextEditor.js in the specified path, please check the exported path PENPOT_SOURCE_PATH", textEditorPath, "\x1B[0m");
  process.exit(1);
}

fs.writeFileSync(
  textEditorPath,
  newContent,
);
