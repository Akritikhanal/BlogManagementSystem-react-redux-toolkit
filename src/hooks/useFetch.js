import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (url)=> {
    const [data,setData]=useState (null)
    const [loading,setloading] = useState(true)
    const [error,setError] = useState(null)

    const fetchData = async() => {
        const response = await axios.get(url)
       try {
         if (response.status ===200){
            setData(response.data.data)
         }else {
            setError ('someyhing went wrong')
         }
       } catch (error) {
        setError(error)
       } finally {
        setloading(false)
       }

    }
    useEffect(()=>{
        fetchData()
    },[])

    return {data,loading,error}
}
export default useFetch