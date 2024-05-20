"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle = 'text-black bg-green-500 h-full w-full p-2';
const nonActiveStyle = 'text-black';

const PrincipleSidebar = () => {
	const currentRoute = usePathname();
	return (
		<div className="pt-[70px] lg:pt-0">
			<div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
				<h3 className="text-sm md:text-md lg:text-lg font-semibold lg:pl-3 lg:py-2">
					Principle Corner
				</h3>
			</div>
			<div className="p-2 w-64 lg:flex justify-center lg:py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded items-center content-center text-sm md:text-md lg:text-base">
				<Link href={"/corner/principle/message"} className={`${currentRoute === "/corner/principle/message" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Principle Message</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/principle/bio"} className={`${currentRoute === "/corner/principle/bio" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					Principle Bio
				</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/principle/principleAchievement"} className={`${currentRoute === "/corner/principle/principleAchievement" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Principle Achievement</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/principle/sendMessage"} className={`${currentRoute === "/corner/principle/sendMessage" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Send Message for Principle</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/principle/contact"} className={`${currentRoute === "/corner/principle/contact" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					Contact
				</Link>
			</div>
		</div>
	);
};

export default PrincipleSidebar;