import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    let isAuth = true
  return (
    
    {
        isAuth : <Outlet/> ? <Login/>
    }
  )
export default PrivateRouter
