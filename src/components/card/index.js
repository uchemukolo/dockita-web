import React from 'react'
import { Row, Col } from 'antd';
import './card.style.css';
import { UserOutlined } from '@ant-design/icons';


/**
* @author
* @function Card
**/

const Card = ({name, date, total}) => {
  return (
    <div date={date} name={name} total={total} className='card-container'>
      <Row>
        <Col className='avatar'>{ <UserOutlined /> }</Col>
        <Col className='description'>
          <Row className='total'>{total}</Row>
          <Row className='name-date'><Col>{name}</Col>{':'}&nbsp;&nbsp;<Col>{date}</Col></Row>
        </Col>
      </Row>
    </div>
  );

 }

export default Card