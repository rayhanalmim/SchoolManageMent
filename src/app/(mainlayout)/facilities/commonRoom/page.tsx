import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
 
import Image from "next/image";
import common_room from "../../../../../public/assests/facilities/common_room.jpg";

const commonRoom = () => {
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
                  Common Room
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center ">
              <h2 className="text-xl text-justify"> ছাত্রীদের জন্য যুগোপযোগী সব ধরনের আধুনিক সুযোগ সুবিধা। রয়েছে প্রশস্ত, পরিচ্ছন ও সমৃদ্ধ কমন রুম। সেখানে তারা বিনোদন এবং বিশ্রামের সুযোগ নিতে পারে।</h2>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <Image src={common_room} className="h-auto w-auto " alt="this is img" />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default commonRoom;
