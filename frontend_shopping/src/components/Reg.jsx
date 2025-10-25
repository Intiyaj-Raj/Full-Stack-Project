import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from 'react-hot-toast';

const Reg = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(true)

    const [form, setForm] = useState({ fname: "", email: "", pass: "" })

    async function handleForm(e) {
        e.preventDefault()
        try {
            const response = await fetch('/api/regdata', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })
            const result = await response.json()
            if (response.ok) {
                toast.success(result.message)
                navigate("/login")
            }
            else {
                toast.error(result.message)
            }
            // console.log(result)
        } catch (error) {
            toast.error(error)
        }
    }

    // get input value and upadate value
    function handleChange(e) {

        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-white w-full max-w-md p-6 rounded-tl-2xl rounded-br-2xl shadow-lg relative'>
                <button onClick={() => { navigate("/") }} className='absolute top-3 right-3 text-gray-700 hover:text-red-700 text-xl'>
                    <IoIosCloseCircle />
                </button>
                <h2 className='text-2xl font-bold mb-4  text-purple-500 text-center'> Create Your Account ... 🫱🫲</h2>

                <form action="" onSubmit={handleForm}>

                    <label className='block text-sm text-gray-700 mb-2' htmlFor="">Full Name</label>
                    <input type="text" name="fname" id="" placeholder="Enter your name ..." value={form.fname} onChange={handleChange} className='w-full border border-gray-500  rounded-tl-md rounded-br-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600' />

                    <label className='block text-sm text-gray-700 mb-2' htmlFor="">Email</label>
                    <input type="text" name="email" id="" placeholder="Enter your email ..." value={form.email} onChange={handleChange} className='w-full border border-gray-500  rounded-tl-md rounded-br-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600' />

                    <label htmlFor="" className='block text-sm text-gray-700 mb-2'>Password</label>
                    <div className='relative'>
                        <input type={showPassword ? "password" : "text"} name="pass" id="" placeholder="Enter your password ..." value={form.pass} onChange={handleChange} className='w-full border border-gray-500  rounded-tl-md rounded-br-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600' />

                        <button
                            type='button' onClick={() => { setShowPassword(!showPassword) }}
                            className='absolute top-3 right-3 hover:text-green-700'>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button className='w-full bg-purple-500 hover:bg-purple-700 text-white py-2 mt-6 font-semibold rounded-tl-md rounded-br-md'>Register</button>
                </form>

                <p className='text-sm text-center text-gray-600 mt-5'>Already have an account

                    <Link to={"/login"} className='text-green-600 font-medium hover:underline text-sm'> Login</Link>
                </p>

            </div>
        </div>
    )
}

export default Reg