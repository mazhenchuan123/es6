import React, { Component } from 'react';
// ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。
// ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。
// function log(x, y = 'World') {
//   console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello
// 使用参数默认值时，函数不能有同名参数。
// function foo({x, y = 5}) {
//     console.log(x, y);
//   }
  
//   foo({}) // undefined 5
//   foo({x: 1}) // 1 5
//   foo({x: 1, y: 2}) // 1 2
//   foo() // TypeError: Cannot read property 'x' of undefined

// rest
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中
// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
// ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错
// function add(...values) {
//     let sum = 0;
  
//     for (var val of values) {
//       sum += val;
//     }
  
//     return sum;
//   }
  
//   add(2, 5, 3) // 10
// 箭头函数
// const full = ({ first, last }) => first + ' ' + last;

// // 等同于
// function full(person) {
//   return person.first + ' ' + person.last;
// }
// var result = values.sort((a, b) => a - b);
// 新的语法允许定义和调用时，尾部直接有一个逗号。
// 12
class componentName extends Component {

    render() {
        return (
            
        );
    }
}
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello

export default componentName;