This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


------time-------

代理：
"proxy":"http://localhost:5000"

原始：
// 表单统一校验
    handleSubmit = e => {
      e.preventDefault();
      const form = this.props.form
      // const formobj = form.getFieldsValue()  //获取表单对象值
      form.validateFields(async (err, values) => {
        if (!err) {
          console.log('没有错可以提交', values);
          const { username, password } = values
          try {
            const response = await reLogin(username,password)
            console.log('登录成功',response)

          }catch(error){
            alert('请求报错',error)
          }

        } else {
          alert('验证有错')
        }
      })
    };

    2、不同地方路由跳转写法不同
    render中：return <Redirect to='/' />
    render外面函数中：this.props.history.replace('/admin')

要先加工成路由组件，才能js跳转:import { withRouter } from 'react-router-dom';
this.props.history.push('/')


3、定义路由
//exact不能少，少了跳不了
// 用Router时要：import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

4、路由数组菜单：menuList.reduce((pre, item) => {})
：疑问？？？/admin/home  为啥自己写的要这样才能访问路由页面？？？？？
5、把一个非路由组件包装成路由组件，好拿当前路由值————> withRouter高阶组件：包装非路由组件，返回一个新的组件，新的组件向非路由组件传递3个属性：history、location、match。（菜单组件就需要）
6、怎么在Dropdown下拉菜单的子菜单添加事件？？