import ClubSidebar from "@/components/shared/ClubSidebar/ClubSidebar";
 
import Image from "next/image";
import logo from "../../../../../public/assests/club/debate_club.png"
import debate1 from "../../../../../public/assests/club/debate1.jpg"
import debate2 from "../../../../../public/assests/club/debate2.jpg"
import debate3 from "../../../../../public/assests/club/debate3.jpg"
import debate4 from "../../../../../public/assests/club/debate4.jpg"
const debate = () => {
    return (
        <>
            <section className=" bg-gray-100  lg:pb-4 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-0">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
                        <ClubSidebar />
                    </div>
                    <div className="grid w-full ">
                        <div className="lg:w-auto lg:mt-2  ">
                            <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                                    Debate Club
                                </h3>
                            </div>
                            {/* Divider  */}
                            <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
                            <section className="lg:w-auto border rounded p-1 md:p-2 lg:p-4 bg-white text-gray-800">
                                <Image src={logo} className="h-[200px] w-[200px] mx-auto" alt="this is logo" />
                                <section className="   text-gray-800">
                                    <div className="container max-w-5xl px-1 md:px-2 lg:px-4 py-12 mx-auto">
                                        <div className="grid gap-4 mx-1 md:mx-2 lg:mx-4 sm:grid-cols-12">
                                            <div className="col-span-12 sm:col-span-4">
                                                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                                                    <h3 className="text-3xl font-semibold">Debate Club</h3>
                                                    <span className="text-sm font-bold tracking-wider uppercase   text-gray-600">Since 2009</span>
                                                </div>
                                            </div>
                                            <div className="relative col-span-12 px-1 md:px-2 lg:px-4 space-y-6 sm:col-span-7 text-justify">
                                                <div className="col-span-12 space-y-12 relative px-1 md:px-2 lg:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">বিতর্ক ক্লাব প্রতিষ্ঠা</h3>
                                                        <time className="text-xs tracking-wide uppercase   text-gray-600">জানুয়ারী ২০০৯</time>
                                                        <p className="mt-3">ডিবেটিং ক্লাব ও শিক্ষার্থীদের সুতার্কিক হিসেবে গড়ে তুলতে ২০০৯ সালে ডিবেটিং ক্লাব প্রতিষ্ঠিত হয়। স্কুল, কলেজ পর্যায়ে বিতার্কিক সদস্য সংখ্যা প্রায় ৪০০ জন। ডিবেটিং বিতার্কিকবৃন্দ আন্তঃস্কুল বিতর্ক প্রতিযোগিতা, বিতর্ক ওয়ার্কশপ, জাতীয় স্কুল ও কলেজ বিতর্ক প্রতিযোগিতায় অংশ গ্রহণ করে আসছে। এযাবত প্রতিষ্ঠানের বিতার্কিকরা বিটিভি জাতীয় স্কুল বিতর্কে ১ম বারেই রানার্স আপ হয়েছে, English Parliamentary Debate Competition ১ম বার অংশ নিয়ে ২য় রাউন্ডে উত্তীর্ণ হয়েছে। সম্প্রতি | সিলেট ক্যাডেট কলেজকে পরাস্থ করেছে। ডিবেটিং ক্লাব বিতার্কিকদের শানিত করতে নিয়মিত অনুশীলনে ব্যাপৃত রাখছে ।</p>
                                                    </div>
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">সভাপতি ও সেক্রেটারী</h3>
                                                        <p className="mt-3">সভাপতি: প্রিন্সিপাল ড মাহবুবর রহমান মোল্লা <br />
                                                        সেক্রেটারি: অনুকূল চন্দ্র মন্ডল</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
                                <section className="py-6 dark:bg-gray-100">
                                    <h2 className="text-2xl font-bold text-center">ছবি সমূহ:</h2>
                                    <div className="container flex flex-col justify-center p-4 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                            <Image src={debate1} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            <Image src={debate2} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            <Image src={debate3} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            {/* <Image src={debate4} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is logo" /> */}
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default debate;