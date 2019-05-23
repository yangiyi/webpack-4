import _ from 'lodash';
const element = document.createElement('div');
element.innerHTML = _.join(['a' , 'b', 'c'], '~');
document.body.appendChild(element);

// function getComponent() {
//   // magic comments 魔法注释
//   return import(/* webpackChunkName: 'lodash' */'lodash').then(({ default: _ }) => {
//     const element = document.createElement('div');
//     element.innerHTML = _.join(['a' , 'b', 'c'], '~');
//     return element;
//   });
// }

// getComponent().then(ele => {
//   document.body.appendChild(ele);
// })

// 代码分割

// 两种方式

// 同步代码分割：只需要在webapck.config.js中optimization配置即可；
// 异步代码分割：无需配置，webpack打包时会自动进行代码分割