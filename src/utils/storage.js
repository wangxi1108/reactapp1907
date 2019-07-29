//在本地保存数据
import store from 'store'
// 原生localStorage方法有兼容性

const User_key = 'user_key'

export default {
  saveUser (user) {
    store.set(User_key, user)
    
  },
  getUser () { 
    // return JSON.parse(localStorage.getItem(User_key) || '{}')
    return store.get(User_key) || {}
  },
  removeUser () {
    store.remove(User_key)
  }

}