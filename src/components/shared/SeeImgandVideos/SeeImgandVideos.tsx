"use client";
import React from 'react';
import { useState } from "react";
import Link from 'next/link';
import { FaPlay } from "react-icons/fa";
import campus1 from "../../../../public/assests/doctorsCare/campus/2.jpg";
import campus2 from "../../../../public/assests/doctorsCare/campus/4.jpg"
import campus3 from "../../../../public/assests/doctorsCare/campus/3.jpg"
import campus4 from "../../../../public/assests/doctorsCare/campus/price.jpg"
// import campus1 from "../../../../public/assests/campus-3.jpg"
// import campus2 from "../../../../public/assests/student.jpg"
// import campus3 from "../../../../public/assests/campus-1.jpg" 
// import campus4 from "../../../../public/assests/campus-2.jpg"
import Image from 'next/image';
import { FaFileImage } from "react-icons/fa6";

const slides = [
    {
      img: campus1
    },
    {
      img: campus2
    },
    {
      img: campus3
    },
    {
      img: campus4
    }
];

const SeeImgandVideos = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    console.log("Current Index:", currentIndex);

    return (
        <>
            <div className=" lg:my-16">
                <div className="lg:w-[1260px] mx-auto bg-gray-100 text-gray-900 lg:flex ">
                    <div className="lg:w-[550px] lg:px-10 bg-blue-900">
                        <div className="relative lg:mx-8 pt-5 md:pt-10 lg:pt-12 lg:h-[410px] lg:w-[550px]">
                            <div className="carousel lg:mb-20 h-[235px] lg:h-[300px] w-[800px]">
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`slide ${currentIndex === index ? "block" : "hidden"
                                            } lg:space-y-2`}
                                    >
                                        <Image src={slide.img} alt={`campus-${index}`} className='h-auto w-auto' />
                                    </div>
                                ))}
                            </div>
                            <button
                                className="next absolute bottom-4 left-2 text-white p-2"
                                onClick={prevSlide}
                            >
                                &#10094; Prev /
                            </button>
                            <button
                                className="prev absolute bottom-4 left-16  text-white  p-2"
                                onClick={nextSlide}
                            >
                                Next &#10095;
                            </button>
                        </div>
                    </div>

                    <div className="px-5 lg:px-10">
                        <div className='space-y-4 py-5 md:pt-10 lg:pt-14 ml-0 md:ml-14 lg:ml-20'>
                            <div className='text-3xl md:text-5xl lg:text-5xl font-bold'>
                                Visit Our Campus <br/> with Image Gallery</div>
                            <Link href={"/gallery/images"}>
                                <button className="btn btn-warning flex items-center  gap-2 hover:text-green-500">
                                    <FaFileImage /> See All Images
                                </button>
                            </Link>
                            <div className='border border-black lg:w-96'></div>
                            <div className='text-3xl md:text-5xl lg:text-5xl font-bold'>
                              Watch Video</div>
                            <Link href={"/gallery/videos"}>
                                <button className=" flex items-center text-2xl gap-2 hover:text-green-500">
                                    <FaPlay /> Play now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeeImgandVideos;