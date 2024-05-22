"use client"
import Image from "next/image";
// import prospectus from "../../../../../public/assests/admission/prospectus.png";
// import prospectus1 from "../../../../../public/assests/doctorsCare/admission/1.jpg";
// import prospectus2 from "../../../../../public/assests/doctorsCare/admission/2.jpg";
// import prospectus3 from "../../../../../public/assests/doctorsCare/admission/3.jpg";
import prospectus4 from "../../../../../public/assests/doctorsCare/admission/4.jpg";
// import prospectus5 from "../../../../../public/assests/doctorsCare/admission/5.jpg";
// import prospectus6 from "../../../../../public/assests/doctorsCare/admission/1.jpg";
// import prospectus7 from "../../../../../public/assests/doctorsCare/admission/2.jpg";
// import prospectus8 from "../../../../../public/assests/doctorsCare/admission/3.jpg";
// import prospectus9 from "../../../../../public/assests/doctorsCare/admission/4.jpg";
// import prospectus10 from "../../../../../public/assests/doctorsCare/admission/5.jpg";
// import prospectus11 from "../../../../../public/assests/doctorsCare/admission/1.jpg";
// import prospectus12 from "../../../../../public/assests/doctorsCare/admission/2.jpg";
// import prospectus13 from "../../../../../public/assests/doctorsCare/admission/3.jpg";
// import prospectus14 from "../../../../../public/assests/doctorsCare/admission/4.jpg";
import { ListItemSecondaryAction } from "@mui/material";

// const prospectus =[
//     {
//         id:1,
//         img:prospectus1
//     },
//     {
//         id:1,
//         img:prospectus2
//     },
//     {
//         id:1,
//         img:prospectus3
//     },
//     {
//         id:1,
//         img:prospectus4
//     },
//     {
//         id:1,
//         img:prospectus5
//     },
//     {
//         id:1,
//         img:prospectus6
//     },
//     {
//         id:1,
//         img:prospectus7
//     },
//     {
//         id:1,
//         img:prospectus8
//     },
//     {
//         id:1,
//         img:prospectus9
//     },
//     {
//         id:1,
//         img:prospectus10
//     },
//     {
//         id:1,
//         img:prospectus11
//     },
//     {
//         id:1,
//         img:prospectus12
//     },
//     {
//         id:1,
//         img:prospectus13
//     },
//     {
//         id:1,
//         img:prospectus14
//     },
// ]

const AdmissionInfo = () => {
    const dialog = (
        <dialog id="my_modal" className="modal">
            <div className="modal-box w-auto max-w-2xl">
                <div className="modal-action">
                    <form method="dialog ">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                </div>
                {/* {prospectus.map(items=>(
                <div key={items.id}> */}
                <Image src={prospectus4} className="h-auto w-auto" alt="this is prospectus" />
                {/* </div>
                ))} */}
            </div>
        </dialog>
    );

    const openModal = () => {
        document.getElementById('my_modal').showModal();
    };

    
    return (
        <div>
            <div className="lg:w-auto px-2 md:px-7 lg:px-20 bg-white border rounded mx-2 md:mx-0 lg:mx-0 mb-4 md:mb-0 lg:mb-0">
                <div className=" text-justify">
                    <h1 className="text-3xl font-bold leading-none text-center sm:text-4xl underline py-5">শুভেচ্ছা বাণী</h1>

                    <p>SfotyEdu স্কুলে ভর্তি কার্যক্রমে আপনাকে স্বাগতম। </p><br />
                    প্রিয় শিক্ষার্থী,<br />
                    SfotyEdu স্কুল এর ভর্তি পোর্টালে স্বাগতম! আমরা খুবই আনন্দিত যে, আপনি আমাদের এ ঐতিহ্যবাহী এবং মেধাবীদের পদচারণায় মুখরীত এ প্রতিষ্ঠানে ভর্তি হওয়ার জন্য বিবেচনা করছেন। আমরা একাডেমিক পড়াশোনায় উৎকর্ষতা সাধন, সৃজনশীলতা লালন, শিক্ষার্থীদেরকে বৈশ্বিক চ্যালেঞ্জ মোকাবেলা করার জন্য পড়াশোনা, গবেষণা এবং নৈতিকতার মাধ্যমে যোগ্য করে গড়ে তুলতে প্রতিশ্রুতিবদ্ধ। <br /><br />

                    আবেদন প্রক্রিয়ার প্রতিটি ধাপে আপনাকে সঠিক দিক-নির্দেষণা দিতে এবং আপনার প্রয়োজনীয় তথ্য ও কাগজপত্রের জন্য আমাদের ভর্তি কার্যক্রম সংশ্লিষ্ট টিম এখানে রয়েছে। নিচে আমাদের হেল্প সেন্টারে ক্লাস ভিত্তিক ভর্তি হওয়ার প্রয়োজনীয় তথ্য বিস্তারিত দেয়া আছে। <br /><br />

                    SfotyEdu স্কুলকে ভর্তির জন্য বিবেচনা করায় আপনাকে ধন্যবাদ।<br /><br />
                    মো. আলাউদ্দিন<br />
                    ভর্তি কার্যক্রম সমন্বয়ক। <br />
                    মোবাইল নং -0123456789
                </div>
                {/* admission info */}
                <div className=" bg-white-100  text-gray-800">
                    <div className="py-5 md:py-8 lg:py-8">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center sm:text-4xl underline mb-10">প্রতিটি ক্লাসের ভর্তি তথ্য নিচে দেওয়া হল</h1>
                        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 px-0 md:px-5 lg:px-8 text-center items-center text-xs md:text-base lg:text-xl">
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px]" onClick={openModal}>KG</button>
                            {dialog} 
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px]" onClick={openModal}>Play Ground</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] lg:border-r-[2px]" onClick={openModal}>Class 1</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px]" onClick={openModal}>Class 2</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px] md:border-r-[0px] lg:border-r-[0px] " onClick={openModal}>Class 3</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] lg:border-r-[2px]" onClick={openModal}>Class 4</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px]" onClick={openModal}>Class 5</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px]" onClick={openModal}>Class 6</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] lg:border-r-[2px]" onClick={openModal}>Class 7</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] border-r-[2px] md:border-r-[0px] lg:border-r-[0px]" onClick={openModal}>Class 8</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] md:border-b-[0px] lg:border-b-[0px] border-r-[2px]" onClick={openModal}>Class 9</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-b-[2px] md:border-b-[0px] lg:border-b-[0px] lg:border-r-[2px] " onClick={openModal}>Class 10</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-r-[2px]" onClick={openModal}>Class 11</button>
                            {dialog}
                            <button className="p-2 md:py-8 lg:py-12 border-r-[2px]" onClick={openModal}>Class 12</button>
                            {dialog}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionInfo;