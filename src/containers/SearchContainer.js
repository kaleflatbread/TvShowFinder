import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.js';
import SearchResults from '../components/SearchResults.js';

export default class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.props.onSearchTermChange} />
        <SearchResults
          shows={this.props.shows}
          onCardClick={this.props.onCardClick}
        />
      </div>
    );
  }
}
