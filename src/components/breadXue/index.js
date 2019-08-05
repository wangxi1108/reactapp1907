import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb  } from 'antd'
import './index.less'
import menuList from '../../config/menuConfig'

class BreadXue extends Component{
  getFun = (menuList) => {
    const path = this.props.location.pathname;
    let title = '';
      menuList.forEach((item) => {
      if (item.key===path) {
        this.title = item.title
      } else if (item.children){
        item.children.forEach(cItem => {
          if (cItem.key === path) {
            this.title = cItem.title
          }
        })
      }

    })
  }

  render () {
    this.getFun(menuList)
    // 也可以写成return把title返回出去

    return (
      <div className="">
        <Breadcrumb>
          {/* <Breadcrumb.Item>
            <a href='/admin/home'>首页</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item> */}
          <Breadcrumb.Item>{this.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    )
  }
}

export default withRouter(BreadXue)