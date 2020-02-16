import React from 'react'

// const ajax = () => {
//     console.log(123)
// }

// const fnc = async function () {
//     const p1 = ajax()
//     const p2 = ajax()
//     await  p1
//     await  p2
// }
// fnc()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// // let promise = new Promise((resolve, reject) => {
// //         console.log('Promise');
// //         resolve();
// //     });
    
// // promise.then( () => {
// // console.log('resolved.');
// // });

// const promise = new Promise(function(resolve, reject) {
// throw new Error('test');
// });
// promise.catch(function(error) {
// console.log(error);
// });
// const p1 = new Promise((reslove,reject) => {
//     reslove("小兰")
// })
// const p2 = new Promise((reslove,reject) => {
//     reslove("小黄")
// })
// // Promise.all()方法接受一个数组作为参数，只有全部成功才代表成功，有一个失败就会失败
// // 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法
// Promise.all([p1,p2])
//     .then(res => console.log(res))


// async
    
// const p =  (ms) => {
//     return new Promise((resolve) => {
//       setTimeout(resolve, ms);
//     });
//   }
  
//   async function asyncPrint(value, ms) {
//     await p(ms);
//     console.log(value);
//   }
  
//   asyncPrint('hello world', 50);
  async function timeout(ms) {
    await new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value);
  }
  
  asyncPrint('hello world', 50);

  class Sleep {
    constructor(timeout) {
      this.timeout = timeout;
    }
    then(resolve, reject) {
      const startTime = Date.now();
      setTimeout(
        () => resolve(Date.now() - startTime),
        this.timeout
      );
    }
  }
  
  (async () => {
    const sleepTime = await new Sleep(1000);
    console.log(sleepTime,'---');
  })();
  async function f() {
    await Promise.reject('出错了')
      .catch(e => console.log(e));
    return await Promise.resolve('hello world ---');
  }
  
  f()
  .then(v => console.log(v))
//   await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
// await命令只能出现在 async 函数内部，否则都会报错。
async function logInOrder(urls) {
    for (const url of urls) {
      const response = await fetch(url);
      console.log(await response.text());
    }
  }
//   async函数总是返回一个Promise对象，可以对其进行then调用，继续操作后面的数据，因此，
// async函数完全可以看作是多个Promise合成一个Promise对象，而await命令就是内部的then调用
// async函数内部return语句返回的值，会成为then方法回调函数的参数
// 12233
async function getData(){
    return "syy";
}
getData().then(data=>{
    console.log(data)  //syy
});

export default class Demo extends React.Component{
    
    componentDidMount() {

       
    }

    render() {
        return (
            <div>
                <p>标题一</p>
            </div>
        )
    }
}