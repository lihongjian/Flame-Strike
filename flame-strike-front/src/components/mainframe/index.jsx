import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Maincontent from '../maincontent'
import BnhHeader from '../header'
import "antd/dist/antd.css";
import './index.css';

import {BrowserRouter} from 'react-router-dom'

import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
export default class index extends Component {


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
            <BrowserRouter>
            <div className="mainframe">
               <BnhHeader className="mainframe-header" />
               <Layout className="mainframe-layout">
                    <Sider className="sider-Layout" collapsible collapsed={collapsed} onCollapse={this.onCollapse}>

                        <Menu className="sider-menu" theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                客户管理
            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                供应商管理
            </Menu.Item>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                订单管理
            </Menu.Item>
                        </Menu>
                    </Sider>
                    <div className="site-layout">
                    <Layout >
                        <Content className="mainframe-content" >
                         {/*    <Breadcrumb className="mainframe-content-breadcrumb">
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb> */}
                            <div className="site-layout-background" style={{ height:'100%',padding: 0 }}>
                                <Maincontent />
                            </div>
                        </Content>
                    </Layout>
                    <Footer className="mainframe-footer">
                        <div className="mainframe-footer-title">Design by Next©2021 Created by hongjian</div>
                    </Footer>
                    </div>
                   
                </Layout>
            </div>
            </BrowserRouter>
        )
    }
}
