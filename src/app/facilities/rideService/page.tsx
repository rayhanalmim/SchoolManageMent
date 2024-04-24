import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import FacilitiesSidebar from "@/components/shared/FacilitiesSidebar/FacilitiesSidebar";

const rideService = () => {
    return (
        <>
            <Header />
            <section className=" bg-gray-100  py-20 text-gray-800">
                <div className="w-[1260px] mx-auto grid grid-cols-12 gap-14   mt-10 px-20">
                    <div className="p-5 col-span-3">

                        <FacilitiesSidebar />
                    </div>
                    <div className="grid w-full col-span-9">
                        <div className="lg:w-auto pb-5  ">
                            <div className="w-64 pt-5">
                                <h3 className="text-2xl font-semibold py-4">
                                    Facilities
                                </h3>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default rideService;