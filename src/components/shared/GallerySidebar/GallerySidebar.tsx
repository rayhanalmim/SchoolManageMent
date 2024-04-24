"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; 
const nonActiveStyle = 'text-black';

const GallerySidebar = () => {
    const currentRoute = usePathname();
    return (
        <div>
            <div className="p-2 md:p-0 lg:p-0">
				<div className="lg:w-64 lg:mx-auto lg:py-2">
					<h3 className="text-2xl lg:text-lg font-semibold  lg:pl-3 py-3 text-center md:text-start lg:text-start">
						Gallery
					</h3>
				</div>
				<div className="lg:w-64 flex justify-center p-2 col-span-full md:col-span-1 md:flex-col md:justify-start  md:items-start bg-white gap-2 rounded">				
					<Link href={"/gallery/images"} className={`${currentRoute === "/gallery/images" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Images</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/gallery/videos"} className={`${currentRoute === "/gallery/videos" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Videos
					</Link>
					
				</div>
		</div>
        </div>
    );
};

export default GallerySidebar;