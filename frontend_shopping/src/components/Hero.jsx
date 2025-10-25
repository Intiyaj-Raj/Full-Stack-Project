import React from 'react'

const Hero = () => {
    return (
        <section className='bg-gradient-to-r from-purple-200 via-gray-300 to-blue-100 px-6 py-12 md:flex items-center justify-between max-w-7xl mx-auto rounded-xl mt-28 border-blue-200 border-2'>
            <div className='md:w-1/2 space-y-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Fast Delivery..🚀</h1>
                <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam cum accusantium optio blanditiis dolore culpa deleniti necessitatibus soluta eos!</p>
                <button className=' mt-4 bg-purple-500 hover:bg-purple-700 rounded-lg px-4 py-2 text-white'>Shop Now</button>
            </div>
            <div className='md:w-1/2 mt-8 md:mt-0'>
                <img src="https://staticg.sportskeeda.com/editor/2023/11/2b734-16996223903581-1920.jpg" alt="" className='w-full max-w-md mx-auto rounded-2xl' />
            </div>
        </section>
    )
}
export default Hero