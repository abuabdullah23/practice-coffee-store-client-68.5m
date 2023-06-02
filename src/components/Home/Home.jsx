import React from 'react';
import Header from '../Header/Header';
import { FaCoffee } from "react-icons/fa";

import icon1 from '../../assets/images/icons/1.png';
import icon2 from '../../assets/images/icons/2.png';
import icon3 from '../../assets/images/icons/3.png';
import icon4 from '../../assets/images/icons/4.png'
import { Link } from 'react-router-dom';
import FollowUs from '../FollowUs/FollowUs';

const Home = () => {


    // update coffee card after delete : Step 1
    // const [coffees, setCoffees] = useState(loadedCoffees);

    return (
        <div>
            <Header></Header>
            {/* ================ Some Icon =================== */}
            <div className='md:px-36 p-5 py-14 bg-[#ECEAE3] mb-10'>
                <div className='md:flex gap-5'>
                    <div>
                        <img src={icon1} alt="icon1" />
                        <p className='text-[#331A15] py-5 font-normal text-3xl' style={{ fontFamily: 'Rancho' }}>Awesome Aroma</p>
                        <p>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={icon2} alt="icon2" />
                        <p className='text-[#331A15] py-5 font-normal text-3xl' style={{ fontFamily: 'Rancho' }}>High Quality</p>
                        <p>We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src={icon3} alt="icon3" />
                        <p className='text-[#331A15] py-5 font-normal text-3xl' style={{ fontFamily: 'Rancho' }}>Pure Grades</p>
                        <p>The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
                        <img src={icon4} alt="icon4" />
                        <p className='text-[#331A15] py-5 font-normal text-3xl' style={{ fontFamily: 'Rancho' }}>Proper Roasting</p>
                        <p>Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>
            {/* ===================== Some Icon END =================== */}

            {/* ==================== Coffee Section ===================== */}
            <div className='home-bg'>
                <div className='md:px-36 p-5'>
                    <div className='text-center md:px-10 md:py-8'>
                        <p className='m-0 py-1 text-xl'>--- Sip & Savor ---</p>
                        <p className='text-[#331A15] md:px-14 p-5 font-bold text-3xl' style={{ fontFamily: 'Rancho' }}>Our Popular Products</p>
                        <div className='flex justify-center'>
                            <p className='bg-[#E3B577] hover:bg-[#331A15] border-2 border-[#331A15] hover:border-[#E3B577] rounded-md flex items-center w-fit'>
                                <button className='font-semibold px-3 py-2 text-[#331A15] hover:text-white' style={{ fontFamily: 'Rancho' }}><Link to='/add-coffee'> Add Coffee </Link></button>
                                <FaCoffee className='mr-2' />
                            </p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5 mt-5'>
                        {
                            // coffees.map(coffee => <CoffeeCard
                            //     key={coffee._id}
                            //     coffee={coffee}
                            //     // update coffee card after delete : Step 2 : go to coffee card comp
                            //     coffees={coffees}
                            //     setCoffees={setCoffees}
                            // ></CoffeeCard>)
                        }
                    </div>
                </div>
            </div>
            {/* ================= Coffee Section END =============== */}


            {/* ========= Follow on Instagram ======== */}
            <FollowUs/>
            {/* ======= Follow on Instagram END ====== */}

        </div>
    );
};

export default Home;