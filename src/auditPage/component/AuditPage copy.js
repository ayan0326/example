// import React, { Component } from "react";
// import { Table, Switch, Button, Popconfirm } from "antd";

// export default class AuditPage extends Component {
//   columns = [
//     {
//       title: "用户",
//       dataIndex: "user",
//       key: "user",
//       render: (text) => <a>{text}</a>,
//       align: "center",
//     },
//     {
//       title: "币类型",
//       dataIndex: "type",
//       key: "type",
//       align: "center",
//     },
//     {
//       title: "提币数量",
//       dataIndex: "number",
//       key: "number",
//       align: "center",
//     },
//     {
//       title: "手续费",
//       dataIndex: "money",
//       key: "money",
//       align: "center",
//     },
//     {
//       title: "提币地址",
//       dataIndex: "adress",
//       key: "adress",
//       align: "center",
//     },
//     {
//       title: "审核状态",
//       dataIndex: "state",
//       key: "state",
//     //   render: (value) => {
//         render: (state) => {
//         // console.log(3333333,value)
//         // const { auditId, state, code } = value;
//         // const { pending } = this.state;
//         if (state === 0) {
//           return (
//             <Popconfirm
//               title="是否确认通过? 此操作不可更改"
//               okText="确定"
//               cancelText="取消"
//               // onConfirm={() => this.handleStatusChange(auditId, state)}
//             >
//               <Button style={{ color: "#1890ff" }}>待审核</Button>
//             </Popconfirm>
//           );
//         } else if (state === 1) {
//           return <span>已审核</span>;
//         } else if (state === 2) {
//           return <span>到账</span>;
//         }
//       },
//       align: "center",
//       width: "10%",
//     },
//   ];

//   dataSource = [
//       {
//           user: 'yiyi',
//           type: 0,
//           number: 100,
//           money: '2%',
//           adress: 'dfdfvjkjouihfghmjkl',
//           state: 0
//       },
//       {
//         user: '十一',
//         type: 0,
//         number: 100,
//         money: '2%',
//         adress: 'dfdfvjkjouihfghmjkl',
//         state: 0
//     },
//     {
//         user: '小五',
//         type: 0,
//         number: 100,
//         money: '2%',
//         adress: 'dfdfvjkjouihfghmjkl',
//         state: 1
//     }
//   ]

//   render() {
//     return (
//       <Table
//         columns={this.columns}
//         // dataSource={list}
//         dataSource={this.dataSource}
//         // loading={pending}
//         // pagination={pagination}
//         pageSize={10}
//       />
//     );
//   }
// }

// state hook demo

// import React, { useState } from "react";

// export default function Example() {
//   // (声明一个叫count的state变量)
//   // 初始state为0
//   const [count, setCount] = useState(0);

//   // 声明多个state变量
//   const [hahaha, setHahaha] = useState("哈哈哈");
//   const [address, setAddress] = useState("上海");
//   const [number, setNumber] = useState(1);

//   return (
//     <div>
//       <div>
//         <p>{address}</p>
//         <button onClick={() => setAddress('welcome to our house')}>{address}</button>
//       </div>
//       <div>
//         <p>已经点击 {count} 次</p>
//         <button onClick={() => setCount(count + 1)}>click 👍</button>
//       </div>
//     </div>
//   );
// }

// 共享状态
// import React, { useReducer } from "react";

// const commonReducer = (state, action) => {
//   switch (action.type) {
//     case "countMac":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     default:
//       return state;
//   }
// };

// export default function Example() {
//   const [state, dispatch] = useReducer(commonReducer, { count: 0 });
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: "countMac" })}>
//         {state.count}
//       </button>
//     </div>
//   );
// }

// useEffect
// import React, { useState, useEffect } from "react";

// const Wall = ({ wallId }) => {
//   const [loading, setLoading] = useState(true);
//   const [wall, setWall] = useState({});

//   useEffect(() => {
//     setLoading(true);
//     fetch(`https://xxxxxxxxxx/${wallId}/`)
//       .then(response => response.json())
//       .then(data => {
//         setWall(data);
//         setLoading(false);
//       });
//   }, [wallId]);
//   if (loading === true) {
//     return <p>Loading ...</p>;
//   }
//   return (
//     <div>
//       <p>{wall.name}</p>
//       <p>Height: {wall.height}</p>
//       <p>Mass: {wall.mass}</p>
//     </div>
//   );
// };

// function App() {
//   const [show, setShow] = useState("1");
//   return (
//     <div className="App">
//       <Wall wallId={show} />
//       <div>
//         Show:
//         <button onClick={() => setShow("1")}>Luke</button>
//         <button onClick={() => setShow("2")}>C-3PO</button>
//       </div>
//     </div>
//   );
// }

// export default App;




// useContext
import React from "react";

//创建context
const boxContext = React.createContext();

//返回一个对象{Provider ， Consumer}
function Examples() {
  //使用Provider为所有子孙提供value值
  return (
    <boxContext.Provider value={111111}>
      <div>
        <ShowArea />
      </div>
    </boxContext.Provider>
  );
}

function ShowArea() {
  //用Consumer从上下文获取value
  return (
    <boxContext.Consumer>
      {(value) => <div>从上文拿到的value: {value}</div>}
    </boxContext.Consumer>
  );
}
export default Examples;
