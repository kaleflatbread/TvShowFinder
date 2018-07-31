import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import showsData from '../showsData';
import SelectedContainer from './SelectedContainer';
import isEqual from '../searchAlg';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardModal from './CardModal.js';
import LoginContainer from './LoginContainer'
import ProfileContainer from './ProfileContainer'
import SearchBar from '../components/SearchBar'

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: showsData,
      results: [],
      selectedCard: null,
      modalCard: null,
      showPage: true,
      similarShows: [],
      displayModal: false,
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

  handleModal = () => {
    // console.log(event.target.id);
    const showMatch = this.state.shows.find(show => {
      return show.id === parseInt(event.target.id)
    })
    this.setState({
      displayModal: !this.state.displayModal,
      modalCard: showMatch
    })
  };

  navBarReset = () => {
    console.log('navbar reset')
    this.setState({
      shows: showsData,
      results: [],
      selectedCard: null,
      modalCard: null,
      showPage: true,
      similarShows: [],
      displayModal: false,
    })
  }

  render() {
    console.log('state modalCard',this.state.modalCard);
    return (
      <div>
        <Route path="/" render={()=><NavBar onNavBarReset={this.navBarReset}/>} />
        <CardModal displayModal={this.state.displayModal} handleModal={this.handleModal} modalCard={this.state.modalCard} />
        <Route path="/home" render={(props)=><SearchBar onSearchTermChange={this.handleShowSearch} />} />
        {this.state.showPage ? (
          <Route path="/home" render={(props)=>
            <SearchContainer
            handleModal={this.handleModal}
            onSearchTermChange={this.handleShowSearch}
            shows={this.state.results}
            onCardClick={this.handleCardClick}
          />
          } />
        ) : (
          <Route path="/home" render={(props)=>
            <SelectedContainer
            handleModal={this.handleModal}
            similarShows={this.state.similarShows}
            selectedCard={this.state.selectedCard}
          />
          } />
        )}
        <Route exact path="/login" component={LoginContainer} />
        <Route path="/" component={Footer} />
      </div>
    );
  }
}

export default App;
