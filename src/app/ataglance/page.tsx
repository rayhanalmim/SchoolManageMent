import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Image from "next/image";
import scienceimg from "../../../public/assests/scienceclub.jpg";
import historyImg from "../../../public/assests/historyImg.jpg";
import student from "../../../public/assests/student.jpg";
const ataglance = () => {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <div className="w-64 mx-auto pt-5 md:pt-4 lg:pt-28 mb-1 md:mb-2 lg:mb-4">
          <h3 className="text-xl font-semibold border-y-4 text-center py-1 md:py-2 lg:py-4">
            At A Glance
          </h3>
        </div>
        {/* <h2 className="text-2xl font-bold text-center lg:mt-10 underline">At A Glance</h2> */}
        <p className="text-justify mx-5 md:mx-8 lg:mx-32 lg:my-5 ">
          Doctors Care Model School is a Cambridge International Education-approved
          institution. It is part of the learning of over 10000 Cambridge Schools
          in more than 160 countries. Doctors Care Model School has introduced STEAM
          Education for the first time in Bangladesh. STEAM education is a highly
          effective educational approach that is followed by many developed
          countries. STEAM use Science, Technology, Engineering, Arts, and
          Mathematics as access points for guiding student inquiry, dialogue, and
          critical thinking. The end results are students who use critical
          thinking and take risks, engage in experiential learning, persist in
          problem-solving, embrace collaboration and work through the creative
          process.
          <br />
          <br />
          The teaching curriculum is prepared in such a way that students can be
          self-educated and self-sufficient. No need of any additional tutor or
          parent’s help at home. All the lessons are attractive, class-based, and
          full of fun. Incorporation of coding and robotics applications within
          the schooling methodologies by the trained and skilled teachers helps
          the students to grow quickly and to become perfect innovative citizens
          hastening the arrival of the changes in the fourth industrial
          revolution.
          <br />
          <br />
          We hope our curriculum and tools could be the path of the success for
          the students in the future. Our institution’s goal is shaping your child
          toward their bright future. May make this world a better place.
        </p>
        <div className="space-y-4">
         
          <section className="py-6  dark:text-gray-900">
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
              

              <Image src={historyImg} className="w-full h-full col-span-2 row-span-2 rounded shadow-lg min-h-96 md:col-start-3 md:row-start-1  aspect-square border" alt="" />
              <Image src={student} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
              <Image src={scienceimg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
              <Image src={scienceimg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
              <Image src={historyImg} className="w-full lg:h-full rounded shadow-lg min-h-48 border aspect-square" alt="" />
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ataglance;
