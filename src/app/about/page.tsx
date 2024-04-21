import AboutSidebar from "@/components/shared/AboutSidebar/AboutSidebar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import History from "@/components/shared/History/History";
import Link from "next/link";



const about = () => {
	return (
		<>
			<Header />
			<section className="py-20  bg-gray-100  text-gray-800 ">
				<div className="w-[1260px] container flex  mt-10 px-20 mx-auto">
					<div className="p-5">
						<AboutSidebar />
					</div>
					<div className=" grid  w-full  ">
						<History />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default about;