import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const BottomFooter = () => {
    return (
        <div className="py-5 border-t border-[#2a2a2a]">
            <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white text-center md:text-left hover-text-mainColor transition-all duration-500">Copyright 2025 – Boston Prestige Car Powered by <a className="underline cursor-pointer text-nowrap" href="https://diligentsoftit.com" target="_blank" rel="noopener noreferrer">Diligent Soft It</a>
                </p>
                <div className="flex gap-2.5">
                    <Link href="https://www.facebook.com/bostonprestigecar25" target="_blank" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                        <FaFacebookF />
                    </Link>
                    <Link href="https://x.com/BostonPrestige" target="_blank" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                        <FaTwitter />
                    </Link>
                    <Link href="https://www.instagram.com/bostonprestigecar" target="_blank" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                        <FaInstagram />
                    </Link>
                    <Link href="https://www.linkedin.com/company/boston-prestige-car" className="hover:bg-white bg-[#2a2a2a] p-3 rounded-md text-mainColor cursor-pointer transition-all duration-500">
                        <FaLinkedinIn />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BottomFooter;