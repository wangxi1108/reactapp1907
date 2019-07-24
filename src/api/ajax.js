/*
封装axios,函数返回的是promise对象。
优化：在外层包一个自己创建的promise对象，统一处理请求
*/

import axios from 'axios'
import {message} from 'antd'

export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        //1、执行异步请求
        if(type === 'GET'){
            promise = axios.get(url,{
                params:data
            })
        }else{
            promise = axios.post(url,data)
        }
        // 2、如果成功，就调用resolve(value)
        promise.then(response=>{
            resolve(response)
        }).catch(error => {
        // 3、如果失败了，提示异常信息
        message.error('请求失败'+error)
        })
    })
}