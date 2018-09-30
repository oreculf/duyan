const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

/* eslint-disable no-unused-vars */
module.exports = () => ({
  entry: {
    index: "./src/index.jsx",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
  module: {
    rules: [
      {
        // Transpiles ES6 code to form readable by different browsers
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          // Style-loader fallback adds CSS to DOM by injecting a <style> tag in dev mode
          // MiniCSSExtract plugin creates a CSS file per JS file which contains CSS in production mode
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Interprets imports/requires and resolves them for .css files
          "css-loader",
          // Plugins such as autoprefixer post process the .css files with vendor prefixes
          "postcss-loader",
          // First converts .scss/.sass files into .css files
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    // This cleans our dist folder before we regenerate files
    new CleanWebpackPlugin("dist", {}),
    // This allows us to use our custom index.html as a template for the application
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    // This helps to convert our styles into output CSS files with naming based on content
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    }),
  ],
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
});
