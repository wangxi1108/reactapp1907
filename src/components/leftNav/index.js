import React, {Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './index.less'
import logo from '../../assets/images/reactlogo.svg';
import menuList from '../../config/menuConfig'


const { SubMenu } = Menu;

class LeftNav extends Component{
//写个方法根据menu菜单数据生成对应标签数组，用map+递归
  getMenuNodes_maps = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link> 
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        )
      }
    })
  }
//reduce 对对象路由数据累加方法
  getMenuNodes = (menuList) => {
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push((
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link> 
          </Menu.Item>
        ))
      } else {
        pre.push((
          <SubMenu
            key={item.key}
            title={
              <span>
                  <Icon type={item.icon} />
                  <span>{item.title}</span>
              </span>
            }
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        ))
      }
      return pre
    },[])
  }

  render () {
    //
    const path = this.props.location.pathname
    console.log(33,this.props)

    return (
      <div className="left-nav">
        <Link to="/admin" className="left-nav-head">
          <img src= {logo} alt='logo' />
          <h3>react-logo</h3>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          // defaultSelectedKeys={[path]}
          selectedKeys={[path]}
          defaultOpenKeys={['sub1']}
        >
          {this.getMenuNodes(menuList)}

          {/* <Menu.Item key="1">
            <Link to='/admin/home'>
              <Icon type="pie-chart" />
              <span>首页一级Menu.Item</span>
            </Link> 
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/admin/user'>
              <Icon type="desktop" />
              <span>用户管理</span>
              </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to='/admin/role'>
              <Icon type="inbox" />
              <span>角色管理</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                  <Icon type="mail" />
                  <span>商品管理</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to='/admin/product'>商品管理5Menu.Item</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to='/admin/category'>
                品类管理6
              </Link>
              </Menu.Item>
            <Menu.Item key="7">
              <Icon type="mail" />
              <span>7</span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>图形图表Navigation</span>
              </span>
            }
            >
            <Menu.Item key="9">
              <Link to='/admin/charts/bar'>
                柱状图
              </Link>
            </Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">11Submenu里面套Submenu</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu> */}

        </Menu>


      </div>
    )
  }
}

/*
withRouter高阶组件：包装非路由组件，返回一个新的组件，新的组件向非路由组件传递3个属性：history、location、match
*/
export default withRouter(LeftNav)