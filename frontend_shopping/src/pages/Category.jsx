import React from 'react'
import { FaBagShopping, FaGamepad, FaLaptop, FaMobile } from "react-icons/fa6";

import { CiCoffeeCup } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { GiLipstick, GiShinyApple } from "react-icons/gi";

const Category = ({ onselectCat }) => {

    const categories = [
        { name: "All", icon: <FaBagShopping /> },
        { name: "Cafe", icon: <CiCoffeeCup /> },
        { name: "Home", icon: <FaHome /> },
        { name: "Toys", icon: <FaGamepad /> },
        { name: "Fresh", icon: <GiShinyApple /> },
        { name: "Electronics", icon: <FaLaptop /> },
        { name: "Mobile", icon: <FaMobile /> },
        { name: "Beauty", icon: <GiLipstick /> }
    ]
    return (
        <div className='w-full'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex sm:justify-center overflow-x-auto '>
                    {
                        categories.map((cat, index) => (

                            <div key={index}
                                onClick={() => { onselectCat(cat.name) }}
                                className='flex flex-col items-center min-w-[80px] text-sm text-gray-800 hover:text-purple-500 hover:cursor-pointer'>

                                <div className='text-2xl mb-1'>{cat.icon}</div>
                                <div className='text-center'>{cat.name}</div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default Category