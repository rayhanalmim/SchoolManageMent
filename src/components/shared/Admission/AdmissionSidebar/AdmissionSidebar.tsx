"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2';
const nonActiveStyle = 'text-black';

const AdmissionSidebar = () => {
	const currentRoute = usePathname();
	return (
		// <div className="pt-[70px] lg:pt-0">
		<div className="">
			<div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
				<h3 className="text-sm md:text-base lg:text-lg font-semibold lg:pl-3 lg:py-2">
					Admission
				</h3>
			</div>
			<div className="p-2 w-64 lg:flex justify-center lg:py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded items-center content-center text-sm md:text-base lg:text-base">
				<Link href={"/admission/admissionInfo"} className={`${currentRoute === "/admission/admissionInfo" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Admission Info</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/admission/schoolAdmission"} className={`${currentRoute === "/admission/schoolAdmission" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>School Admission Form</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/admission/collegeAdmission"} className={`${currentRoute === "/admission/collegeAdmission" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					College Admission Form
				</Link>
				<div className="border lg:w-full"></div>
				<Link href={"/admission/englishAdmission"} className={`${currentRoute === "/admission/englishAdmission" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>English Version Admission From</Link>
			</div>

		</div>
	);
};

export default AdmissionSidebar;