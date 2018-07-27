import React from 'react'
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

const ShowCard = (props) => {
  return (
    <div >
      <Card
        onClick={props.onCardClick}
        style={{ width: 250}}
        cover={<img id={props.show.id} alt="example" src={props.show.image.original} />}
        actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
      <Meta
        title={props.show.name}
        description={props.show.summary.slice(3,90)}
      />
      </Card>
   </div>
  )
}

export default ShowCard
