import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
import { Divider } from "antd";
import Image from "next/image";
import other1 from "../../../../public/assests/facilities/other1.jpg";
import other2 from "../../../../public/assests/facilities/other2.jpg";
import other3 from "../../../../public/assests/facilities/other3.png";

const otherFacilities = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-20 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-5">
            <FacilitiesSidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Other Facilities
                </h3>
              </div>
              <Divider className="bg-gray-300" />
              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center">
              <h2 className="text-xl text-justify"> লিফট, নিরাপদ খাবার পানি এবং সার্বক্ষণিক জেনারেটর সুবিধা। নিরাপত্তা বিধানের জন্য রয়েছে সিসি ক্যমেরার ব্যাবস্থা। প্রতিষ্ঠানের গেইট থেকে শুরু করে প্রতিষ্ঠান প্রাঙ্গান এমনকি প্রতিষ্ঠান সংলগ্ন আশেপাশের রাস্তাগুলোও সিসি ক্যামেরার আওতাধীন।</h2>
              <Divider className="bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-center">লিফট</h2>
                  <Image src={other1} className="h-auto w-auto mt-5" alt="physics lab"/>
                  
                </div>
              <Divider className="bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-center">জেনারেটর</h2>
                  <Image src={other2} className="h-auto w-auto mt-5" alt="Chem lab"/>
                  
                </div>
              <Divider className="bg-gray-300" />
                <div>
                  <h2 className="text-xl font-bold text-center">CCTV Camera</h2>
                  <Image src={other3} className="h-auto w-auto mt-5" alt="Biology lab"/>
                  
                </div>
                
              </section>

              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default otherFacilities;
