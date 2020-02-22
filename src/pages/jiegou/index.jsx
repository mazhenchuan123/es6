import React, { Component } from 'react';

// let a = 1
// let b = 2
// let c = 3
// 可以写成
// let [a, b, c] = [1,2,3]
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// foo // 1
// bar // 2
// baz // 3

// let [ , , third] = ["foo", "bar", "baz"];
// third // "baz"

// let [x, , y] = [1, 2, 3];
// x // 1
// y // 3

// let [head, ...tail] = [1, 2, 3, 4];
// head // 1
// tail // [2, 3, 4]

// let [x, y, ...z] = ['a'];
// 解构赋值允许写默认值
// let [foo = true] = [];
// foo //true

// 对象
// let obj = {
//     p: [
//       'Hello',
//       { y: 'World' }
//     ]
//   };
  
//   let { p: [x, { y }] } = obj;
// x // "Hello"
// y // "World"

// var {x = 3} = {};
// x // 3

// var {x, y = 5} = {x: 1};
// x // 1
// y // 5

// var {x: y = 3} = {};
// y // 3

// var {x: y = 3} = {x: 5};
// y // 5

// var { message: msg = 'Something went wrong' } = {};


// 字符串
// const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"

// 函数
// function move({x = 0, y = 0} = {}) {
//     return [x, y];
//   }
  
//   move({x: 3, y: 8}); // [3, 8]
//   move({x: 3}); // [3, 0]
//   move({}); // [0, 0]
//   move(); // [0, 0]

// 返回一个数组

// function example() {
//     return [1, 2, 3];
//   }
//   let [a, b, c] = example();
  
//   // 返回一个对象
  
//   function example() {
//     return {
//       foo: 1,
//       bar: 2
//     };
//   }
//   let { foo, bar } = example();


// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// };

// let { id, status, data: number } = jsonData;
  
  console.log(id, status, number);


class componentName extends Component {

    render() {
        return (
            
        );
    }
}

let a = 1
let b = 2
let c = 3
可以写成
let [a, b, c] = [1,2,3]


export default componentName;