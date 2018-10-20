import React from'react';
import {NavLink} from 'react-router-dom'
//var headerCss = require("../css/main.css")
import '../css/main.css'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

  export default class Header extends React.Component{
  	state = {
	    current: 'home',
	  }

	   handleClick = (e) => {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	  }

	render(){
		return(
		<div>
         {/*<ul className="headerUl">
         	         <li><NavLink exact activeClassName="selected" to={'/Home'}>首页</NavLink></li>
         	         <li><NavLink activeClassName="selected" to={'/List'}>列表页面</NavLink></li>
         	         <li><NavLink activeClassName="selected" to={'/About'}>关于我们</NavLink></li>
                  </ul>*/}
          <Menu
	        onClick={this.handleClick}
	        selectedKeys={[this.state.current]}
	        mode="horizontal" className="headerUl"
	      >
	        <Menu.Item key="home">
	          <NavLink exact activeClassName="selected"  to={'/'}><Icon type="home"  />首页</NavLink>
	        </Menu.Item>
	        <Menu.Item key="list">
	          <NavLink activeClassName="selected"  to={'/Echart'}><Icon type="appstore" />产品图表展示</NavLink>
	        </Menu.Item>
	        <SubMenu title={<NavLink activeClassName="selected" to={'/About'}><span className="submenu-title-wrapper" style={{ padding: '0'}}><Icon type="user-add" />关于我们</span></NavLink>}>
	          <MenuItemGroup title="联系我们">
	            <Menu.Item key="setting:1">联系方式</Menu.Item>
	            <Menu.Item key="setting:2">联系地址</Menu.Item>
	          </MenuItemGroup>
	          <MenuItemGroup title="公司发展">
	            <Menu.Item key="setting:3">公司项目</Menu.Item>
	            <Menu.Item key="setting:4">公司成就</Menu.Item>
	          </MenuItemGroup>
	        </SubMenu>
	      </Menu>
	    </div>
		)
	}
}


