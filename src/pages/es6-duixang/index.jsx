import React, { Component } from 'react';
const o = {
    method() {
      return "Hello!";
    }
  };
  
  // 等同于
  
//   const o = {
//     method: function() {
//       return "Hello!";
//     }
//   };
// 也就是说在对象中如果是函数，可以不写属性名
let ms = {};

function getItem (key) {
  return key in ms ? ms[key] : null;
}

function setItem (key, value) {
  ms[key] = value;
}

function clear () {
  ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
// module.exports = {
//   getItem: getItem,
//   setItem: setItem,
//   clear: clear
// };
// 也就是说在对象中如果属性名和值相等的情况下，可以不写属性名
// 但是简写的对象方法不能用作构造函数，会报错
let lastWord = 'last word';

const a = {
  'first word': 'hello',
  [lastWord]: 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"

class componentName extends Component {

    render() {
        return (
            
        );
    }
}
// 写对象的时候可以吧表达式放在方括号里面，如果放在花括号里面，必须加引号
// 属性名表达式与简洁表示法，不能同时使用，会报错。

let o1 = { a: 1 };
let o2 = { b: 2 };
o2.__proto__ = o1;
let { ...o3 } = o2;

console.log(o3) // { b: 2 }
console.log(o3.a) // undefined
const o = Object.create({ x: 1, y: 2 });
o.z = 3;

let { x, ...newObj } = o;
let { y, z } = newObj;
console.log(x) // 1
console.log(y) // undefined
console.log(z) // 3

export default componentName;