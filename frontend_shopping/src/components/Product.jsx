import React from 'react'
import Category from '../pages/Category'

const Product = () => {
    return (
        <div className='max-w-7xl mx-auto py-10 px-6'>

            <Category />

            <h2 className='text-2xl font-semibold text-center text-gray-800 mb-6 mt-6'>Products 🔥</h2>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                        <div className='bg-green-100 shadow-lg rounded-lg p-4 hover:shadow-xl transition border-2 border-gray-200'>
                            <img src="https://tse2.mm.bing.net/th/id/OIP.zMFtlEEJqLUrX3QgDoG-qwHaE8?pid=Api&P=0&h=180" alt="" className='w-full h-32 object-cover rounded' />
                            <h3 className='mt-2 font-medium text-gray-700'>Coffee</h3>
                            <p className='mt2
                             font-normal text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laboriosam.</p>
                            <p className='text-green-600 font-bold'>$56</p>
                            <button className='w-full bg-purple-500 text-white mt-2 py-1 rounded hover:bg-purple-800'>Add To Cart</button>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Product