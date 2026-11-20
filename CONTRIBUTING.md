# Contributing a pack

1. Export a pack from the training tool, or write a `.bbpack` that matches `packs/pack.schema.json`.
2. Put the file in `packs/`.
3. Add a row to `packs/index.json` with `id`, `name`, `description`, `author`, `version`, `tags`, and `file`.
4. Open a pull request.

Every pack is reviewed and approved by Johno before it merges. The GitHub Action on the pull request checks the index and each pack. A pack that fails that check does not merge.
