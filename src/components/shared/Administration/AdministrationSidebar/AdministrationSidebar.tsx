"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; 
const nonActiveStyle = 'text-black';

const AdministrationSidebar = () => {
    const currentRoute = usePathname();
    return (
        // <div className="pt-[70px] lg:pt-0">
        <div className="">
			<div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
				<h3 className="text-sm md:text-base lg:text-lg font-semibold lg:pl-3 lg:py-2">
						Administration 
					</h3>
				</div>
				<div className="p-2 w-64 lg:flex justify-center lg:py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded items-center content-center text-sm md:text-base lg:text-base">				
					<Link href={"/administration/governingBody"} className={`${currentRoute === "/administration/governingBody" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Governing Body</Link>
					<div className="border w-full"></div>
					<Link href={"/administration/message"} className={`${currentRoute === "/administration/message" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Message
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/administration/administrativeBody"} className={`${currentRoute === "/administration/administrativeBody" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Administrative Body</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/administration/teachingStaff"} className={`${currentRoute === "/administration/teachingStaff" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Teaching Staff</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/administration/officeStaff"} className={`${currentRoute === "/administration/officeStaff" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Office Staff
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/administration/supportingStaff"} className={`${currentRoute === "/administration/supportingStaff" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Supporting Staff</Link>
				</div>
		
        </div>
    );
};

export default AdministrationSidebar;