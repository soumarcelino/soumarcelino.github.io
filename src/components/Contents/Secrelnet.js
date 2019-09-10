import React from 'react';
import { List, Badge } from 'antd';
import './Styles.css'

const data = [
  'WEB - ReactJS, PHP (Framework Yii2), Javascript, HTML5 e CSS3',
  'Desenvolvimento de APIs e Web Services com NodeJS',
  'MySql - migrações, otimização de performance e monitoramento',
  'Scripts para automatização de rotinas em ambientes Linux',
  'Administração de servidores linux',
  'Provisionamento de soluções em Cloud com Docker e Jelastic',
  'VoIP usando Asterisk'
];

function Secrelnet() {
  return (
    <List
      size="large"
      dataSource={data}
      renderItem={item => <List.Item> <Badge status="processing" /> {item} </List.Item>}
    />
  );
}

export default Secrelnet;
