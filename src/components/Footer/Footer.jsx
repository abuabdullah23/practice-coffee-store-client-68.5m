import React from 'react';
import './Footer.css'
import logo1 from '../../assets/images/more/logo1.png';
import { IoCall } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";


const Footer = () => {
    return (
        <div className='footer-bg'>
            <div className='md:px-36 p-5 py-14 md:flex gap-8'>
                {/* Left Footer */}
                <div className='w-full'>
                    <img className='w-14 mb-4' src={logo1} alt="Espresso Emporium Logo" title='Espresso Emporium Logo' />
                    <div style={{ fontFamily: 'Rancho' }} className='mb-5'>
                        <p className='text-left text-4xl text-[#331A15]'>Espresso Emporium</p>
                    </div>

                    <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                    <div className='flex gap-4 mt-5 items-center'>
                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png" alt="Facebook Icon" />

                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/128/733/733635.png" alt="Twitter Icon" />

                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="Instagram Icon" />

                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/128/1384/1384046.png" alt="Linkedin Icon" />
                    </div>

                    <h2 className='text-4xl text-[#331A15] mt-7' style={{ fontFamily: 'Rancho' }}>Get in Touch</h2>

                    <div className='mt-4'>
                        <div className='flex gap-2 items-center text-lg'>
                            <IoCall />
                            <p> +88 01533 333 333</p>
                        </div>
                        <div className='flex gap-2 items-center text-lg'>
                            <HiMail />
                            <p> info@gmail.com</p>
                        </div>
                        <div className='flex gap-2 items-center text-lg'>
                            <TiLocation />
                            <p> 72, Wall street, King Road, Dhaka</p>
                        </div>


                    </div>
                </div>

                {/* Right Footer */}
                <div className='w-full md:ms-20'>
                    <h2 className='text-4xl text-[#331A15] md:mt-20 mb-5' style={{ fontFamily: 'Rancho' }}>Connect with Us</h2>
                    
                    <input type="text" name="name" id="name" placeholder="Name" className='py-3 px-5 w-full rounded-md mb-5' />
                    
                    <input type="text" name="email" id="email" placeholder="Email" className='py-3 px-5 w-full rounded-md mb-5' />
                    
                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' className='py-3 px-5 w-full rounded-md mb-5 '></textarea>
                    
                    <button className='border-2 border-[#331A15] hover:bg-[#331A15] py-2 px-5 rounded-full text-xl hover:text-white' type="submit" style={{ fontFamily: 'Rancho' }}>Send Message</button>

                </div>
            </div>
        </div>
    );
};

export default Footer;