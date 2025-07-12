import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Education from "../assets/education.png"
import dots from "../assets/dots.svg"
import stars from "../assets/stars.svg"

const PopularCourse = () => {
    return (
        <section className="relative">
            <div className="absolute bottom-[63px] left-[87px] animate-top-to-bottom">
                <Image src={stars} alt="stars" />
            </div>
            <div className="container relative">
                <div className="bg-[#2F57EF] animate-top-to-bottom h-[86px] flex items-center gap-[12px] px-[13px] max-w-[264px] rounded-[20px] absolute z-10 bottom-[14px] right-[10px]">
                    <p className="text-white font-bold text-[69.09px]">25</p>
                    <p className="text-white font-medium text-[21px] tracking-[-0.3px] w-[112px]">Years Of experience</p>
                </div>

                <div className="grid grid-cols-[519px_701px] items-center gap-[28px] relative">
                    <div className="absolute top-[-40px] right-0 -z-10 animate-left-to-right">
                        <Image src={dots} alt="dost" />
                    </div>
                    <div className="bg-[#FCCC44] py-10 px-[46px] rounded-[20px]">
                        <h3 className="text-primary text-[21px] font-bold leading-[31.5px] tracking-[-0.3px] pb-[22px]">education is the key</h3>
                        <ul className="flex flex-col gap-4">
                            <ListItems text={"education is the key"} />
                            <ListItems text={"A Whole Lot of Digital Love for Less"} />
                            <ListItems text={"Know what your target market wants and needs"} />
                            <ListItems text={"A Whole Lot of Digital Love for Less"} />
                        </ul>
                    </div>
                    <div className="rounded-[20px] overflow-hidden h-[285px]">
                        <Image className="h-full" src={Education} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

const ListItems = ({ text }) => {
    return (
        <li className="flex items-center gap-[10px]">
            <FaCheckCircle className="text-[#0D7DFB] size-[20px]" />
            <span className="text-[17px] text-primary leading-[26.1px]">{text}</span>
        </li>
    )
}
export const CommonPart = () => {
    return (
        <div className="flex items-end justify-between gap-4 pb-[40px]">
            <div>
                <p className="text-[#2F57EF] text-[18px] font-bold leading-[31.5px] tracking-[-0.3px] pb-[20px]">Top Popular Course</p>
                <h2 className="text-primary text-[42px] font-bold leading-[54.1px] max-w-[459px]">Knowledge is power  education is the key</h2>
            </div>
            <div>
                <p className="text-primary text-[17px] leading-[26.1px] pb-6 max-w-[517px]">Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as</p>
                <button className="relative overflow-hidden py-[20px] px-[36px] text-primary group cursor-pointer border border-[#2F57EF] rounded-[5px]">
                    <span className="relative z-10 flex items-center gap-[10px] group-hover:text-white">
                        Contact us
                    </span>
                    <span className="absolute left-0 top-0 h-full w-0 bg-[#0D7DFB] opacity-70 transition-all duration-500 group-hover:w-full z-0"></span>
                </button>
            </div>
        </div>
    )
}
export default PopularCourse
