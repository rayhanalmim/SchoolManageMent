
import certified from "../../../../public/assests/features/certificate.png"
import bag from "../../../../public/assests/features/bag.png"
import bird from "../../../../public/assests/features/bird.png"
import bus from "../../../../public/assests/features/bus.png"
import calander from "../../../../public/assests/features/calander.png"
import baze from "../../../../public/assests/features/baze.png"
import Image from "next/image"


const sFeatures = [
    {
        img: certified,
        title: "Certified",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia."
    },
    {
        img: bag,
        title: "Daycare",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia."
    },
    {
        img: bird,
        title: "Learning",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia."
    },
    {
        img: bus,
        title: "Outdoors",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia."
    },
    {
        img: calander,
        title: "Healthy Meals",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia."
    },
    {
        img: baze,
        title: "Events",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia."
    },
]
const SchoolFeatures = () => {
    return (
        <div className="lg:w-[1260px] mx-auto">
            <section className="  text-gray-800">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 lg:p-0 lg:pt-16">
                    <h2 className="text-3xl font-normal leading-none text-center sm:text-5xl pb-4">School Features</h2>
                    <p className="mt-1 text-center text-gray-400 lg:mx-52 pb-5 md:pb-10 lg:pb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum ipsum voluptatem consequatur ratione.</p>
                    <div className="grid gap-6 md:gap-8 lg:gap-16 sm:p-3 md:grid-cols-3 lg:px-0 xl:px-0">
                        {sFeatures.map(items => (
                            <div key={items.title}>
                                <div className="flex items-end gap-2 pb-2">
                                    <Image src={items.img} className="h-auto w-auto" alt="this is img icon" />
                                    <h3 className="font-medium text-xl">{items.title}</h3>
                                </div>
                                <p className="mt-1  text-gray-400 text-justify text-thin">{items.description}</p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default SchoolFeatures;