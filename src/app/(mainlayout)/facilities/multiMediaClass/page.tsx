import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
 
import Image from "next/image";
import multimidea from "../../../../../public/assests/facilities/multimidea.jpg";

const multiMediaClass = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <FacilitiesSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Multi-Media Class
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center ">
                <p className="lg:text-xl text-justify">মাল্টিমিডিয়ার মাধ্যমে শিখন ব্যবস্থা হচ্ছে সহজ, সাবলিল, আকর্ষণীয়, দীর্ঘস্থায়ী ও সহজবোধ্য। প্রতিটি বিষয়ে প্রতিটি পিরিয়ডের বিষয়বস্তু অনুযায়ী নির্ধারিত শিখন চিহ্নিত করে শিক্ষকগণ ডিজিটাল কণ্টেণ্ট প্রস্তুত করে তা প্রদর্শনের মাধ্যমে শিখনফল অর্জনে সমর্থ হচ্ছেন, যা গতানুগতিক শিখন ব্যবস্থায় ছিল সময় স্বাপেক্ষ এবং কষ্টসাধ্য। <br /><br />

                  বর্তমানে মাল্টিমিডিয়া ক্লাশরুমে আইসিটি ব্যবহারে শিখন-শেখানো কার্যাবলী পরিচালনায় শিক্ষকদের আগ্রহ বৃদ্ধি পেয়েছে। এখন পূর্বের ন্যায় দীর্ঘ সময় ব্যাপি পাঠ পরিচালনা প্রণয়ন ও উপকরণ তৈরির বাড়তি চাপ না থাকায় শিক্ষকগণ স্বচ্ছন্দে নিজ দায়িত্ব পালন করতে পারছেন।</p>

                <Image src={multimidea} className="h-auto w-auto mt-5 " alt="" />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default multiMediaClass;
