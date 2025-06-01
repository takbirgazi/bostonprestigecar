"use client"
import Link from "next/link";
import { useState } from "react";
import { MenuType } from "./MenuType";

const MobileMenu: React.FC<MenuType> = ({ links, atTop }) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="block md:hidden">
            <div onClick={() => setIsActive(isActive => !isActive)} className="flex flex-col gap-2 justify-center items-center cursor-pointer">
                <span className={`${isActive && "rotate-45 origin-[25%]"} ${atTop ? "bg-white border-white" : "bg-gray-800 border-gray-800"} border w-7 h-[2px] transition-all duration-500`}></span>
                <span className={`${isActive && "-rotate-45 origin-[25%]"} ${atTop ? "bg-white border-white" : "bg-gray-800 border-gray-800"} border w-7 h-[2px] transition-all duration-500`}></span>
            </div>
            <div className={`${isActive ? "h-72 py-4" : "h-0"} md:hidden flex flex-col gap-3 absolute w-full left-0 top-[85px] bg-[#ffffff] transition-all duration-500 overflow-auto`}>
                {
                    links.map(menu => <Link className="font-bold text-gray-800 w-10/12 mx-auto" href={menu.slag} key={menu.id}>{menu.title}</Link>)
                }
            </div>
        </div>
    );
};

export default MobileMenu;