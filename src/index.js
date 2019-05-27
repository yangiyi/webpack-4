// async function getComponent() {
//   // magic comments 魔法注释
//   const { default: _ } = await import(/* webpackChunkName: 'lodash' */'lodash')
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['a' , 'b', 'c'], '-');
//   return element;
// }
// getComponent().then(ele => {
//   document.body.appendChild(ele);
// });

import './style.css';

console.log('hello world');