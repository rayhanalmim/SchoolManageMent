
import Image from 'next/image';
import envir1 from "../../../../public/assests/environment/about-1.webp"
import envir2 from "../../../../public/assests/environment/about-2.webp"
import envir3 from "../../../../public/assests/environment/about-3.webp"
import envir4 from "../../../../public/assests/environment/about-4.webp"
import envir5 from "../../../../public/assests/environment/icon-1.webp"
import envir6 from "../../../../public/assests/environment/icon-2.webp"
import envir7 from "../../../../public/assests/environment/icon-3.webp"
import envir8 from "../../../../public/assests/environment/icon-4.webp"

const Environment = () => {
    return (
        <div className=" lg:w-[1260px] mx-auto flex justify-between items-center mt-20 mb-48">
            <div className="w-[500px]">
                <h2 className="text-6xl font-bold">Best <span className="text-green-600 ">Educational</span> Environment</h2>
                <div className='border border-black lg:w-44 my-10 '></div>
                <p className="text-justify my-10">Even slightly believable. If you are going use passage of Lorem Ipsum need desire to obtain pain of itself, because it is pain de sires many pain of itself occur for your study <br /><br />

                    Even slightly believable. If you are going use passage of Lorem Ipsum need desir</p>
                <button className="bg-blue-950 px-5 py-3 text-white">Explore</button>
            </div>

            <div className="w-auto mr-10">
                <div>
                    <Image src={envir5} className="h-auto w-auto -ml-[230px] mt-[100px]" alt="this is img" />
                </div>
                <div>
                    <Image src={envir6} className="h-auto w-auto -mt-[150px] ml-[25px]" alt="this is img" />
                </div>
                <div className="-mt-[100px]">
                    <div>
                        <div className='bg-blue-500 h-[140px] w-[140px] rotate-45 rounded-xl -ml-[140px] mt-[64px]'></div>
                        <Image src={envir4} className="h-auto w-auto rotate-45 rounded-xl -ml-[139px] -mt-[125px]" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-blue-950 h-[290px] w-[290px] rotate-45 rounded-xl ml-[32px] -mt-[100px]'></div>
                        <Image src={envir1} className="h-auto w-auto rotate-45 rounded-xl  -mt-[290px]" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-green-600 h-[190px] w-[190px] rotate-45 rounded-xl -ml-[270px] -mt-[180px]'></div>
                        <Image src={envir3} className="h-auto w-auto rotate-45 rounded-xl -ml-[250px] -mt-[190px]" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-[#27b8a7] h-[225px] w-[225px] rotate-45 rounded-xl -ml-[120px] -mt-[3px]'></div>
                        <Image src={envir2} className="h-auto w-auto rotate-45 rounded-xl -ml-[120px] -mt-[249px]" alt="this is img" />
                    </div>
                </div>               
                <div>
                    <Image src={envir7} className="h-auto w-auto -ml-[250px] -mt-[150px]" alt="this is img" />
                </div>
                <div>
                    <Image src={envir8} className="h-auto w-auto ml-[160px] -mt-[40px]" alt="this is img" />
                </div>
            </div>
        </div>
    );
};

export default Environment;