// import React, { Component } from 'react';
// import React, {useState, useEffect} from 'react';
// import ReactDom from 'react-dom';
// import axios from 'axios';

// class ComponentA extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }

//   render() {
//     console.log('ComponentA')
//     // const { genter } = this.props;
//     // const { name } = this.props;
//     return (
//       <div>ComponentA</div>
//     )
//   }

// }

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'naruto'
//     }
//   }
//   componentDidMount() {
//     this.setState({
//       name: 'sss'
//     })
//   }

//   // componentDidMount() {
//   //   axios.get('/react/api/header.json')
//   //   .then(res => {
//   //     console.log(res);
//   //   })
//   // }
//   render() {
//     console.log('App')
//     return (
//       <div>
//         {this.state.name}
//         <ComponentA />
//       </div>
//     )
//   }
// }

ReactDom.render(<App />, document.getElementById('root'))

// function getComponent() {
//   return import(/* webpackChunkName:'lodash' */'lodash').then(({default:_}) => {
//     var element = document.createElement('div');
//     element.innerHTML = _.join(['naruto', 'ninja'], '_');
//     return element;
//   })
// }
// getComponent().then(element => {
//   document.body.appendChild(element);
// })

// import _ from 'lodash';
// import './index.scss';
// import { add } from './math.js'

// function component() {
//   var element = document.createElement('div');

//   // lodash 是由当前 script 脚本 import 导入进来的
//   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   //   element.classList.add('hello');
//      element.innerHTML = [
//         'Hello webpack!',
//         '5 cubed is equal to ' + add(5, 6)
//       ].join('\n\n');

//   return element;
// }
// document.body.appendChild(component());


// /**
//  * @file 自定义loader
//  * @author naruto
//  * */

//  console.log('naruto');


// tree shaking

// import {add, minus} from './math';

// add(1, 2);





