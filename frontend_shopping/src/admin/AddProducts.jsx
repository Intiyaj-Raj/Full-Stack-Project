import React, { useState } from 'react'
import Slidebar from './Slidebar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
const AddProducts = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({ Pname: "", Price: "", Cat: "" })

    async function handleForm(e) {
        e.preventDefault()
        // console.log(product)
        try {
            const response = await fetch("/api/addadminproduct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product)
            })

            const record = await response.json()
            // console.log(record)

            if (response.ok) {
                toast.success(record.message)
                navigate("/admin/adminproduct")
            }
            else {
                toast.error(record.message)
            }
        }
        catch (error) {
            toast.error(record.message)
        }
    }

    function handleChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex mt-16'>
            <Slidebar />
            <div className='flex-1 p-10 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Add Product 🛍️</h1>
                <button onClick={() => { navigate("/admin/adminproduct") }} className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400'>Back</button>

                <form action="" className='bg-white shadow-slate-500 shadow-md rounded-xl p-6 max-w-3xl mx-auto space-y-6 mt-5 ' onSubmit={handleForm}>
                    <label htmlFor="" className='block text-gray-700 font-medium'>Product Name</label>
                    <input type="text" value={product.Pname} onChange={handleChange} name="Pname" id="" className='w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-600' />

                    <label htmlFor="" className='block text-gray-700 font-medium'>Price ₹</label>
                    <input type="number" value={product.Price} onChange={handleChange} name="Price" id="" className='w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-600' />

                    <label htmlFor="" className='block text-gray-700 font-medium'>Categories</label>
                    <select value={product.Cat} onChange={handleChange} name="Cat" id="" className='w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-600' >
                        <option value="">---Select---</option>
                        <option value="cafe">Cafe</option>
                        <option value="home">Home</option>
                        <option value="toys">Toys</option>
                        <option value="fresh">Freash</option>
                        <option value="electronics">Electronics</option>
                        <option value="mobile">Mobile</option>
                        <option value="beauty">Beauty</option>
                    </select>


                    <label htmlFor="" className='block text-gray-700 font-medium'>Product Image</label>
                    <input type="file" name="" id="" className='w-full px-4 py-2 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-green-600' />
                    <div className='text-right'>
                        <button className='bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProducts