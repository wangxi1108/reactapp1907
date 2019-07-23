import React, { Component } from 'react'
import './login.less'
import { Form, Icon, Input, Button } from 'antd';


// export default class Login extends Component{
  class Login extends Component{
   
    handleSubmit = e => {
      e.preventDefault();

      const form = this.props.form
      // const formobj = form.getFieldsValue()
      form.validateFields((err, values) => {
        console.log('validateFields-', err,22,values);
        if (!err) {
            console.log('没有错可以提交', values);
        } else {
          
          }
        })
    };
    //对密码进行自定义验证
    validatorPwd = (rule, value, callback) => {
      console.log('validatorPwd', value)
      if (!value) {
        callback('请输入密码！')
      }
      if (value.length<4 || value.length>12) {
        callback('密码长度在4~12位')        
      }
      if (!/^[a-zA-Z0-9_]+$/.test(value)) {
        callback('密码必须是英文、数字或下划线组成')                
      }
      callback()
    }

    render () {
    //写在render里面，得到强大的form对象
    const form = this.props.form
    const {getFieldDecorator} = form

    return (
      <div className="login">
         {/* <Header>header</Header> */}
        <header className="login-header">login</header>
        <section className="login-content">
          <h3>登录</h3>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                initialValue:'默认哇哈哈',
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {validator:this.validatorPwd}
                ]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

// 包装Form组件生成一个新的组件：Form(Login).//高阶函数，高阶组件
// 新组建会向Form组件传递一个强大的对象属性：form
const WrappedLogin = Form.create()(Login);
export default WrappedLogin

  /*
  1、高阶函数：接收函数类型的参数，返回值是函数，常见：

  */