import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import showsData from '../showsData';
import SelectedContainer from './SelectedContainer';
import isEqual from '../searchAlg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: showsData,
      results: [],
      selectedCard: null,
      showPage: true,
      similarShows: [],
    };
  }

  handleShowSearch = (term) => {
    const results = this.state.shows.filter((show) => {
      return show.name.toLowerCase().includes(term.toLowerCase());
    });
    if (term === '') {
      this.setState({
        results: [],
      });
    } else {
      this.setState({
        results: results.slice(0, 10),
      });
    }
  };

  handleCardClick = (selectedShow) => {
    let similarShows = showsData.filter((show) => isEqual(selectedShow, show));
    console.log(selectedShow);
    this.setState({
      showPage: !this.state.showPage,
      selectedCard: selectedShow,
      similarShows: similarShows,
    });
  };

  render() {
    console.log('similar Show State', this.state.similarShows);
    return (
      <div>
        <NavBar />
        {this.state.showPage ? (
          <SearchContainer
            onSearchTermChange={this.handleShowSearch}
            shows={this.state.results}
            onCardClick={this.handleCardClick}
          />
        ) : (
          <SelectedContainer
            similarShows={this.state.similarShows}
            selectedCard={this.state.selectedCard}
          />
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
