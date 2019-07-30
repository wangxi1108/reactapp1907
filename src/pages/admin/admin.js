import React, {Component } from 'react'
import {Redirect, Route, Switch,Link} from 'react-router-dom'
import { Layout } from 'antd';
import memory from '../../utils/memory'
import './admin.less'
import LeftNav from '../../components/leftNav'
import HeaderTop from '../../components/headerTop'
import Home from '../home/home'
import Product from '../product/product'
import Category from '../catrgory/category'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'



const { Footer, Sider, Content } = Layout;
export default class Admin extends Component{
  render () {
    const user = memory.user
    if(!user){
      return <Redirect to='/' />
    }
    return (

        <Layout className="admin-layout">
          <Sider>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <HeaderTop></HeaderTop>
            
          <Content style={{ background: '#fff' }}>
            <Link to="/admin/product">跳转product</Link> 
              <Switch>
                <Route path='/admin/home' component={Home}></Route>
                <Route path='/admin/product' component={Product}></Route>
                <Route path='/admin/category' component={Category}></Route>
                <Route path='/admin/role' component={Role}></Route>
                <Route path='/admin/user' component={User}></Route>
                <Route path='/admin/charts/bar' component={Bar}></Route>
                {/* 默认进home */}
                <Redirect to='/admin/home' />
              </Switch>
            </Content>

            <Footer style={{textAlign:'center'}}>Footer</Footer>
          </Layout>
        </Layout>

    )
  }
}