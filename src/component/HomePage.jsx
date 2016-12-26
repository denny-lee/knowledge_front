import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const HomePage = React.createClass({
  
  render() {
    return (
      <div>
        <div>
          <Menu mode="horizontal"
          >
            <SubMenu title={<span><Icon type="setting" />代码段</span>}>
                <Menu.Item><a href="#/add-snippet">新增代码段</a></Menu.Item>
                <Menu.Item><a href="#/search-snippet">查询代码段</a></Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />FAQ</span>}>
                <Menu.Item><a href="/add-faq" target="_blank">新增FAQ</a></Menu.Item>
                <Menu.Item><a href="/search-faq" target="_blank">查询FAQ</a></Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />常见概念</span>}>
                <Menu.Item><a href="/add-notion" target="_blank">新增常见概念</a></Menu.Item>
                <Menu.Item><a href="/search-notion" target="_blank">查询常见概念</a></Menu.Item>
            </SubMenu>
            <SubMenu title={<span><Icon type="setting" />框架搭建</span>}>
                <Menu.Item><a href="/add-notice" target="_blank">新增注意事项</a></Menu.Item>
                <Menu.Item><a href="/search-notice" target="_blank">查询注意事项</a></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  },
});

export default HomePage;
