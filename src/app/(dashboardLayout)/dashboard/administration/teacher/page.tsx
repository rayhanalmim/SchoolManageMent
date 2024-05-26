
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import SearchIcon from '@mui/icons-material/Search';
import teacher from "../../../../../public/assests/teacher/teachers-1.jpg"
import teacher1 from "../../../../../../public/assests/teacher/teachers-9.png"
import teacher2 from "../../../../../../public/assests/teacher/teachers-2.jpg"
import teacher3 from "../../../../../../public/assests/teacher/teachers-3.jpg"
import teacher4 from "../../../../../../public/assests/teacher/teachers-4.jpg"
import teacher5 from "../../../../../../public/assests/teacher/teachers-5.jpg"
import teacher6 from "../../../../../../public/assests/teacher/teachers-6.jpg"
import teacher7 from "../../../../../../public/assests/teacher/teachers-7.jpg"
import teacher8 from "../../../../../../public/assests/teacher/teachers-8.jpg"
import Link from "next/link";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
// import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CiEdit } from "react-icons/ci";
import PersonIcon from '@mui/icons-material/Person';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const teachers = [
    {
        id: 1,
        Name: "জনাব মাহমুদুর রহমান",
        Subject: "বাংলা",
        img: teacher1,
    },
    {
        id: 2,
        Name: "জনাব মোস্তফা কামাল",
        Subject: "ইংরেজী",
        img: teacher2,
    },
    {
        id: 3,
        Name: "জনাব হুমায়ুন কবির",
        Subject: "গণিত",
        img: teacher3,
    },
    {
        id: 4,
        Name: "জনাবা খালেদা আক্তার",
        Subject: "পদার্থ",
        img: teacher4,
    },
    {
        id: 5,
        Name: "জনাব মুজিবুর রহমান",
        Subject: "রসায়ন",
        img: teacher5,
    },
    {
        id: 6,
        Name: "জনাব আবদুল মান্নান",
        Subject: "জীববিজ্ঞান",
        img: teacher6,
    },
    {
        id: 7,
        Name: "জনাব ফাতেমা ইয়াসমিন",
        Subject: "কৃষি শিক্ষা",
        img: teacher7,
    },
    {
        id: 8,
        Name: "জনাব কামরুল হাসান",
        Subject: "সামাজিক বিজ্ঞান",
        img: teacher8,
    },
]


const Teacherdashboard = () => {
    return (
        <>
            <div className='flex justify-between items-center content-center bg-white p-2 rounded-lg border shadow-sm'>
                <div>
                    <div className='space-y-2'>
                        <h2 className='text-4xl pl-2 font-semibold'>Teachers</h2>
                    </div>
                </div>

                <div >
                    <div className="relative border rounded-md w-[300px] py-1" >
                        <span className="absolute inset-y-0 left-0 flex items-center py-4">
                            <button type="submit" className="p-2 focus:outline-none focus:ring">
                                <SearchIcon className="h-5 w-5" />
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm dark:border- rounded-md focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                    </div>
                </div>
                <div>
                    <label className="w-full">
                        <select className="select select-bordered w-full">
                            <option disabled selected>
                                -- Select --
                            </option>
                            <option> Newest </option>
                            <option>Oldest</option>
                        </select>
                    </label>
                </div>
                <div>
                    <Link href={"/dashboard/administration/teacher/addnewteacher"}>
                        <button className='btn btn-primary'><PersonAddAltIcon className='h-5 w-5' /> Add New Teacher</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full  gap-x-3 gap-y-3 md:gap-y-5 lg:gap-y-5 px-4 md:px-1 lg:px-0 my-5 md:my-0 lg:my-10">
                    {teachers.map(items => (
                        <div key={items.id} className="border rounded w-full py-2 lg:py-5 shadow-md bg-white">
                            <div className="flex gap-3 relative justify-end pr-4">
                                <button className='bg-gray-100 p-[2px] rounded'> <CiEdit className="h-6 w-6" /> </button>
                                <button className='bg-gray-100 p-[2px] rounded'> <DeleteOutlineIcon /></button>
                            </div>
                            <div className="flex flex-col justify-center m-4 text-center">
                                {/* <Image src={items.img} className="lg:h-10 lg:w-20 mx-auto mb-4 bg-center circl rounded-full px-3" alt="img" /> */}
                                <Image src={items.img} className="self-center flex-shrink-0 w-28 h-28 mb-1 bg-center bg-cover rounded-full dark:bg-gray-500" alt="img" />
                            </div>
                            <div className="flex flex-col items-center">
                                {/* <Link href={`/administration/teachingStaff/${items.id}`} >  */}
                                {/* <Link href={"#"} > */}
                                    <h4 className="text-xl font-semibold ">{items.Name}</h4>
                                {/* </Link> */}
                                <p className="text-sm text-gray-600">{items.Subject}</p>
                                <div className="flex gap-1 mt-1 ">
                                    <Link rel="noopener noreferrer" href="#" title="Twitter" className="text-gray-600">
                                        <FaFacebookF className="w-4 h-4" />
                                    </Link>
                                    <Link rel="noopener noreferrer" href="#" title="LinkedIn" className="text-gray-600 ">
                                        <FaXTwitter className="w-4 h-4" />
                                    </Link>
                                    <Link rel="noopener noreferrer" href="#" title="GitHub" className="text-gray-600 ">
                                        <FaLinkedinIn className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-4">
                                <button className="btn  btn-primary btn-sm  flex  text-white"> <PersonIcon/> View Profile</button>
                                <button className="btn btn-light btn-sm "><LocalPostOfficeIcon/> Chat</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Teacherdashboard;