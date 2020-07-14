import webpack from "webpack";
import path from "path";
import fs from "fs";
import TerserPlugin from 'terser-webpack-plugin';

const config: webpack.Configuration = {
  entry: "./src/index.ts",
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: /(\s@|UserScript==)/i,
          },
        }
      })
    ]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    }]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "MrScript.user.js"
  },
  resolve: {
    modules: [
      "node_modules",
      "src"
    ],
    extensions: [".ts", ".js"],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: fs.readFileSync(path.resolve(__dirname, "src/index.ts"), "utf-8").replace(/(==\/UserScript==)[\s\S]+$/, "$1"),
      entryOnly: true,
      raw: true
    })
  ],
  externals: {
    "jquery": "jQuery"
  }
};

export default config;
