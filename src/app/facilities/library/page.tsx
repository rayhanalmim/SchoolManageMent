import { Divider } from "antd";
import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
import Image from "next/image";
import libraryimg from "../../../../public/assests/facilities/library.jpg";

const library = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 lg:pr-5">
            <FacilitiesSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Library
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center ">
                <p className="text-xl text-justify"> বই হচ্ছে জ্ঞানের ভান্ডার তাই প্রতিটি স্কুলে গ্রন্থাগার হচ্ছে জ্ঞান ভান্ডারের একটি স্থান বা উৎস। প্রতিটি স্কুলে লাইব্রেরী থাকা একান্ত প্রয়োজন। বিভিন্ন গল্পের বই, উপন্যাস, কবিতা, মনীষীদের জীবনি, ম্যাগাজিন, সাহিত্য, ধর্মীয় বই ইত্যাদি স্কুলের গ্রন্থাগারে থাকা আবশ্যক। স্কুলে লাইব্রেরী প্রতিটি শিক্ষার্থীকে জ্ঞান আহরণের জন্য নতুন আলোড়ন সৃষ্টি করতে পারে। স্কুল লাইব্রেরী থেকে যেভাবে শিক্ষার জ্ঞান আহরণ করা যায়, তেমনি শিক্ষার্থীরাও জ্ঞান আহরণের জন্য স্কুল লাইব্রেরীতে বিশেষ সময়ে যেতে পারে। <br/><br/>

বই পড়ার মাধ্যমে, তারা নিজেদেরকে নতুন জিনিস, নতুন তথ্য, সমস্যার সমাধান করার নতুন উপায় অর্জনের মাধ্যমগুলো খুজে পায়। আমরা নিয়মিতভাবে লাইব্রেরি ব্যবহার করার জন্য আমাদের ছাত্র/ছাত্রীদের অনুপ্রাণিত করি এবং সপ্তাহে অন্তত একবার লাইব্রেরি পরিদর্শন করাই। </p>

                <Image src={libraryimg} className="h-auto w-auto mt-5 " alt="" />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default library;
