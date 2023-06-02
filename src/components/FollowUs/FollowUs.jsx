import React from 'react';
import img9 from '../../assets/images/cups/Rectangle 9.png';
import img10 from '../../assets/images/cups/Rectangle 10.png';
import img11 from '../../assets/images/cups/Rectangle 11.png';
import img12 from '../../assets/images/cups/Rectangle 12.png';
import img13 from '../../assets/images/cups/Rectangle 13.png';
import img14 from '../../assets/images/cups/Rectangle 14.png';
import img15 from '../../assets/images/cups/Rectangle 15.png';
import img16 from '../../assets/images/cups/Rectangle 16.png';

const FollowUs = () => {
    return (
        <div className='xl:px-36 lg:px-36 md:px20 p-5 py-14 mb-5 text-center' >
            <h3 className='text-xl'>Follow Us Now</h3>
            <h2 style={{ fontFamily: 'Rancho' }} className='text-2xl mb-5'>Follow on Instagram</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full justify-center'>
                <img src={img9} className='w-full' alt="Cup of Coffee" />
                <img src={img10} className='w-full' alt="Cup of Coffee" />
                <img src={img11} className='w-full' alt="Cup of Coffee" />
                <img src={img12} className='w-full' alt="Cup of Coffee" />
                <img src={img13} className='w-full' alt="Cup of Coffee" />
                <img src={img14} className='w-full' alt="Cup of Coffee" />
                <img src={img15} className='w-full' alt="Cup of Coffee" />
                <img src={img16} className='w-full' alt="Cup of Coffee" />
            </div>
        </div>
    );
};

export default FollowUs;