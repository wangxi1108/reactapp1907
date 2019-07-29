import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//获取登录数据
import memory from './utils/memory'
import storage from './utils/storage'

memory.user = storage.getUser()

// 把App组件渲染到index页面的div上
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
