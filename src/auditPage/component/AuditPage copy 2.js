// import React, { useEffect, useState } from "react";
// import "./index.css";

// export default function AuditPage() {

//   const [number, setNumber] = useState(0)
//   const [name, setName] = useState('hahaha')

//   useEffect(() => {
//     console.log('useEfftct', number);
//     return () => {
//       console.log('======')
//     }
//   }, [number])

//   return (
//     <div>
//       {number}
//       <button onClick={() => setNumber(number + 1)}>数一数</button>
//     </div>
//   );
// }

// import React, { useReducer } from "react";
// const number = 0;

// function init(initialState) {
//   return { number: initialState };
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "append":
//       return { number: state.number + 1 };
//     case "subtract":
//       return { number: state.number - 1 };
//     case "reset":
//       return init(action.paload);
//     default:
//       throw new Error();
//   }
// }

// export default function Numbers(initialState) {
//   const [state, dispatch] = useReducer(reducer, initialState, init);
//   return (
//     <>
//       {state.number}
//       <button onClick={() => dispatch({ type: "subtract" })}>-</button>
//       <button onClick={() => dispatch({ type: "append" })}>+</button>
//       <button
//         onClick={() => dispatch({ type: "reset", payload: initialState })}
//       >
//         reset
//       </button>
//     </>
//   );
// }

// import React, { Component } from "react";

// export default class AuditPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       number: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `${this.state.number}`;
//   }

//   componentDidUpdate() {
//     document.title = `${this.state.number}`;
//   }

//   render() {
//     return (
//       <div>
//         {this.state.number}
//         <button
//           onClick={() => this.setState({ number: this.state.number + 1 })}
//         >
//           数一数: 共{this.state.number}个
//         </button>
//       </div>
//     );
//   }
// }

// import React, { useEffect, useCallback, useState } from 'react'

// const Button = ({ onClickButton, chlidren})

// export default function Example() {
//   const [number, setNumber] = useState(0);

//   const memoizedCallback = useCallback(
//     () => {
//       doSomething(a, b);
//     },
//     [a, b],
//   );

//   const handleClick = useCallback(() => {
//     setNumber(number + 1);
//   })

//   return (
//     <Button number={number} onClickButton={handleClick}>
//       click
//     </Button>
//   )
// }

// import React, { useMemo, useState } from 'react'

// export default  function Example () {
//   const [age, setAge] = useState(20);
//   const [address, setAddress] = useState('北京');

//   return (
//     <div>
//       <button onClick={() => setAge(new Date().getTime())}>age</button>
//       <button onClick={() => setAddress(new Date().getTime())}>address</button>
//       <Button age={age}>{address} </Button>
//       {/* 点击按钮是子组件也会随着发生变化 */}
//     </div>
//   )
// }

// function Button({age,children}) {
//   function changeAge(age) {
//     console.log('---', age)
//     return age + '变化'
//   }

//   const anotherAge = useMemo(() => changeAge(age), [age]);

//   return (
//     <div>
//       <div>{anotherAge} + 子组件</div>
//       <div>{children}</div>
//     </div>
//   )
// }

// import React, { useRef } from 'react'

// export default function Example(props, ref) {
//   const inputRef = useRef();
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current.focus();
//     }
//   }));

//   return (
//     <input  ref={inputRef}.... />
//   )
// }

import React, { useEffect, useState } from "react";

// 清除定时器
export default function Example() {
  console.log("render");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("打开定时器");
    const timer = setInterval(() => {
      console.log("进入");
      setCount((count) => count + 1);
    }, 2000);
    return () => {
      console.log("清除");
      clearInterval(timer);
    };
  }, []); //设置count依赖,会有多个timer生成,销毁
  return (
    <div>
      <span>{count}</span>
    </div>
  );
};


