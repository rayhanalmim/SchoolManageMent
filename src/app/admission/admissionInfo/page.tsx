import AdmissionSidebar from "@/components/shared/AdmissionSidebar/AdmissionSidebar";
import { Divider } from "antd";
import message from './../../administration/message/page';

const admissionInfo = () => {
    return (
        <>
            <section className=" bg-gray-100  lg:py-12 text-gray-800">
                <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
                    <div className="py-5 px-3 lg:px-0 lg:pr-5">
                        <AdmissionSidebar />
                    </div>
                    <div className="grid w-full">
                        <div className="lg:w-auto lg:mt-2">
                            <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                                    Admission Info
                                </h3>
                            </div>
                            <Divider className="bg-gray-300" />
                            <section className="lg:w-auto text-gray-800 space-y-4 px-3 md:px-0 lg:px-0">
                                1. welcome message
                                2. admission requirement and process
                                4. admission Deadlines
                                5. contact for admission

                                <div>
                                    <h1>Welcome Message</h1>
                                    <p>SfotyEdu স্কুলে ভর্তি কার্যক্রমে আপনাকে স্বাগতম। </p>
                                    <p>[প্রতিষ্ঠানের নাম] ভর্তিতে স্বাগতম

                                        প্রিয় সম্ভাব্য শিক্ষার্থীরা,

                                        [প্রতিষ্ঠানের নাম] এর ভর্তি পোর্টালে স্বাগতম! আমরা রোমাঞ্চিত যে আপনি আমাদের পণ্ডিত, উদ্ভাবক এবং নেতাদের প্রাণবন্ত এবং বৈচিত্র্যময় সম্প্রদায়ে যোগদানের কথা বিবেচনা করছেন।

                                        [প্রতিষ্ঠানের নাম]-এ, আমরা একাডেমিক উৎকর্ষতা বৃদ্ধি, সৃজনশীলতা লালন এবং বিশ্বে ইতিবাচক প্রভাব ফেলতে ব্যক্তিদের ক্ষমতায়নের জন্য প্রতিশ্রুতিবদ্ধ। আপনি আপনার স্নাতক যাত্রা শুরু করছেন, উন্নত অধ্যয়ন করছেন বা পেশাদার বিকাশের সুযোগ খুঁজছেন, আমরা একটি সহায়ক এবং গতিশীল পরিবেশ অফার করি যেখানে আপনি উন্নতি করতে এবং আপনার আকাঙ্ক্ষাগুলি উপলব্ধি করতে পারেন।

                                        আবেদন প্রক্রিয়ার প্রতিটি ধাপে আপনাকে গাইড করতে এবং আপনার ভবিষ্যত সম্পর্কে অবগত সিদ্ধান্ত নিতে আপনার প্রয়োজনীয় তথ্য ও সংস্থান সরবরাহ করতে আমাদের ভর্তি দল এখানে রয়েছে। আমরা বুঝতে পারি যে সঠিক প্রতিষ্ঠান নির্বাচন করা একটি গুরুত্বপূর্ণ মাইলফলক, এবং আমরা আপনাকে [প্রতিষ্ঠানের নাম] অফার করে এমন সমস্ত কিছু অন্বেষণ করতে সাহায্য করার জন্য নিবেদিত।

                                        আপনি আমাদের ভর্তি তথ্য পৃষ্ঠা নেভিগেট করার সাথে সাথে আপনি আমাদের একাডেমিক প্রোগ্রাম, ভর্তির প্রয়োজনীয়তা, আর্থিক সহায়তার সুযোগ, ক্যাম্পাস জীবন এবং আরও অনেক কিছু সম্পর্কে বিস্তৃত বিবরণ পাবেন। আবেদনের সময়সীমা, প্রোগ্রামের অফার বা ক্যাম্পাসের সুযোগ-সুবিধা সম্পর্কে আপনার প্রশ্ন থাকুক না কেন, আমাদের দল আপনাকে সহায়তা করতে এবং [ইন্সটিটিউশন নেম]-এ আপনার যাত্রা একটি নিরবচ্ছিন্ন এবং ফলপ্রসূ অভিজ্ঞতা নিশ্চিত করতে এখানে রয়েছে।

                                        আমরা আপনাকে আমাদের ভর্তি তথ্য পৃষ্ঠাটি অন্বেষণ করতে, একটি ক্যাম্পাস সফর বা ভার্চুয়াল তথ্য সেশনের সময়সূচী করার জন্য আমন্ত্রণ জানাচ্ছি এবং আপনি কীভাবে [প্রতিষ্ঠানের নাম] সম্প্রদায়ের অংশ হতে পারেন সে সম্পর্কে আরও জানতে আমাদের সাথে সংযোগ করুন৷ আমরা আপনাকে আমাদের ক্যাম্পাসে স্বাগত জানাতে এবং আপনার একাডেমিক এবং ব্যক্তিগত বৃদ্ধির একটি উত্তেজনাপূর্ণ অধ্যায় শুরু করার সাথে সাথে আপনাকে সমর্থন করার জন্য উন্মুখ।

                                        [প্রতিষ্ঠানের নাম] বিবেচনা করার জন্য আপনাকে ধন্যবাদ। আপনি যা করবেন তা দেখার জন্য আমরা অপেক্ষা করতে পারি না!

                                        উষ্ণ শুভেচ্ছা,

                                        [তোমার নাম]
                                        [আপনার শিরোনাম/পদ]
                                        [প্রতিষ্ঠানের নাম]</p>
                                </div>
                                {/* admission info */}
                                <section className="dark:bg-gray-100 dark:text-gray-800">
                                    <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
                                        <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl">Help Center</h1>
                                        <div className="relative mt-6 mb-12">
                                            <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
                                                <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                                                    <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                                    </svg>
                                                </button>
                                            </span>
                                            <input type="search" name="Search" placeholder="Search..." className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                                        </div>
                                        <div className="flex flex-col w-full divide-y sm:flex-row sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                                            <div className="flex flex-col w-full divide-y dark:divide-gray-300">
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Billing</a>
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Support</a>
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Account</a>
                                            </div>
                                            <div className="flex flex-col w-full divide-y dark:divide-gray-300">
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Features</a>
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Contact us</a>
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">My orders</a>
                                            </div>
                                            <div className="hidden w-full divide-y sm:flex-col sm:flex dark:divide-gray-300">
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Enterprise</a>
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Privacy</a>
                                                <a rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Developers</a>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {/* contact info */}
                                <div>
                                    for more queries pls call us -

                                    Name: Md Alauddin
                                    Admisson Author
                                    Phone no- 0123456789
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default admissionInfo;