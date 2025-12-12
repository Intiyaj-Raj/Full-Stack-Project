import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaCartPlus, FaHome, FaRegUserCircle, FaSearch, FaTimes } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import LogoShopping from '../assets/logo.png'
import SearchData from './SearchData';
import { IoLogOut } from "react-icons/io5";
import toast from 'react-hot-toast';
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const navigate = useNavigate()
    let token = localStorage.getItem("token")


    function toggleMenu() {
        setIsOpen(!isOpen)
    }

    function handleLogOut() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success("Log out successfully.")
        navigate("/")
    }

    return (
        // <nav className='bg-gradient-to-r from-purple-200 via-white to-red-200 shadow-xl border-2 border-b-gray-300 fixed top-0 left-0 right-0 z-50'>
        <nav className='bg-gradient-to-r from-purple-200 via-purple-200 to-white shadow-xl border-2 border-b-gray-300 fixed top-0 left-0 right-0 z-50'>
            <div className='max max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 relative'>
                    {/* Logo */}
                    <div>
                        <img src={LogoShopping} alt="Logo" className='h-28 w-auto' />
                    </div>
                    {/* Search Bar */}
                    <div className='flex-1 mx-4'>
                        <div className='relative'>
                            <input type="text" name="" id="" className='w-full bg-gray-300 rounded-full pl-4 pr-10 py-2 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-purple-500' placeholder='Search for fruits, electronics and more..'
                                onFocus={() => { setShowSearch(true) }}
                                readOnly />
                            <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-lg' />
                        </div>
                    </div>
                    {/* Menu */}
                    <div className='hidden md:flex space-x-6 items-center'>
                        <Link to={"/"} className='text-gray-700 hover:text-purple-600'>
                            <FaHome className='text-xl' />
                        </Link>
                        <Link to={"/query"} className='text-gray-700 hover:text-purple-600'>
                            <GrContact className='text-xl' />
                        </Link>

                        <Link to={"/cart"} className='text-gray-700 hover:text-purple-600'>
                            <FaCartPlus className='text-xl' />
                        </Link>


                        {
                            !token ? <Link to={"/login"} className='text-gray-700 hover:text-purple-600'>
                                <FaRegUserCircle className='text-xl' />
                            </Link> :
                                <IoLogOut className='text-xl font-semibold text-red-500 hover:cursor-pointer hover:text-red-700' onClick={handleLogOut} />
                        }

                    </div>
                    {/* Toggle */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-2xl text-purple-600'>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    {/* Mobile- View */}

                    {
                        isOpen && <div className='md:hidden bg-white px-10 pt-2 pb-4 space-y-2 shadow-2xl absolute top-16 right-0 w-full font-semibold '>
                            <Link to={"/"} className='block text-gray-800 hover:text-purple-600 hover:underline'>Home</Link>
                            <Link to={"/query"} className='block text-gray-800 hover:text-purple-600 hover:underline'>Contact</Link>
                            <Link to={"/cart"} className='block text-gray-800 hover:text-purple-600 hover:underline'>Cart</Link>

                            {
                                !token ? <Link to={"/login"} className='block text-gray-800 hover:text-purple-600 hover:underline'>User</Link>
                                    : <button onClick={handleLogOut} className='block text-gray-800 hover:text-red-600 hover:underline'>LogOut</button>
                            }


                        </div>
                    }


                </div>

            </div>

            {showSearch && <SearchData onClose={setShowSearch} />}

        </nav>

    )
}

export default Navbar


