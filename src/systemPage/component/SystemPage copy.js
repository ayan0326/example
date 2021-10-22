import React, { Component } from 'react';
import { Tabs, Input, Select } from 'antd';
import NodePage from './nodePage/NodePage';
import OrePoolPage from './orePoolPage/OrePoolPage';
import Show from './orePoolPage/Show';


const { TabPane } = Tabs;
const { Option } = Select;

export default class SystemPage extends Component {
    render() {
        return (
            <div className="inform-box">
        {/* 通知管理，通知组和通知人切换 */}
        <Tabs onChange={this.handleTabChanged} type="card">
          <TabPane tab="矿池" key="group">
              <OrePoolPage />
              <Show />
            {/* <AddGroup afterAdded={this.afterGroupAdded} />
            <InformGroup groupList={groupList} pending={groupPending} afterAmended={this.getNotifyGroupList} /> */}
          </TabPane>

          <TabPane tab="节点" key="person">
            <div className="inform-title">
              <div className="notifier-btn" onClick={() => this.setNonifierModalVisible(true)}>
                + 添加通知人
              </div>
              <div className="search-way">
                <Select
                  style={{ width: 112, marginLeft: 5 }}
                  // value={groupId}
                  defaultValue="所有通知组"
                  onChange={this.handleGroupChanged}
                >
                  {/* {allGroupList.map((g) => (
                    <Option key={g.groupId} value={g.groupId}>
                      {g.groupName}
                    </Option>
                  ))} */}
                </Select>

              </div>
              {/* <AddNotifier
                groupList={groupList}
                afterAdded={this.afterAddNotifier}
                amendNotifier={this.afterAmendNotifier}
                setModalVisible={this.setNonifierModalVisible}
                addModalVisible={addNotifierModalVisible}
                values={notifierEditInfo}
                edit={edit}
              /> */}
            </div>
            {/* TODO: 这里的列表展示组件，接住接口返回的列表数据 */}
            <NodePage />
          </TabPane>
        </Tabs>
      </div>
        )
    }
}
