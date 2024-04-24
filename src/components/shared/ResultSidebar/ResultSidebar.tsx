"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; 
const nonActiveStyle = 'text-black';

const ResultSidebar = () => {
    const currentRoute = usePathname();
    return (
        <div>
            <div className="p-2 md:p-0 lg:p-0">
				<div className="lg:w-64 lg:mx-auto lg:py-2">
					<h3 className="text-2xl lg:text-lg font-semibold  lg:pl-3 py-3 text-center md:text-start lg:text-start">
						Result
					</h3>
				</div>
				<div className="lg:w-64 flex justify-center p-2 col-span-full md:col-span-1 md:flex-col md:justify-start  md:items-start bg-white gap-2 rounded">				
					<Link href={"/result/schoolResult"} className={`${currentRoute === "/result/schoolResult" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>School Result</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/result/collegeResult"} className={`${currentRoute === "/result/collegeResult" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						College Result
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/result/englishVersionResult"} className={`${currentRoute === "/result/englishVersionResult" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>English Version</Link>
				</div>
		</div>
        </div>
    );
};

export default ResultSidebar;