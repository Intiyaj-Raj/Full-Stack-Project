import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-hot-toast'

const Login = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true)

    const [login, setLogin] = useState({ loginEmail: "", loginPass: "" })


    async function handleForm(e) {
        e.preventDefault()
        // console.log(login)

        try {
            const response = await fetch("/api/loginuser", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(login)
            })
            const result = await response.json();


            if (response.ok) {
                toast.success(result.message)
                localStorage.setItem("token", result.token)
                localStorage.setItem("user", result.data._id)
                // console.log(result)
                navigate("/") // successfuly login then go to homepage
            }

            else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error(result.message)
        }
    }

    function handleChange(e) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white w-full max-w-md p-6 rounded-tl-2xl rounded-br-2xl shadow-lg relative'>
                <button onClick={() => { navigate("/") }} className='absolute top-3 right-3 text-gray-700 hover:text-red-700 text-xl'>
                    <IoIosCloseCircle />
                </button>
                <h2 className='text-2xl font-bold mb-4  text-purple-500 text-center'>Login to Continue ..😍</h2>

                <form action="" onSubmit={handleForm}>
                    <label className='block text-sm text-gray-700 mb-2' htmlFor="">Email</label>
                    <input type="text" name="loginEmail" value={login.loginEmail} placeholder="Enter your email ..." className='w-full border border-gray-500  rounded-tl-md rounded-br-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600' onChange={handleChange} />

                    <label htmlFor="" className='block text-sm text-gray-700 mb-2'>Password</label>
                    <div className='relative'>
                        <input type={showPassword ? "password" : "text"} name="loginPass" value={login.loginPass} placeholder="Enter your password ..." className='w-full border border-gray-500  rounded-tl-md rounded-br-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600' onChange={handleChange} />

                        <button
                            type='button' onClick={() => { setShowPassword(!showPassword) }}
                            className='absolute top-3 right-3 hover:text-green-700'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button className='w-full bg-purple-500 hover:bg-purple-700 text-white py-2 mt-6 font-semibold rounded-tl-md rounded-br-md'>Login</button>
                </form>

                <p className='text-sm text-center text-gray-600 mt-5'>Don't have an account

                    <Link to={"/reg"} className='text-green-600 font-medium hover:underline text-sm'> Register</Link>
                </p>

            </div>
        </div>
    )
}

export default Login