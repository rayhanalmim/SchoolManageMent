import React from 'react';
import Image from "next/image";
import annual from "../../../../../../public/assests/doctorsCare/images/21.jpg";
import picnic1 from "../../../../../../public/assests/doctorsCare/images/2.3.jpg";
import picnic2 from "../../../../../../public/assests/doctorsCare/images/2.2.jpg";
import picnic3 from "../../../../../../public/assests/doctorsCare/images/12.jpg";
import picnic4 from "../../../../../../public/assests/doctorsCare/images/13.jpg";
import picnic5 from "../../../../../../public/assests/doctorsCare/images/14.jpg";
import picnic6 from "../../../../../../public/assests/doctorsCare/images/1.1.jpg";
import picnic7 from "../../../../../../public/assests/doctorsCare/images/16.jpg";
import picnic8 from "../../../../../../public/assests/doctorsCare/images/17.jpg";
import picnic9 from "../../../../../../public/assests/doctorsCare/images/19.jpg";
// import picnic1 from "../../../../../../public/assests/img/picnic1.jpg";
// import picnic2 from "../../../../../../public/assests/img/picnic2.jpg";
// import picnic3 from "../../../../../../public/assests/img/picnic3.jpg";
// import picnic4 from "../../../../../../public/assests/img/picnic4.jpg";
// import picnic5 from "../../../../../../public/assests/img/picnic5.jpg";
// import picnic6 from "../../../../../../public/assests/img/picnic6.jpg";
// import picnic7 from "../../../../../../public/assests/img/picnic7.jpeg";
// import picnic8 from "../../../../../../public/assests/img/picnic8.jpg";
// import picnic9 from "../../../../../../public/assests/img/picnic9.jpeg";
import { TProps } from '@/types';

const moreImage = ({params}:TProps) => {
	console.log(params);
    return (
        <div className='lg:w-[1260px] mx-auto lg:pt-0'>
           
            <section className="border rounded mx-auto py-6  bg-gray-100  text-gray-900 mb-5">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<Image src={annual} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  bg-gray-500 aspect-square" />
		<Image src={picnic1} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic2} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic3} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic4} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic5} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic6} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic7} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		<Image src={picnic8} className="w-full h-full rounded shadow-sm min-h-48  bg-gray-500 aspect-square" alt=""/>
		
		<Image src={picnic9} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3  bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
    );
};

export default moreImage;<div></div>
