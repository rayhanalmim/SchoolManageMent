"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const activeStyle = 'text-black bg-green-500 h-full w-full p-2'; 
const nonActiveStyle = 'text-black';

const  ClubSidebar= () => {
    const currentRoute = usePathname();
    return (
        <div>
            <div className="p-2 md:p-0 lg:p-0">
				<div className="lg:w-64 lg:mx-auto lg:py-2">
					<h3 className="text-2xl lg:text-lg font-semibold  lg:pl-3 py-3 text-center md:text-start lg:text-start">
						Club
					</h3>
				</div>
				<div className="lg:w-64 flex justify-center p-2 col-span-full md:col-span-1 md:flex-col md:justify-start  md:items-start bg-white gap-2 rounded">				
					<Link href={"/club/scout"} className={`${currentRoute === "/club/scout" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Scout Club</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/artNculture"} className={`${currentRoute === "/club/artNculture" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Art & Culture Club
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/science"} className={`${currentRoute === "/club/science" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Science Club</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/debate"} className={`${currentRoute === "/club/debate" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Debate Club
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/computer"} className={`${currentRoute === "/club/computer" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Computer Club</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/englishLanguage"} className={`${currentRoute === "/club/englishLanguage" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						English Language Club
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/nutrition"} className={`${currentRoute === "/club/nutrition" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Nutrition Club</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/swadeshObissobabna"} className={`${currentRoute === "/club/swadeshObissobabna" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
					Swadesh O Bissobabna Club
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/photography"} className={`${currentRoute === "/club/photography" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Photography Club</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/sports"} className={`${currentRoute === "/club/sports" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>
						Sports Club
					</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/girlsGuid"} className={`${currentRoute === "/club/girlsGuid" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Girls Guid</Link>
					<div className="border lg:w-full"></div>
					<Link href={"/club/peachGrowingE"} className={`${currentRoute === "/club/peachGrowingE" ? activeStyle : nonActiveStyle} px-2 text-sm md:text-basic lg:text-basic`}>Peach Growing Education (HWPL)</Link>

				</div>
		</div>
        </div>
    );
};

export default ClubSidebar;