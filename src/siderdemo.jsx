import React from 'react'
import './siderdemo.css';

import {  Layout, Menu, Breadcrumb  } from 'antd'
import  { DesktopOutlined, PieChartOutlined, FileOutlined, UserOutlined, } from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              About me
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Blogs
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Projects">
              <Menu.Item key="3">Games</Menu.Item>
              <Menu.Item key="4">Websites</Menu.Item>
              <Menu.Item key="5">Machine learning</Menu.Item>
            </SubMenu>
            <Menu.Item key="6" icon={<FileOutlined />}>
              Contact me
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Eba</Breadcrumb.Item>
              <Breadcrumb.Item>Greetings</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Hi my name is Eba. Nice to meet you!
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Thank you for visiting my website.</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default SiderDemo