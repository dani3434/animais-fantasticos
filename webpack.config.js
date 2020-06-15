
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill','whatwg-fetch','./js/main.js'],
  output: {
    path: path.resolve(__dirname,'./'),
    filename: 'script.js'
  }
}