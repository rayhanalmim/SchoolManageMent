import React from "react";
import Container from "../../Container/Container";
import { HiMiniUser, HiOutlineBookOpen } from "react-icons/hi2";
import "./Hero.css";
import { FaFileAlt, FaUserMd, FaUserTie } from "react-icons/fa";
const Hero = () => {
  const heroData = [
    {
      id: 1,
      title: "অভিজ্ঞ শিক্ষক মন্ডলী",
      text: "আমাদের রয়েছে একঝাক দীর্ঘদিনের অভিজ্ঞ শিক্ষকমন্ডলী, আপনাদের সন্তানের ভবিষ্যত গঠনে আমাদের শিক্ষকরা প্রতিশ্রুতিবদ্ধ",
      icon: "",
    },

    {
      id: 2,
      title: "মান সম্মত শিক্ষাসেবা",
      text: "শিক্ষার মান নিয়ে আমরা কোন কম্প্রোমাইজ করিনা, আমাদের কাছে পাচ্ছেন শতভাগ মান সম্পন্ন শিক্ষা সেবার সর্বোচ্চ নিশ্চয়তা",
      icon: "",
    },

    {
      id: 3,
      title: " বিনামূল্যে বই বিতরন",
      text: "প্রতিবছর পহেলা জানুয়ারী ১ম থেকে ৯ম শ্রেণীর শিক্ষার্থীদের মাঝে বিনা মূল্য্যে বোর্ড বই বিতরন করা হয়।",
      icon: "",
    },

    {
      id: 4,
      title: "সনদপত্র",
      text: "পরীক্ষা শেষে ঝামেলা মুক্ত সনদপত্র উত্তোলনে আমাদের পরিচালনা কমিটি সর্বোচ্চ ছাত্র বান্ধব",
      icon: "",
    },
  ];
  return (
    <div className="heroSectionWrap">
      <Container>
        <div className="grid grid-cols-1  xl:grid-cols-4 md:grid-cols-2 gap-10 ">
          {heroData.map((data, i) => (
            <div key={data.id}>
              <div
                className={
                  i === 0
                    ? "heroCard bg-[#9145B6] hover:bg-[#4942E4] "
                    : i === 1
                    ? "heroCard bg-[#5D50C6]  hover:bg-[#8CC152]  "
                    : i === 2
                    ? "heroCard bg-[#F1453D]  hover:bg-[#9145B6]  "
                    : i === 3
                    ? "heroCard bg-[#8CC152]  hover:bg-[#F1453D] "
                    : i === 5
                    ? "heroCard bg-[#4942E4]  hover:bg-[#9145B6] "
                    : ""
                }
              >
                <div className="iconWrap">
                  {i === 0 ? (
                    <FaUserTie className="learningIcon" />
                  ) : i === 1 ? (
                    <FaUserMd className="learningIcon" />
                  ) : i === 2 ? (
                    <HiOutlineBookOpen className="learningIcon" />
                  ) : i === 3 ? (
                    <FaFileAlt className="learningIcon" />
                  ) : null}
                </div>
                <div className="my-3 space-y-3">
                  <h2 className="text-xl md:text-2xl font-semibold ">{data.title}</h2>
                  <p className="sm:text-sm ">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
