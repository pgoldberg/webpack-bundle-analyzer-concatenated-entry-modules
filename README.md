## Bug explanation

When an entry module is itself a concatenated module, `webpack-bundle-analyzer` doesn't display the modules that are contained inside of the entry module in the report HTML. This is a regression from Webpack 4, where the concatenated modules would be included in the report graph.

## How to run

```bash
pnpm install
pnpm run start
```

This will open two reports, one with `webpack-bundle-analyzer@4.8.0` and one with the patched version of `webpack-bundle-analyzer` from https://github.com/webpack-contrib/webpack-bundle-analyzer/pull/602.
