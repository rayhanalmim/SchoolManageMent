import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import History from "@/components/shared/History/History";


const about = () => {
	return (
		<>
			<Header />
			<section className="py-8 dark:bg-gray-100 dark:text-gray-800">
				<div className="container mx-auto">
					<div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">

					</div>
					<div className="grid grid-cols-5 p-4 md:p-8 ">
						<div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-gray-200 border border-gray-300">
							<button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">At a Glance</button>
							<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-600 dark:text-gray-900">History</button>
							<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">Achievement</button>
							<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">Why Study Here</button>
							<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-700 dark:text-gray-600">Events</button>
						</div>
						<div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
						<History />
					</div>
					</div>
					
				</div>
			</section>
			<Footer />
		</>
	);
};

export default about;