import React, { Component } from 'react'
import { Layout } from 'antd';
import Maincontent from '../maincontent'
import BnhHeader from '../header'
import MenuBar from '../menu'
import "antd/dist/antd.less";
import './index.css';

import {BrowserRouter} from 'react-router-dom'


const { Header, Content, Footer, Sider } = Layout;

/**获取url参数**/
function getRequest () {
    console.log(location.search);
    var url = location.search; //获取url中含"?"符后的字串
    var theRequest = new Object();
    var strs;
    if (url.indexOf("?") != -1) {
       var str = url.substr(1);
       strs = str.split("&");
       for(var i = 0; i < strs.length; i ++) {
          theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
       }
    }
    return theRequest;
 }

 const menuItems = [
    {
        name:'客户管理',
        icon:'icon-kehu1',
        page:'/customer'
    }, {
        name:'供应商管理',
        icon:'icon-gongyingshang'
    }, {
        name:'订单管理',
        icon:'icon-dingdan',
        page:'/salesorder'
    }
 ]

export default class index extends Component {

    constructor(props){
        super(props);
        const request = getRequest();
        const page = request.page ? request.page : '/salesorder'
        this.state = {
            page:page,
            collapsed: false,
            menuItems:menuItems
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    onSelect = (item) => {
        const page = this.state.menuItems[item.key].page;
        window.open('/?page=' + page);
    }

    render() {
        const { collapsed,page } = this.state;
        return (
            <div className="mainframe">
               <BnhHeader className="mainframe-header" />
               <Layout className="mainframe-layout">
                    <Sider id="mainframe-sider" className="sider-Layout" theme="light" collapsible collapsed={collapsed} defaultCollapsed={true} onCollapse={this.onCollapse}>
                        <MenuBar menuItems={menuItems} onSelect={this.onSelect}/>
                    </Sider>
                    <div className="site-layout">
                    <Layout >
                        <Content className="mainframe-content" >
                            <div className="site-layout-background" style={{ height:'100%',padding: 0 }}>
                                <Maincontent page={page} />
                            </div>
                        </Content>
                    </Layout>
                    <Footer className="mainframe-footer">
                        <div className="mainframe-footer-title">Design by Next©2021 Created by hongjian</div>
                    </Footer>
                    </div>  
                </Layout>
            </div>
        )
    }
}
