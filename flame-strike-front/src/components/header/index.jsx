import React, { Component } from 'react'
import axios from 'axios'

import {
    SmileOutlined
} from '@ant-design/icons';

import './index.css';

export default class index extends Component {

    constructor(props) {
        super(props);
        // console.log("constructor");
        let hour = new Date().getHours();
        console.log("hour :" + hour);
        let timeInterval = this.getTimeInterval(hour);
        this.state = {
            userCode: props.userCode,
            timeInterval: timeInterval
        }
    }

    getTimeInterval(hour) {
        if (hour < 6) {
            return "晚上";
        } else if (hour < 8) {
            return "早上";
        } else if (hour < 11) {
            return "上午";
        } else if (hour < 13) {
            return "中午";
        } else if (hour < 18) {
            return "下午";
        } else {
            return "晚上";
        }
    }

    componentDidMount() {
        // console.log("componentDidMount");
        axios.post('/user/getUsers', {
            userCode: this.state.userCode
        }).then(function (response) {
            // console.log(response.data)
        }).catch(function (error) {
            // console.log(error)
        });
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount")
    }

    shouldComponentUpdate() {
        // console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        let { timeInterval } = this.state;
        // console.log("render");
        return (
            <div className="mainframe-header" >
                <div className="header-content-left">
                     <div className="header-content-left-main-icon">
                   </div>
                    <div className="header-content-left-menu"><span>系统管理</span></div> 
                </div>
                <div className="header-content-right">
                    <div className="header-content-right-message"></div>
                    <div className="header-content-right-date"><span>2021-8-04</span></div>
                    <div className="header-content-right-userinfo">
                        <div className="header-content-right-userinfo-hello"> {timeInterval}好，宏建</div>
                    </div>
                </div> 
            </div>
        )
    }
}
