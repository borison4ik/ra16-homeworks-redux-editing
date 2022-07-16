import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';

import { ServisesForm } from './components/ServisesForm';
import { ServisesList } from './components/ServisesList';

import { DATA } from './data';
import './app.scss';

const { Header, Content } = Layout;
const { Title, Text } = Typography;

export const App = () => {
  return (
    <Layout>
      <Header className='app-header'>
        <Title level={4}>
          <Text type='secondary'>{DATA.task.title}</Text>
        </Title>
      </Header>
      <Content className='app-content'>
        <Row className='page-content'>
          <Col span={24}>
            <ServisesForm />
          </Col>
        </Row>

        <Row className='page-content'>
          <Col span={24}>
            <ServisesList />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
