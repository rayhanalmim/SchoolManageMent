import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import vision from "../../../../../public/assests/binoculars-white1x.png"
import mission from "../../../../../public/assests/flag-plain-white.svg"
 
import Image from "next/image";
import AboutCarousel from "@/components/shared/About/AboutCarousel/AboutCarousel";

import teacher1 from "../../../../../public/assests/teacher/teachers-9.png"
import teacher2 from "../../../../../public/assests/teacher/teachers-2.jpg"
import teacher3 from "../../../../../public/assests/teacher/teachers-3.jpg"
import teacher4 from "../../../../../public/assests/teacher/teachers-4.jpg"
import teacher5 from "../../../../../public/assests/teacher/teachers-5.jpg"
import teacher6 from "../../../../../public/assests/teacher/teachers-6.jpg"
import teacher7 from "../../../../../public/assests/teacher/teachers-7.jpg"
import teacher8 from "../../../../../public/assests/teacher/teachers-8.jpg"
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const teachers = [
  {
    id: 1,
    Name: "জনাব মাহমুদুর রহমান",
    Subject: "বাংলা",
    img: teacher1,
  },
  {
    id: 2,
    Name: "জনাব মোস্তফা কামাল",
    Subject: "ইংরেজী",
    img: teacher2,
  },
  {
    id: 3,
    Name: "জনাব হুমায়ুন কবির",
    Subject: "গণিত",
    img: teacher3,
  },

  {
    id: 4,
    Name: "জনাবা খালেদা আক্তার",
    Subject: "পদার্থ",
    img: teacher4,
  },
  {
    id: 5,
    Name: "জনাব মুজিবুর রহমান",
    Subject: "রসায়ন",
    img: teacher5,
  },
  {
    id: 6,
    Name: "জনাব আবদুল মান্নান",
    Subject: "জীববিজ্ঞান",
    img: teacher6,
  },
  {
    id: 7,
    Name: "জনাব ফাতেমা ইয়াসমিন",
    Subject: "কৃষি শিক্ষা",
    img: teacher7,
  },
  {
    id: 8,
    Name: "জনাব কামরুল হাসান",
    Subject: "সামাজিক বিজ্ঞান",
    img: teacher8,
  },
]

const history = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center md:text-left lg:text-left">
                  আমাদের ইতিহাস
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <h1 className="justify-center text-center font-bold text-xl lg:text-2xl py-3 ">
                  Doctors Care এর ইতিবৃত্ত
                </h1>
                <p className="mx-1 md:mx-4 lg:mx-0 text-justify space-y-4">
                দেশসেরা Doctors Care বিজয়নগরবাসীর আগ্রহ ও দাবির প্রেক্ষিতে
                  বিশিষ্ট সমাজহিতৈষী ও বিদ্যোৎসাহী ডা. এমরান মিয়া এবং ডা. ফরহাদ মিয়ার উদ্যোগে ২০২১
                  খ্রি. প্রতিষ্ঠিত হয়। প্রতিষ্ঠানের আত্মপ্রকাশ ঘটে সীমিত সংখ্যক শিক্ষার্থী ও শিক্ষক নিয়ে। ২০২১ সালে
                  প্রতিষ্ঠান সরকারি স্বীকৃতি লাভ করে, অতঃপর পূর্ণাঙ্গ হাইস্কুলে পরিণত হয়ে
                  ওঠে। ১৯৯৫ সালে এমপিওভুক্ত হয় ও প্রথমবারের মতো এসএসসি পরীক্ষায় অবতীর্ণ হয়।

                  {/* দেশসেরা SoftyEdu মাতুয়াইলবাসীর আগ্রহ ও দাবির প্রেক্ষিতে
                  বিশিষ্ট সমাজহিতৈষী ও বিদ্যোৎসাহী আলহাজ্ব সামসুল হক খানের উদ্যোগে ১৯৮৯
                  খ্রি. প্রতিষ্ঠিত হয়। প্রতিষ্ঠানের আত্মপ্রকাশ ঘটে সামসুল হক খান জুনিয়র
                  হাইস্কুল হিসেবে এবং সীমিত সংখ্যক শিক্ষার্থী ও শিক্ষক নিয়ে। ১৯৯৩ সালে
                  প্রতিষ্ঠান সরকারি স্বীকৃতি লাভ করে, অতঃপর পূর্ণাঙ্গ হাইস্কুলে পরিণত হয়ে
                  ওঠে। নাম ধারণ করে সামসুল হক খান উচ্চ মাধ্যমিক বিদ্যালয়। ১৯৯৫ সালে
                  এমপিওভুক্ত হয় ও প্রথমবারের মতো এসএসসি পরীক্ষায় অবতীর্ণ হয়। ২০০৩ সালে
                  সংযুক্ত হয় মেয়েদের জন্য কলেজ শাখা। আর তখন থেকেই প্রতিষ্ঠানের নতুন নামকরণ
                  সামসুল হক খান স্কুল অ্যান্ড কলেজ। প্রতিষ্ঠানের সর্বশেষ শাখা ইংলিশ ভার্সন
                  উন্মুক্ত হয় ২০১৪ সালে। */}
                  <br /> <br />

                  সহকারী প্রধান শিক্ষক মো. সোহরাব
                  হোসেন বালকদের দিবা শাখা ও সহকারী প্রধান শিক্ষক মো. আব্দুল মতীন বালিকাদের
                  প্রভাতি শাখার তত্ত্বাবধান ও পরিচালনার দায়িত্বে নিযুক্ত। ইংলিশ ভার্সনের
                  ইনচার্জ মো.আলমগীর হোসেন। কলেজ শাখার ইনচার্জের দায়িত্বে নিযুক্ত আছে মো.
                  মুস্তাফিজুর রহমান(তুহিন), সহকারী অধ্যাপক, গণিত বিভাগ। সামসুল হক খান
                  স্কুল অ্যান্ড কলেজ সহশিক্ষা বিনোদনে দেশের অন্যতম অগ্রগামী
                  শিক্ষাপ্রতিষ্ঠান। স্কাউট গ্রুপসহ ডজন খানেক ক্লাব বিদ্যমান। সামসুল হক খান
                  স্কুল অ্যান্ড কলেজ স্কাউট গ্রুপ একটি সাড়া জাগানো স্কাউট সংগঠন। এছাড়া
                  ইংলিশ ল্যাঙ্গুয়েজ ক্লাব, বিজ্ঞান ক্লাব, আর্ট অ্যান্ড কালচারাল ক্লাব,
                  ডিবেট ক্লাব, স্বদেশ ও বিশ্বভাবনা ক্লাব উল্লেখযোগ্য। শিক্ষার্থীদের মানসিক
                  বিকাশে ক্লাবগুলো অবদান রাখছে। <br />
                  <br />
                  
                </p>

                {/* mission vision section */}
                <div className="flex flex-col w-full lg:flex-row gap-4 my-5 text-white">
                  <div className="grid w-full lg:h-52 lg:w-1/2 card bg-base-300 rounded  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 p-5">
                    <div className="flex items-center gap-2 lg:px-4">
                      <Image src={vision} className="h-auto w-auto rounded" alt="img" />
                      <h2 className="text-2xl font-bold">Our Vision</h2>
                    </div>
                    <p className="lg:px-4 text-justify">To create a world where businesses can intelligently engage and delight their customers through real-time unified data.</p>
                  </div>

                  <div className="grid w-full lg:h-52 lg:w-1/2 card bg-base-300 rounded bg-gradient-to-tr from-sky-400 via-purple-600 to-blue-400 p-5">
                    <div className="flex items-center gap-2 lg:px-4">
                      <Image src={mission} className="h-auto w-auto rounded" alt="img" />
                      <h2 className="text-2xl font-bold">Our Mission</h2>
                    </div>
                    <p className="lg:px-4 text-justify">To create a best-of-breed, secure, and compliant global platform that helps companies improve the value and actionability of their customer data.</p>
                  </div>
                </div>
                
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-6"></div>

                {/* history slider section */}
                <AboutCarousel />
                
                {/* Divider  */}
                <div className="w-full  border-t border-gray-300 h-[.5px] my-6"></div>

                {/* teacher */}
                <section className="text-gray-800">
                  <div className="  mx-auto lg:space-y-8 p-2 lg:p-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold leading-none lg:text-4xl text-center md:text-center lg:text-center  md:my-2 lg:py-0">শিক্ষকমন্ডলী</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full  gap-x-3 gap-y-10 ">
                      {teachers.map(items => (
                        <div key={items.Name} className="border rounded w-full py-5">
                          <Image src={items.img} className="object-cover h-[210px] w-[420px] mx-auto mb-4 bg-center rounded px-3" alt="img" />
                          <div className="flex flex-col items-center">
                            <Link href={`/about/history/${items.id}`} >
                              <h4 className="text-xl font-semibold hover:underline">{items.Name}</h4>
                            </Link>
                            {/* <h4 className="text-xl font-semibold">{items.Name}</h4> */}
                            <p className="text-sm text-gray-600">{items.Subject}</p>

                            <div className="flex gap-1 mt-1 ">
                              <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600">
                                <FaFacebookF className="w-4 h-4" />
                              </a>

                              <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 ">
                                <FaXTwitter className="w-4 h-4" />
                              </a>

                              <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600 ">
                                <FaLinkedinIn className="w-4 h-4" />
                              </a>
                            </div>

                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default history;
