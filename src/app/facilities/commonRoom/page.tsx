import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
import { Divider } from "antd";
import Image from "next/image";
import common_room from "../../../../public/assests/facilities/common_room.jpg";

const commonRoom = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-12 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 lg:pr-5">
            <FacilitiesSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Common Room
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center ">
              <h2 className="text-xl text-justify"> ছাত্রীদের জন্য যুগোপযোগী সব ধরনের আধুনিক সুযোগ সুবিধা। রয়েছে প্রশস্ত, পরিচ্ছন ও সমৃদ্ধ কমন রুম। সেখানে তারা বিনোদন এবং বিশ্রামের সুযোগ নিতে পারে।</h2>
              <Divider className="bg-gray-300" />

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
