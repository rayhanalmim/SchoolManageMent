import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
 
import Image from "next/image";
import qip  from "../../../../../public/assests/facilities/bulk-sms-service.jpg";

const qipSMS = () => {
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
                  QIP SMS
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center">
                <p className="text-md md:text-lg lg:text-2xl text-justify my-2 md:my-5 lg:my-10">Quick Information Provider SMS Service </p>
                <h2 className="lg:text-xl text-justify">
                  শিক্ষার্থীদের ও তাদের অভিভাবকদের  উদ্দেশ্যে প্রতিষ্ঠানের তাৎক্ষণিক যাবতীয় তথ্য পৌঁছে দেওয়া হয় মোবাইলের মেসেজ সার্ভিসের মাধ্যমে।  এই মেসেজ  সেবা কুইক ইনফরমেশন প্রোভাইডার নামে অভিহিত। কিউইপি শিক্ষার্থীর অনুপস্থিতির তথ্য, উত্তরপত্র বাসায় পাঠানোর তথ্য, পরীক্ষার ফল প্রকাশ ও অভিভাবককে আমন্ত্রণের তথ্য, ধর্মীয় ও সামাজিক উৎসব উপলক্ষে শিক্ষার্থীদের শুভেচ্ছা জ্ঞাপন ও প্রতিষ্ঠানের সাময়িক ও দীর্ঘ ছুটির তথ্যসহ বিভিন্ন তথ্য কিউইপি শিক্ষার্থী ও অভিভাবকদের  মেসেজের মাধ্যমে দ্রুত পৌঁছে দেয়।

                  কিইপি প্রতিষ্ঠানের শিক্ষা কার্যক্রমে  শৃঙ্খলা আনয়নে বেশ ভূমিকা রাখে। এরফলে অভিভাবক ও শিক্ষার্থীরা উপকৃত হয়।</h2>
                  <Image src={qip} className="h-auto w-auto mt-5 " alt="" />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default qipSMS;
