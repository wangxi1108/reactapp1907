import React, { Component } from 'react';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'


// 应用的根组件
class App extends Component{
  render () {
    return (
      <BrowserRouter>
        {/* Switch值匹配其中一个 */}
        <Switch>
          <Route path='/' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
