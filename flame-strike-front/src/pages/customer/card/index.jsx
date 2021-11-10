import React, { Component } from 'react'
import { Form, Row, Col, Input, Button, InputNumber, Select, Divider } from 'antd';
import { InputType, CardStatuses } from '../../../utils/const'
import './index.css';
const { Option } = Select;
const inputType = InputType;
const cardStatuses = CardStatuses
const baseInfo = [
    {
        name: 'name',
        label: '姓名',
        rules: [{
            required: false,
            message: '哈哈哈!',
        }]
    },
    {
        name: 'phone',
        label: '手机号',
        placeholder: '请输入手机号',
        rules: [{
            required: true,
            message: '哈哈哈!',
        }]
    },
    {
        name: 'sex',
        label: '性别',
        placeholder: '请输入手机号',
        rules: [{
            required: false,
            message: '哈哈哈!',
        }]
    },
    {
        name: 'age',
        label: '年龄',
        placeholder: '请输入手机号',
        rules: [{
            required: false,
            message: '哈哈哈!',
        }]
    },
    {
        name: 'memo',
        label: '备注',
        placeholder: '请输入手机号',
        rules: [{
            required: false,
            message: '哈哈哈!',
        }]
    }]



export default class Card extends Component {
    constructor(props) {
        super(props);
        // const { cardMotion } = props; 
        this.inputType = inputType;
        this.cardStatuses = cardStatuses;
        this.state = {
            status: cardStatuses.EDIT,
            expand: false,
            setExpand: false
        }
    }
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    getFields = () => {
        const { status } = this.state;
        const disabled = status == this.cardStatuses.COMMON ? true : false;
        let fields = baseInfo;
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
        // this.setState({
        //     status: this.cardStatuses.EDIT
        // })
    }

    onSave = () => {
        // this.setState({
        //     status: this.cardStatuses.COMMON
        // })
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
                    <Divider orientation="left" plain>基本信息</Divider>
                    <Row gutter={24}>{this.getFields()}</Row>
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


