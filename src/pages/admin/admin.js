import React, {Component } from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import memory from '../../utils/memory'
import './admin.less'
import LeftNav from '../../components/leftNav'
import HeaderTop from '../../components/headerTop'


const { Header, Footer, Sider, Content } = Layout;
export default class Admin extends Component{
  render () {
    const user = memory.user
    console.log(user)
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
            <Content style={{background:'#fff'}}>Content  登录：{user.username} </Content>
            <Footer style={{textAlign:'center'}}>Footer</Footer>
          </Layout>
        </Layout>

    )
  }
}