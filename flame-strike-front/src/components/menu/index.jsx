import React, { Component } from 'react';
import { Menu } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2760822_cjdbmovmuy5.js',
});

export default class index extends Component {

    constructor(props) {
        super(props);
        const { menuItems,onSelect } = props;
        this.onSelect = onSelect;
        this.state = {
            menuItems:menuItems
        }
    }

    getItems = () => {
        const items = [];
        const { menuItems } = this.state;
        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            items.push(<Menu.Item key={i} icon={this.getIcon(menuItem.icon)}>
                  {menuItem.name}
            </Menu.Item>)
        }
        return items;
    }

    getIcon = (icontype) => {
        return <IconFont type={icontype} />

    }
    

    render() {
        return (
            <div>
                <Menu className="sider-menu" mode="inline" onSelect={this.onSelect}>
                    {this.getItems()}
                </Menu>
            </div>
        )
    }
}
