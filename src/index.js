async function getComponent() {
  const { default: _ } = await import(/* webpackChunkName: 'lodash' */'lodash')
  // magic comments 魔法注释
  const element = document.createElement('div');
  element.innerHTML = _.join(['a' , 'b', 'c'], '~');
  return element;
}

document.addEventListener('click', () => {
  getComponent().then(ele => {
    document.body.appendChild(ele);
  });
})

// 代码分割

// 两种方式

// 同步代码分割：只需要在webapck.config.js中optimization配置即可；
// 异步代码分割：无需配置，webpack打包时会自动进行代码分割