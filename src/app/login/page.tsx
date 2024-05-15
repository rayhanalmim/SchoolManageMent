
// "use client";

// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import useAuth from "../../components/hooks/useAuth";
// import { useRouter } from "next/navigation";
// import usePublicAxios from "@/components/hooks/usePublicAxios";
// import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import img from "../../../public/assests/logInReg/login1.jpg";
import google from "../../../public/assests/logInReg/google.png";
import fb from "../../../public/assests/logInReg/fb.svg";




const login = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const publicAxios = usePublicAxios();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const { login, googleUser, githubUser } = useAuth();
  //   const router = useRouter()

  //   const onLoginSubmit = async (data) => {
  //     await login(data?.email, data?.password)
  //       .then((result) => {
  //         console.log(result?.user);
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         toast.error("Something wrong....try agin");
  //       });
  //   };

  //   const onGoogleSubmit = () => {
  //     googleUser()
  //       .then((result) => {
  //         const userInfo = {
  //           name: result?.user?.displayName,
  //           email: result?.user?.email,
  //         };

  //         publicAxios.post("/users", userInfo).then((res) => {
  //           console.log(res.data);
  //           toast.success("Successfully Login");
  //           router.push("/")
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         toast.error("Something wrong....try agin");
  //       });
  //   };

  //   const onGithubSubmit = () => {
  //     githubUser()
  //       .then((result) => {
  //         const userInfo = {
  //           name: result?.user?.displayName,
  //           email: result?.user?.email,
  //         };

  //         publicAxios.post("/users", userInfo).then((res) => {
  //           console.log(res.data);
  //           toast.success("Successfully Login");
  //           router.push("/")
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error.message);
  //         toast.error("Something wrong....try agin");
  //       });
  //   };
  return (
    <div className="bg-gray-100  ">
      <div className="w-[1260px]  py-8 pt-24 mx-auto ">
        <div className="shadow-xl mx-48 my-5 bg-white rounded-lg p-8">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col items-center space-y-5">
              <Image src={img} alt="login" className="h-auto w-auto rounded-lg" />
            </div>
            <div className="w-auto space-y-8 mt-5">
              <h2 className="text-3xl font-bold">Log In</h2>
              <div className="flex gap-2 items-center border border-b-[1px] border-white border-b-gray-300 ">
                <MdEmail />
                <input type="email" name="full_name" className=" text-sm font-light w-full pl-1 focus:outline-none" placeholder="Email" />
              </div>
              <div className="space-y-1">
                <div className="flex gap-2 items-center border border-b-[1px] border-white border-b-gray-300 ">
                  <RiLockPasswordFill />
                  <input type="password" name="full_name" className="click text-sm font-light w-full  pl-1 focus:outline-none" placeholder="Password" />
                </div>
                <h2 className="text-yellow-500 text-right justify-end text-xs font-bold">Forgot Password?</h2>
              </div>
              <div className="flex gap-2 text-sm font-light">
                <input type="checkbox" value="" /> Remember me
              </div>
              {/* <button className="btn btn-info">Log In</button> */}
              <input type="submit" value="Log In" className="btn bg-[#6dabe4] text-base text-white font-light" />
            </div>
          </div>

          <div className="grid grid-cols-2 items-center mt-5 ">
            <div className="flex flex-col items-center">
              <h2 className="flex items-center gap-2 text-sm">Create an Account?
                <Link href={"/signup"} className="text-purple-600 hover:underline text-base text-center"> Register Now.
                </Link>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="text-sm">Or, Log In with -   </h2>
              <Link href={"#"}>
                <Image src={google} className="h-5 w-5 rounded" alt="this is google" />

              </Link>
              <Link href={"#"}>
                <Image src={fb} className="h-5 w-5 rounded" alt="this is facebook" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
