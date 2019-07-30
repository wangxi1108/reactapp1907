import React, { Component } from 'react'
import './index.less'
import memory from '../../utils/memory'

export default class HeaderTop extends Component{
  render () {
    return (
      <div className="headerTop">
        HeaderTop 欢迎：{memory.user.username}
      </div>
    )
  }
}