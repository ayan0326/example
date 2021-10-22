import React, { Component } from "react";
import Modal from "./../../../component/Modal/index";
import FormOrePool from "./FormOrePool";

export default class OrePoolPage extends Component {
  constructor(props) {
    super(props);
    this.state = { showOrePoolModal: false };
  }

  addOrePoolModal = () => {
    this.setState({ showOrePoolModal: true });
  };

  closeOrePoolModal = () => {
    this.setState({ showOrePoolModal: false });
  };

  handleSubmit = () => {
    this.closeOrePoolModal();
    const { afterAdded } = this.props;
    afterAdded && afterAdded();
  };

  render() {
    const { showOrePoolModal } = this.state;
    return (
      <div>
        <div className="group-btn" onClick={this.addOrePoolModal}>+ 添加矿池</div>

        {!!showOrePoolModal && (
          <Modal
            title="添加矿池"
            onClose={this.closeOrePoolModal}
          >
              <FormOrePool onCancel={this.closeOrePoolModal} onSubmit={this.handleSubmit} />
          </Modal>
        )}
      </div>
    );
  }
}
