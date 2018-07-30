import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class CardModal extends Component {
  state = { visible: this.props.displayModal };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.displayModal) {
      props.handleModal()
      return { visible: true }
    } else {
      return null
    }
  }

  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
