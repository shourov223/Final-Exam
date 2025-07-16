"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import chat from "../assets/chat.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="px-4 md:px-8 lg:px-[45px] bg-[#F3F6F8] relative w-full z-10">
            <div className="absolute left-0 w-fit cursor-pointer">
                <Image width={200} height={120} src="/logoShape.svg" alt="shape" className="w-[120px] md:w-[160px] lg:w-[200px]" />
                <div className="absolute top-[8px] left-[8px] md:top-[13px] md:left-[13px]">
                    <Image width={143} height={55} src="/logo.svg" alt="logo" className="w-[100px] md:w-[120px] lg:w-[143px]" />
                </div>
            </div>

            <div className="flex justify-end lg:hidden pt-6">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#1F242C]">
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} lg:opacity-100 lg:max-h-full`}>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-[30px] mt-[30px] lg:mt-0">
                    <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-[25px] ml-0 lg:ml-[300px]">
                        <List_item text={"Home"} href={"/"} />
                        <List_item text={"About Us"} href={"/"} />
                        <List_item text={"Services"} href={"/"} />
                        <List_item text={"Projects"} href={"/"} />
                        <List_item text={"Blog"} href={"/"} />
                        <List_item text={"Page"} href={"/"} />
                        <List_item text={"Contact"} href={"/"} />
                    </ul>
                    <div className="flex items-center gap-[15px] py-1 px-4 lg:px-0">
                        <div>
                            <Image src={chat} alt="chat" className="w-[24px] h-[24px] md:w-[28px] md:h-[28px]" />
                        </div>
                        <div>
                            <p className="text-[#1F242C] text-[14px] md:text-[16px] leading-[160%]">Need help?</p>
                            <p className="text-[16px] md:text-[20px] font-semibold">(307) 555-0133</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const List_item = ({ text, href }) => {
    return (
        <li className="text-[#1F242C] text-[14px] md:text-[16px] whitespace-nowrap font-semibold leading-[130%] flex items-center gap-1 cursor-pointer">
            <Link href={href}>{text}</Link>
            <RiArrowDropDownLine />
        </li>
    );
};

export default Navbar;
