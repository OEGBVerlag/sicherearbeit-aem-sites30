/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

'use strict'

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const TSLintPlugin = require('tslint-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const SOURCE_ROOT = __dirname + '/src'

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      new TSConfigPathsPlugin({
        configFile: './tsconfig.json',
      }),
    ],
  },
  entry: {
    site: SOURCE_ROOT + '/main.ts',
  },
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'js/theme.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/(node_modules)/],
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'webpack-import-glob-loader',
            options: {
              url: false,
            },
          },
        ],
      },
      /**
       * Handle fonts
       */
      {
        test: /\.(woff|woff2|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: '../',
            }
          },
        ],
      },
      /**
       * Handling SVGs in both tsx and scss
       */
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        issuer: /\.tsx?$/,
      },
      {
        test: /\.svg$/,
        issuer: /\.scss?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
                  name: '[path][name].[ext]',
                  publicPath: '../',
                  limit: 8192,
            }
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [require('tailwindcss'), require('autoprefixer')]
              },
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false,
            },
          },
          {
            loader: 'webpack-import-glob-loader',
            options: {
              url: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/theme.css',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  stats: {
    assetsSort: 'chunks',
    builtAt: true,
    children: false,
    chunkGroups: true,
    chunkOrigins: true,
    colors: false,
    errors: true,
    errorDetails: true,
    env: true,
    modules: false,
    performance: true,
    providedExports: false,
    source: false,
    warnings: true,
  },
}
