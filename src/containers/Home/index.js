import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Form, Input, Button, Divider} from 'antd';
import './home.style.css';
import { history } from "../../redux/store";

/**
* @author
* @function Home
**/

const Home = (props) => {
    const onFinish = values => {
      history.push(`/dashboard`);
    };
  return(
    <div className='home-container'> 
     <Row>
       <Col span={16} className='right'>
         <Row className='right-top'>
         <Row className='right-top-text1'>Welcome Back</Row>
         <Divider className="divider"/>
           <Row className='right-top-text2'>Together, let’s make the world a better place one person at a time</Row>
         </Row>
         <Row className='right-bottom'>
         <Row className='doctors'>
            <img src={require('../../assets/doctors.png')} alt="logo"/> 
           </Row>
         </Row>
       </Col>
       <Col span={8}className='left'>
         <Row className='login-form-container'>
           <Row style={{paddingLeft: '130px'}}>
            <img src={require('../../assets/logo.png')} alt="logo"/> 
           </Row>
           <Row className='login-warning'>
           <Row style={{paddingBottom: '10px', fontSize: '20px', color: '#F59FBC', fontWeight: 800}}>PLEASE NOTE:</Row>
           <Row>* All your activities on this portal is recorded</Row>
           <Row>* Please, don’t share your login details with anyone</Row>
           </Row>
       <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
        placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
      </Form.Item>
      <Row className='register-text'>Not Registered yet?&nbsp; <span style={{fontWeight: 800}}><Link to="">SIGNUP!</Link></span></Row>
    </Form>
    </Row>
       </Col>
     </Row> 
    </div>
   )
 }

export default Home