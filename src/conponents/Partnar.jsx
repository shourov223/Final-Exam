import partnar_one from "../assets/partnar_one.png"
import partnar_two from "../assets/partnar_two.png"
import partnar_three from "../assets/partnar_three.png"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6"
const Partnar = () => {
    return (
        <section className="pt-[120px]">
            <div className="container">
                <div className="grid grid-cols-[319px_850px] justify-between items-start">
                    <div>
                        <p className="text-[#2F57EF] text-[18px] leading-[31.5px] font-bold tracking-common pb-[30px]">Top Popular Course</p>
                        <h2 className="text-[42px] leading-[54.1px] text-primary max-w-[320px] font-bold">Your <span className="text-[#2F57EF]">partner</span> in digital success</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-[30px]">
                        <Partnars image={partnar_one} title={"Bessie Cooper"} text={"Software Department"} />
                        <Partnars image={partnar_two} title={"Bessie Cooper"} text={"Software Department"} />
                        <Partnars image={partnar_three} title={"Devon Lane"} text={"Merketing Department"} />
                        <Partnars image={partnar_one} title={"Darrell Steward"} text={"IT Department"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

const Partnars = ({ image, title, text }) => {
    return (
        <div className="max-w-[410px] border border-[#E3E3E3] rounded-[5px] group">
            <div className="relative">
                <div className="overflow-hidden">
                    <Image src={image} alt="image" className="group-hover:scale-[1.05] transition-all ease-linear duration-500" />
                </div>
                <div className="py-[17px] px-[21px] rounded-full flex items-center gap-4 bg-white absolute bottom-0 left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bottom-[30px]">
                    <div>
                        <FaFacebookF className="text-primary cursor-pointer hover:text-[#2F57EF] transition-all" />
                    </div>
                    <div>
                        <FaTwitter className="text-primary cursor-pointer hover:text-[#2F57EF] transition-all" />
                    </div>
                    <div>
                        <FaInstagram className="text-primary cursor-pointer hover:text-[#2F57EF] transition-all" />
                    </div>
                </div>
            </div>
            <div className="text-center py-[30px]">
                <p className="text-primary text-[21px] leading-[31.5px] tracking-common pb-[5px]">{title}</p>
                <p className="text-[17px] text-primary leading-[26.1px]">{text}</p>
            </div>
        </div>
    )
}
export default Partnar
