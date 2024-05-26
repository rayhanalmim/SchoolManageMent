import PrincipleSidebar from "@/components/shared/Corner/PrincipleSidebar/PrincipleSidebar";
import Image from "next/image";
import headteacher from "../../../../../../public/assests/teacher/teachers-1.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";


const principle = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <PrincipleSidebar />
          </div>
          <div className="grid w-full px-2 md:px-0 lg:px-0">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Principle Bio
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <section className="p-0 lg:p-2  text-gray-800 ">
                  <div className="container mx-auto space-y-8 text-justify">
                    <div className="rounded w-full py-5 shadow">
                      <Image src={headteacher} className="object-cover mx-auto mb-4 bg-center rounded px-3" alt="img" />
                      <div className="flex flex-col items-center">
                        <h4 className="text-xl font-semibold">মো. খুরশিদ আলম</h4>
                        <p className="text-sm text-gray-600">প্রধান শিক্ষক</p>
                        <div className="flex gap-1 mt-1 ">
                            <Link rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600">
                            <FaFacebookF className="w-4 h-4"/>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 ">
                              <FaXTwitter className="w-4 h-4"/>
                            </Link>
                            <Link rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600 ">              
                            <FaLinkedinIn className="w-4 h-4"/>                
                            </Link>
                          </div>
                      </div>
                    </div>

                    <p className="text-sm md:text-base lg:text-base">মো. খুরশিদ আলম, বিএসসি, বিএড, এমএড, প্রধান শিক্ষক। তিনি গত ০৪/০৮/২০২০ইং তারিখে অত্র বিদ্যালয়ে প্রধান শিক্ষক হিসেবে যোগদান করেন। তিনি কুমিল্লা জেলার নাঙ্গলকোট উপজেলাস্থ  ৯নং আদ্রা দক্ষিণ ইউনিয়নের আটিয়াবাড়ী গ্রামের সম্ভ্রান্ত মুসলিম পরিবারে ১৯৬৮ইং সনে জন্ম গ্রহন করেন। নিজ গ্রামে প্রাথমিক শিক্ষা শেষে ১৯৮৫ইং সনে লাকসাম সরকারি পাইলট উচ্চ বিদ্যালয় থেকে এস.এস.সি,নওয়াব ফয়জুন্নেছা সরকারি কলেজ,লাকসাম থেকে ১৯৮৭ইং সনে এইচ.এস.সি এবং ১৯৮৯ইং সনে বি.এসসি,পাস করেন। অত:পর ফেণী সরকারী টি.টি.কলেজ থেকে ১৯৯৬ইং সনে বি.এড এবং বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয় থেকে ২০১১ইং সনে এমএড ডিগ্রী অর্জন করেন। তিনি গত ০১/০১/১৯৯০ইং সনে সাত বাড়ীয়া উচ্চ বিদ্যালয়,নাঙ্গলকোট,কুমিল্লায় বি.এসসি (গণিত) শিক্ষক হিসাবে ১ম চাকুরী জীবন শুরু করেন। ২০০৩ইং সনের ৩০ ডিসেম্বর পর্যন্ত হাতীমারা উচ্চ বিদ্যালয়,মনোহরগঞ্জ,কুমিল্লায় সিনিয়র শিক্ষক হিসাবে কর্মরত ছিলেন। ০১/১২/২০০৩ইং তারিখ থেকে ০৩/০৮/২০২০ইং তারিখ পর্যন্ত সুদীর্ঘ ১৭ বছর লাকসাম পৌর সভার অন্যতম শিক্ষা প্রতিষ্ঠান নবাব ফয়জুন্নেছা ও বদরুন্নেছা যুক্ত উচ্চ বিদ্যালয়ে সহকারী প্রধান শিক্ষক হিসেবে অত্যন্ত সুনামের সাথে দায়িত্ব পালন করেন। এছাড়াও তিনি বিভিন্ন সময়ে চাটিতলা উচ্চ বিদ্যালয়,নাঙ্গলকোট,কুমিল্লা,নাথেরপেটুয়া ফাজিল মাদ্রাসা,ভাকড্ডা উচ্চ বিদ্যালয়,লাকসাম,কুমিল্লায় গণিত শিক্ষক হিসেবে কর্মরত ছিলেন। দেশ-বিদেশের বিভিন্ন প্রতিষ্ঠানে স্বনাম ধন্য এই প্রধান শিক্ষকের ছাত্র/ছাত্রীরা কর্মরত আছেন। উনার বহু ছাত্র-ছাত্রীরা ডাক্তার ইঞ্জিনার সহ শিক্ষা ক্যাডার হওয়ার যোগ্যতা অর্জন করেন।</p>
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

export default principle;