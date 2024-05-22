import React from "react";
import "./WhyChoose.css";
import Container from "../../Container/Container";
import hero from "../../../../assets/images/hero6.png";
import hero2 from "../../../../assets/images/hero4.png";
import hero3 from "../../../../assets/images/Quoran.png";
import hero4 from "../../../../assets/images/classroom.png";
import hero5 from "../../../../assets/images/hero5.png";
import hero6 from "../../../../assets/images/idea.png";
import Image from "next/image";

const WhyChoose = () => {
  const chooseData = [
    {
      id: 1,
      title: "নিরাপত্তা",
      text: " আমাদের স্কুলে ছাত্র-ছাত্রী এবং শিক্ষক মহোদয় গনের জন্য রয়েছে পর্যাপ্ত নিরাপত্তা ব্যাবস্থা।",
    },

    {
      id: 1,
      title: " নিয়মিত পাঠদান",
      text: " যে কোন পরিস্থিতিতে নিয়মিত পাঠদান চালিয়ে যাওয়ার ব্যাপারে আমরা বিশেষ ভাবে প্রতিশ্রুতিবদ্ধ।",
    },

    {
      id: 1,
      title: " নুরানী , নাজেরা ও হিফ্জ",
      text: "হিফ্জ এর পাশাপাশি  রয়েছে বাংলা, ইংরেজি এবং জেনারেল ক্লাসের সুবিদা। ",
    },

    {
      id: 1,
      title: " পর্যাপ্ত শ্রেণীকক্ষ",
      text: " শিক্ষার্থীদের পাঠদানের জন্য রয়েছে আমাদের পর্যাপ্ত শ্রেণীকক্ষ এবং অন্যান্য সকল সুযোগ সুবিধা।",
    },

    {
      id: 1,
      title: "সৃজনশীল পদ্ধতিতে পাঠদান",
      text: " আধুনিক সিলেবাস এবং শিক্ষাব্যাবস্থা বিশেষ করে সৃজনশীল পদ্ধতির আলোকে পাঠদানে আমাদের শিক্ষক মহোদয় গন বিশেষ ভাবে প্রশিক্ষনপ্রাপ্ত।",
    },

    {
      id: 1,
      title: "খেলাধুলার সুব্যাবস্থা",
      text: " শিক্ষার্থীদের পরিপূর্ণ মেধাবিকাশে খেলাধুলা সহ এবং অন্যান্য এক্সট্রা কারিকুলাম এক্টিভিটির পর্যাপ্ত সুব্যাবস্থা রয়েছে।",
    },
  ];

  return (
    <Container className="my-2 md:my-4 lg:my-12">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold my-10 md:my-10 lg:my-0 text-center md:text-left lg:text-left">কেন আমাদের স্কুলে আসবেন?</h1>
      <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-8 place-items-center ">
        {chooseData.map((data, i) => (
          <div key={data.id}>
            <div className="chooseCard flex justify-between lg:mt-10">
              <div className="mr-6">
                <div className="">
                  {i === 0 ? (
                    <Image className="w-40" src={hero} alt="hero" />
                  ) : i === 1 ? (
                    <Image className="w-40" src={hero2} alt="hero" />
                  ) : i === 2 ? (
                    <Image className="w-40" src={hero3} alt="hero" />
                  ) : i === 3 ? (
                    <Image className="w-40" src={hero4} alt="hero" />
                  ) : i === 4 ? (
                    <Image className="w-40" src={hero6} alt="hero" />
                  ) : i === 5 ? (
                    <Image className="w-40" src={hero5} alt="hero" />
                  ) : null}
                </div>
              </div>
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold ">{data.title}</h3>
                <p className="leading-8">{data.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WhyChoose;



