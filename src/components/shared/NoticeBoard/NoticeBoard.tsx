"use client"
 
import React from "react";
import { ClockIcon, PrinterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

const notices = [
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    },
    {
        text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
        month: "এপ্রিল",
        day: "২৫",
        year: "২০২৪",
        date: "২৫ এপ্রিল ২০২৪",
        description: "প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, স্কুল/কলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
    }

];

const NoticeBoard = () => {
    return (
        <div className="lg:w-[1260px] lg:mx-auto">
            <h2 className="text-3xl font-semibold mb-2 text-center lg:my-5">Notice Board</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-5 ">
                {notices.map((items, index) => (
                    <div key={index}  >
                        <div className="border h-auto bg-white shadow-mg rounded">
                            <div className="flex items-center content-center">
                                <div className=" item-center text-center p-3">
                                    {/* <ClockIcon /> */}
                                    <h1 className="bg-blue-900 text-white px-1 font-thin text-sm ">{items.month}</h1>
                                    <h1 className="text-lg font-bold">{items.day}</h1>
                                    <h1 className="border-t-2 text-sm">{items.year}</h1>
                                </div>
                                <div className="border-l-[1px]">
                                    <Link href="#" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                        <p className=" text-gray-700 lg:pl-6 lg:pt-0 font-bold text-xl">{items.text}</p>
                                        
                                    </Link>
                                    {/* <p className="text-gray-700 text-justify lg:pl-6 lg:pt-2">{items.description}</p> */}
                                </div>

                            </div>

                            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box">
                                    <p className="text-gray-700 lg:pl-6 font-bold text-2xl">{items.text}</p>
                                    <div className="flex flex-row items-center content-center text-center h-4 w-auto gap-1 text-sm text-gray-500 mt-[2px] lg:pl-6">
                                        <ClockIcon className="w-4 h-4" />
                                        <h1>{items.date}</h1>
                                    </div>
                                    {/* <Divider /> */}
                                    {/* Divider  */}
                                    <div className="w-full  border-t border-gray-300 h-[.5px] my-6"></div>
                                    <p className="text-gray-700 text-justify">{items.description}</p>
                                    <div className="flex gap-2 pt-2">
                                        <button className="flex btn gap-2 content-center text-center items-center"><PrinterIcon className="w-5 h-5" />প্রিন্ট করুন</button>
                                        <button className="flex btn gap-2 content-center text-center items-center"><MdDownload className="w-5 h-5" />ডাউনলোড করুন</button>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>                            
                        </div>
                    </div>
                ))}

            </div>
            <Link href="/notice" ><button className="btn bg-gray-300 w-full rounded p-2 my-5">Load More</button></Link>
        </div>
    );
};

export default NoticeBoard;