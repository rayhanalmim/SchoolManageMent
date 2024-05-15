import { Divider } from "antd";
import AboutSidebar from "@/components/shared/About/AboutSidebar/AboutSidebar";
import Events from "@/components/shared/About/Events/Events";

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
              <Divider className="bg-gray-300" />
              <Events />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default events;
