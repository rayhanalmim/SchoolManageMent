"use client"

import React, { useState } from 'react';
import Image from "next/image";
import scienceimg from "../../../../../public/assests/scienceclub.jpg";
import student from "../../../../../public/assests/student.jpg";
import result from "../../../../../public/assests/result.jpg";

const eventsItems = [
    {
        img: scienceimg,
        title: "বিজ্ঞান কুইজ ও অলম্পিয়াড অনুষ্ঠিত - ",
        date: "January 26, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
    },
    {
        img: result,
        title: "বার্ষিক পরিক্ষার ফলাফল প্রকাশ - ",
        date: "January 26, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
    },
    {
        img: student,
        title: "স্বাধীনতা দিবস উপলক্ষে কুইজ প্রতিযোগীতা আয়োজিত - ",
        date: "January 26, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
    },
    {
        img: result,
        title: "২১ ফেব্রুয়ারী ও আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে কুইজ প্রতিযোগীতা আয়োজিত -",
        date: "January 26, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
    },
    {
        img: student,
        title: "মহান বিজয় দিবস উপলক্ষে কুইজ প্রতিযোগীতা আয়োজিত -",
        date: "January 26, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
    },
    {
        img: result,
        title: "আইসিটি কুইজ ও অলম্পিয়াড অনুষ্ঠিত -",
        date: "January 26, 2021",
        description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
    },
    // Add more items as needed
];

const Events = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (index) => {
        setSelectedItem(index);
        document.getElementById('my_modal').showModal();
    };

    const closeModal = () => {
        setSelectedItem(null);
        document.getElementById('my_modal').close();
    };

    return (
        <div>
            <section className=" border  rounded text-gray-800 lg:w-auto p-4 bg-white">
                <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-gray-50">
                        <Image src={scienceimg} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  bg-gray-500" alt="" />
                        <div className=" space-y-2 lg:col-span-5  p-4">
                            <h3 className="font-bold text-xl md:text-xl lg:text-2xl group-hover:underline group-focus:underline lg:pt-5">বিজ্ঞান মেলা এবং কুইজ লীগ - </h3>
                            <span className="text-xs  text-gray-600">February 19, 2021</span>
                            <p className="text-sm text-gray-400 lg:pr-2 text-justify">Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                            <button className="btn btn-sm p-2 rounded text-black" >Read More</button>
                    
                        </div>
                        <div className="">
                        </div>
                    </a>

                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {eventsItems.map((item, index) => (
                            <div key={index} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
                                <Image src={item.img} className="object-cover w-full rounded h-44 bg-gray-500" alt="" />
                                <div className="p-3 space-y-2">
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <span className="text-xs text-gray-600">{item.date}</span>
                                    <p className="text-sm text-gray-400">{item.description}</p>
                                    <button className="btn btn-sm p-2 rounded text-black" onClick={() => openModal(index)}>Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <dialog id="my_modal" className="modal">
                        {selectedItem !== null && (
                            <div className="modal-box w-auto max-w-2xl">
                                <div className="modal-action">
                                    <form>
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>
                                    </form>
                                </div>
                                <div className="p-3 space-y-2">
                                    <Image src={eventsItems[selectedItem].img} className="object-cover w-full rounded h-[350px] bg-gray-500" alt="" />
                                    <h3 className="text-xl font-semibold">{eventsItems[selectedItem].title}</h3>
                                    <span className="text-xs text-gray-600">{eventsItems[selectedItem].date}</span>
                                    <p className="text-sm text-gray-400">{eventsItems[selectedItem].description}</p>
                                </div>
                            </div>
                        )}
                    </dialog>
                    <div className="flex justify-center">
                        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline  bg-gray-50  text-gray-600">Load more...</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;