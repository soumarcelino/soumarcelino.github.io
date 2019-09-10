import React from 'react';
import { List, Badge } from 'antd';
import './Styles.css'

const data = [
  'Dashboards Real TIme com PHP, MySql, Javascript e Bootstrap',
  'Desenvolvimento de Shell scripts para rotinas em Ambientes Linux',
  'Integrações com API Zabbix',
  'Integrações com API Mikrotik'
];

function Fortalnet() {
  return (
    <List
      size="large"
      dataSource={data}
      renderItem={item => <List.Item> <Badge status="processing" /> {item} </List.Item>}
    />
  );
}

export default Fortalnet;
