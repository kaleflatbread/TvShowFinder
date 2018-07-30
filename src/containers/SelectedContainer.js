import React, { Component } from "react";
import ShowCard from "../components/ShowCard";

//this.props.selectedCard=entire show instance
export default class SelectedContainer extends Component {

  render() {
    return (
      <div>
        <ShowCard show={this.props.selectedCard}/>
      </div>
    );
  }
}
