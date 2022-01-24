const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require ('mini-css-extract-plugin'); 
const copyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = { 
  entry: './src/index.js',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  mode: 'development',
  resolve: { 
    extensions: ['.js'],
    alias: { 
      '@utils': path.resolve(__dirname, 'src/utils/'), // ? el @ es para indicar el nombre del alias
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@images': path.resolve(__dirname, 'src/assets/images/'),
    }
  },
  module: {
      rules: [ // ? aqui es donde se conecta babel con webpack
      {     // ? Esta es la regla de babel
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', 
        }
      },
      {       // ? Esta es la regla para Css
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader, 
        'css-loader',
        'stylus-loader', 
        ],
      },
      {       // ? regla para las imagenes
        test: /\.png/,
        type: 'asset/resource',
      },
      {       // ? regla para las fuentes 
        test: /\.(woff|woff2)$/,
        use: { 
          loader: "url-loader", 
          options: { 
            limit: 10000,
            mimetype: "application/font-woff",
            name: "[name].[contenthash].[ext]",
            outputPath: "./src/assets/fonts/",
            publicPath: "../js-portfolio/dist/assets/images/",
            esModule: false,
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true, // ? inject es para que webpack injecte el codigo js en el archivo index de la carpeta public
      template: './public/index.html',
      filename: './index.html', // ? Este archivo es creado por webpack.
    }),
    new MiniCssExtractPlugin ({
      filename: 'assets/[name].[contenthash].css',
    }), 
    new copyPlugin ({ 
      patterns: [ 
        { 
          from: path.resolve(__dirname, "src", "assets/images"),
          to: "assets/images", 
        }
      ]
    }),
    new Dotenv(),
  ],
  devServer: { 
    contentBase: path.join(__dirname, 'dist'),
    compress: true, 
    historyApiFallback: true,
    port: 3006,
  }
} 