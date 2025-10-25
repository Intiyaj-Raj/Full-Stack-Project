import React from 'react'

const Query = () => {
    return (
        <div className='max-w-7xl mx-auto mt-24 p-6 bg-gray-200 rounded-xl'>
            <h2 className='text-2xl font-bold text-purple-500 mb-4 text-center'>Query Form 📄</h2>
            <form
                action=""
                className="bg-white shadow-lg rounded-2xl p-8 w-[80vw] mx-auto mt-10 space-y-3"
            >
                <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input
                    type="text"
                    placeholder="Enter your name ..."
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <label className="block text-gray-700 font-medium mb-1">Your Email</label>
                <input
                    type="email"
                    placeholder="Enter your email ..."
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <label className="block text-gray-700 font-medium mb-1">Your Query</label>
                <textarea
                    placeholder="Enter your query here ..."
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>

                <button
                    className="w-full bg-purple-500 hover:bg-purple-700 text-white font-medium rounded-lg mt-3 py-2 transition-all duration-300 shadow-md"
                >
                    Submit Query
                </button>
            </form>

        </div>
    )
}

export default Query
