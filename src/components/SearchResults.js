import React from 'react';
import ShowCard from './ShowCard';

const SearchResults = (props) => {
  return props.shows.map((show) => {
    return (
      <div key={show.id}>
        <ShowCard
          handleModal={props.handleModal}
          show={show}
          onCardClick={props.onCardClick}
        />
      </div>
    );
  });
};

export default SearchResults;
