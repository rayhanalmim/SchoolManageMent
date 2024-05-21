 
import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import Events from "@/components/shared/About/Events/Events";
import Image from "next/image";
import event1 from "../../../../../public/assests/doctorsCare/events/price.jpg";
import event2 from "../../../../../public/assests/doctorsCare/events/sports4.jpg";
import event3 from "../../../../../public/assests/doctorsCare/events/art3.jpg";
import event4 from "../../../../../public/assests/doctorsCare/events/26march.jpg";
import event5 from "../../../../../public/assests/doctorsCare/events/price2.jpg";
import event6 from "../../../../../public/assests/doctorsCare/events/quiz.jpg";
import event7 from "../../../../../public/assests/doctorsCare/events/sports.jpg";
// import scienceimg from "../../../../../public/assests/scienceclub.jpg";
// import student from "../../../../../public/assests/student.jpg";
// import result from "../../../../../public/assests/result.jpg";
import Link from "next/link";

const eventsItems = [
  {
    id:1,
    img: event2,
    title: "বিজ্ঞান কুইজ ও অলম্পিয়াড অনুষ্ঠিত - ",
    date: "January 26, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
  },
  {
    id:2,
    img: event3,
    title: "বার্ষিক পরিক্ষার ফলাফল প্রকাশ - ",
    date: "January 26, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
  },
  {
    id:3,
    img: event4,
    title: "স্বাধীনতা দিবস উপলক্ষে কুইজ প্রতিযোগীতা আয়োজিত - ",
    date: "January 26, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
  },
  {
    id:4,
    img: event5,
    title: "২১ ফেব্রুয়ারী ও আন্তর্জাতিক মাতৃভাষা দিবস উপলক্ষে কুইজ প্রতিযোগীতা আয়োজিত -",
    date: "January 26, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
  },
  {
    id:5,
    img: event6,
    title: "মহান বিজয় দিবস উপলক্ষে কুইজ প্রতিযোগীতা আয়োজিত -",
    date: "January 26, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
  },
  {
    id:6,
    img: event7,
    title: "আইসিটি কুইজ ও অলম্পিয়াড অনুষ্ঠিত -",
    date: "January 26, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto."
  }
];
const events = () => {
  return (
    <div>
      <section className=" bg-gray-100  lg:py-12 text-gray-800 ">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-8 lg:pr-5 pl-8 md:pl-0 lg:pl-0 ">
            <AboutSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Events
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>
              {/* <Events /> */}
              <div>
                <section className=" border  rounded text-gray-800 lg:w-auto p-4 bg-white">
                  <div className="container max-w-6xl p-4 mx-auto space-y-6 sm:space-y-12">
                    <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12  bg-gray-50">
                      <Image src={event1} className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7  bg-gray-500" alt="" />
                      <div className=" space-y-2 lg:col-span-5 p-4">
                        <h3 className="font-bold text-xl md:text-xl lg:text-2xl group-hover:underline group-focus:underline lg:pt-5">বিজ্ঞান মেলা এবং কুইজ লীগ - </h3>
                        <span className="text-xs  text-gray-600">February 19, 2021</span>
                        <p className="text-sm text-gray-400 lg:pr-2 text-justify">Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
                        <Link href={"/about/events/eventsDetails"}><button className="btn btn-sm p-2 rounded text-black" >Read More</button></Link>
                        {/* <Link href={"#"}><button className="btn btn-sm p-2 rounded text-black" >Read More</button></Link> */}
                      </div>
                    </div>
                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {eventsItems.map((item) => (
                        <div key={item.id} className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-50">
                          <Image src={item.img} className="object-cover w-full rounded h-44 bg-gray-500" alt="" />
                          <div className="p-3 space-y-2">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <span className="text-xs text-gray-600">{item.date}</span>
                            <p className="text-sm text-gray-400">{item.description}</p>
                            {/* <button className="btn btn-sm p-2 rounded text-black">Read More</button> */}
                            <Link href={`/about/events/${item.id}`}><button className="btn btn-sm p-2 rounded text-black" >Read More</button></Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline  bg-gray-50  text-gray-600">Load more...</button>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default events;
