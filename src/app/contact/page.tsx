import Image from "next/image";
import contactimg from "../../../public/assests/contactus.jpg";
import Header from "@/components/shared/Header/Header";
import { FaTelegramPlane } from "react-icons/fa";
import Footer from "@/components/shared/Footer/Footer";
const contact = () => {
  return (
    <>
      <Header />
      <div className="justify-center mx-44 ">
        <div className="w-64 mx-auto py-10">
          <p className="text-blue-600 text-center font-semibold mb-2">
            ---For Contact With Us---
          </p>
          <h3 className="text-xl font-semibold border-y-4 text-center py-3">
            Our Address
          </h3>
        </div>
        <div className="flex gap-5 justify-between">
          {/* first */}
          <div className="lg:px-10 lg:py-6 pt-7 border rounded shadow-md ">
            <h1 className="text-2xl font-bold text-blue-500 mb-10 text-center">
              Address
            </h1>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Dhaka, Bangladesh.</span>
              </p>
              
            </div>
          </div>
          {/* second */}
          <div className="lg:px-10 lg:py-6 pt-7 border rounded shadow-md">
            <h1 className="text-2xl font-bold text-blue-500 mb-10 text-center">
              Phone
            </h1>
            <div className="space-y-4">
             
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-blue-500"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+88012345678910</span>
              </p>

              
            </div>
          </div>
          {/* third */}
          <div className="lg:px-10 lg:py-6 pt-7 border rounded shadow-md">
            <h1 className="text-2xl font-bold text-blue-500 mb-10 text-center">
              Mail
            </h1>
            <div className="space-y-4">
              

              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6 text-blue-500"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>quickship@qship.com</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
      {/* email */}
      <div className="w-64 mx-auto py-10">
        <p className="text-blue-600 text-center font-semibold mb-2">
          ---For Contact With Us---
        </p>
        <h3 className="text-xl font-semibold border-y-4 text-center py-3">
          Send Us a Email
        </h3>
      </div>
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32  text-gray-800 border-[1px] border-black">
        <div className="flex flex-col justify-between">
          <Image
            src={contactimg}
            className="h-[500px] w-auto"
            alt="this is img"
          />
        </div>
        <form className="space-y-6">
          <div>
            <label className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Subject</label>
            <input
              id="text"
              type="text"
              className="w-full p-3 rounded dark:bg-gray-100"
            />
          </div>
          <div>
            <label className="text-sm">Message</label>
            <textarea
              id="message"
              rows="3"
              className="w-full p-3 rounded dark:bg-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="w-64 mx-auto py-10">
        <h3 className="text-xl font-semibold border-y-4 text-center py-3">
          Map
        </h3>
      </div>
      <div className="w-auto max-w-screen-xl m-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
          className="w-[1350px] h-[450px]"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default contact;
