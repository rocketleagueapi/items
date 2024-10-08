# Updating the Dump
Using [ItsBrank's CodeRed](https://coderedmodding.github.io/), we can dump the necessary information to update this module.  The information in this module is derived from the game and is extracted using CodeRed.  The commands needed to dump the `src/raw` JSON files can be found in `scripts/dump_databases.crsq`.

Run these commands and copy the resultant output from your CodeRed Dump folder (you can find it in the CodeRed launcher) to `src/raw`.

Then run the parse script:

```sh
pnpm run parse
```
