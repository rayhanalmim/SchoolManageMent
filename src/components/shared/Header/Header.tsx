"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog, Disclosure } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import "./Header.css"


const aboutUs = [
  {
    name: "History",
    href: "/about/history",

  },
  {
    name: "At a Galance",
    href: "/about/ataglance",

  },

  {
    name: "Achievement",
    href: "/about/achievement",

  },
  {
    name: "Why Study at DCMS",
    href: "/about/whystudyHere",

  },
  {
    name: "Events",
    href: "/about/events",

  },
];
const administrations = [
  {
    name: "Governing Body",
    href: "/administration/governingBody",
  },
  {
    name: "Message",
    href: "/administration/message",
  },
  {
    name: "Administrative Body",
    href: "/administration/administrativeBody",
  },
  {
    name: "Teaching Staff",
    href: "/administration/teachingStaff",
  },
  {
    name: "Office Staff",
    href: "/administration/officeStaff",
  },
  {
    name: "Supporting Staff",
    href: "/administration/supportingStaff",
  },
];
const results = [
  {
    name: "School Result",
    href: "/result/schoolResult",
  },
  {
    name: "College Result",
    href: "/result/collegeResult",
  },
  {
    name: "English Version",
    href: "/result/englishVersionResult",

  },
];

const admissions = [
  {
    name: "School",
    href: "/admission/schoolAdmission",
  },
  {
    name: "College",
    href: "/admission/collegeAdmission",
  },
  {
    name: "English Version",
    href: "/admission/englishAdmission",
  },
];
const facilities = [
  {
    name: "Science Lab",
    href: "/facilities/scienceLab",
  },
  {
    name: "ICT Lab",
    href: "/facilities/ictLab",
  },
  {
    name: "Library",
    href: "/facilities/library",
  },
  {
    name: "Multi-Media Class Room",
    href: "/facilities/multiMediaClass",
  },
  {
    name: "S-Net",
    href: "/facilities/sNet",
  },
  {
    name: "QIP SMS Sevice",
    href: "/facilities/qipSMS",
  },
  {
    name: "Sapcious Auditorium ",
    href: "/facilities/sapciousAuditorium",
  },
  {
    name: "Common Room",
    href: "/facilities/commonRoom",
  },
  {
    name: "Prayer Room",
    href: "/facilities/prayerRoom",
  },
  {
    name: "DHCS Ride Service",
    href: "/facilities/rideService",
  },
  {
    name: "Other Facilities",
    href: "/facilities/otherFacilities",
  },
];
const clubs = [
  {
    name: "Scout Group",
    href: "/club/scout",
  },
  {
    name: "Art & Culture Club",
    href: "/club/artNculture",
  },
  {
    name: "Science Club",
    href: "/club/science",
  },
  {
    name: "Debate Club",
    href: "/club/debate",
  },
  {
    name: "Computer Club",
    href: "/club/computer",
  },
  {
    name: "English Language Club",
    href: "/club/englishLanguage",
  },
  {
    name: "Nutrition Club",
    href: "/club/nutrition",
  },
  {
    name: "Swadesh O Bissobabna Club",
    href: "/club/swadeshObissobabna",
  },
  {
    name: "Photography Club",
    href: "/club/photography",
  },
  {
    name: "Sports Club",
    href: "/club/sports",
  },
  {
    name: "Girl's Guid",
    href: "/club/girlsGuid",
  },
  {
    name: "Peach Growing Education (HWPL)",
    href: "/club/peachGrowingE",
  },
];
const gallerys = [
  {
    name: "Gallary Images",
    href: "/gallery/images",
  },
  {
    name: "Videos",
    href: "/gallery/videos",
  },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 

  

  

  return (
    







    <div className=" bg-white shadow-md pb-1  lg:w-full lg:fixed lg:z-10 ">
      <div className="lg:w-[1260px] mx-auto">
      <div className="flex lg:w-[1260px] item-center justify-center text-center content-center ">
        {/* <Image
          src={headerImg}
          alt=""
          className="h-[140px] w-[1140px] pt-5 pb-8"
        /> */}
      </div>
      <nav
        className="flex items-center justify-between py-4 rounded  mt-2 mb-2 px-2 md:px-2 lg:px-0"
        aria-label="Global"
      >
        <Link href={"/"}><h2 className="font-bold text-2xl">SoftEdu</h2></Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >

          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-5">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          {/* About Us */}




          {/* Administration */}
          <div className="relative">
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Administration
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>


              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {administrations.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-4 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">

                      </div> */}
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </div>


          {/* Academics */}
          <div className="relative">
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Results
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>


              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {results.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-4 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">

                      </div> */}
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </div>

          {/* Admission */}

          < div className="relative">
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Admission
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>


              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {admissions.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-4 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">

                      </div> */}
                      <div className="flex-auto">
                        <Link href={item.href}>
                          <h2 className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </h2>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </ div>
          {/* Facilities */}
          < div className="relative">
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Facilities
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>


              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {facilities.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-4 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">

                      </div> */}
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </ div>
          {/* Club */}
          < div className="relative">
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Club
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>


              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {clubs.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-4 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">

                      </div> */}
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </ div>
          {/* Gallery */}
          < div className="relative">
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Gallery
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>


              <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {gallerys.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-4 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div> */}
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

          </ div>
          <Link href="/notice" className="text-sm font-semibold leading-6 text-gray-900">
            Notice
          </Link>
          <Link href="/contact">
            <span className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex  lg:justify-end ml-5">
          <a
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <div className="fixed inset-y-0 right-auto z-10 w-full overflow-hidden left-0 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 font-bold">
              <span className="sr-only">Your Company</span>
              SoftyEdu
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About Us
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...aboutUs].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
      </div>
    </div>
  );
};

export default Header;
