
import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
import { Divider } from "antd";
import Image from "next/image";
import s_net from "../../../../public/assests/facilities/s-net.jpg";

const sNet = () => {
    return (
        <>

            <section className=" bg-gray-100  lg:py-12 text-gray-800">
                <div className="lg:w-[1260px] mx-auto lg:flex gap-1 lg:mt-9">
                    <div className="py-5 pr-5">
                        <FacilitiesSidebar />
                    </div>
                    <div className="grid w-full ">
                        <div className="lg:w-auto lg:mt-2  ">
                            <div className="w-full md:w-64 lg:w-64 md:pt-4 lg:pt-4">
                                <h3 className="text-2xl font-semibold text-center md:text-left lg:text-left">
                                    S-Net
                                </h3>
                            </div>
                            <Divider className="bg-gray-300" />

                            <section className="lg:w-auto border rounded p-4 bg-white text-gray-800 flex flex-col items-center ">
                                <p className="text-xl text-justify">শিক্ষার্থীর পাঠোন্নতির লক্ষে গঠিত তদারকী কমিটি S-Net কতিপয় সচেতন ও দ্বায়িত্বশীল শিক্ষকের সমন্বয়ে গঠিত। শিক্ষার্থীর পাঠ প্রস্তুতি কার্যকর করতে শিক্ষাথী-শিক্ষক ও অভিভাবকের নৈকট্য সৃষ্টি ও এর কার্যপরিধির অন্তর্গত।

                                    অনলাইন, অফলাইনসহ যেকোন উপায়ে শিক্ষার্থীকে পাঠে আগ্রহী করতে বদ্ধপরিকর। জাবাবদিহিতা মূলক শ্রেণিশিক্ষক সহায়ক কমিটি।</p>

                                <Image src={s_net} className="h-auto w-auto mt-5 " alt="" />
                            </section>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default sNet;