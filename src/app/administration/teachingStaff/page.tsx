import React from 'react';
import AdministrationSidebar from "@/components/shared/Administration/AdministrationSidebar/AdministrationSidebar";
import teacher from "../../../../public/assests/teacher/teachers-1.jpg"
import teacher1 from "../../../../public/assests/teacher/teachers-9.png"
import teacher2 from "../../../../public/assests/teacher/teachers-2.jpg"
import teacher3 from "../../../../public/assests/teacher/teachers-3.jpg"
import teacher4 from "../../../../public/assests/teacher/teachers-4.jpg"
import teacher5 from "../../../../public/assests/teacher/teachers-5.jpg"
import teacher6 from "../../../../public/assests/teacher/teachers-6.jpg"
import teacher7 from "../../../../public/assests/teacher/teachers-7.jpg"
import teacher8 from "../../../../public/assests/teacher/teachers-8.jpg"
import Link from "next/link";
import { Divider } from "antd";
import Image from "next/image";
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


const teachingStaff = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AdministrationSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Supporting Staff
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="text-gray-800 bg-white rounded border">
                <div className="  mx-auto lg:space-y-8 p-2 lg:p-4">
                  {/* head teacher */}
                  <div className="">
                    <div className=" flex gap-3">

                      {/* image */}
                      <Image src={teacher} className="h-[350px] w-[420px] " alt="Teacher Img" />

                      {/* description */}
                      <div className="flex flex-col justify-center flex-1 p-4  bg-gray-50 text-justify">
                        <h3 className="text-3xl font-bold">মো. খুরশীদ আলম</h3>
                        <h3 className="">সহকারী শিক্ষক</h3>
                        <h3 className="">বিএ, বিএড, এমএ</h3>
                        <p className="my-6  text-gray-600">গত ০৪/০৮/২০২০ইং তারিখ থেকে অত্র বিদ্যালয়ে সহকারী শিক্ষক হিসেবে দায়িত্ব পালন করে আসছেন। তিনি কুমিল্লা জেলার নাঙ্গলকোট উপজেলাস্থ ৯নং আদ্রা দক্ষিণ ইউনিয়নের আটিয়াবাড়ী গ্রামের সম্ভ্রান্ত মুসলিম পরিবারে ১৯৬৮ইং সনে জন্ম গ্রহন করেন। নিজ গ্রামে প্রাথমিক শিক্ষা শেষে ১৯৮৫ইং সনে লাকসাম সরকারি পাইলট উচ্চ বিদ্যালয় থেকে এস.এস.সি,নওয়াব ফয়জুন্নেছা সরকারি কলেজ,লাকসাম থেকে ১৯৮৭ইং সনে এইচ.এস.সি এবং ১৯৮৯ইং সনে বি.এসসি,পাস করেন।<Link href={`/corner/principle/bio`} ><span className='text-purple-400'>Read more..</span></Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* all teacher */}
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full  gap-x-3 gap-y-10 ">
                    {teachers.map(items => (
                      <div key={items.Name} className="border rounded w-full py-5">
                        <Image src={items.img} className="object-cover h-[210px] w-[420px] mx-auto mb-4 bg-center rounded px-3" alt="img" />
                        <div className="flex flex-col items-center">
                          <Link href={`/administration/teachingStaff/${items.id}`} > <h4 className="text-xl font-semibold">{items.Name}</h4></Link>
                          <p className="text-sm text-gray-600">{items.Subject}</p>
                          <div className="flex gap-1 mt-1 ">
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600">
                            <FaFacebookF className="w-4 h-4"/>
                            </a>

                            <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 ">
                              <FaXTwitter className="w-4 h-4"/>
                            </a>

                            <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600 ">              
                            <FaLinkedinIn className="w-4 h-4"/>                
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
      </section>
    </>

  );
};

export default teachingStaff;

