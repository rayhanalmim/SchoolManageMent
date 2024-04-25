"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; 
const nonActiveStyle = 'text-black';

const FacilitiesSidebar = () => {
    const currentRoute = usePathname();
    return (
        <div>
            <div className="w-64 mx-auto py-2">
				<h3 className="text-lg font-semibold  pl-3 py-2"> 
					Facilities
					</h3>
				</div>
				<div className="w-64 flex justify-center py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded">				
					<Link href={"/facilities/scienceLab"} className={`${currentRoute === "/facilities/scienceLab" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Science Lab</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/ictLab"} className={`${currentRoute === "/facilities/ictLab" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						ICT Lab
					</Link> 
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/library"} className={`${currentRoute === "/facilities/library" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Library</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/multiMediaClass"} className={`${currentRoute === "/facilities/multiMediaClass" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Multi Media Class</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/sNet"} className={`${currentRoute === "/facilities/sNet" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						SNET
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/qipSMS"} className={`${currentRoute === "/facilities/qipSMS" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>QIP SMS</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/sapciousAuditorium"} className={`${currentRoute === "/facilities/sapciousAuditorium" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Sapcious Auditorium
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/commonRoom"} className={`${currentRoute === "/facilities/commonRoom" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Common Room</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/prayerRoom"} className={`${currentRoute === "/facilities/prayerRoom" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Prayer Room</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/rideService"} className={`${currentRoute === "/facilities/rideService" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Ride Service
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/facilities/otherFacilities"} className={`${currentRoute === "/facilities/otherFacilities" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Other Facilities</Link>

				</div>
		
        </div>
    );
};

export default FacilitiesSidebar;