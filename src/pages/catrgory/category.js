import React, { Component } from 'react'
import { Button,Icon,Table, Divider, Tag ,Card } from 'antd';
import './category.less'


//品类管理
export default class Category extends Component{
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  
  render () {
    const title = '一级分类列表'
    const extra = (
      <Button className="add-btn" type="primary"><Icon type="plus" />添加</Button>
    )
    const data = [
      {
        key: '1',
        name: '电视'
      },
      {
        key: '2',
        name: '菜刀'
      },
      {
        key: '3',
        name: '键盘'
      },
    ];
    const columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Action',
        key: 'action',
        width: 200,
        render: (text, record) => (
          <span>
            <a className="marginR10" href="javascript:;">修改分类</a>
            <a className="marginR10" href="javascript:;">查看子项</a>
            <a className="marginR10" href="javascript:;">删除</a>
          </span>
        ),
      },
    ];
    return (
      <div className="category">
        {/* <div className="title-box">
          <span className="title">一级分类列表</span>
          <Button className="add-btn" type="primary"><Icon type="plus" />添加</Button>
        </div>
        <div className="table-box">
          <Table columns={columns} dataSource={data} />
        </div> */}
        {/* 用card */}
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <div className="table-box">
            <Table bordered columns={columns} dataSource={data} />
          </div> 
        </Card>
      </div>
    )
  }
}