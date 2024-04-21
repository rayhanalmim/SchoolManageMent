"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; // Customize as needed
const nonActiveStyle = 'text-black';
const AboutSidebar = () => {
	const currentRoute = usePathname();
	return (
		<div>
			<div className="w-64 mx-auto py-2">
				<h3 className="text-lg font-semibold  pl-3 py-3">
					News & Events
				</h3>
			</div>
			<div className="w-64 flex justify-center py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded">
				{/* <Link href={"/about/history"} className="px-2">History</Link> */}
				<Link href={"/about/history"} className={`${currentRoute === "/about/history" ? activeStyle : nonActiveStyle} px-2`}>History</Link>
				<div className="border  w-full"></div>
				{/* <Link href={"/about/ataglance"} className="px-2">At a Glance</Link> */}
				<Link href={"/about/ataglance"} className={`${currentRoute === "/about/ataglance" ? activeStyle : nonActiveStyle} px-2`}>
					At a Glance
				</Link>
				<div className="border w-full"></div>
				{/* <Link href={"/about/achievement"} className="px-2">Achievement</Link> */}
				<Link href={"/about/achievement"} className={`${currentRoute === "/about/achievement" ? activeStyle : nonActiveStyle} px-2`}>Achievement</Link>
				<div className="border  w-full"></div>
				{/* <Link href={"/about/whystudyHere"} className="px-2">Why Study Here</Link> */}
				<Link href={"/about/whystudyHere"} className={`${currentRoute === "/about/whystudyHere" ? activeStyle : nonActiveStyle} px-2`}>Why Study Here</Link>
				<div className="border  w-full"></div>
				{/* <Link href={"/about/events"} className="px-2">Events</Link> */}
				<Link href={"/about/events"} className={`${currentRoute === "/about/events" ? activeStyle : nonActiveStyle} px-2`}>Events</Link>
			</div>
		</div>
	);
};

export default AboutSidebar;