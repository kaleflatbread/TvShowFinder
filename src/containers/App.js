import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import showsData from '../showsData.js';
import SelectedContainer from './SelectedContainer';

console.log(showsData);
// function searchShows(show) {
//   var selectedShowGenres = JSON.stringify(show.genres);
//   var genreArray = [];

//   showsData.forEach((show) => {
//     genreArray.push(show.genres);
//   });
//   console.log(genreArray);

//   var genreArray = JSON.stringify(genreArray);

//   var res = genreArray.indexOf(selectedShowGenres);
//   if (res != -1) {
//     console.log(res);
//   }

// console.log(genreArray);

// var filteredCombinations = genreArray.filter(
//   (f) => f.filter((g) => show.genres.includes(g)).length === 3
// );

// console.log(JSON.stringify(filteredCombinations));

// function isEqual(value, other) {
//   var genres = other.genres;
//   // Get the value type
//   var type = Object.prototype.toString.call(value);

//   // If the two objects are not the same type, return false
//   if (type !== Object.prototype.toString.call(genres)) return false;

//   // If items are not an object or array, return false
//   if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

//   // Compare the length of the length of the two items
//   var valueLen =
//     type === '[object Array]' ? value.length : Object.keys(value).length;
//   var genresLen =
//     type === '[object Array]' ? genres.length : Object.keys(genres).length;
//   if (valueLen !== genresLen) return false;

//   // Compare two items
//   var compare = function(item1, item2) {
//     // Get the object type
//     var itemType = Object.prototype.toString.call(item1);

//     // If an object or array, compare recursively
//     if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
//       if (!isEqual(item1, item2)) return false;
//     }

//     // genreswise, do a simple comparison
//     else {
//       // If the two items are not the same type, return false
//       if (itemType !== Object.prototype.toString.call(item2)) return false;

//       // Else if it's a function, convert to a string and compare
//       // genreswise, just compare
//       if (itemType === '[object Function]') {
//         if (item1.toString() !== item2.toString()) return false;
//       } else {
//         if (item1 !== item2) return false;
//       }
//     }
//   };

//   // Compare properties
//   if (type === '[object Array]') {
//     for (var i = 0; i < valueLen; i++) {
//       if (compare(value[i], genres[i]) === false) return false;
//     }
//   } else {
//     for (var key in value) {
//       if (value.hasOwnProperty(key)) {
//         if (compare(value[key], genres[key]) === false) return false;
//       }
//     }
//   }
//   console.log(other.id);
//   // If nothing failed, return true
//   return true;
// }

function isEqual(currentShowGenre, show) {
  var arrayA = currentShowGenre.sort();
  var arrayB = show.genres.sort();

  var matches = 0;
  for (var x = 0; x < arrayA.length; x++) {
    if (arrayB.indexOf(arrayA[x]) != -1) matches++;
  }
  if (matches === show.genres.length && show.rating.average > 7) {
    console.log(show);
    return show;
    // return matches;
  }
}

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
    // const selectedShow = this.state.shows.find(show => {
    //   return show.id === parseInt(event.target.id)
    // })
    console.log(selectedShow);
    this.setState({
      showPage: !this.state.showPage,
      selectedCard: selectedShow,
    });
    showsData.forEach((show) => isEqual(selectedShow.genres, show));
  };

  render() {
    return (
      <div>
        {this.state.showPage ? (
          <SearchContainer
            onSearchTermChange={this.handleShowSearch}
            shows={this.state.results}
            onCardClick={this.handleCardClick}
          />
        ) : (
          <SelectedContainer selectedCard={this.state.selectedCard} />
        )}
      </div>
    );
  }
}

export default App;
