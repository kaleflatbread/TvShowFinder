import React, { Component } from "react";


export default class SelectedContainer extends Component {

  render() {
    console.log("IM IN SELECTED CONTAINER")
    return (
      <div>
        {this.props.selectedCard.name}
      </div>
    );
  }
}
