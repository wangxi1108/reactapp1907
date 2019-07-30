import React, { Component } from 'react'
import './login.less'
import { Form, Icon, Input, Button,message } from 'antd';
import { reLogin } from '../../api/index'
import { Redirect } from 'react-router-dom'
import memory from '../../utils/memory'
import {Link} from 'react-router-dom'
import storage from '../../utils/storage'

// export default class Login extends Component{
  class Login extends Component{
   
    // 表单统一校验
    handleSubmit = e => {
      e.preventDefault();
      const form = this.props.form
      // const formobj = form.getFieldsValue()  //获取表单对象值
      form.validateFields( (err, values) => {
          // 验证成功
        if (!err) {
          //1、有请求的逻辑------
          const { username, password } = values
          // const response = await reLogin(username,password)
          // console.log('登录成功response',response)
          // const res = response.data;
          // if(res.status === 0){
          //   message.success('登录成功')
          //   //跳转到管理界面-不需要回退
          //   this.props.history.replace('/admin')
          // }else{
          //   message.error(res.message)
          // }
          // console.log('登录成功',response)

          //2、无请求自己本地写：直接定义用户user信息,并保存在内存中--
          
          memory.user = values
          storage.saveUser(values)
          this.props.history.replace('/admin')


        } else {
          alert('验证有错')
        }
      })
    };
    //2、对密码进行自定义验证
    validatorPwd = (rule, value, callback) => {
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

    //如果用户已经登录，自动跳转到管理界面
      const user = memory.user
      if (user && user.username) {
        return <Redirect to='/admin' />
      }
    return (
      <div className="login">
         {/* <Header>header</Header> */}
        <header className="login-header">login</header>
        <section className="login-content">
          <h3>登录</h3>

          {/* <Link to="/admin">跳转</Link> */}

          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                initialValue:'默认哇哈哈',
                // 声明式验证
                rules: [{ required: true, message: '请输入用户名' },
                {min:4,message:'用户名至少4位'},
                {max:12,message:'用户名最大12位'}
                // {pattern:/^[a-zA-Z0-9]+$/,message:'用户名必须是英文、数字或下划线'}
              ],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                // 自定义验证
                rules:[
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