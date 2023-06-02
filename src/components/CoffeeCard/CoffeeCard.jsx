import React from 'react';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, supplier, taste, category, details, quantity, price, photoUrl } = coffee;
    // update coffee card after delete : : Step 3
    // coffees, setCoffees are destructured from home components

    return (
        <div>
            <div className="card card-side bg-[#a7a7a762] p-4 md:flex gap-3 items-center justify-center rounded-md">
                <img className='object-cover' src={photoUrl} alt="Coffee Image" />
                <div className='md:flex gap-5 justify-between w-full items-center'>
                    <div className="h-full">
                        <h2 className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Name:</span> {name}</h2>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Chef:</span> {chef}</p>
                        <p className="card-title text-xl text-slate-600 py-1"><span className='font-semibold text-black'>Price:</span> {price} Taka</p>
                    </div>

                    <div className='md:flex md:flex-col md:gap-3 mt-4'>

                        {/* to={`/coffee-details/${_id}`} */}
                        <Link>
                            <button className='bg-[#D2B48C] hover:bg-[#7c6950] p-3 rounded-md ms-3 text-white'>
                                <BsEyeFill className='w-6 h-6' />
                            </button>
                        </Link>

                        {/* to={`/update-coffee/${_id}`} */}
                        <Link>
                            <button className='bg-[#3C393B] hover:bg-[#111011] p-3 rounded-md ms-3 text-white'>
                                <HiPencil className='w-6 h-6' />
                            </button>
                        </Link>

                        <button
                            // onClick={() => handleDelete(_id)}
                            className='bg-[#EA4744] hover:bg-[#dd0400] p-3 rounded-md ms-3 text-white'>
                            <MdDelete className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;