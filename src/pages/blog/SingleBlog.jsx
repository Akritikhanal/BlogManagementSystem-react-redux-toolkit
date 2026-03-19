import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, readBlog } from '../../../store/blogSlice'
import STATUSES from '../../globals/status/statuses'

const SingleBlog = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { singleBlog, status } = useSelector((state) => state.blog)

    const handleDelete = () => {
        dispatch(deleteBlog(id))

        if (status === STATUSES.SUCCESS) {
           return navigate('/')
        }
        else{
           return navigate(`/blog/${id}`)
        }
    }

    useEffect(() => {
        dispatch(readSingleBlog(id))
    }, [])

    return (
        <Layout>
            <div className="bg-gray-100 dark:bg-gray-800 h-screen py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <img className="w-full h-full object-cover" src={singleBlog?.imageUrl} alt="Image" />
                            </div>
                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <Link to={`/blog/edit/${singleBlog?._id}`}>
                                        <button className="w-full bg-green-600  text-white py-2 px-4 rounded-full font-bold hover:bg-green-500 ">Edit</button>
                                    </Link>
                                </div>

                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-red-600  text-white py-2 px-4 rounded-full font-bold hover:bg-red-500 " onClick={handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{singleBlog?.title}</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                {singleBlog?.subtitle}
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                                    <span className="text-gray-600 dark:text-gray-300">{singleBlog?.category}</span>
                                </div>
                            </div>

                            <div>
                                <span className="font-bold text-gray-700 dark:text-gray-300">Blog Description:</span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                    {singleBlog?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleBlog