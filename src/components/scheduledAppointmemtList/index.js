import React from 'react';
import { Table, Avatar } from 'antd';
import './scheduledAppointmemtList.style.css';

/**
* @author
* @function ScheduledAppointmemtList
**/



const ScheduledAppointmemtList = (props) => {
  const dataSource = [
    {
      key: '2',
      name: 'Mike',
      age: 32,
      address: 'OBSERVATION',
      date: 'Tomorrow',
      time: '10:30 AM',
      issue: 'Malaria',
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      address: 'GENERAL VISIT',
      date: 'Tomorrow',
      time: '10:30 AM',
      issue: 'Malaria',
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      key: '4',
      name: 'Mike',
      age: 32,
      address: 'OBSERVATION',
      date: 'Tomorrow',
      time: '10:30 AM',
      issue: 'Malaria',
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    {
      key: '5',
      name: 'John',
      age: 42,
      address: 'GENERAL VISIT',
      date: 'Tomorrow',
      time: '10:30 AM',
      issue: 'Malaria',
      avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
  ];
  
  dataSource.map((item => item))

  const columns = [
    {
      title: '',
      key: 'avatar',
      render: () => (
      <Avatar src={ "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
      ),
    },
    {
      title: '',
      key: 'name',
      render: (item) =>
           (
            <div className='custom-rows'>
              <p style={{}}>{item.name}</p>
              <p style={{marginTop: '-14px', fontSize: '10px', color: '#8E9198'}}>{item.issue}</p>
            </div>
            )
    },
    {
      title: '',
      key: 'age',
      render: (item) =>
      (
        <div className='custom-rows'>{item.age}</div>
      )
    },
    {
      title: '',
      key: 'address',
      render: (item) =>
      (
        <div className='custom-rows'>{item.address}</div>
      )
    },
    {
      title: '',
      key: 'date',
      render: (item) =>
      (
        <div className='custom-rows'>{item.date}</div>
      )
    },
    {
      title: '',
      key: 'time',
      render: (item) =>
      (
        <div className='custom-rows'>{item.time}</div>
      )
    },
  ];

  return(
    <Table
      dataSource={dataSource}
      columns={columns}
      title={() => 'SCHEDULED APPOINTMENTS'}
    footer={() => 'View full list'}
    pagination={false}
    showHeader={false}
    />
   )

 }

export default ScheduledAppointmemtList;