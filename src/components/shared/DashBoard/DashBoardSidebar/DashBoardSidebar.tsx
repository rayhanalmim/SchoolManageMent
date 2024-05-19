import Link from 'next/link';
import React from 'react';
import { PiCornersInFill } from "react-icons/pi";
import { GrCircleInformation } from "react-icons/gr";
import { MdManageHistory } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
import { BsJournalText } from "react-icons/bs";
import { BsBuildingGear } from "react-icons/bs";
import { SiSamsclub } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { RiContactsLine } from "react-icons/ri";

const DashBoardSidebar = () => {

const menu = [
	{
		id:1,
		name:"Corner",
		icon: <PiCornersInFill className="h-5 w-5"/>,
		subMenu: [
			{ name: "Principle Corner", href: "/dashboard/about/events"  },
			{ name: "Student Corner", href: "/dashboard/about/events"  },
			{ name: "School Corner", href: "/about/achievement" },
			{ name: "College Corner", href: "/about/history" },
		  ]
	},
	{
		id:2,
		name:"About Us",
		icon:<GrCircleInformation className="h-5 w-5"/>,
		subMenu: [
			{ name: "History", href: "/about/history" },
			{ name: "At A Glance", href: "/about/history" },
			{ name: "Achievements", href: "/about/achievement" },
			{ name: "Why Study Here", href: "/contact" },
			{ name: "Events", href: "/about/events" },
		  ]
	},
	{
		id:3,
		name:"Admisnistration",
		icon:<GoPeople className="h-5 w-5"/>,
		subMenu: [
			{ name: "Governing Body", href: "/about/events" },
			{ name: "Message", href: "/about/achievement" },
			{ name: "Administrative Body", href: "/about/history" },
			{ name: "Teaching Staff ", href: "/contact" },
			{ name: "Office Staff ", href: "/contact" },
			{ name: "Supporting Staff ", href: "/contact" },
		  ]
	},	
	{
		id:4,
		name:"Result",
		icon:<BsJournalText className="h-5 w-5"/>,
		subMenu: [
			{ name: "School Result", href: "/about/events" },
			{ name: "College Result", href: "/about/achievement" },
			{ name: "English Version Result", href: "/about/history" },
		  ]
	},
	{
		id:5,
		name:"Admission",
		icon:<IoSchoolOutline className="h-5 w-5"/>,
		subMenu: [
			{ name: "Admission Info", href: "/about/events" },
			{ name: "School Admission Form", href: "/about/achievement" },
			{ name: "College Admission Form", href: "/about/history" },
			{ name: "English Version Admission Form", href: "/contact" },
		  ]
	},
	{
		id:6,
		name:"Facilities",
		icon:<BsBuildingGear className="h-5 w-5"/>,
		subMenu: [
			{ name: "Science Lab ", href: "/about/events" },
			{ name: "ICT Lab", href: "/about/achievement" },
			{ name: "Library", href: "/about/history" },
			{ name: "Multi-Media Class Room", href: "/contact" },
			{ name: "S-Net", href: "/contact" },
			{ name: "QIP SMS Sevice ", href: "/contact" },
			{ name: "Sapcious Auditorium", href: "/contact" },
			{ name: "Common Room", href: "/contact" },
			{ name: "Prayer Room", href: "/contact" },
			{ name: "Ride Service", href: "/contact" },
			{ name: "Other Facilities ", href: "/contact" },
		  ]
	},
	{
		id:7,
		name:"Club",
		icon:<SiSamsclub className="h-5 w-5"/>,
		subMenu: [
			{ name: "Scout Group", href: "/about/events" },
			{ name: "Art & Culture Club", href: "/about/achievement" },
			{ name: "Science Club", href: "/about/history" },
			{ name: "Debate Club", href: "/contact" },
			{ name: "Computer Club", href: "/about/events" },
			{ name: "English Language Club ", href: "/about/achievement" },
			{ name: "Nutrition Club", href: "/about/history" },
			{ name: "Swadesh O Bissobabna Club", href: "/contact" },
			{ name: "Photography Club", href: "/about/events" },
			{ name: "Sports Club", href: "/about/achievement" },
			{ name: "Girl's Guid", href: "/about/history" },
			{ name: "Peach Growing Education (HWPL)", href: "/contact" }
		  ]
	},
	{
		id:8,
		name:"Gallery",
		icon:<GrGallery className="h-5 w-5"/>,
		subMenu: [
			{ name: "Images", href: "/about/events" },
			{ name: "Videos", href: "/about/achievement" },
		  ]
	},
	{
		id:9,
		name:"Notice",
		icon:<HiOutlineDocumentText className="h-5 w-5"/>,
		subMenu: [
			{ name: "Add Notice", href: "/about/events" },
			
		  ]
		
	},
	{
		id:10,
		name:"Contact",
		icon:<RiContactsLine className="h-5 w-5"/>,
		subMenu: [
			{ name: "Address", href: "/contact" },
			
		  ]
		
	},
]



	return (
		<div>
			<aside className="w-[320px] h-auto px-6 py-4  bg-black  text-white ">
				<nav className=" text-sm">
					<div className="space-y-2">
						<Link href={"/"} className="text-4xl font-bold  flex flex-col items-center content-center text-center pb-3">SoftyEdu</Link>
					</div>
					{/* DashBoard */}
					<div className=" border-y w-[290px]">
						<Link href="/dashboard" className="flex items-center p-2 space-x-3 rounded-md my-2 hover:bg-gray-200 hover:rounded-lg hover:text-black">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current  ">
								<path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
							</svg>
							<h2 className="text-sm font-semibold tracking-widest uppercase  ">Dashboard</h2>
						</Link>
					</div>
					{/* Corner */}
					<div className=''>
						{menu.map(items=>(
						<ul className="menu w-[290px] -ml-4 " key={items.id}>							
							<li>
								<details className="">
									<summary className="font-semibold uppercase hover:bg-gray-200 hover:rounded-lg hover:text-black">
										
									{items.icon}
										{items.name}
									</summary>
									{items.subMenu.map(menu=>(
									<ul key={menu.name} className='hover:bg-gray-200 hover:rounded-lg hover:text-black'>
										<li><a>{menu.name}</a></li>												
									</ul>
									))}
								</details>
							</li>							
						</ul>
						))}
					</div>
					<ul className="pt-4 pb-2 space-y-1 text-sm border-t text-white hover:text-black hover:bg-gray-200 hover:rounded-lg">						
						<li>
							<Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current  ">
									<path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
									<rect width="32" height="64" x="256" y="232"></rect>
								</svg>
								<span>Logout</span> 
							</Link>
						</li>
					</ul>
				</nav>
			</aside>
		</div>
	);
};

export default DashBoardSidebar;