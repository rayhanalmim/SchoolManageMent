import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
 
import Image from "next/image";
import schoolbus1 from "../../../../../public/assests/doctorsCare/riding/1.jpg";
import schoolbus2 from "../../../../../public/assests/doctorsCare/riding/2.jpg";
// import schoolbus from "../../../../../public/assests/facilities/schoolbus2.jpg";

const rideService = () => {
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
                  Ride Service
                </h3>
              </div>
              {/* Divider  */}
              <div className="w-full  border-t border-gray-300 h-[.5px] my-3 md:my-6 lg:my-6"></div>

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 lg:flex items-center gap-5">
                
                  <Image src={schoolbus1} className="h-auto w-[450px] mt-5 " alt="" />
                  <Image src={schoolbus2} className="h-auto w-[450px] mt-5 " alt="" />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default rideService;
