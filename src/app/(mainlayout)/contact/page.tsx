import Image from "next/image";
import contactimg from "../../../../public/assests/contact/contactus.jpg";
import contactIcon from "../../../../public/assests/contact/telephone.png";
import emailIcon from "../../../../public/assests/contact/email.png";
import locationIcon from "../../../../public/assests/contact/location.png";
 
const contact = () => {
  return (
    <>

      <div className="lg:w-[1260px] items-center justify-center content-center  mx-2 md:mx-0 lg:mx-auto">

        {/* email */}
        <div className="w-64 mx-auto py-6 md:py-8 lg:py-10">

          <h3 className="text-xl font-semibold border-y-4 text-center py-3">
            Send Us a Email
          </h3>
        </div>

        <div className="grid lg:max-w-screen-xl grid-cols-1 lg:gap-5 mx-auto rounded-lg md:grid-cols-2 px-1 md:px-8 lg:px-10 py-1 md:py-5 lg:py-5  text-gray-800 border-[1px] shadow-md justify-center ">
         
            <Image
              src={contactimg}
              className="lg:h-[500px] w-auto"
              alt="this is img"
            />
         
          <form className="space-y-6">
            <div>
              <label className="text-sm">Full name</label>
              <input
                id="name"
                type="text"
                placeholder=""
                className="w-full p-3 rounded  bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded  bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm">Subject</label>
              <input
                id="text"
                type="text"
                className="w-full p-3 rounded  bg-gray-100"
              />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                id="message"
                rows="3"
                className="w-full p-3 rounded  bg-gray-100"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded  bg-violet-600  text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
        {/* map */}
        <div className="w-64 mx-auto py-10">
          <h3 className="text-xl font-semibold border-y-4 text-center py-3">
            Map
          </h3>
        </div>

        <div className="shadow-md rouded border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
            className="lg:w-[1260px] h-[450px]"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>


        {/* address */}
        <div>
          <div className="lg:w-[1260px] lg:mx-auto  lg:my-5 ">
            <div className="w-64 mx-auto py-10">
              <h3 className="text-xl font-semibold border-y-4 text-center py-3">
                Our Address
              </h3>
            </div>
            <div className="lg:flex lg:gap-5 justify-between lg:px-8 items-center content-center text-center  mb-5 lg:mb-0 space-y-4 lg:space-y-4 border border-gray-300 rounded-md shadow-md">
              {/* first */}
              <div className=" lg:px-10 py-6 lg:pt-4  space-y-2 lg:space-y-2 ">
                <div className="flex content-center items-center justify-center text-center">
                  <Image src={locationIcon} className="w-10 h-10 " alt=""/>                  
                </div>
                <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                  Address
                </h1>
                <div className="space-y-4 ">
                  <p className="flex  justify-center items-center">

                    <span>Dhaka, Bangladesh.</span>
                  </p>
                </div>

              </div>
              <div className="w-auto border-t md:border-l lg:border-l mx-2 lg:h-32 bg-gray-500"></div>
              {/* <Divider type="vertical" className=" " /> */}
              {/* second */}
              <div className="lg:px-10 py-6 lg:pt-4 space-y-2 lg:space-y-2">
                <div className="flex content-center items-center justify-center text-center">
                <Image src={contactIcon} className="w-10 h-10 " alt=""/>                  
                </div>
                <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                  Phone Number
                </h1>
                <div className="space-y-4">
                  <p className="flex justify-center items-center">

                    <span>+88012345678910</span>
                  </p>
                </div>
              </div>
              <div className="w-auto border-t md:border-l lg:border-l mx-2 lg:h-32 bg-gray-500"></div>
              {/* third */}
              <div className="lg:px-10 py-6 lg:pt-4 space-y-2 lg:space-y-2">
                <div className="flex content-center items-center justify-center text-center">
                <Image src={emailIcon} className="w-10 h-10 " alt=""/>
                </div>
                <h1 className="text-2xl font-bold text-blue-500 lg:mb-10 text-center">
                  E-Mail
                </h1>
                <div className="space-y-4">
                  <p className="flex justify-center items-center">
                    <span>softedu@softedu.com</span>
                  </p>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default contact;
