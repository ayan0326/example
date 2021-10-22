// import React from 'react';
// import './index.css';

// export default function AuditPage() {
//   return (
//     <div className="change">
//       jhgvggfhjk
//     </div>
//   )
// }



import React, { Component, useRef } from 'react'

export default class AuditPage extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    console.log(this.myRef.current)
  }


  // 生命周期

  // 挂载时
  constructor
  stattic getDerivedStateFromProps
  render
  componentDidMount


  // 更新时
  static getDerivedStateFromProps
  shouldComponentUpdate
  render
  getSnapshotBeforeUpdate
  componentDidUpdate

  // 卸载
  componentWillUnmount


  render() {
    return (
      <input type="text" ref={this.myRef} />
    )
  }
}
