import Image from 'next/image';
import React from 'react';
import { CiDollar, CiStar } from "react-icons/ci";


const ProductCard = ({one}) => {
    return (
        <div className="card bg-base-100 shadow-sm border-slate-400">
            <figure className='relative w-full aspect-square'>

                <div 
                className={`absolute top-2 left-2 z-10 badge text-white
                    ${(one.price > 10 && one.price <20) 
                        ? 'bg-blue-500'
                        : (one.price > 20 && one.price <30) 
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }
                    `}>
                    {(one.price > 10 && one.price <20) 
                        ? 'new'
                        : (one.price > 20 && one.price <30) 
                        ? 'best seller'
                        : 'hot'
                    }
                </div>

                <Image 
                    src={one.image}
                    alt='image'
                    fill
                    className='object-cover rounded-xl'
                />
            </figure>
            <div className="card-body">

                <div className='flex flex-col font-bold gap-3'>
                    <div className="badge badge-secondary">{one.category}</div>
                    <h2 className='text-xl'>{one.name}</h2>
                </div>

                <div>
                    <h1 className='flex items-center gap-3 font-bold text-xl text-accent'>
                        <CiStar />
                        {one.rating}
                    </h1>
                    <h1 className='flex items-center gap-3 font-bold text-xl text-red-400'>
                        <CiDollar />
                        {one.price}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;