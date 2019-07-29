import React, {Component } from 'react'
import {Redirect} from 'react-router-dom'
import memory from '../../utils/memory'


export default class Admin extends Component{
  render () {
    const user = memory.user
    console.log(user)
    if(!user){
      return <Redirect to='/' />
    }
    return (
      <div>
        hello 来到系统 {user.username}
      </div>
    )
  }
}