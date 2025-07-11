import { RiArrowDropDownLine } from "react-icons/ri";
import chat from "../assets/chat.png"
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <nav className="px-[45px] bg-[#F3F6F8] relative z-10">
            <div className="absolute left-0 w-full cursor-pointer">
                <Image width={200} height={120} src="/logoShape.svg" alt="shape" />
                <div className="absolute top-[13px] left-[13px]">
                    <Image width={143} height={55} src="/logo.svg" alt="" />
                </div>
            </div>
            <div className="flex items-center justify-between gap-[30px]">
                <ul className="flex items-center gap-[25px] ml-[300px]">
                    <List_item text={"Home"} href={"/"} />
                    <List_item text={"About Us"} href={"/"} />
                    <List_item text={"Services"} href={"/"} />
                    <List_item text={"Projects"} href={"/"} />
                    <List_item text={"Blog"} href={"/"} />
                    <List_item text={"Page"} href={"/"} />
                    <List_item text={"Contact"} href={"/"} />
                </ul>
                <div className="flex items-center gap-[15px] py-1">
                    <div>
                        <Image src={chat} alt="image"></Image>
                    </div>
                    <div>
                        <p className="text-[#1F242C] text-[16px] leading-[160%]">Need help?</p>
                        <p className="text-[20px] font-semibold">(307) 555-0133</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const List_item = ({ text, href }) => {
    return (
        <li className="text-[#1F242C] text-[16px] font-semibold leading-[130%] flex items-center gap-1 cursor-pointer">
            <Link href={href}>{text}</Link>
            <RiArrowDropDownLine />
        </li>
    )
}

export default Navbar
