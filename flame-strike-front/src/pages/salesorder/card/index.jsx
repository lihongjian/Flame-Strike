import React, { Component } from 'react'
import { Form, Row, Col, Input, Button } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';


const fields = [
    {
        name:'customerName',
        label:'客户名称'
    },
    {
        name:'custPhone',
        label:'客户手机号'
    },
    {
        name:'supplierName',
        label:'供应商'
    },
    {
        name:'goodsName',
        label:'商品'
    },
    {
        name:'unitPrice',
        label:'单价'
    },
    {
        name:'totalPrice',
        label:'总价'
    }
]
export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expand: false,
            setExpand: false
        }
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    getFields = () => {
        const {expand} = this.state;
        const count = fields.length;
        const children = [];

        for (let i = 0; i < count; i++) {
            children.push(
                <Col span={12} key={i}>
                    <Form.Item
                        name={`field-${i}`}
                        label={`Field ${i}`}
                        rules={[
                            {
                                required: true,
                                message: 'Input something!',
                            },
                        ]}
                    >
                        <Input placeholder="placeholder" />
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    };

    render() {
        const { expand } = this.state;
   

        return (
            <div>
                <Form
   
                    name="advanced_search"
                    className="ant-advanced-search-form"
                    onFinish={this.onFinish}
                >
                    <Row gutter={24}>{this.getFields()}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">
                                Search
                            </Button>
                            <Button
                                style={{ margin: '0 8px' }}
                                onClick={() => {
                                    form.resetFields();
                                }}
                            >
                                Clear
                            </Button>
                            <a
                                style={{ fontSize: 12 }}
                                onClick={() => {
                                    // this.setExpand(!expand);
                                }}
                            >
                                {expand ? <UpOutlined /> : <DownOutlined />} Collapse
                            </a>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


