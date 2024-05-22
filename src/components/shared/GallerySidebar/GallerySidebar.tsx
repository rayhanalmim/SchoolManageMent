"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full lg:w-full p-2'; 
const nonActiveStyle = 'text-black';

const GallerySidebar = () => {
    const currentRoute = usePathname();
    return (
        // <div className="pt-[70px] lg:pt-0">
        <div className="">
			<div className="w-full lg:w-64 lg:mx-auto lg:py-2 text-center md:text-left lg:text-start">
				<h3 className="text-sm md:text-base lg:text-lg font-semibold lg:pl-3 lg:py-2">
						Gallery
					</h3>
				</div>
				<div className="lg:w-64 flex justify-center py-2 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start bg-white gap-2 rounded">				
					<Link href={"/gallery/images"} className={`${currentRoute === "/gallery/images" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Images</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/gallery/videos"} className={`${currentRoute === "/gallery/videos" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Videos
					</Link>					 
				</div>	
        </div>
    );
};

export default GallerySidebar;