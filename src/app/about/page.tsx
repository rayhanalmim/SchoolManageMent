import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";

const about = () => {
  return (
    <div>
      <Header />
      <h2 className="text-2xl font-bold text-center mt-10">About Us</h2>
      <p className="text-justify mx-32 my-10 ">
        NICE School & College is a Cambridge International Education-approved
        institution. It is part of the learning of over 10000 Cambridge Schools
        in more than 160 countries. NICE School & College has introduced STEAM
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
      <Footer />
    </div>
  );
};

export default about;
