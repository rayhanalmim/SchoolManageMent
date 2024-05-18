import React from 'react';
import Image from "next/image";
import scienceimg from "../../../../../../public/assests/scienceclub.jpg";
import { TProps } from '@/types';

const eventDetails = ({ params }:TProps) => {
    console.log(params);
    return (
        <div className="lg:w-[1260px] mx-auto pt-24">
            <div className=" border rounded text-gray-800 p-4 bg-white">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-gray-50">
                    <Image src={scienceimg} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  bg-gray-500" alt="" />
                    <div className=" space-y-2 lg:col-span-5  p-4">
                        <h3 className="font-bold text-xl md:text-xl lg:text-2xl group-hover:underline group-focus:underline lg:pt-5">বিজ্ঞান মেলা এবং কুইজ লীগ - </h3>
                        <span className="text-xs  text-gray-600">February 19, 2021</span>
                        <p className="text-sm text-gray-400 lg:pr-2 text-justify">Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        {/* <button className="btn btn-sm p-2 rounded text-black" >Read More</button> */}

                    </div>
                    <div className="">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default eventDetails;