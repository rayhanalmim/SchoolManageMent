import ClubSidebar from "@/components/shared/ClubSidebar/ClubSidebar";
 
import scoutimg from "../../../../../public/assests/club/SCOUT.png";
import president from "../../../../../public/assests/club/president.jpg";
import scout1 from "../../../../../public/assests/club/scout1.png";
import scout2 from "../../../../../public/assests/club/scout2.png";
import scout3 from "../../../../../public/assests/club/scout3.png";
import scout4 from "../../../../../public/assests/club/scout4.png";
import scout5 from "../../../../../public/assests/club/scout5.jpg";
import Image from "next/image";

const scout = () => {
    return (
        <>
            <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
                <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
                    <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
                        <ClubSidebar />
                    </div>
                    <div className="grid w-full px-2 md:px-0 lg:px-0">
                        <div className="lg:w-auto lg:mt-2  ">
                            <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                                    Scout Club
                                </h3>
                            </div>
                            {/* Divider  */}
                            <div className="w-full  border-t border-gray-300 my-3 md:my-6 lg:my-6"></div>
                            <section className=" lg:w-auto border rounded p-2 bg-white text-gray-800 text-justify">
                                <div className="container  mx-auto lg:space-y-24 px-2 lg:px-8 max-w-auto lg:max-w-7xl">
                                    <div>
                                        <Image
                                            src={scoutimg}
                                            className="h-[200px] w-[200px] mx-auto "
                                            alt="img"
                                        />
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl  text-gray-900 text-center mt-5">SoftyEdu স্কাউট গ্রুপ</h3>
                                        <p className="mt-3 lg:text-lg  text-gray-600">স্কাউটিং-এর মূল লক্ষ্য হচ্ছে শিশু, কিশোর-কিশোরীদের শারীরিক, মানসিক, নৈতিক, বুদ্ধিবৃত্তিক এবং সামাজিক গুণাবলী উন্নয়নের মাধ্যমে তাদেরকে পরিবার, সমাজ, দেশ তথা বিশ্বের সুনাগরিক হিসেবে গড়ে তোলা। সামসুল হক খান স্কুল অ্যান্ড কলেজের শিক্ষার্থীদের জন্য প্রাইমারি শাখায় কাবিং, মাধ্যমিক শাখায় স্কাউটিং ও উচ্চমাধ্যমিক শাখায় রোভারিং কার্যক্রম চালু রয়েছে। এ প্রতিষ্ঠানের অধিকাংশ শিক্ষক ও শিক্ষার্থীরা স্কাউট আন্দোলনের সাথে সম্পৃক্ত রয়েছে। শিক্ষার্থীদেরকে আত্মনির্ভরশীল, চরিত্রবান, যোগ্য ও দেশ প্রেমিক নাগরিক হিসেবে গড়ে তুলতে স্কাউটিং একটি গুরুত্বপূর্ণ সহশিক্ষা কার্যক্রম। সামসুল হক খান স্কুল অ্যান্ড কলেজ শিক্ষার্থীরা স্কাউটিং এ ইতোমধ্যে জাতীয় জাম্বুরী, জাতীয় রোভার মুট, জাতীয় কাব ক্যাম্পুরী, জাতীয় কমডেকা, ডে ক্যাম্প ও আন্তর্জাতিক জাম্বুরীতে অংশগ্রহণ করে আসছে।
                                            এছাড়াও স্কাউট শিক্ষার্থীরা দেশ বিদেশের বিভিন্ন স্কাউটিং প্রশিক্ষণ ক্যাম্প, ওয়ার্ল্ড স্কাউট জাম্বুরী ও প্রতিযোগিতামূলক অনুষ্ঠানে অংশগ্রহণ করে প্রতিষ্ঠান ও দেশের সুনাম বৃদ্ধি করেছে। </p>
                                    </div>
                                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center text-justify">
                                        <div>
                                            <div className="mt-12 space-y-12">
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-600  text-gray-50">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-lg leading-6  text-gray-900 font-bold">প্রতিষ্ঠাকাল: ২০০১ খ্রি.</h4>
                                                        <p className="mt-2  text-gray-600 text-sm md:text-md lg:text-base">স্কাউট গ্রুপ ২০০১ সালের ১৮ ফেব্রুয়ারি বাংলাদেশ স্কাউটস, ঢাকা মেট্রোপলিটনের ৩৮০ নং দল হিসেবে বাংলাদেশ স্কাউটস, ঢাকা অঞ্চলের রেজিস্টারভুক্ত হয়।</p>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-600  text-gray-50">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-lg font-bold leading-6  text-gray-900">সভাপতি ও সম্পাদক</h4>
                                                        <p className="mt-2  text-gray-600 text-sm md:text-md lg:text-base">সভাপতি : প্রিন্সিপাল মো. মাহবুবর রহমান মোল্লা<br />
                                                            সম্পাদক: মো. ইসমাইল হোসেন জাবেদ</p>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-600  text-gray-50">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-lg font-bold leading-6  text-gray-900">স্কাউট শাখা</h4>
                                                        <p className="mt-2 text-gray-600 text-sm md:text-md lg:text-base">শাখা: কাব স্কাউট,  স্কাউট,  রোভার স্কাউট</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                                            <Image
                                                src={president}
                                                className="object-cover h-auto mx-auto bg-center rounded-lg shadow-lg  bg-gray-500"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                    <section className="text-gray-800">

                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl  text-gray-900 text-center mt-3 md:mt-3 lg:mt-0">আমাদের অর্জন</h3>
                                        <p className="mt-3 text-sm md:text-md lg:text-lg  text-gray-600">সামসুল হক খান স্কুল অ্যান্ড কলেজ স্কাউট গ্রুপের ৯২ জন স্কাউট ও স্কাউট নেতা বিশ্বের ৯টি দেশে বিভিন্ন স্কাউট প্রোগ্রামে বাংলাদেশ স্কাউটসের প্রতিনিধিত্ব করার গৌরব অর্জন করেছেন। স্কাউট শিক্ষার্থীদের শারীরিক, মানসিক ও আধ্যাত্মিকভাবে গড়ে তোলার লক্ষ্যে ২০ বছর ধরে গ্রুপ পর্যায়ে ৫ দিন ব্যাপী গ্রুপ ক্যাম্পের আয়োজন করা হয়ে থাকে। এছাড়া প্রতি বছর সমাজ উন্নয়ন ও সেবামূলক কার্যক্রম সম্পাদন করে, যেমন: ফ্রি রক্তের গ্রুপিং কার্যক্রম, পরিষ্কার পরিচ্ছন্নতা অভিযান, শীতবস্ত্র বিতরণ, ডেঙ্গু সচেতনতা উদ্বুদ্ধকরণ, শিশু স্বাস্থ্য পরিচর্যা, করোনা মহামারীতে বিভিন্ন সময়ে দুস্থ্য অসহায় মানুষদের খাদ্য সামগ্রী, হ্যান্ড স্যানিটাইজেশন এবং মাস্ক বিতরন করে। ইতোমধ্যে সামসুল হক খান স্কুল অ্যান্ড কলেজ স্কাউট গ্রুপ থেকে ৬৪ জন কাব স্কাউট শিক্ষার্থী শাপলা অ্যাওয়ার্ড (কাব স্কাউটিংয়ের সর্বোচ্চ অ্যাওয়ার্ড); ১৪৫ জন স্কাউট শিক্ষার্থী প্রেসিডেন্ট’স স্কাউট অ্যাওয়ার্ড (স্কাউটিংয়ের সর্বোচ্চ অ্যাওয়ার্ড/স্বীকৃতি) এবং ১৫২ জন শিক্ষার্থী সমাজ উন্নয়ন অ্যাওয়ার্ড (দ্বিতীয় সর্বোচ্চ অ্যাওয়ার্ড) অর্জন করেছে। গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয় কর্তৃক আয়োজিত জাতীয় শিক্ষা সপ্তাহ ২০১৭; ২০১৮; ২০১৯ ;২০২২; ২০২৩ সালে বিচারক মন্ডলীদের সার্বিক বিবেচনায় সামসুল হক খান স্কুল অ্যান্ড কলেজ স্কাউট গ্রুপকে দেশের শ্রেষ্ঠ স্কাউট গ্রুপ হিসেবে নির্বাচন করে শ্রেষ্ঠত্বের মর্যাদা প্রদান করেন। এসব অর্জন সামসুল হক খান স্কুল অ্যান্ড কলেজ স্কাউট গ্রুপকে দিয়েছে বাংলাদেশ স্কাউটস এর অন্যতম সেরা স্কাউট গ্রুপের মর্যাদা।</p>
                                        <div className="container max-w-5xl px-1 md:px-2 lg:px-4 py-4 mx-auto">
                                            <div className="grid gap-4  lg:mx-4 sm:grid-cols-12">
                                                <div className="col-span-12 sm:col-span-5">
                                                    <div className="text-center sm:text-left lg:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
                                                        <h3 className="text-2xl lg:text-3xl font-semibold">একনজরে আমাদের অর্জন</h3>
                                                        {/* <span className="text-sm font-bold tracking-wider uppercase   text-gray-600">Vestibulum diam nunc</span> */}
                                                    </div>
                                                </div>
                                                <div className="relative col-span-12 px-1 md:px-2 lg:px-4 space-y-6 sm:col-span-7">
                                                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-lg md:text-xl lg:text-xl font-semibold tracking-wide">২০২১ সালে জাতীয় অ্যাওয়ার্ড: </h3>
                                                            {/* <time className="text-xs tracking-wide uppercase   text-gray-600">Dec 2020</time> */}
                                                            <p className="mt-2  text-gray-600 text-sm md:text-md lg:text-base">
                                                                <span className="font-bold"> মেডেল অব মেরিট:<br /></span>
                                                                স্কাউটার মোঃ আব্দুল মতিন, সহ-সভাপতি, <br />
                                                                স্কাউটার সালমা কবির, কাব স্কাউট লিডার,<br />
                                                                স্কাউটার আতিকুর রহমান, কাব স্কাউট লিডার,<br />
                                                                স্কাউটার কামরুন নাহার নিপা, গার্ল-ইন স্কাউট লিডার, <br />
                                                                স্কাউটার মো. তানভির রহমান, স্কাউট লিডার, <br />

                                                                <span className="font-bold"> ন্যাশনাল সার্টিফিকেট:<br /></span>

                                                                স্কাউটার মোঃ আলমগীর হোসেন, সদস্য গ্রুপ কমিটি,<br />
                                                                স্কাউটার ইখতিয়ার উদ্দিন বিশ্বাস, স্কাউট লিডার,<br />

                                                                <span className="font-bold">ন্যাশনাল সার্ভিস অ্যাওয়ার্ড:<br /></span>
                                                                স্কাউটার মোঃ ইসমাইল হোসেন (উডব্যাজার), গ্রুপ স্কাউট লিডার</p>
                                                        </div>
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-xl font-semibold tracking-wide">২০২০ সালে জাতীয় অ্যাওয়ার্ড:</h3>

                                                            {/* <time className="text-xs tracking-wide uppercase   text-gray-600">Jul 2019</time> */}
                                                            <p className="mt-2  text-gray-600 text-sm md:text-md lg:text-lg">
                                                                <span className="font-bold">বার টু দি মেডেল অব মেরিট:<br /></span>
                                                                স্কাউটার মোঃ ইসমাইল হোসেন (উডব্যাজার), গ্রুপ স্কাউট লিডার, <br />

                                                                <span className="font-bold">ন্যাশনাল সার্টিফিকেট:<br /></span>
                                                                স্কাউটার শংকরী রানী সাহা (উডব্যাজার), স্কাউট লিডার,</p>
                                                        </div>
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-xl font-semibold tracking-wide">২০১৭ সালে জাতীয় অ্যাওয়ার্ড:</h3>
                                                            <p className="mt-3 text-sm md:text-md lg:text-lg">
                                                                <span className="font-bold"> সিএনসি’স অ্যাওয়ার্ড</span><br />
                                                                স্কাউটার মো. মাহবুবুর রহমান মোল্লা (উডব্যাজার), প্রিন্সিপাল<br />

                                                                <span className="font-bold">মেডেল অব মেরিট</span><br />
                                                                স্কাউটার মোঃ ইসমাইল হোসেন (উডব্যাজার), গ্রুপ স্কাউট লিডার<br />

                                                                <span className="font-bold"> ন্যাশনাল সার্টিফিকেট</span><br />
                                                                স্কাউটার মোঃ সোহরাব হোসেন, সহ-সভাপতি<br />
                                                                স্কাউটার মো: নুরুল আমিন (উডব্যাজার) কাব স্কাউট লিডার<br />
                                                                স্কাউটার মো. তানভির রহমান, স্কাউট লিডার</p>
                                                        </div>
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-xl font-semibold tracking-wide">২০১৫ সালে জাতীয় অ্যাওয়ার্ড:</h3>
                                                            <p className="mt-3 text-sm md:text-md lg:text-lg">
                                                                <span className="font-bold">সভাপতি অ্যাওয়ার্ড</span><br />
                                                                স্কাউটার মো. মাহবুবুর রহমান মোল্লা, প্রিন্সিপাল, <br />

                                                                <span className="font-bold">ন্যাশনাল সার্টিফিকেট</span><br />
                                                                স্কাউটার মোঃ ইসমাইল হোসেন (উডব্যাজার), গ্রুপ স্কাউট লিডার

                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-xl font-semibold tracking-wide"> শাপলা কাব অ্যাওয়ার্ড:</h3>
                                                            <p className="mt-3 text-sm md:text-md lg:text-lg">


                                                                ২০১৩ সালে ০৬ জন<br />
                                                                ২০১৪ সালে ০১ জন<br />
                                                                ২০১৬ সালে ১২ জন<br />
                                                                ২০১৭ সালে ০৮ জন<br />
                                                                ২০১৮ সালে ০২ জন<br />
                                                                ২০১৯ সালে ০৪ জন<br />
                                                                ২০২০ সালে ১৬ জন<br />
                                                                ২০২১ সালে ১৫ জন

                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-xl font-semibold tracking-wide">প্রেসিডেন্ট’স স্কাউট অ্যাওয়ার্ড:</h3>
                                                            <p className="mt-3 text-sm md:text-md lg:text-lg">
                                                                ২০১১ সালে ০৩ জন<br />
                                                                ২০১২ সালে ০৬ জন<br />
                                                                ২০১৩ সালে ০৭ জন<br />
                                                                ২০১৪ সালে ১৪ জন<br />
                                                                ২০১৫ সালে ১৬ জন<br />
                                                                ২০১৬ সালে ২৮ জন<br />
                                                                ২০১৭ সালে ০৯ জন<br />
                                                                ২০১৮ সালে ১৮ জন<br />
                                                                ২০১৯ সালে ৩৫ জন<br />
                                                                ২০২০ সালে ০৯ জন

                                                            </p>
                                                        </div>
                                                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                                                            <h3 className="text-xl font-semibold tracking-wide">সমাজ উন্নয়ন অ্যাওয়ার্ড:</h3>
                                                            <p className="mt-3 text-sm md:text-md lg:text-lg">
                                                                ২০১৫ সালে ১৮ জন<br />
                                                                ২০১৬ সালে ১৬ জন<br />
                                                                ২০১৭ সালে ৪০ জন<br />
                                                                ২০১৮ সালে ৪০ জন<br />
                                                                ২০১৯ সালে ১৩ জন<br />
                                                                ২০২০ সালে ১২ জন<br />
                                                                ২০২১ সালে ১৩জন

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Divider  */}
                                            <div className="w-full  border-t border-gray-300 h-[.5px] my-6"></div>
                                        </div>
                                    </section>
                                </div>
                                {/* Images */}
                                <div  >
                                    <h2 className="text-2xl font-bold text-center">ছবি সমূহ:</h2>
                                    <section className="py-6  text-gray-900">
                                        <div className="container grid grid-cols-2 gap-1 md:gap-2 lg:gap-4 p-1 md:p-2 lg:p-4 mx-auto md:grid-cols-4">

                                            <Image src={scout5} className="object-cover h-auto mx-auto bg-center rounded-lg shadow-lg  bg-gray-500 w-full col-span-2 row-span-2   lg:min-h-96 md:col-start-3 md:row-start-1   aspect-square" alt="img" />
                                            <Image src={scout1} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout2} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout3} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout4} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout5} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout1} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout2} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout3} className="w-full h-full rounded shadow-sm lg:min-h-48  bg-gray-500 aspect-square" alt="img" />
                                            <Image src={scout4} className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:min-h-96 md:col-start-1 md:row-start-3  bg-gray-500 aspect-square" alt="img" />
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default scout;