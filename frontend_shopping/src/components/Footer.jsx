import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import FooterLogo from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className='bg-gradient-to-r from-purple-200 via-gray-300 to-blue-100 mt-16 border-t border-gray-300'>
            <div className='max max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-10 md:gap-32 text-gray-700'>
                <div><img src={FooterLogo} alt="FooterLogo" className='h-28 w-auto' />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias porro animi, odit veritatis ipsam?</p>
                </div>
                <div>
                    <h3 className='text-lg font-bold mb-3'>Quick Links</h3>
                    <ul className='space-y-2 text-sm'>
                        <li><Link className=' hover:text-purple-500 font-semibold hover:underline'>Home</Link></li>
                        <li><Link className='hover:text-purple-500 font-semibold hover:underline'>About</Link></li>
                        <li><Link className='hover:text-purple-500 font-semibold hover:underline'>Contact</Link></li>
                        <li><Link className='hover:text-purple-500 font-semibold hover:underline'>T&C</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-bold mb-3'>Follow Us</h3>
                    <div className='flex text-2xl space-x-2'>
                        <Link className='hover:text-blue-700'><FaFacebook /></Link>
                        <Link className='hover:text-red-500'><FaInstagram /></Link>
                        <Link className='hover:text-sky-600'><FaWhatsapp /></Link>
                        <Link className='hover:text-green-600'><FaTwitter /></Link>
                    </div>
                </div>
            </div>
            <div className='text-center text-sm text-gray-700 py-4 border-t border-gray-400'>
                ©{new Date().getFullYear()} ShopBag Marketplace private Limited
            </div>
        </footer>

    )
}

export default Footer