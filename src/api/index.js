
//要求每个函数返回的都是promise

import ajax from './ajax'


// export function reLogin (username, password) {
//   return ajax('/login',{username,password},'POST')
// }

const BASE = '' 

//登录
export const reLogin = (username, password) => ajax(BASE+'/login', { username, password }, 'POST')
//返回要写{}就必须写return
// export const reLogin = (username, password) =>{return ajax('/login', { username, password }, 'POST')} 

//添加用户
export  const reAddUser = (user) => ajax(BASE+'/manage/user/add',user,'POST')