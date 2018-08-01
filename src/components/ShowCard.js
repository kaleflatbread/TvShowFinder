import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import reformatSummary from '../reformatSummary';
const { Meta } = Card;

const ShowCard = (props) => {
  return (
    <div>
      <Card
        // style={{ width: 250 }}
        cover={
          <img
            onClick={() => props.onCardClick(props.show)}
            id={props.show.id}
            alt="example"
            src={props.show.image.original}
          />
        }
        actions={[
          // <Icon type="setting" />,
          // <Icon type="edit" />,
          // <Icon
          //   id={props.show.id}
          //   onClick={() => {
          //     return props.handleModal();
          //   }}
          //   type="ellipsis"
          // />,
        ]}
      >
        <Meta
          title={props.show.name}
          description={reformatSummary(props.show.summary)}
        />
      </Card>
      <br />
    </div>
  );
};

export default ShowCard;
