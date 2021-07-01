import React, { Component } from "react";

{
  // let只在块级作用域内有效
  let a = 10;
  console.log(a);

  var b = 55555;
  console.log(b)
}
// console.log(a)  报错
console.log(b)

var arr = []
for (let i = 1; i<10; i ++) {
    console.log(i)
    arr.push(i)
    console.log(arr)
}
console.log(arr)

// 解构赋值
let [f, g, h] =  [1, 2, 3]
console.log(f, g, h)

let {aa, bb} = {aa: '323232', bb: '5656565'}
console.log(aa, bb)

const [x, n, m, j, k] = 'every'
console.log(x, n, m, j, k)

let {toString: s} = 123;
// s === Number.prototype.toString;

console.log(s.prototype)

function add([x, y]) {}


class ExamplePage extends Component {
  render() {
    return <div>你好👋{this.props.name}!!!</div>;
  }
}
export default ExamplePage;
