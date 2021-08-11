import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, InputNumber, Select, Divider } from 'antd';
import { InputType, CardStatuses } from '../../../utils/const'
import './index.css';

const { Option } = Select;

const inputType = InputType;
const cardStatuses = CardStatuses

const custfields = [
    {
        name: 'customerName',
        label: '客户名称',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }]
    },
    {
        name: 'custPhone',
        label: '手机号',
        placeholder: '请输入手机号',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }]
    }]

const suplyfields = [
    {
        name: 'supplierName',
        label: '供应商',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }]
    }
]

const orderfields = [
    {
        type: inputType.SELECT,
        name: 'goodsName',
        label: '商品',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }],
        options: {
            "gasoline-92": "汽油92",
            "gasoline-95": "汽油95",
            "dieseloil": "柴油"
        }
    },
    {
        type: inputType.INPUTNUMBER,
        name: 'unitPrice',
        label: '单价',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }]
    },
    {
        type: inputType.INPUTNUMBER,
        name: 'amount',
        label: '数量',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }]
    },
    {
        type: inputType.INPUTNUMBER,
        name: 'totalPrice',
        label: '总价',
        rules: [{
            required: true,
        }
        ]
    }
]

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.inputType = inputType;
        this.cardStatuses = cardStatuses;
        this.state = {
            status: cardStatuses.COMMON,
            expand: false,
            setExpand: false
        }
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    getFields = (section) => {
        const { status } = this.state;
        const disabled = status == this.cardStatuses.COMMON ? true : false;
        let fields = [];
        if(section == 0){
            fields = custfields;
        } else if (section == 1){
            fields = suplyfields;
        } else if (section == 2){
            fields = orderfields;
        }
        const count = fields.length;
        const children = [];
        for (let i = 0; i < count; i++) {
            const field = fields[i];
            children.push(
                <Col span={12} key={i} style={{ textAlign: 'left' }}>
                    <Form.Item
                        name={field.name}
                        label={field.label}
                        rules={field.rules}
                    >
                        {(() => {
                            switch (field.type) {
                                case inputType.INPUTNUMBER:
                                    return <InputNumber disabled={disabled}></InputNumber>
                                case inputType.SELECT:
                                    return <Select disabled={disabled}>{this.renderSelectOption(field.options)}</Select>
                                default:
                                    return <Input disabled={disabled} placeholder="placeholder" />
                            }
                        }
                        )()}
                    </Form.Item>
                </Col>,
            );
        }
        return children;
    };

    renderSelectOption = (opts) => {
        const options = [];
        for (let key in opts) {
            options.push(<Option key={key} value={key}>{opts[key]}</Option>)
        }

        return options;
    }

    onEdit = () => {
        this.setState({
            status: this.cardStatuses.EDIT
        })
    }

    onSave = () => {
        this.setState({
            status: this.cardStatuses.COMMON
        })
    }

    render() {
        const formItemLayout = {
            labelCol: {
                span: 6,
            },
            wrapperCol: {
                span: 18,
            },
        };
        return (
            <div>
                <Form
                    {...formItemLayout}
                    onFinish={this.onFinish}
                >
                    <Divider orientation="left" plain>客户信息</Divider>
                    <Row gutter={24}>{this.getFields(0)}</Row>
                    <Divider orientation="left" plain>供应商信息</Divider>
                    <Row gutter={24}>{this.getFields(1)}</Row>
                    <Divider orientation="left" plain>订单信息</Divider>
                    <Row gutter={24}>{this.getFields(2)}</Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" onClick={this.onEdit}>
                                修改
                            </Button>
                            <Button
                                style={{ margin: '0 8px' }}
                                onClick={this.onSave}
                            >
                                保存
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}


