# UE5 Systems Training Tool packs

Packs are lesson, template, or project files for the [UE5 Systems Training Tool/Generator](https://github.com/Johno222222222/UE5-Systems-Trainer). The Community tab reads `packs/index.json` from this repo's `main` branch. Nothing here is executed. A pack is data.

## What a pack is

A pack is one `.bbpack` file. It is either a JSON object or a zip of `manifest.json` and `content.json`. The object uses `format: "bbpack"` and `schema: 1`. The kind is `project`, `template`, `lesson`, or `bundle`. It needs a name, an author, and a version. Do not put executables in a pack.

## How to submit

Open a pull request that adds the `.bbpack` and a row in `packs/index.json`. Johno reviews every pack before it merges. See `CONTRIBUTING.md`.
