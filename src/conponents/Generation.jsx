import gOne from "../assets/gOne.svg"
import gTwo from "../assets/gTwo.svg"
import gThree from "../assets/gThree.svg"
import gFour from "../assets/gFour.svg"
import bolt from "../assets/bolt.svg"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"

const Generation = () => {
    return (
        <section className="pt-[60px] md:pt-[80px] lg:pt-[100px] relative overflow-hidden">
            <div className="absolute right-[20px] sm:right-[60px] lg:right-[120px] bottom-0 animate-top-to-bottom z-10">
                <Image
                    src={bolt}
                    alt="image"
                    className="w-[30px] h-[40px] sm:w-[40px] sm:h-[50px] lg:w-auto lg:h-auto transition-all duration-300"
                />
            </div>
            <div className="container px-4 lg:px-0">
                <p className="text-[16px] md:text-[18px] font-bold leading-[28px] md:leading-[31.5px] text-[#2F57EF] text-center tracking-[-0.3px] animate-fade-in">Top Popular Course</p>
                <h2 className="max-w-[400px] md:max-w-[599px] mx-auto text-center pt-1 pb-[40px] md:pb-[67px] text-primary text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[36px] md:leading-[46px] lg:leading-[54.1px] animate-fade-in-up">Preserving the earth for future generations</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[25px] lg:gap-[30px] max-w-[1300px] mx-auto">
                    <Box bg={"bg-[#FEC9C0]"} image={gOne} bgColor={"bg-[#FFE6E2]"} title={"enim esse nihil"} text={"Ecology is crucial for our understanding of the natural world, and is becoming"} />
                    <Box bg={"bg-[#BDEEF4]"} image={gTwo} bgColor={"bg-[#E3F8FB]"} title={"adipisci magni ab"} text={"Ecology is crucial for our understanding of the natural world, and is becoming"} />
                    <Box bg={"bg-[#FFF2B8]"} text={"Ecology is crucial for our understanding of the natural world, and is becoming"} bgColor={"bg-[#FFF9DF]"} image={gThree} title={"praesentium amet rerum"} />
                    <Box bg={"bg-[#eaccfc]"} text={"Ecology is crucial for our understanding of the natural world, and is becoming"} bgColor={"bg-[#F5E6FD]"} image={gFour} title={"tempore laborum animi"} />
                </div>
            </div>
        </section>
    )
}

const Box = ({ image, title, text, bgColor, bg }) => {
    return (
        <div className={`w-full max-w-[630px] mx-auto px-[20px] sm:px-[25px] lg:px-[30px] pt-[20px] sm:pt-[25px] lg:pt-[30px] pb-[30px] sm:pb-[35px] lg:pb-[40px] ${bgColor} rounded-lg lg:rounded-none shadow-sm lg:shadow-none hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group`}>
            <div className={`size-[60px] sm:size-[70px] lg:size-[80px] rounded-[5px] ${bg} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                <Image
                    src={image}
                    alt="icons"
                    className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-auto lg:h-auto transition-all duration-300"
                />
            </div>
            <h4 className="text-primary text-[18px] sm:text-[19px] lg:text-[21px] font-bold leading-[26px] sm:leading-[28px] lg:leading-[31.5px] tracking-[-0.3px] pt-[20px] sm:pt-[25px] lg:pt-[30px] pb-3 lg:pb-4 transition-colors duration-300 group-hover:text-[#2F57EF]">{title}</h4>
            <p className="max-w-[280px] sm:max-w-[320px] lg:max-w-[240px] text-[15px] sm:text-[16px] lg:text-[17px] leading-[23px] sm:leading-[24px] lg:leading-[26.1px] text-primary pb-[16px] sm:pb-[18px] lg:pb-[20px] transition-colors duration-300">{text}</p>
            <button className="text-[14px] sm:text-[14px] lg:text-[15px] text-primary flex items-center gap-[8px] lg:gap-[10px] cursor-pointer hover:text-[#2F57EF] transition-all duration-300 group-hover:gap-[12px] lg:group-hover:gap-[15px]">
                Ream More
                <FaArrowRight className="text-primary text-[12px] sm:text-[13px] lg:text-[14px] transition-all duration-300 group-hover:text-[#2F57EF] group-hover:translate-x-1" />
            </button>
        </div>
    )
}

export default Generation