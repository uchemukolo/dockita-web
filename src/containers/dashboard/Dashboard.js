import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Row, Col } from 'antd';
import { FolderOutlined, FileOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Card from '../../components/card'
import ScheduledAppointmemtList from '../../components/scheduledAppointmemtList'
import './dashboard.style.css';

const { Header, Content, Footer, Sider } = Layout;

/**
* @author
* @function Dashboard

**/

const Dashboard = (props) => {
  return(
    <div style={{width: '100%', background: '#EDEDF6'}}>
      <Layout>
    <Sider
      style={{display:'flex', flexDirection: 'column'}}
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu mode="inline">
      <Row style={{background: '#ffffff'}}>
      <img src={require('../../assets/logo.png')} alt="logo"/> 
      </Row>
        <Menu.Item key="1">
        <FolderOutlined style={{fontSize: '50px', color: '#ffffff'}}/>
        </Menu.Item>
        <Menu.Item key="2">
        <MailOutlined style={{fontSize: '50px', color: '#ffffff'}}/>
        </Menu.Item>
        <Menu.Item key="3">
        <FileOutlined style={{fontSize: '50px', color: '#ffffff'}}/>
        </Menu.Item>
       
      </Menu>
      <Row className='settings'>
      <SettingOutlined style={{fontSize: '50px', color: '#ffffff'}}/>
      </Row>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />

      <Row gutter={8} style={{ margin: '24px 16px 0' }}>
      <Col span={6}>
      <Card name={'PATIENT VISITS'} date={'AUGUST'} total={120}/> 
      </Col>
      <Col span={6}>
      <Card
      name={'ADMISSIONS'} date={'AUGUST'} total={50}/> 
      </Col>
      <Col span={6}>
      <Card name={'DISCHARGED'} date={'AUGUST'} total={70}/> 
      </Col>
      <Col span={6}>
      <Card name={'ON TREATMENT'} date={'AUGUST'} total={50}/> 
      </Col>
      </Row>
      <Row gutter={8} style={{ margin: '24px 16px 0' }}>
      <Col span={10}>
      <Content style={{ minHeight: 'auto', borderRadius: '10px'}}>
        <ScheduledAppointmemtList />
      </Content>
      </Col>
      <Col span={8}>
      <Row>
      <Content style={{ minHeight: '100px', borderRadius: '10px'}}>
        <ScheduledAppointmemtList />
      </Content>
      </Row>
      <Row style={{paddingTop: '24px'}}>
      <Content style={{ minHeight: '300px', borderRadius: '10px'}}>
        <ScheduledAppointmemtList />
      </Content>
      </Row>
      
      </Col>
      <Col span={6}>
      <Content style={{ minHeight: 'auto', borderRadius: '10px'}}>
        <ScheduledAppointmemtList />
      </Content>
      </Col>
      </Row>
      <Footer style={{ textAlign: 'center' }}>Dockita ©2020</Footer>
    </Layout>
  </Layout>
      <ScheduledAppointmemtList />
    </div>
   )

 }

export default Dashboard
