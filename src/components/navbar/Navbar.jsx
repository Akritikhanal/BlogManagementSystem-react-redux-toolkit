import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setToken } from '../../../store/authSlice'
const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { token } = useSelector((state) => state.auth)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const jwt = localStorage.getItem('token')
        setIsLoggedIn(!!jwt || !!token)
    }, [token])

    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(setToken(null))
        navigate('/login')
    }


    return (
        <>
            <nav className="bg-black shadow-md py-4 px-8">
                <div className="flex items-center">


                    <div className="flex items-center gap-1">
                        <Link to='/'>
                            <span className="font-bold text-3xl text-white">Blog Management System</span>
                            
                        </Link>
                    </div>


                    <div className="ml-auto flex-1 max-w-xs">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brown"
                        />
                    </div>



                    <ul className="flex items-center gap-6 ml-auto">
                        {isLoggedIn ? <>
                    
                            <li>
                                <Link to='/blog/add'
                                    className="text-white bg-black rounded font-semibold hover:text-blue-700 transition"
                                >
                                    Create
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleLogout}
                                    className="text-white bg-  font-semibold hover:text-white transition" >
                                    Logout

                                </button>
                            </li>

                        </> :
                            <>

                                <li>
                                    <Link to='/login'
                                        className="text-white font-semibold bg-black px-4 py-2 rounded-lg hover:bg-black transition" 
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/register"
                                        className="text-white font-semibold  hover:text-black bg-black px-4 py-2 rounded-lg hover:bg-black transition"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        }

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar