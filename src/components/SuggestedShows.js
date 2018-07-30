import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import reformatSummary from '../reformatSummary';

const { Meta } = Card;

const SuggestedShows = ({ similarShows, onClick }) => {
  const show = (similarShow) => {
    return (
      <div key={similarShow.id}>
        <Card
          onClick={() => onClick(similarShow)}
          style={{ width: 250 }}
          cover={
            <img
              id={similarShow.id}
              alt="example"
              src={similarShow.image.original}
            />
          }
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon onClick={() => console.log('hey')} type="ellipsis" />,
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
  return similarShows.map((similarShow) => show(similarShow));
};

export default SuggestedShows;
