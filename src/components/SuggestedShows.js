import React from "react";
import { Card, Icon, Avatar } from "antd";
import reformatSummary from "../reformatSummary";

const { Meta } = Card;

const SuggestedShows = ({ similarShows, onClick, handleModal }) => {
  const show = similarShow => {
    // debugger
    return (
      <div key={similarShow.id}>
      <br />
        <Card
          // style={{ width: 250 }}
          cover={
            <img
              onClick={() => {
                onClick(similarShow)
              }}
              id={similarShow.id}
              alt=""
              src={similarShow.image.original}
            />
          }
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon
              id={similarShow.id}
              onClick={() => {
                return handleModal();
              }}
              type="ellipsis"
            />
          ]}
        >
          <Meta
            title={similarShow.name}
            description={reformatSummary(similarShow.summary)}
          />
        </Card>
      </div>
    );
  };
  return (
    <div style={{paddingTop:250}}>
      {similarShows.map(similarShow => show(similarShow))}
    </div>
  )
};

export default SuggestedShows;
