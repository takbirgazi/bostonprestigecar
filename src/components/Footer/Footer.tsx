import Link from "next/link";
import BottomFooter from "./BottomFooter/BottomFooter";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import call from "@/assets/images/icons/call.png";
import whatsApp from "@/assets/images/icons/whatsapp-logo.png";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
    return (
        <div className="bg-[#121212]">
            <div className="container border-t border-gray-700 mx-auto max-w-[1200px] px-4 flex md:flex-row flex-col gap-10 py-16">
                <div className="w-full md:w-2/5">
                    <figure>
                        <Image height={80} width={200} src={logo} alt="bostonprestigecar" />
                    </figure>
                    <p className="text-white mt-5">For urgent car service requirements, we can only take requests on call and we will dispatch a driver depending on availability and driving conditions.</p>
                </div>
                <div className="w-full md:w-3/5 flex md:flex-row flex-col gap-10">
                    <div>
                        <h4 className="text-white font-bold text-lg">Contact Info</h4>
                        <div className="flex flex-col gap-3.5 pt-5">
                            <div className="flex gap-2">
                                <FaMapMarkerAlt className="text-mainColor" />
                                <p className="text-[#c4c4c4] -mt-1.5">29 Newtowne Court, Cambridge, MA 02139</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdCall className="text-mainColor" />
                                <p className="text-[#c4c4c4]">+18577772125</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <IoMailOutline className="text-mainColor" />
                                <Link href="mailto:booking@bostonprestigecar.com" className="text-white hover-text-mainColor transition-all duration-500">booking@bostonprestigecar.com</Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">Quick Share</h4>
                        <div className="flex flex-col gap-1.5 pt-5">
                            <Link href="/" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Home</Link>
                            <Link href="/about" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">About</Link>
                            <Link href="/contact" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Contact</Link>
                            <Link href="/" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Privacy Policy</Link>
                            <Link href="/" className="text-white hover-text-mainColor cursor-pointer transition-all duration-500">Terms & Conditions</Link>
                        </div>
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