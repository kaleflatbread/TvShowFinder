import React from "react";
import { Card, Icon, Avatar } from "antd";
import reformatSummary from "../reformatSummary";
import { Alert } from 'antd';

const { Meta } = Card;

const SuggestedShows = ({ similarShows, onClick, user }) => {

  const postFavorite = (showID) => {
    // postConfig is used for generating a new favorite show
    console.log(user.id)
    const postConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        show: { user_id: user.id, favorite: showID }
      })
    };
    fetch("http://localhost:3000/shows/create",postConfig)
    .then(alert("Show added to favorites"))
  }

  const show = similarShow => {
    return (
      <div key={similarShow.id}>
        <br />
        <Card
          // style={{ width: 250 }}
          cover={
            <img
              onClick={() => {
                onClick(similarShow);
              }}
              id={similarShow.id}
              alt=""
              src={similarShow.image.original}
            />
          }
          actions={[
            <Icon
              type="heart"
              onClick={() => {
                postFavorite(similarShow.id) ;
              }}
            />
          ]}
        >
          <Meta
            title={`${similarShow.name} (${similarShow.rating.average})`}
            description={reformatSummary(similarShow.summary)}
          />
        </Card>
      </div>
    );
  };
  return (
    <div style={{ paddingTop: 100 }}>
      {similarShows.map(similarShow => show(similarShow))}
    </div>
  );
};

export default SuggestedShows;
