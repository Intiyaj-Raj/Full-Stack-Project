import React, { useEffect } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { cartTotal, DecrementQunatity, deleteCartItem, IncrementQuantity } from '../features/Cart/CartSlice';
const Cart = () => {

    const navigate = useNavigate()
    const cartData = useSelector((state) => state.Cart.cart)

    const dispatch = useDispatch()

    const cartAllTotal = useSelector((state) => state.Cart)

    useEffect(() => {
        dispatch(cartTotal());
    }, [cartData, dispatch]);


    return (
        <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center z-50'>

            <div className='bg-white w-full max-w-xl p-6 rounded-xl shadow-md relative overflow-y-auto max-h-[90vh] mx-4'>

                <button onClick={() => { navigate("/") }} className='absolute top-3 right-3 text-xl text-gray-700 hover:text-red-600'>
                    <IoIosCloseCircle />
                </button>

                <h2 className='text-2xl font-bold text-purple-600 text-center mb-4'>Your Cart🛍️</h2>

                {
                    cartData.map((value, index) => (
                        <ul key={index} className='divide-y divide-gray-500'>
                            <li className='flex items-center gap-5 py-4'>
                                <img src={`/uploads/${value.productImage}`} alt="" className='w-14 h-14 object-cover rounded border-2 border-gray-300' />
                                <div className='flex-1 '>
                                    <h3 className='font-semibold text-gray-800 '>{value.productName}</h3>
                                </div>
                                <p className='text-green-600 text-sm font-semibold'>₹ {value.productPrice}</p>
                                <div className='flex items-center gap-2'>
                                    <button className='px-2 py-1 bg-purple-300 rounded hover:bg-purple-500' onClick={() => { dispatch(DecrementQunatity(value)) }}>
                                        <FaMinus />
                                    </button>
                                    <span className='px-1 font-medium'>{value.quantity}</span>
                                    <button className='px-2 py-1 bg-purple-300 rounded hover:bg-purple-500' onClick={() => { dispatch(IncrementQuantity(value)) }}>
                                        <FaPlus />
                                    </button>
                                </div>
                                <MdDeleteSweep className='text-gray-700 hover:text-red-700 text-2xl hover:cursor-pointer' onClick={() => { dispatch(deleteCartItem(value)) }} />

                            </li>
                        </ul>
                    ))
                }

                <div className='mt-5 text-right'>
                    <p className='text-lg font-semibold text-gray-600'>Total Products Quantity:- <span className='text-gray-700'>{cartAllTotal.TotalQuantity}</span></p>

                    <p className='text-lg font-semibold text-gray-700'>Total Price:- <span className='text-green-500'>₹ {cartAllTotal.TotalPrice}</span></p>
                    <button className='mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800'>Checkout</button>
                </div>

            </div>
        </div>

    )

}

export default Cart