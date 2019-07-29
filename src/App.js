import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Login from './pages/login/login'
import Admin from './pages/admin/admin'


// 应用的根组件
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Switch值匹配其中一个 */}
        <Switch>
          <Route exact path='/' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </BrowserRouter>

      //方式2：
      // <Router>
      //   <div>
      //   <Route exact path='/' component={Login}></Route>
      //   <Route path='/admin' component={Admin}></Route>
      //   </div>
      // </Router>

    )
  }
}

export default App;

