import React, { useEffect } from "react";
import Form from "./components/form/Form";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlog, setStatus } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";

const AddBlog = () => {

  const { status } = useSelector((state)=>state.blog)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAddBlog = (data)=>{
    dispatch(addBlog(data))
  }

  useEffect(()=>{
    if(status === STATUSES.SUCCESS){
      navigate("/")
    }
  },[status])

  

  return (

    <Layout>
      <Form type='Create' submit={handleAddBlog}/>

    </Layout>

  )
}

export default AddBlog;