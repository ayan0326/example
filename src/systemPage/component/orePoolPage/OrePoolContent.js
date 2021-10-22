import React, { Component } from "react";
import { Table, Modal, Popconfirm, Button, Select } from "antd";

export default class OrePoolContent extends Component {
  getColumns = () => [
    {
      title: "姓名",
      dataIndex: "memName",
      align: "center",
    },
    {
      title: "电话",
      dataIndex: "phoneNum",
      align: "center",
    },
    {
      title: "邮件",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "操作",
      render: (value) => (
        <div className="group-action">
          <Button type="link">修改</Button>
          <Popconfirm title="操作不可恢复，确认移除">
            <Button type="link">移除</Button>
          </Popconfirm>
        </div>
      ),
      align: "center",
      width: "10%",
    },
  ];

  render() {
      const { groupList } = this.props
    return (
      <div>
        <Table
          // pagination={pagination}
          columns={this.getColumns()}
          // loading={propsPending || pending}
          rowKey="memberId"
          dataSource={groupList}
        />
      </div>
    );
  }
}
