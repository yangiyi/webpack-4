class CopyRightWebapckPlugin {
  // constructor(options) { // options 接收参数
  //   console.log('used current plugin', options);
  // }

  apply(compiler) { // compiler webapck 实例
    compiler.hooks.compile.tap('CopyRightWebapckPlugin', (compiler) => {
      console.log('compilation:::', compiler);
      debugger;
    })

    // tapAsync 异步执行钩子
    compiler.hooks.emit.tapAsync('CopyRightWebapckPlugin', (compilation, cb) => {
      console.log(compilation);
      compilation.assets['copyright.txt'] = {
        // 往文件中注入
        source: function() {
          return 'copyright by naruto'
        },
        size: function() {
          return 21;
        }
      }
      cb();
    })
  }
}

module.exports = CopyRightWebapckPlugin;