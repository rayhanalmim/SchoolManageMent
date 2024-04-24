"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; 
const nonActiveStyle = 'text-black';

const AdmissionSidebar = () => {
    const currentRoute = usePathname();
    return (
        <div>
            <div className="p-2 md:p-0 lg:p-0">
				<div className="lg:w-64 lg:mx-auto lg:py-2">
					<h3 className="text-2xl lg:text-lg font-semibold  lg:pl-3 py-3 text-center md:text-start lg:text-start">
						Admission
					</h3>
				</div>
				<div className="lg:w-64 flex justify-center p-2 col-span-full md:col-span-1 md:flex-col md:justify-start  md:items-start bg-white gap-2 rounded">				
					<Link href={"/admission/schoolAdmission"} className={`${currentRoute === "/admission/schoolAdmission" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>School Admission</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/admission/collegeAdmission"} className={`${currentRoute === "/admission/collegeAdmission" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						College Admission
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/admission/englishAdmission"} className={`${currentRoute === "/admission/englishAdmission" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>English Version</Link>
				</div>
		</div>
        </div>
    );
};

export default AdmissionSidebar;