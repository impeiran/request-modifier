import React from 'react';
import logo from '../../assets/img/logo.svg';
import Banner from './components/Banner'
import Tabbar from './components/Tabbar'
import { ConfigProvider, Layout } from 'antd'
// import Greetings from '../../containers/Greetings/Greetings';

const Popup = () => {
  return (
    <ConfigProvider componentSize="small">
      <div className="App">
        <Layout style={{ width: '100%', height: '100vh' }}>
          <Layout.Sider theme="light" width="150">
            <Tabbar />
          </Layout.Sider>
        </Layout>
      </div>
    </ConfigProvider>
  );
};

export default Popup;
