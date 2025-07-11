import React from 'react'
import { assets } from '../assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*------------Left Section------------------------*/}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is an innovative doctor channelling app designed to simplify and streamline the way patients connect with healthcare professionals. Whether you're booking a consultation, searching for specialists, or managing your medical appointments, Prescripto offers a user-friendly platform that puts your health at your fingertips. With real-time appointment scheduling, digital prescription management, and automated reminders, Prescripto ensures you never miss a visit or forget important health updates. Ideal for patients seeking reliable access to medical care, and for doctors aiming to manage their time more efficiently, Prescripto bridges the gap between healthcare providers and those in need—anytime, anywhere.</p>
            </div>

            {/*------------Center Section------------------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-7 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            {/*------------Right Section------------------------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-7 text-gray-600'>
                    <li>+94-112-456-780</li>
                    <li>prescriptocial@gmail.com</li>
                    <li>21/48,Galle Road,Colombo</li>
                </ul>
            </div>
        </div>
        {/*------------Copyright Text------------------------*/}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025© Prescripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer