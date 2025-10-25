import React from 'react'
import Slidebar from './Slidebar'
import { Link } from 'react-router-dom';


const AdminQuery = () => {
    return (
        <div className='flex mt-16'>
            <Slidebar />
            <div className='flex-1 p-10 min-h-screen'>
                <h1 className='text-3xl font-bold mb-6 text-gray-700'>Query Management 📧</h1>

                <div>
                    <table className='w-full text-sm text-left text-gray-700 dark:text-gray-400'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400'>
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
                        <tbody className='bg-white border-b border-gray-300'>
                            <tr className='bg-white border-b border-gray-300 text-gray-800'>
                                <td className='px-6 py-2'>1</td>
                                <td className='px-6 py-2'>Intiyaj</td>
                                <td className='px-6 py-2'>Mern</td>
                                <td className='px-6 py-2'>example@gmial.com</td>
                                <td className='px-6 py-2'>Unread</td>
                                <td className='px-6 py-2'>
                                    <Link to={"/admin/queryreply"}>
                                        <button className='text-xs bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1'>Reply</button>
                                    </Link>
                                </td>

                                <td className='px-6 py-2'><button className='text-xs bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}



export default AdminQuery