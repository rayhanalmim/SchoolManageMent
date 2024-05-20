"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle = 'text-black bg-green-500 w-full lg:p-2';
const nonActiveStyle = 'text-black';

const ClubSidebar = () => {
	const currentRoute = usePathname();
	return (
		<div className="pt-[70px] lg:pt-0">
			<div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
				<h3 className="text-sm md:text-md lg:text-lg font-semibold lg:pl-3 lg:py-2">
					Club
				</h3>
			</div>
			<div className="p-2 w-64 lg:flex justify-center lg:py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded items-center content-center text-sm md:text-md lg:text-base">
				<Link href={"/club/scout"} className={`${currentRoute === "/club/scout" ? activeStyle : nonActiveStyle} px-2 `}>Scout Club</Link>
				{/* <div className="border lg:w-full"></div> */}
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/artNculture"} className={`${currentRoute === "/club/artNculture" ? activeStyle : nonActiveStyle} px-2 `}>
					Art & Culture Club
				</Link>
				<div className="w-full  border-t border-gray-300"></div>

				<Link href={"/club/science"} className={`${currentRoute === "/club/science" ? activeStyle : nonActiveStyle} px-2 `}>Science Club</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/debate"} className={`${currentRoute === "/club/debate" ? activeStyle : nonActiveStyle} px-2 `}>
					Debate Club
				</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/computer"} className={`${currentRoute === "/club/computer" ? activeStyle : nonActiveStyle} px-2`}>Computer Club</Link>
				<div className="w-full  border-t border-gray-300 "></div>
				
				<Link href={"/club/englishLanguage"} className={`${currentRoute === "/club/englishLanguage" ? activeStyle : nonActiveStyle} px-2 `}>
					English Language Club
				</Link>
				<div className="w-full  border-t border-gray-300 "></div>
				
				<Link href={"/club/nutrition"} className={`${currentRoute === "/club/nutrition" ? activeStyle : nonActiveStyle} px-2 `}>Nutrition Club</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/swadeshObissobabna"} className={`${currentRoute === "/club/swadeshObissobabna" ? activeStyle : nonActiveStyle} px-2 `}>
					Swadesh O Bissobabna Club
				</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/photography"} className={`${currentRoute === "/club/photography" ? activeStyle : nonActiveStyle} px-2 `}>Photography Club</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/sports"} className={`${currentRoute === "/club/sports" ? activeStyle : nonActiveStyle} px-2`}>
					Sports Club
				</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/girlsGuid"} className={`${currentRoute === "/club/girlsGuid" ? activeStyle : nonActiveStyle} px-2`}>Girls Guid</Link>
				<div className="w-full  border-t border-gray-300 "></div>

				<Link href={"/club/peachGrowingE"} className={`${currentRoute === "/club/peachGrowingE" ? activeStyle : nonActiveStyle} px-2`}>Peach Growing Education (HWPL)</Link>

			</div>

		</div>
	);
};

export default ClubSidebar;