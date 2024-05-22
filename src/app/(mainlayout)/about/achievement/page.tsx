import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import Image from "next/image";
import award from "../../../../../public/assests/doctorsCare/achievement/1.jpg";
import award1 from "../../../../../public/assests/doctorsCare/achievement/2.jpg";
import award2 from "../../../../../public/assests/doctorsCare/achievement/3.jpg";
// import award from "../../../../../public/assests/achievment/achievement1.jpg";
// import award1 from "../../../../../public/assests/achievment/achievement3.jpg";
// import award2 from "../../../../../public/assests/achievment/achievement4.jpg";

const achievement = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Achievement
                </h3>
              </div>
              
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <section className="p-0 lg:p-2  text-gray-800 ">
                  <div className="container mx-auto space-y-8 text-justify">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row gap-2">

                      <Image src={award} className="w-[450px] h-auto md:h-[300px] lg:h-[300px] bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">একুশে পদক - ২০২৩</h3>
                        <p className="text-sm md:text-base lg:text-base my-2 md:my-3 lg:my-6  text-gray-600">একুশে পদক বাংলাদেশের একটি জাতীয় এবং দ্বিতীয় সর্বোচ্চ বেসামরিক পুরস্কার। বাংলাদেশের বিশিষ্ট ভাষাসৈনিক, ভাষাবিদ, সাহিত্যিক, শিল্পী, শিক্ষাবিদ, গবেষক, সাংবাদিক, অর্থনীতিবিদ, দারিদ্র্য বিমোচনে অবদানকারী, সামাজিক ব্যক্তিত্ব ও প্রতিষ্ঠানকে জাতীয় পর্যায়ে অনন্য অবদানের স্বীকৃতি প্রদানের উদ্দেশ্যে ১৯৭৬ সাল থেকে একুশে পদক প্রদান করা হচ্ছে। ভাষা আন্দোলনের শহীদদের স্মরণে ১৯৭৬ সালে এই পদকের প্রচলন করা হয়। ২০১২ সাল পর্যন্ত ৩৬১ জন গুণী ব্যক্তি ও ২টি প্রতিষ্ঠানকে একুশে পদক প্রদান করা হয়েছে।</p>

                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse gap-2">
                      <Image src={award1} className="w-[450px] h-auto md:h-[300px] lg:h-[300px] bg-gray-500 aspect-video rounded-r" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">বেগম রোকেয়া পদক - ২০২২</h3>
                        <p className="text-sm md:text-base lg:text-base my-2 md:my-3 lg:my-6  text-gray-600">বেগম রোকেয়া পদক নারী জাগরণের ক্ষেত্রে বেগম রোকেয়ার অবিস্মরণীয় অবদান স্বীকৃতি উল্লেখ করে বাংলাদেশ সরকারের একটি রাষ্ট্রীয় পদক। প্রতিবছর ডিসেম্বরের ৯ তারিখ বেগম রোকেয়ার জন্ম ও মৃত্যুবার্ষিকীতে সরকারি ভাবে এই পদক প্রদান করা হয়।</p>

                      </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row gap-2">
                      <Image src={award2} className="w-[450px] h-auto md:h-[300px] lg:h-[300px] bg-gray-500 aspect-video rounded-l" alt="" />
                      <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">বাংলা একাডেমি পুরষ্কার - ২০২১</h3>
                        <p className="text-sm md:text-base lg:text-base my-2 md:my-3 lg:my-6  text-gray-600">বাংলা একাডেমি সাহিত্য পুরস্কার ১৯৬০ সালে প্রবর্তিত একটি বাৎসরিক সাহিত্য পুরস্কার। বাংলা সাহিত্যের ক্ষেত্রে গুরুত্বপূর্ণ অবদানের জন্য এই পুরস্কার প্রদান করা হয়। ১৯৮৪ সাল পর্যন্ত বিভিন্ন শাখায় বছরে ৯ জনকে এই পুরস্কার প্রদান করা হয়। ১৯৮৬ খ্রিষ্টাব্দ থেকে বছরে ২ জনকে এই পুরস্কার প্রদানের নিয়ম করা হয়। ২০০৯ খ্রিষ্টাব্দ থেকে চারটি শাখায় পুরস্কার দেয়া শুরু হয়। ১৯৮৫, ১৯৯৭ এবং ২০০০ খ্রিষ্টাব্দ- এই তিনবার এই পুরস্কার দেওয়া হয়নি।</p>
                      </div>
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

export default achievement;
