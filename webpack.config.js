//import webpack from 'webpack';

module.exports = {
  mode : 'development',
  //mode : 'production',
  entry: './src/script/script.js',
  output: {
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      } 
    ]
  }
}