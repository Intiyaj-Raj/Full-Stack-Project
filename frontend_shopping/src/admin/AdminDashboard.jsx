import React from 'react'
import Slidebar from './Slidebar'
import { toast } from 'react-hot-toast'
import { useEffect } from 'react'
import { useState } from 'react'
const AdminDashboard = () => {

    const [products, setProducts] = useState([])


    async function getAllProducts() {
        try {
            const response = await fetch("/api/getproduct")
            const result = await response.json()

            if (response.ok) {
                console.log(result)
                setProducts(result.data)
            }
            else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div className='flex mt-16'>
            <Slidebar />
            <div className='flex-1 p-10 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Admin Dashboard 👤</h1>

                <div className='grid grid-cols-1'>
                    <div className='bg-white p-6 rounded-lg shadow-xl'>
                        <p className='text-3xl mt-3 font-bold text-green-500'>{products.length}</p>
                        <h2 className='text-xl font-semibold text-gray-700'>Total Products</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AdminDashboard