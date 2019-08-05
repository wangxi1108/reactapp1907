import React, { Component } from 'react'
import { Menu, Dropdown, Icon } from 'antd'
import './index.less'
import memory from '../../utils/memory'

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="">
        退出
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default class HeaderTop extends Component{
  state = {
    currentTime: (new Date()).getDate()
  }
  
  getTime = () => {
    setInterval(() => {
      const currentTime = (new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDate()
      this.setState({currentTime})
    },1000*360*24)
  }
  
  componentDidMount(){
    this.getTime()
  }
  render () {
    const {currentTime} = this.state
    return (
      <div className="headerTop">
        HeaderTop 欢迎：{memory.user.username}
        {currentTime}
        <div className="user-ul">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
            {memory.user.username}<Icon type="down" />
            </a>
          </Dropdown>
        </div>
        
      </div>
    )
  }
}