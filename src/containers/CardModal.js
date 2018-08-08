import React, { Component } from 'react';
import { Modal, Button } from 'antd';

export default class CardModal extends Component {
  state = {
    visible: false,
    show: null
  };

  handleOk = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  };

  static getDerivedStateFromProps(props, state) {
    if (props.displayModal) {
      props.handleModal()
      // console.log('modal props',props);
      return { visible: true, show: props.modalCard }
    } else {
      return null
    }
  }

  modalData = () => {
    if (this.props.modalCard) {
      return (
        <div>
          <Modal
            title={this.props.modalCard.name}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <h1>Insert modal data here...</h1>
            </Modal>
        </div>
          )
        }
      }
    
  render() {
    return (
      <div>
        {this.modalData()}
        </div>
      );
    }
  }
