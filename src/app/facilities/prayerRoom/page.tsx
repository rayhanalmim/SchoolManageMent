import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";
import { Divider } from "antd";

const prayerRoom = () => { 
    return (
        <>
            <Header />
            <section className=" bg-gray-100  py-20 text-gray-800">
                <div className="w-[1260px] mx-auto flex gap-1   mt-9">
                    <div className="py-5 pr-5">
                        <FacilitiesSidebar />
                    </div>
                    <div className="grid w-full ">
                        <div className="lg:w-auto mt-2  ">
                            <div className="w-64 pt-4">
                                <h3 className="text-2xl font-semibold ">
                                    Prayer Room
                                </h3>
                            </div>
                            <Divider className="bg-gray-300" />

                            <section className="lg:w-auto border rounded p-4 bg-white text-gray-800"></section>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default prayerRoom;