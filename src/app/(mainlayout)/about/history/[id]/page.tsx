import Image from 'next/image';
import React from 'react';
import teacher from "../../../../../../public/assests/teacher/teacher10.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const teacherDetails = ({ params }) => {
  console.log(params);
  return (
    <div className="lg:w-[1260px] lg:pt-24 mx-auto lg:pb-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:flex-row gap-2 border broder-gray-800 rounded px-10 ">
        {/* img,social icon */}
        <div className="flex mx-auto py-10 items-center content-center ">
          <div className="h-[420px] w-[250px] bg-gray-100 shadow-md"></div>
          <div className="flex gap-4 -ml-[230px] -mt-20">
            {/* social icon */}
            <div className="mt-[190px] space-y-8">
              <a rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600 border p-2 rounded-full shadow-md bg-white">
              <FaFacebookF className="w-4 h-4"/>
              </a>

              <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 border p-2 rounded-full shadow-md bg-white">
                <FaXTwitter className="w-4 h-4"/>
              </a>

              <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600 border p-2 rounded-full shadow-md bg-white">              
              <FaLinkedinIn className="w-4 h-4"/>                
              </a>
            </div>
            {/* image */}
            <Image src={teacher} className="h-[400px] w-[270px] bg-gray-100 border shadow-md" alt="Teacher Img" />
          </div>
        </div>

        {/* description */}
        <div className="flex flex-col justify-center flex-1 p-4  bg-gray-50 text-justify m-4">
          <h3 className="text-3xl font-bold">মো. খুরশীদ আলম</h3>
          <h3 className="">সহকারী শিক্ষক</h3>
          <h3 className="">বিএ, বিএড, এমএ</h3>
          <p className="my-6  text-gray-600">গত ০৪/০৮/২০২০ইং তারিখ থেকে অত্র বিদ্যালয়ে সহকারী শিক্ষক হিসেবে দায়িত্ব পালন করে আসছেন। তিনি কুমিল্লা জেলার নাঙ্গলকোট উপজেলাস্থ ৯নং আদ্রা দক্ষিণ ইউনিয়নের আটিয়াবাড়ী গ্রামের সম্ভ্রান্ত মুসলিম পরিবারে ১৯৬৮ইং সনে জন্ম গ্রহন করেন। নিজ গ্রামে প্রাথমিক শিক্ষা শেষে ১৯৮৫ইং সনে লাকসাম সরকারি পাইলট উচ্চ বিদ্যালয় থেকে এস.এস.সি,নওয়াব ফয়জুন্নেছা সরকারি কলেজ,লাকসাম থেকে ১৯৮৭ইং সনে এইচ.এস.সি এবং ১৯৮৯ইং সনে বি.এসসি,পাস করেন। অত:পর ফেণী সরকারী টি.টি.কলেজ থেকে ১৯৯৬ইং সনে বি.এড এবং বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় থেকে ২০১১ইং সনে এমএড ডিগ্রী অর্জন করেন। তিনি গত ০১/০১/১৯৯০ইং সনে সাত বাড়ীয়া উচ্চ বিদ্যালয়,নাঙ্গলকোট,কুমিল্লায় বি.এসসি (গণিত) শিক্ষক হিসাবে ১ম চাকুরী জীবন শুরু করেন। ২০০৩ইং সনের ৩০ ডিসেম্বর পর্যন্ত হাতীমারা উচ্চ বিদ্যালয়,মনোহরগঞ্জ,কুমিল্লায় সিনিয়র শিক্ষক হিসাবে কর্মরত ছিলেন। ০১/১২/২০০৩ইং তারিখ থেকে ০৩/০৮/২০২০ইং তারিখ পর্যন্ত সুদীর্ঘ ১৭ বছর লাকসাম পৌর সভার অন্যতম শিক্ষা প্রতিষ্ঠান নবাব ফয়জুন্নেছা ও বদরুন্নেছা যুক্ত উচ্চ বিদ্যালয়ে সহকারী প্রধান শিক্ষক হিসেবে অত্যন্ত সুনামের সাথে দায়িত্ব পালন করেন। এছাড়াও তিনি বিভিন্ন সময়ে চাটিতলা উচ্চ বিদ্যালয়,নাঙ্গলকোট,কুমিল্লা,নাথেরপেটুয়া ফাজিল মাদ্রাসা,ভাকড্ডা উচ্চ বিদ্যালয়,লাকসাম,কুমিল্লায় গণিত শিক্ষক হিসেবে কর্মরত ছিলেন। দেশ-বিদেশের বিভিন্ন প্রতিষ্ঠানে স্বনাম ধন্য এই প্রধান শিক্ষকের ছাত্র/ছাত্রীরা কর্মরত আছেন। উনার বহু ছাত্র-ছাত্রীরা ডাক্তার ইঞ্জিনার সহ শিক্ষা ক্যাডার হওয়ার যোগ্যতা অর্জন করেন। 
          
          
          
          
          </p>

        </div>
      </div>
    </div>
  );
};

export default teacherDetails;