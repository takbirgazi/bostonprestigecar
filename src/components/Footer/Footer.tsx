import Link from "next/link";
import BottomFooter from "./BottomFooter/BottomFooter";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa";
import FooterTop from "./FooterTop/FooterTop";
import call from "@/assets/images/icons/call.png";
import whatsApp from "@/assets/images/icons/whatsapp-logo.png";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-[#121212]">
            <FooterTop />
            <div className="container border-t border-gray-700 mx-auto max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
                <div>
                    <h4 className="text-white font-bold text-lg">Contact Information</h4>
                    <div className="flex flex-col gap-3.5 pt-5">
                        <div className="flex gap-2">
                            <FaMapMarkerAlt className="text-mainColor" />
                            <p className="text-[#c4c4c4] -mt-1.5">870 Main St, Woburn, MA 01801, USA</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdCall className="text-mainColor" />
                            <p className="text-[#c4c4c4]">+16172306362</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <IoMailOutline className="text-mainColor" />
                            <Link href="mailto:cab@bostonexpresscab.com" className="text-white hover-text-mainColor transition-all duration-500">cab@bostonexpresscab.com</Link>
                        </div>
                        {/* <div className="flex gap-2 items-center">
                            <AiOutlineFilePdf className="text-mainColor" />
                            <Link href="/" className="text-white  hover-text-mainColor transition-all duration-500">Download Brochure</Link>
                        </div> */}
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Helpful Links</h4>
                    <div className="flex flex-col gap-1.5 pt-5">
                        <Link href="/" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Home</Link>
                        <Link href="/pickup-location" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Pickup Location</Link>
                        <Link href="/reservation" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Reservation</Link>
                        <Link href="/minivan-taxi-cab-service" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Minivan Taxi Cab Service</Link>
                        <Link href="/long-distance-car-service" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Long Distance Car Service</Link>
                        <Link href="/contact-us" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Contact Us</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">About</h4>
                    <div className="flex flex-col gap-1.5 pt-5">
                        <Link href="/about-us" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">About us</Link>
                        <Link href="/payment-policy" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Payment Policy</Link>
                        <Link href="/terms-and-conditions" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Terms & Conditions</Link>
                        <Link href="/testimonials" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Testimonials</Link>
                        <Link href="/blog" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Blog</Link>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">Social Network</h4>
                    <div className="flex gap-2.5 py-5">
                        <Link href="https://www.facebook.com/bostonexpresscab" target="_blank" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://x.com/bostonexprsscab" target="_blank" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                            <FaTwitter />
                        </Link>
                        <Link href="https://www.linkedin.com/company/boston-express-cab" target="_blank" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                            <FaLinkedinIn />
                        </Link>
                        <Link href="/" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                            <FaPinterest />
                        </Link>
                    </div>
                </div>
            </div>
            <BottomFooter />

            {/* This section for fixed icon Call And WhatsApp start */}
            <div className="fixed left-5 bottom-7 flex flex-col gap-2">
                <a className="rounded-full flex justify-center items-center" href="tel:+16172306362" target="_blank">
                    {/* <MdAddCall className="text-3xl text-gray-400" /> */}
                    <figure className="h-[40px] w-[40px]">
                        <Image src={call} height={500} width={500} alt="Call" />
                    </figure>
                </a>
                <a className="rounded-full flex justify-center items-center" href="https://api.whatsapp.com/send?phone=16172306362" target="_blank">
                    {/* <FaWhatsapp className="text-4xl text-gray-400" /> */}
                    <figure className="h-[40px] w-[40px]">
                        <Image src={whatsApp} height={500} width={500} alt="whatsApp" />
                    </figure>
                </a>
            </div>
            {/* This section for fixed icon Call And WhatsApp End */}
        </div>
    );
};

export default Footer;