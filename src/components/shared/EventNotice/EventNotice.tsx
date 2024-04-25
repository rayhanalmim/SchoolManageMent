import { Divider } from "antd";
import Image from "next/image";
import React from "react";
import scienceimg from "../../../../public/assests/scienceclub.jpg";
import { ClockIcon, PrinterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaDownload} from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

const notices = [
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  },
  {
    text: "মৌখিক-পরীক্ষার-নোটিশ-বাংলা-মাধ্যম",
    date: "২৫ এপ্রিল ২০২৪",
    description:"প্রিয় ছাত্র-ছাত্রীবৃন্দ, আমরা এই নোটিশ জানাতে চাই যে, পরিস্কুল/পরিকলেজ পরীক্ষার তারিখ সম্পর্কে প্রাধিকৃত নির্দেশনা প্রদান করা হল। আপনারা সময় পরীক্ষার প্রস্তুতি করতে শুরু করুন এবং নির্দিষ্ট সময়ে পরীক্ষা দেতে সাজুক থাকুন। পরীক্ষার সময় এবং স্থান জানতে, প্রতিষ্ঠানের বোর্ড বা শিক্ষকের সাথে যোগাযোগ করুন।"
  }

];

const EventNotice = () => {
  return (
    <div className="lg:w-[1260px] mx-4 lg:mx-auto  py-10 ">
      <div className="md:flex lg:flex mx-auto space-y-5 md:space-y-0 lg:space-y-0 lg:justify-center md:gap-3 lg:gap-5">
        {/* news and events */}
        <div className="w-full md:w-1/2 lg:w-[45%] bg-white rounded shadow-md p-4 border">
          <h2 className="text-xl font-semibold mb-2 text-center">News & Events</h2>
          <Divider />

          <div className=" bg-base-100 lg:px-6">
            <figure>
              <Image src={scienceimg} className="h-52 w-full" alt="" />
            </figure>

            <div className="mt-3 space-y-1">
              <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500">
                <ClockIcon />
                <h1>২৮ মার্চ, ২০২৪</h1>
              </div>
              <h2 className="font-bold lg:text-2xl pt-2">৪র্থ অন্ত:স্কুল বিজ্ঞান মেলা এবং কুইজ লীগ: সিজন-২</h2>
              <p className="text-sm lg:text-base">চতুর্থবারের মত অন্ত:স্কুল বিজ্ঞান মেলা এবং কুইজ লীগ: সিজন-২ গত ২৮ মার্চ অনুষ্ঠিত হয়....</p>
              <div className="">
                <button className="btn btn-sm bg-gray-300 p-2 rounded text-black">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <Divider />

          <div className=" bg-base-100 lg:px-6">
            <figure>
              <Image src={scienceimg} className="h-52 w-full" alt="" />
            </figure>

            <div className="mt-3 space-y-1">
              <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500">
                <ClockIcon />
                <h1>২৮ মার্চ, ২০২৪</h1>
              </div>
              <h2 className="font-bold lg:text-2xl pt-2">৪র্থ অন্ত:স্কুল বিজ্ঞান মেলা এবং কুইজ লীগ: সিজন-২</h2>
              <p className="text-sm lg:text-base">চতুর্থবারের মত অন্ত:স্কুল বিজ্ঞান মেলা এবং কুইজ লীগ: সিজন-২ গত ২৮ মার্চ অনুষ্ঠিত হয়....</p>
              <div className="">
                <button className="btn btn-sm bg-gray-300 p-2 rounded text-black">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <Divider>
            <Link href={"/about/events"}>
              <button className="btn btn-sm lg:btn-primary border p-2 rounded">
                See More
              </button></Link>
          </Divider>
        </div>
        {/* notice board */}
        <div className="w-full md:w-1/2 lg:w-[45%] bg-white rounded shadow-md p-4 border">
          <h2 className="text-xl font-semibold mb-2 text-center">Notice Board</h2>
          <Divider />
          {notices.map((items, index) => (
            <div key={index} >

              <Link href="#" onClick={() => document.getElementById('my_modal_5').showModal()}>
                <p className=" text-gray-700 lg:pl-6">{items.text}</p>
              </Link>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <p className="text-gray-700 lg:pl-6 font-bold text-2xl">{items.text}</p>
                  <div className="flex flex-row items-center content-center text-center h-4 w-auto gap-1 text-sm text-gray-500 mt-[2px] lg:pl-6">
                    <ClockIcon className="w-4 h-4"/>                    
                    <h1>{items.date}</h1>                    
                  </div>
                  <Divider />
                  <p className="text-gray-700 text-justify">{items.description}</p>
                  <div className="flex gap-2 pt-2">
                  <button className="flex btn gap-2 content-center text-center items-center"><PrinterIcon className="w-5 h-5"/>প্রিন্ট করুন</button>
                  <button className="flex btn gap-2 content-center text-center items-center"><MdDownload className="w-5 h-5"/>ডাউনলোড করুন</button>
                  </div>
                  <div className="modal-action">
                  <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
                  </div>
                </div>
              </dialog>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle"></dialog>
              <div className="flex flex-row item-center h-4 w-auto gap-1 text-sm text-gray-500 mt-[2px] lg:pl-6">
                <ClockIcon />
                <h1>{items.date}</h1>
              </div>
              <Divider />
            </div>
          ))}
          <Link href="/notice" ><button className="btn bg-gray-200 w-full rounded p-2">View All Notices</button></Link>
        </div>
      </div>

    </div>
  );
};

export default EventNotice;
