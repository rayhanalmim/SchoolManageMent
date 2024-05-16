import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import img from "../../../public/assests/logInReg/signup.jpg";
import google from "../../../public/assests/logInReg/google.png";
import fb from "../../../public/assests/logInReg/fb.svg";
import { IoMdPerson } from "react-icons/io";


const signup = () => {
  return (
    <div className="bg-gray-100  ">
      <div className="lg:w-[1260px]  py-8 pt-20 lg:pt-24 mx-auto ">
        <div className="shadow-xl mx-2 lg:mx-48 my-5 bg-white rounded-lg p-1 lg:p-8">
          <div className="grid md:grid-cols-2 ">              
            <div className="w-auto space-y-8 mt-2 lg:mt-5 mx-auto">
              <h2 className="text-3xl font-bold">Registration</h2>
              
              {/* name */}
              <div className="flex gap-2 items-center border border-b-[1px] border-white border-b-gray-300 ">
                    <IoMdPerson />
                    <input type="text" name="full_name" className="text-sm font-light w-full pl-1 focus:outline-none" placeholder="Full Name" />
              </div>
              
              {/* email */}
              <div className="flex gap-2 items-center border border-b-[1px] border-white border-b-gray-300 ">
                    <MdEmail />
                    <input type="email" name="full_name" className="text-sm font-light w-full pl-1 focus:outline-none" placeholder="Email" />
              </div>

              {/* password */}                    
              <div className="flex gap-2 items-center border border-b-[1px] border-white border-b-gray-300">
                <RiLockPasswordFill />
                <input type="password" name="full_name" className="click text-sm font-light w-full pl-1 focus:outline-none" placeholder="Password" />
              </div>
                    
              {/*Re-password */}                   
              <div className="flex gap-2 items-center border border-b-[1px] border-white border-b-gray-300 ">
                <RiLockPasswordLine />
                <input type="password" name="full_name" className="click text-sm font-light w-full pl-1 focus:outline-none" placeholder="Repeat Your Password" />
              </div>                    
              <div className="flex text-sm font-light items-center">
                    <input type="checkbox" value="" className="ml-1" /> 
                    
                    <h2 className="pl-1">I agree all statements in</h2>
                    <Link href={"#"} className="underline ">
                        Terms of service
                    </Link>
              </div>  

              {/* Registration button */}
              <input type="submit" value="Register" className="px-6 py-3 bg-[#6dabe4] text-base text-white font-light" />
              </div>


              <div className="flex lg:justify-center lg:items-center lg:content-center  mt-6 md:mt-0 lg:mt-0">
                <Image src={img} alt="login" className="h-auto w-auto rounded-lg" />
              </div>
            </div>
        
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-5 space-y-4 md:space-y-0 lg:space-y-0">
              <div className="flex items-center gap-2 pl-16">
                <h2 className="text-sm">Or, Log In with - </h2>
                <Link href={"#"}>
                  <Image src={google} className="h-5 w-5 rounded" alt="this is google" />
                  
                </Link>
                <Link href={"#"}>
                  <Image src={fb} className="h-5 w-5 rounded" alt="this is facebook" />
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="flex items-center gap-1 text-sm">Already a Member? Please 
                <Link href={"/login"} className="text-purple-600 hover:underline text-base text-center"> Log In.
                </Link>  </h2>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default signup;
