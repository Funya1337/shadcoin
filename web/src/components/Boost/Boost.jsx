import React from 'react'
import { Card, Avatar, Col, Row } from 'antd';
import { RiseOutlined, SelectOutlined, EyeInvisibleOutlined, FireOutlined } from '@ant-design/icons';
import './Boost.css';

const { Meta } = Card;

const cardData = [
  {
    title: 'Mining points',
    description: 'Increase your mining points by 1',
    icon: <RiseOutlined />,
    price: '$100',
  },
  {
    title: 'Card Title 2',
    description: 'Short description for card 2.',
    icon: <EyeInvisibleOutlined />,
    price: '$200',
  },
  {
    title: 'Card Title 3',
    description: 'Short description for card 3.',
    icon: <FireOutlined />,
    price: '$300',
  },
  {
    title: 'Card Title 4',
    description: 'Short description for card 4.',
    icon: <SelectOutlined />,
    price: '$400',
  },
];

const Boost = () => {
  return (
    <div>
      <Card className='contentWrapper'>
      <Meta
          avatar={<Avatar src="https://img.icons8.com/?size=100&id=13008&format=png&color=000000" />}
          title="Boost Shop"
          description="Buy boosts to increase your farming!"
        />
      </Card>
      <br/>
      <Row gutter={[16, 16]}>
      {cardData.map((card, index) => (
        <Col xs={12} sm={12} md={12} lg={12} xl={12} key={index}>
          <Card
            hoverable
            className="small-card"
          >
            <Meta
              avatar={<Avatar icon={card.icon} />}
              title={card.title}
              description={
                <>
                  <p>{card.description}</p>
                  <p className="card-price">{card.price}</p>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
    <br/>
    <br/>
    <br/>
    <br/>
    </div>
  )
}

export default Boost