import React, { Component } from "react";
import { Input, Select, Button } from 'antd';

export default class FormOrePool extends Component {

  render() {
    const { form, onCancel } = this.props;
    // const { getFieldDecorator } = form;
    return (
      <div className="form-add-group">
        <div className="form-body">
          <div className="group name">
            <div className="label required">矿池名</div>
            {/* <div className="control">
              {getFieldDecorator("groupName", {
                rules: [{ required: true, message: "请填写组名" }],
              })(<Input maxLength={20} placeholder="" required />)}
            </div> */}
          </div>

          <div className="group">
            <div className="label">币类型</div>
            {/* {getFieldDecorator("memberIdList")(
              <Select
                style={{ width: "100%", marginRight: "50px" }}
                mode="multiple"
                showArrow
              >
                {allMembers.map((g) => (
                  <Option value={g.memberId}>{g.memName}</Option>
                ))}
              </Select>
            )} */}
          </div>
        </div>

        <div className="form-footer">
          <Button className="cancel_button" onClick={onCancel} >
            取消
          </Button>
          <Button
            className="add_button"
            type="primary"
            // onClick={this.handleSubmit}
          >
            添加
          </Button>
        </div>
      </div>
    );
  }
}
