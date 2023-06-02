import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import TopHeader from '../TopHeader/TopHeader';

const NavigationBar = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <div className='md:px-32 p-5 flex text-xl gap-7 py-4'>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/add-coffee'>Add Coffee</ActiveLink>
                <hr />
            </div>
        </div>
    );
};

export default NavigationBar;