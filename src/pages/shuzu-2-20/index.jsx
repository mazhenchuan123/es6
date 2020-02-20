import React, { Component } from 'react';

// 数组的扩展
// 使用...[]


// 复制数组
// const a1 = [1,2]
// const a2 = [...a1] //[1,2]
// 合并数组
// const arr1 = [1,2]
// const arr2 = [3,4]
// const arr3 = [...a1, ...a2] // [1,2,3,4]
// 以上俩种方法都是浅拷贝

// const [first, ...rest] = [1, 2, 3, 4, 5];
// first // 1
// rest  // [2, 3, 4, 5]

// const [first, ...rest] = [];
// first // undefined
// rest  // []

// const [first, ...rest] = ["foo"];
// first  // "foo"
// rest   // []
// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

// find
// [1, 4, -5, 10].find((n) => n < 0)//-5
// find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。
// [1, 5, 10, 15].find(function(value, index, arr) {
//     return value > 9;
//   }) // 10
// findIndex返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
// function f(v){
//     return v > this.age;
//   }
//   let person = {name: 'John', age: 20};
//   [10, 12, 26, 15].find(f, person);    // 26

// includes
// Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
// const contains = (() =>
//   Array.prototype.includes
//     ? (arr, value) => arr.includes(value)
//     : (arr, value) => arr.some(el => el === value)
// )();
// contains(['foo', 'bar'], 'baz'); // => false


// flat()
// 拉平数组的方法  默认拉平一层
// 如果不知道拉平多少成可以使用Infinity参数
// Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。
// [1, 2, 3, 4].flatMap(x => [[x * 2]])//[[2],[4],[6],[8]]

class componentName extends Component {

    render() {
        return (
            
        );
    }
}

export default componentName;