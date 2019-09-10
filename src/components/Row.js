import React from 'react';
import { Card as AntCard } from 'antd';
import { List } from 'antd';

const styles = {
  logo: { width: '150px' }
}

function Row({ data: { title, itens } }) {
  return (
    <AntCard title={title}>
        <List
        itemLayout="horizontal"
        dataSource={itens}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<img src={item.logo} alt={item.name} style={styles.logo} />}
              title={item.name}
              description={<div> {item.date} {item.content}</div>}
            />
        </List.Item>
        )}
    />
    </AntCard>
  );
}

export default Row;
