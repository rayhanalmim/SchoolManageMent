import Image from 'next/image';
import React from 'react';
import teacher from "../../../../../public/assests/teacher/teacher-1.webp"
const teacherDetails = ({params}) => {
  console.log(params);
  return (
    <div className="lg:w-[1260px] lg:pt-24 mx-auto lg:pb-5">
      {/* img,social icon */}
      <div></div>
      {/* description */}
      <div></div>
      <div className="flex flex-col overflow-hidden shadow-sm lg:flex-row gap-2">
        <Image src={teacher} className="h-auto w-auto" alt="" />
          <div className="flex flex-col justify-center flex-1 p-2  bg-gray-50">
            <h3 className="text-3xl font-bold">একুশে পদক - ২০২৩</h3>
            <p className="my-6  text-gray-600">একুশে পদক বাংলাদেশের একটি জাতীয় এবং দ্বিতীয় সর্বোচ্চ বেসামরিক পুরস্কার। বাংলাদেশের বিশিষ্ট ভাষাসৈনিক, ভাষাবিদ, সাহিত্যিক, শিল্পী, শিক্ষাবিদ, গবেষক, সাংবাদিক, অর্থনীতিবিদ, দারিদ্র্য বিমোচনে অবদানকারী, সামাজিক ব্যক্তিত্ব ও প্রতিষ্ঠানকে জাতীয় পর্যায়ে অনন্য অবদানের স্বীকৃতি প্রদানের উদ্দেশ্যে ১৯৭৬ সাল থেকে একুশে পদক প্রদান করা হচ্ছে। ভাষা আন্দোলনের শহীদদের স্মরণে ১৯৭৬ সালে এই পদকের প্রচলন করা হয়। ২০১২ সাল পর্যন্ত ৩৬১ জন গুণী ব্যক্তি ও ২টি প্রতিষ্ঠানকে একুশে পদক প্রদান করা হয়েছে।</p>

          </div>
      </div>
    </div>
  );
};

export default teacherDetails;