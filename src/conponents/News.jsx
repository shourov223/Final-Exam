import news_one from "../assets/news_one.png"
import news_two from "../assets/news_two.png"
import news_three from "../assets/news_three.png"
import Image from "next/image"
import { IoPersonOutline } from "react-icons/io5"
import { FaCalendarAlt } from "react-icons/fa"

const News = () => {
    return (
        <section className="pt-[109px]">
            <div className="container">
                <div className="flex items-end justify-between pb-[60px]">
                    <div className="max-w-[524px]">
                        <p className="text-[18px] text-secondary font-bold leading-[31.5px] tracking-common">Latest news</p>
                        <h2 className="text-[42px] font-bold text-primary leading-[54.1px]">Transforming your vision into reality</h2>
                    </div>
                    <a href="/" className="text-[15px] font-medium bg-secondary tracking-[0.5px] py-[24px] px-[30px] rounded-[5px] text-white">more blogs</a>
                </div>
                <div className="grid grid-cols-3 gap-[30px]">
                    <Items image={news_one} text={"Empowering your business for growth"} />
                    <Items image={news_two} text={"Hard Work Always Brings You Success"} />
                    <Items image={news_three} text={"Results-driven consulting at its finest"} />
                </div>
            </div>
        </section>
    )
}

const Items = ({ image, text }) => {
    return (
        <div className="max-w-[410px] group">
            <div className="rounded-[5px] overflow-hidden">
                <Image className="group-hover:scale-[1.05] transition-all ease-in duration-300" src={image} alt="image" />
            </div>
            <div className="w-[350px] mx-auto px-[30px] py-[20px] news_shadow rounded-[10px] translate-y-[-45px] bg-white">
                <div className="pb-[19px] border-b border-b-[#E3E3E3] flex items-center justify-between">
                    <span className="flex items-center gap-[10px]">
                        <IoPersonOutline className="text-primary" />
                        <p className="text-[17px] leading-[26.1px] text-primary">Admin</p>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <FaCalendarAlt />
                        <p className="text-[17px] leading-[26.1px]">Oct 19, 2023</p>
                    </span>
                </div>
                <div>
                    <p className="text-[21px] font-bold leading-[31.5px] pt-[15px] text-primary">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default News
