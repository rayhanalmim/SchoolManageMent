
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
        <div className=" lg:w-[1260px] mx-auto md:flex lg:flex  lg:justify-between items-center mt-5 md:mt-14 lg:mt-14 mb-5 md:mb-48 lg:mb-48 text-center md:text-left lg:text-left">
            <div className="lg:w-[500px] mx-5 md:mx-5 lg:mx-0 mb-4 md:mb-0 lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">Best <span className="text-green-600 ">Educational</span> Environment</h2>
                <div className='border border-black md:w-20 lg:w-44 my-4 md:my-5 lg:my-10 '></div>
                <p className="text-justify lg:my-10">Even slightly believable. If you are going use passage of Lorem Ipsum need desire to obtain pain of itself, because it is pain de sires many pain of itself occur for your study <br /><br />

                Even slightly believable. If you are going use passage of Lorem Ipsum need desir</p>
                <button className="bg-blue-950 px-5 lg:py-3 text-white">Explore</button>
            </div>



            {/* <div className="w-auto lg:mr-10">
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
            </div> */}

             <div className="w-auto md:mr-14 lg:mr-14">
                <div>
                    <Image src={envir5} className="h-auto w-auto ml-10 md:-ml-[230px] lg:-ml-[230px] mt-[50px] md:mt-[150px] lg:mt-[100px]" alt="this is img" />
                </div>
                <div>
                    <Image src={envir6} className="h-auto w-auto -mt-[40px] md:-mt-[150px] lg:-mt-[150px] ml-[220px] md:ml-[25px] lg:ml-[25px]" alt="this is img" />
                </div>
                <div className="md:-mt-[100px] lg:-mt-[100px] flex flex-col">
                
                    <div>
                        <div className='bg-blue-500 md:h-[140px] lg:h-[140px] md:w-[140px] lg:w-[140px] rotate-45 rounded-xl lg:-ml-[140px] lg:mt-[64px]'></div>
                        <Image src={envir4} className="h-[200px] md:h-auto lg:h-auto w-auto rotate-45 rounded-xl ml-14 md:-ml-[139px] lg:-ml-[139px] md:-mt-[125px] lg:-mt-[125px] " alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-blue-950  md:h-[290px] lg:h-[290px] md:w-[290px] lg:w-[290px] rotate-45 rounded-xl md:ml-[32px] lg:ml-[32px] md:-mt-[100px] lg:-mt-[100px]'></div>
                        <Image src={envir1} className="h-[200px] md:h-auto lg:h-auto w-auto rotate-45 rounded-xl  ml-14 md:-mt-[290px] lg:-mt-[290px]" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-green-600 lg:h-[190px] lg:w-[190px] rotate-45 rounded-xl lg:-ml-[270px] lg:-mt-[180px]'></div>
                        <Image src={envir3} className="h-[200px] lg:h-auto w-auto rotate-45 rounded-xl lg:-ml-[250px] ml-14 lg:-mt-[190px]" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-[#27b8a7] lg:h-[225px] lg:w-[225px] rotate-45 rounded-xl lg:-ml-[120px] lg:-mt-[3px]'></div>
                        <Image src={envir2} className="h-[200px] lg:h-auto w-auto rotate-45 rounded-xl lg:-ml-[120px] ml-14 lg:-mt-[249px]" alt="this is img" />
                    </div>
                </div>  
                             {/* --------------- */}
                <div>
                    <Image src={envir7} className="h-auto w-auto ml-10 md:ml-0 lg:-ml-[250px] lg:-mt-[150px]" alt="this is img" />
                </div>
                <div>
                    <Image src={envir8} className="h-auto w-auto ml-[220px] md:ml-0 lg:ml-[160px] -mt-[20px] md:-mt-0 lg:-mt-[40px]  " alt="this is img" />
                </div>
            </div>
        </div>
    );
};

export default Environment;