// Tree Shaking 只支持 ES Module

// import '@babel/polyfill'; 在.babelrc中，如果开启 "useBuiltIns": "usage" 会自动引入polyfill

import {add} from './math';

add(1,20)