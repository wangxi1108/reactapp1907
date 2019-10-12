import React, { Component } from 'react'
import { Modal } from 'antd'
import { withRouter } from 'react-router-dom';
import LinkButton from '../linkButton'
import './index.less'
import memory from '../../utils/memory'
import storage from '../../utils/storage'

class HeaderTop extends Component{
  state = {
    currentTime: (new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDate()
  }
  
  getTime = () => {
    setInterval(() => {
      const currentTime = (new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDate()
      this.setState({currentTime})
    },1000*360*24)
  }
  loginOut = () => {
    Modal.confirm({
      title: '确定退出？',
      onOk:()=> {
        storage.removeUser();
        memory.user={}
        this.props.history.push('/')
      }
    });
    
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
        {/* <span className="login-out" onClick={()=>this.loginOut()}>退出</span> */}
        <LinkButton onClick={()=>this.loginOut()}>退出</LinkButton>
        <div className="user-ul">
        </div>
      </div>
    )
  }
}

export default withRouter(HeaderTop)