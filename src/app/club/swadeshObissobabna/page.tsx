import ClubSidebar from "@/components/shared/ClubSidebar/ClubSidebar";
import { Divider } from "antd";
import Image from "next/image";
import logo from "../../../../public/assests/club/sodesh.png"
import debate1 from "../../../../public/assests/club/sodesh1.png"
import debate2 from "../../../../public/assests/club/sodesh2.jpg"
import debate3 from "../../../../public/assests/club/sodesh3.jpg"

const swadeshObissobabna = () => {
    return (
        <>
            <section className=" bg-gray-100  lg:py-12 text-gray-800">
                <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
                    <div className="py-5 lg:pr-5">
                        <ClubSidebar />
                    </div>
                    <div className="grid w-full ">
                        <div className="lg:w-auto mt-2  ">
                            <div className="w-full pt-4">
                                <h3 className="text-2xl font-semibold ">
                                    Swadesh O Bissobabna Club
                                </h3>
                            </div>
                            <Divider className="bg-gray-300" />
                            <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">
                                <Image src={logo} className="h-[200px] w-[200px] mx-auto" alt="this is logo" />
                                <section className="   text-gray-800">
                                    <div className="container max-w-5xl px-4 py-12 mx-auto">
                                        <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                            <div className="col-span-12 sm:col-span-4">
                                                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                                                    <h3 className="text-3xl font-semibold">Swadesh O Bissobabna Club</h3>
                                                    <span className="text-sm font-bold tracking-wider uppercase   text-gray-600">Since 2021</span>
                                                </div>
                                            </div>
                                            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-7">
                                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">স্বদেশ ও বিশ্বভাবনা ক্লাব</h3>
                                                        <time className="text-xs tracking-wide uppercase   text-gray-600">২০২১</time>
                                                        <p className="mt-3">বিচিত্র বিশ্বের প্রতি শিক্ষার্থীদের উৎসাহিত করা। রহস্যময় বিজ্ঞানসহ শিপ্প সাহিত্য ও নানা বিষয়ে  বিশ্বের নতুনসব তথ্যের প্রতি তাদের দৃষ্টিকে আকৃষ্ট করে সমকালীন পৃথিবীর উপযুক্ত করে নিজেদের গড়ে তুলতে প্রলুব্ধ করা। জৈবিকভাবে  খন্ডিড সময়সীমায় বেঁচে থাকাই জীবন নয়, জীবন মানে গভীর বিশ্বচেতনা-  শিক্ষার্থীদের কাছে এই বোধ পৌঁছে দেওয়াই উক্ত ক্লাবের উদ্দেশ্য।</p>
                                                    </div>
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">
                                                            সভাপতি</h3>
                                                        <p className="mt-3">প্রিন্সিপাল ড মাহবুবর রহমান মোল্লা <br /></p>
                                                    </div>
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                        <h3 className="text-xl font-semibold tracking-wide">
                                                            সাধারণ সম্পাদক এবং আহ্বান ও প্রচার </h3>
                                                        <p className="mt-3">
                                                            <span className="font-bold">সাধারণ সম্পাদক:</span><br /> মো. মুস্তাফিজুর রহমান(তুহিন), সহকারী অধ্যাপক গণিত বিভাগ ও ইনচার্জ, কলেজ শাখা<br />
                                                            <span className="font-bold">আহ্বান ও প্রচার:</span> আবুবকর গিয়াসুদ্দীন</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <Divider className="bg-gray-300" />
                                <section className="py-6 dark:bg-gray-100">
                                    <h2 className="text-2xl font-bold text-center">ছবি সমূহ:</h2>
                                    <div className="container flex flex-col justify-center p-4 mx-auto">
                                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
                                            <Image src={debate1} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            <Image src={debate2} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
                                            <Image src={debate3} className="object-cover w-full dark:bg-gray-500 aspect-square" alt="this is img" />
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

export default swadeshObissobabna;