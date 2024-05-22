import Image from 'next/image';
import envir1 from "../../../../public/assests/doctorsCare/environment/1.jpg"
import envir2 from "../../../../public/assests/doctorsCare/environment/2.jpg"
import envir3 from "../../../../public/assests/doctorsCare/environment/3.jpg"
import envir4 from "../../../../public/assests/doctorsCare/environment/4.jpg"
// import envir1 from "../../../../public/assests/environment/about-1.webp"
// import envir2 from "../../../../public/assests/environment/about-2.webp"
// import envir3 from "../../../../public/assests/environment/about-3.webp"
// import envir4 from "../../../../public/assests/environment/about-4.webp"
import envir5 from "../../../../public/assests/environment/icon-1.webp"
import envir6 from "../../../../public/assests/environment/icon-2.webp"
import envir7 from "../../../../public/assests/environment/icon-3.webp"
import envir8 from "../../../../public/assests/environment/icon-4.webp"
import './Environment.css'

const Environment = () => {
    return (
        <div className=" lg:w-[1260px] mx-auto lg:flex  lg:justify-between items-center mt-5 md:mt-14 lg:mt-14 mb-5 md:mb-8 lg:mb-48 text-center md:text-left lg:text-left">
            <div className="lg:w-[500px] mx-5 md:mx-5 lg:mx-0 mb-4 md:mb-0 lg:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">Best <span className="text-green-600 ">Educational</span> Environment</h2>
                <div className='border border-black md:w-20 lg:w-44 my-4 md:my-5 lg:my-10 '></div>
                <p className="text-justify lg:my-10">Even slightly believable. If you are going use passage of Lorem Ipsum need desire to obtain pain of itself, because it is pain de sires many pain of itself occur for your study <br /><br />

                Even slightly believable. If you are going use passage of Lorem Ipsum need desir</p>
                <button className="bg-blue-950 px-5 lg:py-3 mt-4 md:mt-2 lg:mt-0 text-white">Explore</button>
            </div>

             <div className="w-auto md:mr-4 lg:mr-14 mx-2 md:mx-0 lg:mx-0">
                <div>
                    <Image src={envir5} className="lg:h-auto lg:w-auto ml-10 md:ml-[170px] lg:-ml-[230px] mt-[50px] md:mt-[80px] lg:mt-[100px] smallImg" alt="this is img" />
                </div>
                <div>
                    <Image src={envir6} className="lg:h-auto lg:w-auto -mt-[40px] md:-mt-[60px] lg:-mt-[150px] ml-[220px] md:ml-[400px] lg:ml-[25px] smallImg" alt="this is img" />
                </div>

                {/* -------------Main Images----------------- */}
                <div className="mt-[70px] md:-mt-[100px] lg:-mt-[100px] flex flex-col ">
                    <div>
                        <div className='bg-blue-500 md:h-[140px] lg:h-[140px] md:w-[140px] lg:w-[140px] rotate-45 rounded-xl md:ml-[240px] lg:-ml-[140px] md:mt-[64px] lg:mt-[64px]'></div>
                        <Image src={envir4} className="md:h-[140px] lg:h-[140px] md:w-[140px] lg:w-[140px] rotate-45 rounded-xl ml-10 md:ml-[239px] lg:-ml-[139px] -mt-[35px] md:-mt-[125px] lg:-mt-[125px]  imgResponsive" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-yellow-300 md:h-[290px] lg:h-[290px] md:w-[290px] lg:w-[290px] rotate-45 rounded-xl md:ml-[400px] lg:ml-[32px] md:-mt-[100px] lg:-mt-[100px]'></div>
                        <Image src={envir1} className="md:h-[290px] lg:h-[290px] md:w-[290px] lg:w-[290px] rotate-45 rounded-xl  ml-[50px] md:ml-[380px] lg:ml-0 md:-mt-[290px] lg:-mt-[290px] imgResponsive" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-green-600 md:h-[190px] lg:h-[190px] md:w-[190px] lg:w-[190px] rotate-45 rounded-xl md:ml-[90px] lg:-ml-[270px] md:-mt-[180px] lg:-mt-[180px]'></div>
                        <Image src={envir3} className="md:h-[190px] lg:h-[190px] md:w-[190px] lg:w-[190px] rotate-45 rounded-xl md:ml-[110px] lg:-ml-[250px] ml-10 md:-mt-[190px] lg:-mt-[190px] imgResponsive" alt="this is img" />
                    </div>
                    <div>
                        <div className='bg-[#8d5afb] md:h-[225px] lg:h-[225px] md:w-[225px] lg:w-[225px] rotate-45 rounded-xl md:ml-[240px] lg:-ml-[120px] md:-mt-[3px] lg:-mt-[3px]'></div>
                        <Image src={envir2} className="md:h-[225px] lg:h-[225px] md:w-[225px] lg:w-[225px] rotate-45 rounded-xl md:ml-[240px] lg:-ml-[120px] ml-10 md:-mt-[249px] lg:-mt-[249px] imgResponsive" alt="this is img" />
                    </div>
                </div>  
                {/* ------------------------------ */} 


                <div>
                    <Image src={envir7} className="lg:h-auto lg:w-auto ml-10 md:ml-52 lg:-ml-[250px] lg:-mt-[150px]" alt="this is img" />
                </div>
                <div>
                    <Image src={envir8} className="lg:h-auto lg:w-auto ml-[200px] md:ml-96 lg:ml-[160px] -mt-[20px] md:-mt-0 lg:-mt-[40px]  " alt="this is img" />
                </div>
            </div>
        </div>
    );
};

export default Environment;