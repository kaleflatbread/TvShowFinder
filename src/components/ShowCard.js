import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import reformatSummary from '../reformatSummary';
const { Meta } = Card;

const ShowCard = (props) => {
  return (
    <div>
      <Card
        onClick={() => props.onCardClick(props.show)}
        style={{ width: 250 }}
        cover={
          <img
            id={props.show.id}
            alt="example"
            src={props.show.image.original}
          />
        }
        actions={[
          <Icon type="setting" />,
          <Icon type="edit" />,
          <Icon type="ellipsis" />,
        ]}
      >
        <Meta
          title={props.show.name}
          description={reformatSummary(props.show.summary)}
        />
      </Card>
    </div>
  );
};

export default ShowCard;
