"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle = 'text-black bg-green-500 h-full w-full p-2';
const nonActiveStyle = 'text-black';

const CollegeSidebar = () => {
	const currentRoute = usePathname();
	return (
		<div>
			<div className="w-64 mx-auto py-2">
				<h3 className="text-lg font-semibold  pl-3 py-2">
					College Corner
				</h3>
			</div>
			<div className="w-64 flex justify-center py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded">
				<Link href={"/corner/college/collegeInfo"} className={`${currentRoute === "/corner/college/collegeInfo" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>College Info</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/college/collegeAdmissionInfo"} className={`${currentRoute === "/corner/college/collegeAdmissionInfo" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					College Admission Info
				</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/college/collegeAdmissionForm"} className={`${currentRoute === "/corner/college/collegeAdmissionForm" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>College Admission Form</Link>
				
			</div>
		</div>
	);
};

export default CollegeSidebar;