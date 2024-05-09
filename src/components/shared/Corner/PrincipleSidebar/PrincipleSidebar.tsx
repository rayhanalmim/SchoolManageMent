"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle = 'text-black bg-green-500 h-full w-full p-2';
const nonActiveStyle = 'text-black';

const PrincipleSidebar = () => {
	const currentRoute = usePathname();
	return (
		<div>
			<div className="w-64 mx-auto py-2">
				<h3 className="text-lg font-semibold  pl-3 py-2">
					Principle Corner
				</h3>
			</div>
			<div className="w-64 flex justify-center py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded">
				<Link href={"/corner/principle/message"} className={`${currentRoute === "/corner/principle/message" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Principle Message</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/principle/bio"} className={`${currentRoute === "/corner/principle/bio" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					Principle Bio
				</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/principle/gallery"} className={`${currentRoute === "/corner/principle/gallery" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Gallery</Link>
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