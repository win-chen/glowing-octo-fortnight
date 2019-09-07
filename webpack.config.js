const webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: {
     'app': './src/index.ts',
     'app.min': './src/index.ts'
   },
   output: {
       filename: '[name].js',
       path: path.resolve(__dirname, 'dist'),
       libraryTarget: 'umd',
       library: 'MyLib',
       umdNamedDefine: true
   },
   resolve: {
       extensions: ['.ts', '.js']
   },
   devtool: 'source-map',
   devServer: {
      contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
      port: 1234,
      host: '100.115.92.205'

   },
   module: {
       rules: [{ 
          test: /\.ts$/, 
          loader: "ts-loader",  
          exclude: /node_modules/,
       }]
   }
}