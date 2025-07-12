import gOne from "../assets/gOne.svg"
import gTwo from "../assets/gTwo.svg"
import gThree from "../assets/gThree.svg"
import gFour from "../assets/gFour.svg"
import bolt from "../assets/bolt.svg"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"

const Generation = () => {
    return (
        <section className="pt-[100px] relative">
            <div className="absolute right-[120px] bottom-0 animate-top-to-bottom">
                <Image src={bolt} alt="image"/>
            </div>
            <div className="container">
                <p className="text-[18px] font-bold leading-[31.5px] text-[#2F57EF] text-center tracking-[-0.3px]">Top Popular Course</p>
                <h2 className="max-w-[599px] mx-auto text-center pt-1 pb-[67px] text-primary text-[42px] font-bold leading-[54.1px]">Preserving the earth for future generations</h2>
                <div className="grid grid-cols-2 gap-[30px]">
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
        <div className={`max-w-[630px] px-[30px] pt-[30px] pb-[40px] ${bgColor}`}>
            <div className={`size-[80px] rounded-[5px] ${bg} flex items-center justify-center`}>
                <Image src={image} alt="icons" />
            </div>
            <h4 className="text-primary text-[21px] font-bold leading-[31.5px] tracking-[-0.3px] pt-[30px] pb-4">{title}</h4>
            <p className="max-w-[240px] text-[17px] leading-[26.1px] text-primary pb-[20px]">{text}</p>
            <button className="text-[15px] text-primary flex items-center gap-[10px] cursor-pointer">
                Ream More
                <FaArrowRight className="text-primary" />
            </button>
        </div>
    )
}
export default Generation
