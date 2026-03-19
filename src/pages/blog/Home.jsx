import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'
// import Spinner from '../../components/spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlog } from '../../../store/blogSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { inputData, deleteStatus } = useSelector((store) => store.blog)

  const [isLoading, setIsLoading] = useState(false)

  throw new Error('Error in home page')

  useEffect(() => {
    setIsLoading(true)
    dispatch(fetchBlog())
    setIsLoading(false)
  }, [dispatch])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className='flex flex-wrap justify-center'>
        {inputData && inputData.length > 0 ? (
          inputData.map((data) => {
            return <Card key={data?._id} data={data} />
          })
        ) : (
          <>
            <h2>Error in home page</h2>
           
          </>
        )}
      </div>
    </Layout>
  )
}

export default Home