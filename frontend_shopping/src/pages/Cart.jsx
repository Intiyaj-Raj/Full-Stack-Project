import React, { useEffect } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { cartTotal, DecrementQunatity, deleteCartItem, fetchCart, IncrementQuantity, saveCart, clearCart } from '../features/Cart/CartSlice';
import { useState } from 'react';
const Cart = () => {

    const navigate = useNavigate()
    const cartData = useSelector((state) => state.Cart.cart)
    const cartAllTotal = useSelector((state) => state.Cart)
    const dispatch = useDispatch();
    const [checkingAuth, setCheckingAuth] = useState(true)
    const [showCheckoutForm, setShowCheckoutForm] = useState(false)
    const [userDetails, setUserDetails] = useState({
        name: '',
        phone: '',
        address: ''
    })


    useEffect(() => {
        dispatch(cartTotal());
    }, [cartData, dispatch]);

    useEffect(() => {

        const userId = localStorage.getItem("user")
        let token = localStorage.getItem("token")

        if (token && userId) {
            dispatch(saveCart({
                userId: userId,
                cartItems: cartData,
                totalPrice: cartAllTotal.TotalPrice,
                totalQuantity: cartAllTotal.TotalQuantity
            }))
        }

    }, [cartData, cartAllTotal, dispatch])

    useEffect(() => {
        let token = localStorage.getItem("token")
        let userId = localStorage.getItem("user")

        if (!token) {
            toast.error("Please login to access your cart")
            navigate("/login");
            return;
        }
        if (userId) {
            dispatch(fetchCart(userId))
            setCheckingAuth(false)
        }
        else {
            setCheckingAuth(false)
        }

    }, [dispatch, navigate])

    if (checkingAuth) {
        return (
            <div className='fixed inset-0 flex justify-center bg-black bg-opacity-40'>
                <div className='bg-white p-6 rounded-lg shadow-lg'>Loading Cart....</div>

            </div>
        )
    }

    function handleCheckoutClick() {
        setShowCheckoutForm(true)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        if (!userDetails.name || !userDetails.phone || !userDetails.address) {
            toast.error("Please fill all fields")
            return
        }
        setShowCheckoutForm(false)
        handlePayment()
    }

    function handlePayment() {
        const amount = cartAllTotal.TotalPrice;
        const currency = "INR";
        const receipt = "receipt#1";


        fetch("/api/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount: amount,
                currency: currency,
                receipt: receipt
            })
        }).then((res) => {
            return res.json()
        }).then((order) => {
            const options = {
                key: "rzp_test_RqkiofRd3t8eAj",
                amount: order.amount,
                currency: order.currency,
                name: "ShopBag", // write your website name
                description: "Testing Mode",
                order_id: order.id,
                handler: function (response) {
                    let token = localStorage.getItem("token")
                    let userID = localStorage.getItem("user")

                    fetch('/api/verify', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            amount,
                            userID
                        })
                    }).then((res) => {
                        return res.json()
                    }).then((result) => {
                        if (result.success) {
                            toast.success(result.message)
                            dispatch(clearCart())
                        }
                        else {
                            toast.error(result.message)
                        }
                    })
                },
                prefill: {
                    name: userDetails.name,
                    email: "user@example.com", // You can get from user data
                    contact: userDetails.phone
                }
            }
            const paymentObject = window.Razorpay(options)
            paymentObject.open()
        })
    }


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
                                <MdDeleteSweep className='text-gray-700 hover:text-red-700 text-2xl hover:cursor-pointer' onClick={() => { dispatch(deleteCartItem(value)); toast.success("Product removed from cart successfully") }} />

                            </li>
                        </ul>
                    ))
                }

                <div className='mt-5 text-right'>
                    <p className='text-lg font-semibold text-gray-600'>Total Products Quantity:- <span className='text-gray-700'>{cartAllTotal.TotalQuantity}</span></p>

                    <p className='text-lg font-semibold text-gray-700'>Total Price:- <span className='text-green-500'>₹ {cartAllTotal.TotalPrice}</span></p>
                    <button className='mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800' onClick={handleCheckoutClick}>Checkout</button>
                </div>

            </div>

            {showCheckoutForm && (
                <div className='fixed inset-0 bg-black bg-opacity-45 backdrop-blur-sm flex justify-center items-center z-50'>
                    <div className='bg-white w-full max-w-md p-6 rounded-xl shadow-md relative mx-4'>
                        <button onClick={() => setShowCheckoutForm(false)} className='absolute top-3 right-3 text-xl text-gray-700 hover:text-red-600'>
                            <IoIosCloseCircle />
                        </button>
                        <h2 className='text-2xl font-bold text-purple-600 text-center mb-4'>Enter Details</h2>
                        <form onSubmit={handleFormSubmit} className='space-y-4'>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Name</label>
                                <input
                                    type='text'
                                    value={userDetails.name}
                                    onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
                                <input
                                    type='tel'
                                    value={userDetails.phone}
                                    onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                                    required
                                />
                            </div>
                            <div>
                                <label className='block text-sm font-medium text-gray-700'>Address</label>
                                <textarea
                                    value={userDetails.address}
                                    onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
                                    className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                                    rows='3'
                                    required
                                />
                            </div>
                            <button type='submit' className='w-full bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-800'>Proceed to Payment</button>
                        </form>
                    </div>
                </div>
            )}
        </div>

    )

}

export default Cart