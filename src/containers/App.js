import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import showsData from "../showsData.js";
import SelectedContainer from "./SelectedContainer.js"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: showsData,
      results: [],
      selectedCard: null,
      showPage: true,
    };
  }

  handleShowSearch = term => {
    const results = this.state.shows.filter(show => {
      return show.name.toLowerCase().includes(term.toLowerCase());
    });
    if(term === ""){
      this.setState({
        results: [],
      })
    }
    else{
      this.setState({
        results: results.slice(0, 10)
      });
    }
  };

  handleCardClick = event => {
    const selectedShow = this.state.shows.find(show => {
      return show.id === parseInt(event.target.id)
    })
    this.setState({
      showPage: !this.state.showPage,
      selectedCard: selectedShow
    })
  }

  render() {
    return (
      <div>
        {this.state.showPage?
          <SearchContainer
            onSearchTermChange={this.handleShowSearch}
            shows={this.state.results}
            onCardClick={this.handleCardClick}
          />
        :
          <SelectedContainer selectedCard={this.state.selectedCard}/>
      }
      </div>
    );
  }
}

export default App;
