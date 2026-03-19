import STATUSES from '../src/globals/status/statuses'
import API from '../src/http'
import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name : 'blog',
    initialState : {
        data : null, 
        status : null
    },
   reducers : {
    setStatus(state,action){
        state.status = action.payload
    },
    setBlog(state,action){
        state.data = action.payload
    }
   } 
})

export const {setStatus,setBlog} = blogSlice.actions 
export default blogSlice.reducer


export function addBlog(data){
    return async function addBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.post(`${baseUrl}/api/user/blog`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": localStorage.getItem('token')
                }
            })

            if (response.status === 201) {
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }

    }
}

export function readBlog() {
    return async function readBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {

            const response = await axios.get(`${baseUrl}/api/user/blog`)
            if (response.status === 200) {
                dispatch(setBlogs(response?.data?.data))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
export function readSingleBlog(id) {
    return async function readSingleBlogThunk(dispatch) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.get(`${baseUrl}/api/user/blog/${id}`)
            if (response.status === 200) {
                dispatch(setSingleBlog(response?.data?.data))
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else {
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }

    }
}
export function fetchBlog(){
    return async function fetchBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
     try {
        const response =  await API.get('blog')
        if(response.status === 200 && response.data.blog.length > 0 ){
            dispatch(setBlog(response.data.blog))
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}


export function deleteBlog(id,token){
    return async function deleteBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
     try {
        const response =  await API.delete(`blog/${id}`,{
            headers : {
                token : token
            }
        })
        if(response.status === 200 ){
          
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}
export function editBlog(id, data) {
    return async function editBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await axios.patch(`${baseUrl}/api/user/blog/${id}`,data,{
                headers:{
                    "Content-Type": "multipart/form-data",
                    "Authorization": localStorage.getItem('token')
                }
            })

            if(response.status === 200){
                dispatch(setStatus(STATUSES.SUCCESS))
            }
            else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}