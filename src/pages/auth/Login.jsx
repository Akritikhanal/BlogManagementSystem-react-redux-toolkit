import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, setStatus } from '../../../store/authSlice'
import STATUSES from '../../globals/status/statuses'
import Layout from '../../components/layout/Layout'

const Login = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user,status,token} = useSelector((state)=>state.auth)

 const handleLogin = (data)=>{
  console.log("LOGIN DATA:", data)
  dispatch(login(data))
}

 useEffect(()=>{
 
  if(status === STATUSES.SUCCESS){
     navigate("/")
     dispatch(setStatus(null))
     localStorage.getItem("jwtToken")
  }
 },[status])
  return (
   <Layout>
  <Form type='Login' user={user ? user : ""} onSubmit={handleLogin} />
 </Layout> )
  
}

export default Login