module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "js/bundle.js"
  },
  resolve: {
    root: __dirname,
    modulesDirectories : ["js/Tone.js/"],
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};