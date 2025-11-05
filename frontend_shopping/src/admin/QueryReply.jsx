import React from 'react'

import Slidebar from './Slidebar'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useEffect } from 'react'
const QueryReply = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [query, setQuery] = useState({
        to: "",
        sub: "",
        body: ""
    })

    async function queryData() {
        try {
            const response = await fetch(`/api/querysingledata/${id}`)
            const result = await response.json()
            if (response.ok) {
                console.log(result)
                setQuery({
                    to: result.data.Email
                })
            }
            else {
                toast.error(result.message)
            }

        }
        catch (error) {
            toast.error(result.message)
        }
    }
    useEffect(() => {
        queryData();
    }, [])

    async function handleForm(e) {
        e.preventDefault();

        try {
            const response = await fetch(`/api/mailreply/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(query)
            });
            const result = await response.json()

            if (response.ok) {
                toast.success(result.message)
                navigate("/admin/adminquery")
            }
            else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error(error)
        }
    }



    function handleChange(e) {
        setQuery({ ...query, [e.target.name]: e.target.value })
    }
    return (
        <div className='flex mt-16'>
            <Slidebar />


            <div className='flex-1 p-10 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Reply Query 📥</h1>

                <button onClick={() => { navigate("/admin/adminquery") }} className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400'>Back</button>
                <div className='bg-white shadow-xl shadow-gray-300 rounded-xl p-6 max-w-3xl mx-auto border border-gray-300 space-y-6 mt-4'>
                    <form action="" onSubmit={handleForm}>
                        <label htmlFor="" className='block text-gray-700 font-medium mb-1'>To</label>
                        <input type="text" name="to" value={query.to} id="" className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600' />

                        <label htmlFor="" className='block text-gray-700 font-medium mb-1'>From</label>
                        <input type="text" name="" value={"intiyajraj786@gmail.com"} id="" className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600' />

                        <label htmlFor="" className='block text-gray-700 font-medium mb-1'>Subject</label>
                        <input type="text" name="sub" onChange={handleChange} value={query.sub} id="" className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600' />

                        <label htmlFor="" className='block text-gray-700 font-medium mb-1'>Body</label>
                        <textarea name="body" onChange={handleChange} id="" value={query.body} className='w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600' ></textarea>

                        <div className='text-right'>
                            <button className='bg-purple-500 text-white px-5 py-1 rounded  hover:bg-purple-700'>Reply</button>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    )
}
export default QueryReply