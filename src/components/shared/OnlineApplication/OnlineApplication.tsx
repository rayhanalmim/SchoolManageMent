import Image from "next/image";
import Link from "next/link";
import apply from "../../../../public/assests/onlineApply.jpg"

const OnlineApplication = () => {
    return (
        <div>
            <div className="hero my-10 lg:w-[1260px] mx-auto">
                <div className="hero-overlay bg-opacity-60">
                <Image src={apply} className="h-full lg:h-52 w-full" alt="this is img icon" />
                </div>

                <div className="hero-content text-center text-bold text-black">
                    <div className="">
                        <p className="mb-5">Doctors Care Model School এ নির্ভরযোগ্য ও স্বল্প খরছে দ্রুত সময়ের মধ্যে ভর্তি হতে আজই অনলাইনে আবেদন করুন। </p>
                        <Link href="/admission/schoolAdmission">
                        <button className="btn btn-warning">Online Apply</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlineApplication;