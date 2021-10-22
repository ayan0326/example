import React, { Component } from "react";
import OrePoolContent from "./OrePoolContent";
import { Button, Collapse, Popconfirm } from "antd";
import { Loading } from "elephant-ui";

const { Panel } = Collapse;
const List = () => [
    {
      memName: 121,
      phoneNum: 87687,
      email: 23,
      state: 0,
    },
  ];


export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = { groups: [] };
  }

  render() {
    const { pending } = this.props;
    // const groupList = [];
    const groupList = this.list
    const { groups } = this.state;
    return pending ? (
      <Loading width={24} height={24} />
    ) : (
      <Collapse onChange={this.onChange}>
        {(groupList || []).map((item, idx) => {
          const visible = (groups || []).includes(String(idx));
          const header = (
            <Popconfirm
              title="操作不可恢复，确认删除"
              onConfirm={(e) => this.handleGroupDelete(e, item.groupId)}
            >
              <Button type="link">删除组</Button>
            </Popconfirm>
          );
          return (
            <Panel
              header={item.groupName}
              collapsible="header"
              extra={header}
              key={item.index}
            >
              {visible ? <OrePoolContent /> : null}
            </Panel>
          );
        })}
      </Collapse>
    );
  }
}
