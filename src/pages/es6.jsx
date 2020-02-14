import React from 'react'

const ajax = () => {
    console.log(123)
}

const fnc = async function () {
    const p1 = ajax()
    const p2 = ajax()
    await  p1
    await  p2
}
fnc()
    .then(res => console.log(res))
    .catch(err => console.log(err))
// let promise = new Promise((resolve, reject) => {
//         console.log('Promise');
//         resolve();
//     });
    
// promise.then( () => {
// console.log('resolved.');
// });

const promise = new Promise(function(resolve, reject) {
throw new Error('test');
});
promise.catch(function(error) {
console.log(error);
});
const p1 = new Promise((reslove,reject) => {
    reslove("小兰")
})
const p2 = new Promise((reslove,reject) => {
    reslove("小黄")
})
// Promise.all()方法接受一个数组作为参数，只有全部成功才代表成功，有一个失败就会失败
// 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法
Promise.all([p1,p2])
    .then(res => console.log(res))

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