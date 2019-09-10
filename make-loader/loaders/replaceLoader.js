const loaderUtils = require('loader-utils');

module.exports = function(source) {
  // return source.replace('naruto', this.query.name);

  const options = loaderUtils.getOptions(this);
  const result =  source.replace('naruto', options.name);
  this.callback(null, result);
}