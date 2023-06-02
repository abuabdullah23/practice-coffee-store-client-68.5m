import React from 'react';
import errorImg from '../src/assets/images/404/404.gif'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='md:px-16 pl-5 pt-5 pe-5 md:flex sm:flex-row-reverse gap-5'>
            <div className='w-full'>
                <img src={errorImg}alt="" />
            </div>
            <div className='text-center w-full p-5 flex items-center'>
                <div>
                    <h2 className='text-7xl font-bold mb-10 text-[#ff5100]'>Oops!</h2>
                    <h3 className='text-3xl font-semibold mb-10'>Sorry, an unexpected error has occurred.</h3>

                    <button className='bg-[#643d35] hover:bg-gradient-to-l to-[#331A15] from-[#964e3f] py-3 px-6 rounded-md text-white text-xl font-bold' ><Link to='/'>Back to Home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Error;