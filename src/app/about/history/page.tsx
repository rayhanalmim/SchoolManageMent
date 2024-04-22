import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
// import History from "@/components/shared/History/History";
import vision from "../../../../public/assests/binoculars-white1x.png"
import mission from "../../../../public/assests/flag-plain-white.svg"
import teacher from "../../../../public/assests/20112319132256.jpg"
import { Divider } from "antd";
import Image from "next/image";
import AboutCarousel from "@/components/shared/AboutCarousel/AboutCarousel";


const teachers = [
  {
    Name: "Leroy Jenkins",
    Subject: "Bangla",
    img: teacher,
  }, {
    Name: "Leroy Jenkins",
    Subject: "English",
    img: teacher,
  }, {
    Name: "Leroy Jenkins",
    Subject: "Math",
    img: teacher,
  }, {
    Name: "Leroy Jenkins",
    Subject: "Physics",
    img: teacher,
  }, {
    Name: "Leroy Jenkins",
    Subject: "Chemistry",
    img: teacher,
  }, {
    Name: "Leroy Jenkins",
    Subject: "Biology",
    img: teacher,
  },

]


const history = () => {
  return (
    <>
      <Header />
      <section className=" bg-gray-100  py-20 text-gray-800">
        <div className="w-[1260px] mx-auto grid grid-cols-12 gap-14   mt-10 px-20">
          <div className="p-5 col-span-3">

            <AboutSidebar />
          </div>
          <div className="grid w-full col-span-9">
            <div className="lg:w-auto pb-5  ">
              <div className="w-64 pt-5">
                <h3 className="text-2xl font-semibold py-4">
                  History
                </h3>
              </div>
              <div className="lg:w-auto border rounded p-4 bg-white ">
                <h1 className="justify-center text-center font-bold text-xl lg:text-2xl py-3 ">
                  ডক্টরস কেয়ার মডেল স্কুল এর ইতিবৃত্ত
                </h1>
                {/* <Image src={schoolImg} className="h-auto w-auto rounded" alt="img" /> */}

                <h2 className="mx-4 lg:mx-0 text-justify space-y-4">
                  দেশসেরা ডক্টরস কেয়ার মডেল স্কুল মাতুয়াইলবাসীর আগ্রহ ও দাবির প্রেক্ষিতে
                  বিশিষ্ট সমাজহিতৈষী ও বিদ্যোৎসাহী আলহাজ্ব সামসুল হক খানের উদ্যোগে ১৯৮৯
                  খ্রি. প্রতিষ্ঠিত হয়। প্রতিষ্ঠানের আত্মপ্রকাশ ঘটে সামসুল হক খান জুনিয়র
                  হাইস্কুল হিসেবে এবং সীমিত সংখ্যক শিক্ষার্থী ও শিক্ষক নিয়ে। ১৯৯৩ সালে
                  প্রতিষ্ঠান সরকারি স্বীকৃতি লাভ করে, অতঃপর পূর্ণাঙ্গ হাইস্কুলে পরিণত হয়ে
                  ওঠে। নাম ধারণ করে সামসুল হক খান উচ্চ মাধ্যমিক বিদ্যালয়। ১৯৯৫ সালে
                  এমপিওভুক্ত হয় ও প্রথমবারের মতো এসএসসি পরীক্ষায় অবতীর্ণ হয়। ২০০৩ সালে
                  সংযুক্ত হয় মেয়েদের জন্য কলেজ শাখা। আর তখন থেকেই প্রতিষ্ঠানের নতুন নামকরণ
                  সামসুল হক খান স্কুল অ্যান্ড কলেজ। প্রতিষ্ঠানের সর্বশেষ শাখা ইংলিশ ভার্সন
                  উন্মুক্ত হয় ২০১৪ সালে।
                  <br /> <br />

                  {/* সহকারী প্রধান শিক্ষক মো. সোহরাব
          হোসেন বালকদের দিবা শাখা ও সহকারী প্রধান শিক্ষক মো. আব্দুল মতীন বালিকাদের
          প্রভাতি শাখার তত্ত্বাবধান ও পরিচালনার দায়িত্বে নিযুক্ত। ইংলিশ ভার্সনের
          ইনচার্জ মো.আলমগীর হোসেন। কলেজ শাখার ইনচার্জের দায়িত্বে নিযুক্ত আছে মো.
          মুস্তাফিজুর রহমান(তুহিন), সহকারী অধ্যাপক, গণিত বিভাগ। সামসুল হক খান
          স্কুল অ্যান্ড কলেজ সহশিক্ষা বিনোদনে দেশের অন্যতম অগ্রগামী
          শিক্ষাপ্রতিষ্ঠান। স্কাউট গ্রুপসহ ডজন খানেক ক্লাব বিদ্যমান। সামসুল হক খান
          স্কুল অ্যান্ড কলেজ স্কাউট গ্রুপ একটি সাড়া জাগানো স্কাউট সংগঠন। এছাড়া
          ইংলিশ ল্যাঙ্গুয়েজ ক্লাব, বিজ্ঞান ক্লাব, আর্ট অ্যান্ড কালচারাল ক্লাব,
          ডিবেট ক্লাব, স্বদেশ ও বিশ্বভাবনা ক্লাব উল্লেখযোগ্য। শিক্ষার্থীদের মানসিক
          বিকাশে ক্লাবগুলো অবদান রাখছে। <br />
          <br />
          প্রতিষ্ঠানের প্রধান কর্ণধার প্রিন্সিপাল মো. মাহবুবুর রহমান মোল্লা। শুরু
          থেকেই তিনি প্রতিষ্ঠান প্রধান হিসেবে নিযুক্ত আছেন। তাঁর দূরদৃষ্টি ও
          তীক্ষ্ণধী প্রতিষ্ঠানকে যথাসম্ভব দ্রুত বিস্তার ও বিকশিত করেছে। মো.
          মাহবুবুর রহমান মোল্লা ডেমরা রোড সংলগ্ন মাতুয়াইলে প্রতিষ্ঠিত ড. মাহবুবুর
          রহমান মোল্লা কলেজের প্রতিষ্ঠাতা ও চেয়ারম্যান, মাননীয় প্রধানমন্ত্রীর
          শিক্ষা সহায়তা ট্রাস্টি বোর্ডের সদস্য ও উত্তর কোরিয়ার বৈশ্বিক শান্তি মঞ্চ
          এইচডব্লিউপিএল এর অ্যাম্বাসেডর। প্রতিষ্ঠানের পাঠ প্রক্রিয়া চারটি পর্যায়ে
          বিভক্ত। সকুল পর্যায়, বাংলা মাধ্যম দুটি – দিবা ও প্রভাতি শাখা, ইংলিশ
          ভার্সন ও কলেজ শাখা। সব পর্যায়ে পাঠ পদ্ধতি সেমিস্টার ভিত্তিক। বর্তমানে
          প্রতিষ্ঠানের গভর্নিং বডির চেয়ারম্যান আলহাজ্ব শামসুদ্দিন ভূঁইয়া সেন্টু।
          প্রতিষ্ঠানের সূচনালগ্নে যারা নানাভাবে অবদান রেখেছেন তাদের মধ্যে জনাব
          তাজুল ইসলাম মিয়াজী, জনাব সামিউল আহসান, মরহুম আনোয়ার হোসেন প্রমুখ
          স্মরণীয়। সামসুল হক খান স্কুল অ্যান্ড কলেজ ২০১২ ও ২০১৫ সালে এসএসসিতে ঢাকা
          বোর্ডে যথাক্রমে ২য় ও ১ম স্থান অধিকার করে। বোর্ড পরীক্ষায় কলেজ ও স্কুল
          উভয় পর্যায়ের সাফল্যের ধারাবাহিক। */}
                </h2>

                {/* mission vision section */}
                <div className="flex flex-col w-full lg:flex-row gap-4 my-5 text-white">
                  <div className="grid flex-grow h-52 w-1/2 card bg-base-300 rounded  bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                    <div className="lg:flex items-center gap-2 px-4">
                      <Image src={vision} className="h-auto w-auto rounded" alt="img" />
                      <h2 className="text-2xl font-bold">Our Vision</h2>
                    </div>
                    <p className="px-4 text-justify">To create a world where businesses can intelligently engage and delight their customers through real-time unified data.</p>
                  </div>

                  <div className="grid flex-grow h-52 w-1/2 card bg-base-300 rounded  bg-gradient-to-tr from-sky-400 via-purple-600 to-blue-400">
                    <div className="flex items-center gap-2 px-4">
                      <Image src={mission} className="h-auto w-auto rounded" alt="img" />
                      <h2 className="text-2xl font-bold">Our Mission</h2>
                    </div>
                    <p className="px-4 text-justify">To create a best-of-breed, secure, and compliant global platform that helps companies improve the value and actionability of their customer data.</p>
                  </div>
                </div>

                <Divider />

                {/* history slider section */}
                
                <AboutCarousel/>
                
                <Divider />
                {/* teacher */}
                <section className="text-gray-800">
                  <div className="container p-4 mx-auto space-y-16 sm:p-10">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold leading-none sm:text-5xl">Meet with Our Teachers</h3>
                      <p className="max-w-2xl text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    </div>
                    <div className="grid w-full grid-cols-1 gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                      {teachers.map(items => (
                        <div key={items.Name} className="border rounded w-full py-5">
                          {/* <img alt="" className="object-cover h-56 mx-auto mb-4 bg-center rounded bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?0" /> */}
                          <Image src={items.img} className="object-cover h-auto mx-auto mb-4 bg-center rounded px-3" alt="img" />
                          <div className="flex flex-col items-center">
                            <h4 className="text-xl font-semibold">{items.Name}</h4>
                            <p className="text-sm text-gray-600">{items.Subject}</p>
                            <div className="flex mt-2 space-x-2">

                              <a rel="noopener noreferrer" href="#" title="Twitter" className="dark:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-4 h-4">
                                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                                </svg>
                              </a>
                              <a rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                  <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                                </svg>
                              </a>
                              <a rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-4 h-4">
                                  <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default history;
