import React from 'react';
import ReactDom from 'react-dom';

import { Table, Input, Button, Popconfirm, Form, InputNumber, Typography, Drawer } from 'antd';
import { Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';

import './index.css';
import "antd/dist/antd.less";
import Card from './card'

import axios from 'axios'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
    key: 'phone',
    width: '15%',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    width: '15%',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width: '15%',
  },
  {
    title: '备注',
    dataIndex: 'memo',
    key: 'memo',
    width: '10%',
  }
  // ,{
  //   title: '总价',
  //   dataIndex: 'totalPrice',
  //   key: 'totalPrice',
  //   width: '10%',
  // },
  // {
  //   title: '订单状态',
  //   dataIndex: 'orderStatus',
  //   key: 'orderStatus',
  //   width: '10%',
  // },
  // {
  //   title: 'Action',
  //   dataIndex: '',
  //   key: 'x',
  //   render: () => <a>Delete</a>,
  //   width: '20%',
  // },
];



export default class Customer extends React.Component {

  constructor(props) {
    super(props);
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      data: [],
      loading: false,
      visible: false,
      pagination: {
        current: 1,
        pageSize: 10,
      },
      defaultPaginationOption: {
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: [10, 20, 50, 100],
      },
      cardMotion: 1, //1 查看 2 编辑 3 新增
    }
  }

  componentDidMount() {
    const _this = this;
    // _this.setState({ loading: true });
    const { pagination } = this.state;

    const token = this.source.token;
    axios.post('/customer/getCustomers', {
      pageParam: pagination, customerName: '我是谁1'
    }, { cancelToken: token }).then(function (response) {
      // _this.setState({
      //   data: response.data.data.rows,
      //   loading: false,
      //   pagination: {
      //     ...response.data.data.pageInfo,
      //     ..._this.state.defaultPaginationOption
      //   }
      // })
    }).catch(function (error) {
      console.log(error)
    });
  }


  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    // this.setState({ selectedRowKeys });
  };


  onClose = () => {
    // this.setState({
    //   visible: false,
    // });
  };

  handleTableChange = (pagination, filters, sorter) => {
    // const _this = this;
    // console.log(pagination);
    // axios.post('/order/getOrders', {
    //   pageParam: pagination, customerName: '我是谁1'
    // }).then(function (response) {
    //   console.log(response.data.data);
    //   _this.setState({
    //     data: response.data.data.rows,
    //     loading: false,
    //     pagination: {
    //       ...response.data.data.pageInfo,
    //       ..._this.state.defaultPaginationOption
    //     }
    //   })
    // }).catch(function (error) {
    //   console.log(error)
    // });
  }

  showDrawer = (cardMotion) => {
    // this.setState({
    //   visible: true,
    //   // cardMotion: cardMotion
    // });
  };

  render() {
    const { selectedRowKeys, data, pagination, defaultPaginationOption } = this.state;
    const drowerWidth = document.documentElement.clientWidth / 2;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      selections: [
        Table.SELECTION_ALL,
        Table.SELECTION_INVERT,
        Table.SELECTION_NONE,
        {
          key: 'odd',
          text: 'Select Odd Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            // this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
        {
          key: 'even',
          text: 'Select Even Row',
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            // this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (

      <div>
        <div className="titlebar">
          <div className="buttonbar">
            <Button className="title-button" type="primary" onClick={this.showDrawer(3)}>
              新增
            </Button>
            {/* <Button className="title-button" type="primary" onClick={this.showDrawer}>
              Reload
            </Button> */}
            <span className="clear"></span>
          </div>
        </div>
        <Table rowSelection={rowSelection}
          bordered
          columns={columns}
          dataSource={data}
          pagination={{ ...pagination, ...defaultPaginationOption }}
          rowKey="id"
          onChange={this.handleTableChange} />
        <Drawer className={this.state.visible ? "drawer1" : "drawer2"}
          title="订单管理"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          width={drowerWidth}
          style={{ position: 'absolute', opacity: 0.9 }}
        >
          <Card/>
        </Drawer>
      </div>);
  }
}

ReactDom.render(<Customer />, document.getElementById("app1"));