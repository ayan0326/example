import React, { Component } from "react";

// 受控组件，受Board控制
// export default class Square extends Component {
//   // constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //         value: null
//   //     }
//   // }
//   render() {
//     // value的初始值是null,点击的时候存上value的值X
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//         // onClick监听的是this.setState,每次button被点击的时候通知react重新渲染Square组件，
//         style={{ width: "30px", height: "30px" }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button
      className="square"
      onClick={props.onClick}
      // onClick监听的是this.setState,每次button被点击的时候通知react重新渲染Square组件，
      style={{ width: "30px", height: "30px" }}
    >
      {props.value}
    </button>
  );
}
export default Square;