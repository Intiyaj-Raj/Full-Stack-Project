import React from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast'
import { useEffect } from 'react';

const AdminQuery = () => {

    const [query, setQuery] = useState([])

    async function allQuery() {
        try {
            const response = await fetch("/api/userallquery")
            const result = await response.json()

            if (response.ok) {
                setQuery(result.data)
            }
            else {
                toast.error(result.message)
            }
        } catch (error) {
            toast.error(result.message)
        }

    }
    useEffect(() => {
        allQuery()
    }, [])

    async function handleDelete(id) {
        try {
            const response = await fetch(`/api/querydelete/${id}`, {
                method: "Delete",
            })

            const result = await response.json()

            if (response.ok) {
                toast.success(result.message)
                allQuery()
            }
            else {
                toast.error(result.message)
            }

        } catch (error) {
            toast.error(result.message)
        }
    }

    return (
        <div className='flex mt-16'>
            <Slidebar />
            <div className='flex-1 p-10 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Query Management 📧</h1>

                <div>
                    <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 text-center'>
                            <tr>
                                <th className='px-6 py-2'>S.No</th>
                                <th className='px-6 py-2'>User Name</th>
                                <th className='px-6 py-2'>Query</th>
                                <th className='px-6 py-2'>Email-Id</th>
                                <th className='px-6 py-2'>Status</th>
                                <th className='px-6 py-2'>Action-1</th>
                                <th className='px-6 py-2'>Action-2</th>
                            </tr>
                        </thead>
                        {query.length === 0 ? <p className='text-center text-red-600 font-bold'>No Query's here...</p> :
                            query.map((item, index) => (
                                <tbody key={index} className='bg-white border-b border-gray-300'>
                                    <tr className='bg-white border-b border-gray-300 text-gray-800'>
                                        <td className='px-6 py-2'>{index + 1}</td>
                                        <td className='px-6 py-2'>{item.Name}</td>
                                        <td className='px-6 py-2'>{item.Query}</td>
                                        <td className='px-6 py-2'>{item.Email}</td>
                                        <td className='px-6 py-2'>{item.queryStatus}</td>
                                        <td className='px-6 py-2'>
                                            <Link to={`/admin/queryreply/${item._id}`}>
                                                <button className='text-xs bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1'>Reply</button>
                                            </Link>
                                        </td>

                                        <td className='px-6 py-2'><button onClick={() => { handleDelete(item._id) }} className='text-xs bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1'>Delete</button></td>
                                    </tr>
                                </tbody>
                            ))
                        }

                    </table>

                </div>
            </div>

        </div>
    )
}



export default AdminQuery