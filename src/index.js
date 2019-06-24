// import _ from 'lodash';

// console.log(_.join(['a', 'b', 'c'], '@@@'));
// // 此处省略n行业务代码
// console.log(_.join(['a', 'b', 'c'], '@@@'));

// 异步代码分割
function getComponent() {
  return import('lodash').then(({default: _}) => {
    var element = document.createElement('div');
    element.innerHTML = _.join(['naruto', 'ninja'], '-');
    return element;
  })
}
getComponent().then((ele) => {
  document.body.appendChild(ele);
});

// 代码分割与webpack无关，webpack中实现代码分割，两种方式
// 1.同步代码，只需要在optimization的配置splitChunks即可
// 2.异步代码（import）， 无需做任何配置，会自动进行code split