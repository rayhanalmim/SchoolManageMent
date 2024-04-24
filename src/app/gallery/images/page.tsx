import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import GallerySidebar from "@/components/shared/GallerySidebar/GallerySidebar";

const images = () => {
    return (
        <>
            <Header />
            <section className=" bg-gray-100  py-20 text-gray-800">
                <div className="w-[1260px] mx-auto grid grid-cols-12 gap-14   mt-10 px-20">
                    <div className="p-5 col-span-3">

                        <GallerySidebar />
                    </div>
                    <div className="grid w-full col-span-9">
                        <div className="lg:w-auto pb-5  ">
                            <div className="w-64 pt-5">
                                <h3 className="text-2xl font-semibold py-4">
                                    Gallery
                                </h3>
                            </div>
                            <section className="py-6  bg-white text-gray-900 border rounded ">
                                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                                    <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  bg-gray-500 aspect-square" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                                    <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3  bg-gray-500 aspect-square" />
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default images;