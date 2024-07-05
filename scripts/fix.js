import fs from "node:fs";

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
const replacedContent = content.replace(
  re,
  "export default TextEditor;"
);
fs.writeFileSync(
  "dist/TextEditor.js",
  replacedContent
);
