"use strict";

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname);
const index = JSON.parse(fs.readFileSync(path.join(root, "index.json"), "utf8"));
if (!Array.isArray(index.packs) || !index.packs.length) {
  throw new Error("packs/index.json needs a packs array.");
}
const kinds = new Set(["project", "template", "lesson", "bundle"]);
for (const row of index.packs) {
  for (const key of ["id", "name", "description", "author", "version", "file"]) {
    if (!String(row[key] || "").trim()) throw new Error(`${row.id || "row"} is missing ${key}`);
  }
  if (!Array.isArray(row.tags)) throw new Error(`${row.id} tags must be an array`);
  if (String(row.file).includes("..") || String(row.file).startsWith("/")) throw new Error(`${row.id} file is unsafe`);
  const file = path.join(root, row.file);
  const pack = JSON.parse(fs.readFileSync(file, "utf8"));
  if (pack.format !== "bbpack") throw new Error(`${row.file} format must be bbpack`);
  if (pack.schema !== 1) throw new Error(`${row.file} schema must be 1`);
  if (!kinds.has(pack.kind)) throw new Error(`${row.file} kind is not allowed`);
  if (!String(pack.name || "").trim() || !String(pack.author || "").trim() || !String(pack.version || "").trim()) {
    throw new Error(`${row.file} needs a name, an author, and a version`);
  }
  if (!pack.content || typeof pack.content !== "object") throw new Error(`${row.file} needs content`);
  console.log("ok", row.id);
}
