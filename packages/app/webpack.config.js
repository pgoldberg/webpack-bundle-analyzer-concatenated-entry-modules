const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { BundleAnalyzerPlugin: PatchedBundleAnalyzerPlugin } = require('webpack-bundle-analyzer-patched');

module.exports = {
  mode: 'production',
  entry: { app: ['./index.js', './baz.js'] },
  output: {
    path: path.resolve(__dirname, './build'),
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static', generateStatsFile: true, reportFilename: "current-report.html" }), new PatchedBundleAnalyzerPlugin({ analyzerMode: 'static', generateStatsFile: true, reportFilename: "patched-report.html" })],
};
