import ClubSidebar from "@/components/shared/ClubSidebar/ClubSidebar";
 
import Image from "next/image";
import sciencelogo from "../../../../../public/assests/club/science.jpg"
import science1 from "../../../../../public/assests/club/science1.jpg"
import science2 from "../../../../../public/assests/club/science2.jpg"
import science3 from "../../../../../public/assests/club/science3.jpg"

const science = () => {
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
                                    Science Club
                                </h3>
                            </div>
                            {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
                            <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">
                                <Image src={sciencelogo} className="h-[200px] w-[200px] mx-auto" alt="this is logo" />
                                <section className="   text-gray-800">
                                    <div className="container max-w-5xl px-4 py-12 mx-auto">
                                        <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                            <div className="col-span-12 sm:col-span-4">
                                                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                                                    <h3 className="text-3xl font-semibold">Science Club</h3>
                                                    <span className="text-sm font-bold tracking-wider uppercase   text-gray-600">Since 2013</span>
                                                </div>
                                            </div>
                                            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-7">
                                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">বিজ্ঞান ক্লাব প্রতিষ্ঠা</h3>
                                                        <time className="text-xs tracking-wide uppercase   text-gray-600">২০১৩</time>
                                                        <p className="mt-3">২০১৩ সালে প্রতিষ্ঠিত হয় বিজ্ঞান ক্লাব। শিক্ষার্থীর বিজ্ঞান চিন্তা বিকাশে সহায়ক ভূমিকা পালন করবে এবং দেশ ও দেশের বাইরের বৈজ্ঞানিক উদ্ভাবন-আবিস্কার ও গবেষনার প্রতি আগ্রহ সৃষ্টি করবে। এযাবদ প্রাপ্ত পুরষ্কারের সংখ্যা একশতের অধিক।</p>
                                                    </div>
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">সভাপতি ও সেক্রেটারী</h3>
                                                        <p className="mt-3">সভাপতি: প্রিন্সিপাল ড মাহবুবর রহমান মোল্লা <br />
                                                        সেক্রেটারি: মো. সোহরাব হোসেন, সহকারী প্রধান শিক্ষক, দিবা শাখা</p>
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
                                        <Image src={science1} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            <Image src={science2} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            <Image src={science3} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            {/* <Image src={debate4} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" /> */}
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

export default science;