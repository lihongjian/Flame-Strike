import React from 'react';
import ReactDom  from 'react-dom';

import { Table, Input, Button, Popconfirm, Form, InputNumber, Typography, Drawer } from 'antd';
import { Cascader, Select, Row, Col, Checkbox, AutoComplete } from 'antd';

import './index.css';
import "antd/dist/antd.css";

import axios from 'axios'

const columns = [
  {
    title: '客户',
    dataIndex: 'customerName',
    key: 'customerName',
    width: '15%',
  },
  {
    title: '手机号',
    dataIndex: 'mobileNum',
    key: 'mobileNum',
    width: '15%',
  },
  {
    title: '供货商',
    dataIndex: 'supplierName',
    key: 'supplierName',
    width: '15%',
  },
  {
    title: '商品',
    dataIndex: 'goodsName',
    key: 'goodsName',
    width: '15%',
  },
  {
    title: '单价',
    dataIndex: 'unitPrice',
    key: 'unitPrice',
    width: '10%',
  },
  {
    title: '总价',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
    width: '10%',
  },
  {
    title: '订单状态',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    width: '10%',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
    width: '20%',
  },
];



export default class Salesorder extends React.Component {

  constructor(props) {
    super(props);
    const CancelToken = axios.CancelToken;
    this.source = CancelToken.source();
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
      data: [],
      loading: false,
      visible: false,
      pagination:{
        current:1,
        pageSize:10,
      },
      defaultPaginationOption: {
        showQuickJumper:true,
        showSizeChanger:true,
        pageSizeOptions:[10,20,50,100],
      },
    }
  }

  componentDidMount() {
    debugger
    this.setState({ loading: true });
    const _this = this;
    const { pagination } = this.state;
   
    const token = this.source.token;
    axios.post('/order/getOrders', {
      pageParam:pagination, customerName: '我是谁1'
    },{cancelToken:token}).then(function (response) {
      _this.setState({
        data: response.data.data.rows,
        loading: false,
        pagination: {
          ...response.data.data.pageInfo,
          ..._this.state.defaultPaginationOption
        }
      })
    }).catch(function (error) {
      console.log(error)
    });
  }

  componentWillUnmount(){
    debugger
    console.log('what the fuck!');
      this.source.cancel('Operation canceled by the user.');
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };


  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const _this = this;
    console.log(pagination);
    axios.post('/order/getOrders', {
      pageParam:pagination, customerName: '我是谁1'
    }).then(function (response) {
      console.log(response.data.data);
      _this.setState({
        data: response.data.data.rows,
        loading: false,
        pagination: {
          ...response.data.data.pageInfo,
          ..._this.state.defaultPaginationOption
        }
      })
    }).catch(function (error) {
      console.log(error)
    });
  }


  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { selectedRowKeys, data, pagination,defaultPaginationOption } = this.state;
    console.log(data)
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
            this.setState({ selectedRowKeys: newSelectedRowKeys });
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
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          },
        },
      ],
    };
    return (
      
      <div>
        <div className="titlebar">
          <div className="buttonbar">
            <Button className="title-button" type="primary" onClick={this.showDrawer}>
              Reload
            </Button>
            <Button className="title-button" type="primary" onClick={this.showDrawer}>
              Reload
            </Button>
            <span className="clear"></span>
          </div>
        </div>
        <Table rowSelection={rowSelection}
          bordered 
          columns={columns}
          dataSource={data}
          pagination={{...pagination,...defaultPaginationOption}}
          rowKey="id"
          onChange={this.handleTableChange} />
        <Drawer className={this.state.visible ? "drawer1" : "drawer2"}
          title="订单管理"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          width={1024}
          style={{ position: 'absolute',opacity:0.9 }}
        >
            <Row style={{marginTop:'12px'}} gutter={8}>

      <Col className="gutter-row" span={4}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={4}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

    </Row>

    <Row style={{marginTop:'12px'}} gutter={8}>

    <Col className="gutter-row" span={4}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={4}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>
      
    </Row>


    <Row style={{marginTop:'12px'}} gutter={8}>

    <Col className="gutter-row" span={4}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={4}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>

      <Col className="gutter-row" span={6}>
        <div style={{ background: '#0092ff', padding: '8px 0' }}>col-6</div>
      </Col>  
    </Row>
        </Drawer>
      </div>);
  }
}

ReactDom.render(<Salesorder/>,  document.getElementById("app1"));