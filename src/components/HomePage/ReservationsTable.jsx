import React from 'react';
import { Table, Tag, Progress, Typography } from 'antd';
import { CarOutlined } from '@ant-design/icons';

const { Title } = Typography;

const data = [
  {
    key: '1',
    vehicleId: '111-222-3',
    progress: 100,
    status: 'Available',
  },
  {
    key: '2',
    vehicleId: '111-222-4',
    progress: 75,
    status: 'Active',
  },
  {
    key: '3',
    vehicleId: '111-222-5',
    progress: 30,
    status: 'Available',
  },
  {
    key: '4',
    vehicleId: '111-222-6',
    progress: 50,
    status: 'Active',
  },
];

const columns = [
  {
    title: 'Vehicle ID',
    dataIndex: 'vehicleId',
    key: 'vehicleId',
    render: (text) => (
      <span style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
        <CarOutlined />
        {text}
      </span>
    ),
  },
  {
    title: 'Progress',
    dataIndex: 'progress',
    key: 'progress',
    render: (value) => {
      let strokeColor = '#52c41a'; // green
      if (value < 100 && value >= 60) strokeColor = '#1890ff'; // blue
      if (value < 60) strokeColor = '#faad14'; // orange
      return (
        <Progress
          percent={value}
          size="small"
          strokeColor={strokeColor}
          trailColor="#333"
        />
      );
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => {
      const color = status === 'Available' ? 'green' : 'blue';
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const ReservationsTable = () => {
  return (
    <div style={styles.wrapper}>
      <Title level={3} style={styles.title}>Track Available Vehicles</Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 4 }}
        bordered
        rowClassName={() => 'dark-row'}
        style={styles.table}
      />
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '60px 20px',
    backgroundColor: 'rgb(4, 21, 37)',
    borderRadius: '16px',
    margin: '40px 0',
  },
  title: {
    textAlign: 'left',
    color: '#fff',
    marginBottom: '24px',
  },
  table: {
    backgroundColor: 'transparent',
  },
};

export default ReservationsTable;