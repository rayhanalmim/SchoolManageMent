"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const activeStyle = 'text-black bg-green-500 h-full w-full p-2';
const nonActiveStyle = 'text-black';

const SchoolSidebar = () => {
	const currentRoute = usePathname();
	return (
		// <div className="pt-[70px] lg:pt-0">
		<div className="">
			<div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
				<h3 className="text-sm md:text-base lg:text-lg font-semibold lg:pl-3 lg:py-2">
					School Corner
				</h3>
			</div>
			<div className="p-2 w-64 lg:flex justify-center lg:py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded items-center content-center text-sm md:text-base lg:text-base">
				<Link href={"/corner/school/schoolInfo"} className={`${currentRoute === "/corner/school/schoolInfo" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>School Info</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/school/schoolAdmissionInfo"} className={`${currentRoute === "/corner/school/schoolAdmissionInfo" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					School Admission Info
				</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/corner/school/schoolAdmissionForm"} className={`${currentRoute === "/corner/school/schoolAdmissionForm" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>School Admission Form</Link>				
			</div>
		</div>
	);
};

export default SchoolSidebar;