
import GallerySidebar from "@/components/shared/GallerySidebar/GallerySidebar";
import { Divider } from "antd";
import Image from "next/image";
import common_room from "../../../../public/assests/facilities/common_room.jpg";

const videos = () => {
  return (
    <>
      <section className=" bg-gray-100  lg:py-20 text-gray-800">
        <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
          <div className="py-5 pr-5">
            <GallerySidebar />
          </div>
          <div className="grid w-full ">
            <div className="lg:w-auto lg:mt-2  ">
              <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                  Videos
                </h3>
              </div>
              <Divider className="bg-gray-300" />

              <section className="lg:w-auto border rounded p-4 bg-white text-gray-800">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto">
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/xz6YlRulM3A?si=StnMtUwU5zgXPB6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/xz6YlRulM3A?si=StnMtUwU5zgXPB6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/xz6YlRulM3A?si=StnMtUwU5zgXPB6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/xz6YlRulM3A?si=StnMtUwU5zgXPB6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/xz6YlRulM3A?si=StnMtUwU5zgXPB6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  <iframe width="460" height="315" src="https://www.youtube.com/embed/xz6YlRulM3A?si=StnMtUwU5zgXPB6z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default videos;
