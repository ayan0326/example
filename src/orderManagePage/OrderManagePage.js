import React, { Component } from "react";
import { Button, Input, Select, Option } from "antd";
import { Table } from "antd";

export default class OrderManagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { form } = this.props;
    // const { getFieldDecorator } = form;
    const phone = '1342567890109876543567890198765432456728976543gfy3hg'
    const phoneData = phone.replace(/(\d{6})\d*(\d{6})/,'$1****$2');


    // const number = '14tyrs3f5256789010fgh9876543jhgh5677jhg68hf6543245t67288976543gfy3hg';
    // const data = number.replace(/\d*\D*((\d+[a-zA-Z]+[^0-9a-zA-Z]+)|(\d+[^0-9a-zA-Z]+[a-zA-Z]+)|([a-zA-Z]+\d+[^0-9a-zA-Z]+)|([a-zA-Z]+[^0-9a-zA-Z]+\d+)|([^0-9a-zA-Z]+[a-zA-Z]+\d+)|([^0-9a-zA-Z]+\d+[a-zA-Z]+))\d*\D*/);

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>账户管理</div>
          <Button type="primary">创建账户</Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 20 }}>登录名</div>
            {/* {getFieldDecorator("username")(<Input />)} */}
            <Input style={{ width: 150, marginRight: 40 }} />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: 20 }}>手机号</div>
            {/* {getFieldDecorator("phone")(<Input />)} */}
            <Input style={{ width: 200, marginRight: 40 }} />
          </div>
          <Button type="primary" style={{ marginRight: 20 }}>
            搜索
          </Button>
          <Button>重置</Button>
        </div>
        <div>{phoneData}</div>

      </div>
    );
  }
}

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }

// export default class OrderManagePage extends Component {
//   state = {
//     selectedRowKeys: [], // Check here to configure the default column
//     loading: false,
//   };

//   columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//     },
//   ];

//   start = () => {
//     this.setState({ loading: true });
//     // ajax request after empty completing
//     setTimeout(() => {
//       this.setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000);
//   };

//   onSelectChange = selectedRowKeys => {
//     console.log('selectedRowKeys changed: ', selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   };

//   render() {
//     const { loading, selectedRowKeys } = this.state;
//     const rowSelection = {
//       selectedRowKeys,
//       onChange: this.onSelectChange,
//     };
//     const hasSelected = selectedRowKeys.length > 0;
//       return (
//         <div>
//         <Table rowSelection={rowSelection} columns={this.columns} dataSource={data} />
//       </div>
//       )
//   }
// }
