import React, { Component } from 'react'
import { Button,Icon,Table,Card } from 'antd';
import './category.less'
import LinkButton from '../../components/linkButton'




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
        name: '床铺'
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
        width: 230,
        render: (text, record) => (
          <div>
            <LinkButton>修改分类</LinkButton>
            <LinkButton>查看子项</LinkButton>
            <LinkButton>删除</LinkButton>
          </div>
        ),
      },
    ];
    return (
      <div className="category">
        <Card title={title} extra={extra} style={{ width: '100%' }}>
          <div className="table-box">
            <Table bordered rowKey='key' columns={columns} dataSource={data} />
          </div> 
        </Card>
      </div>
    )
  }
}