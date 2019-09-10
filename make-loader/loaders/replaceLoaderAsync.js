const loaderUtils = require('loader-utils');

module.exports = function(source) {
  // 异步loader
  const options = loaderUtils.getOptions(this);
  const callback = this.async();

  setTimeout(() => {
    const result = source.replace('naruto', options.name);
    callback(null, result);
  }, 1000)
}