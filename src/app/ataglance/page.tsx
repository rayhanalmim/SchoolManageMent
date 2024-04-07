import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Image from "next/image";
import scienceimg from "../../../public/assests/scienceclub.jpg";
const ataglance = () => {
  return (
    <div>
      <Header />
      <div className="lg:my-10">
      <div className="w-64 mx-auto py-5">
          <h3 className="text-xl font-semibold border-y-4 text-center py-4">
          At A Glance
          </h3>
        </div>
      {/* <h2 className="text-2xl font-bold text-center lg:mt-10 underline">At A Glance</h2> */}
      <p className="text-justify lg:mx-32 lg:my-5 ">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:mx-32  lg:gap-3">
      <Image src={scienceimg} className="h-auto w-auto" alt="" />
      <Image src={scienceimg} className="h-auto w-auto" alt="" />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ataglance;
