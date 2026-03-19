import React, { useEffect } from 'react'
import Form from './components/form/Form'
import { register, setStatus } from '../../../store/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import STATUSES from '../../globals/status/statuses'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

const Register = () => {
  const {status} = useSelector((state)=>state.auth)
  console.log(status)
  const navigate = useNavigate()
  const dispatch = useDispatch()
 const handleRegister = (data)=>{
  dispatch(register(data))
 }

useEffect(()=>{
  console.log(status)

  if(status === STATUSES.SUCCESS){
     navigate('/login') 
     dispatch(setStatus(null))
  }
},[status])

  return (
    <Layout>
       <Form type='Register' onSubmit={handleRegister}/>
    </Layout>
   
  )
}

export default Register