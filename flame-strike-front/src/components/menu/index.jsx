import React, { Component } from 'react';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2760822_cjdbmovmuy5.js',
});

export default class index extends Component {

    constructor(props) {
        super(props);
        const { menuItems,onSelect,current } = props;
        this.onSelect = onSelect;
        this.state = {
            menuItems:menuItems,
            current:current
        }
    }

    getItems = () => {
        const items = [];
        const { menuItems } = this.state;
        var x;
        for (x in menuItems) {
            const menuItem = menuItems[x];
            items.push(<Menu.Item key={x} icon={this.getIcon(menuItem.icon)}>
                  {menuItem.name}
            </Menu.Item>)
        }
        return items;
    }

    getIcon = (icontype) => {
        return <IconFont type={icontype} />

    }
    
    render() {
        const { current } = this.state;
        return (
            <div>
                <Menu className="sider-menu" selectedKeys={current} mode="inline" onSelect={this.onSelect}>
                    {this.getItems()}
                </Menu>
            </div>
        )
    }
}
