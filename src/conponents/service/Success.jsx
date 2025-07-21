"use client"
import Slider from "react-slick"
import sliderImage from "../../assets/sliderImage.png"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import success_one from "../../assets/success_one.png"
import success_two from "../../assets/success_two.png"

const Success = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <section>
            <div className="container">
                <p className="text-secondary text-[18px] font-bold leading-[31.5px] tracking-common pb-[12px]">Services we’re offering</p>
                <h2 className="text-[42px] font-bold leading-[54.1px] max-w-[434px] pb-10 text-primary">Navigating your path to success</h2>
            </div>
            <div className="pl-[318px]">
                <Slider {...settings}>
                    <div>
                        <SlideItems image={success_one} />
                    </div>
                    <div>
                        <SlideItems image={success_two} />
                    </div>
                    <div>
                        <SlideItems image={success_one} />
                    </div>
                    <div>
                        <SlideItems image={success_two} />
                    </div>
                    <div>
                        <SlideItems image={success_one} />
                    </div>
                    <div>
                        <SlideItems image={success_two} />
                    </div>
                </Slider>
            </div>
        </section>
    )
}

const SlideItems = ({ image }) => {
    return (
        <div className="pt-[20px] pb-[29px] px-[30px] rounded-[5px] bg-white max-w-[410px] knowledge_shawow mx-[30px]">
            <div className="flex items-center justify-between pb-[18px]">
                <div className="flex items-center gap-[10px]">
                    <div className="size-[40px] rounded-full overflow-hidden">
                        <Image src={sliderImage} alt="image" />
                    </div>
                    <p className="text-[13px] leading-[21px] text-primary">By Angela</p>
                </div>
                <div className="flex items-center gap-1.5">
                    <IoPersonOutline className="text-secondary" />
                    <p className="text-[13px] leading-[15px] text-primary">50 Students</p>
                </div>
            </div>
            <div className="relative rounded-[5px] overflow-hidden">
                <Image src={image} alt="image" />
                <div className="py-[9.5px] px-[15px] rounded-[5px] bg-secondary absolute bottom-[10px] right-[10px] font-medium text-white">Development</div>
            </div>
            <div className="pt-[18px] flex items-center gap-[7px]">
                <ul className="flex items-center gap-[2px]">
                    <li><FaStar className="text-[#FF9747]" /></li>
                    <li><FaStar className="text-[#FF9747]" /></li>
                    <li><FaStar className="text-[#FF9747]" /></li>
                    <li><FaStar className="text-[#FF9747]" /></li>
                    <li><FaStar className="text-[#FF9747]" /></li>
                </ul>
                <p className="text-[12px] font-medium leading-[21px] text-primary">(15 Reviews)</p>
            </div>
            <h2 className="text-[25px] leading-[32.5px] text-primary font-bold pt-4">The Power of Personal Branding</h2>
            <button className="text-secondary text-[18px] gap-2 flex items-center pt-[14px] font-bold">Enroll Now <FaArrowRight className="text-secondary" /></button>
        </div>
    )
}
const NextArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className="size-[67px] rounded-full flex items-center justify-center border border-[#192335] hover:bg-secondary hover:border-0 group transition-all">
        <div>
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.543 7.38867L9.23047 12.7012C9.03125 12.9004 8.76562 13 8.5 13C8.20117 13 7.93555 12.9004 7.73633 12.7012C7.30469 12.3027 7.30469 11.6055 7.73633 11.207L11.2227 7.6875H1.0625C0.464844 7.6875 0 7.22266 0 6.625C0 6.06055 0.464844 5.5625 1.0625 5.5625H11.2227L7.73633 2.07617C7.30469 1.67773 7.30469 0.980469 7.73633 0.582031C8.13477 0.150391 8.83203 0.150391 9.23047 0.582031L14.543 5.89453C14.9746 6.29297 14.9746 6.99023 14.543 7.38867Z" fill="#192335" className="group-hover:fill-white" />
            </svg>
        </div>
    </button>
}
const PrevArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className="size-[67px] rounded-full flex items-center justify-center border border-[#192335] hover:bg-secondary hover:border-0 group transition-all">
        <div className="rotate-180">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.543 7.38867L9.23047 12.7012C9.03125 12.9004 8.76562 13 8.5 13C8.20117 13 7.93555 12.9004 7.73633 12.7012C7.30469 12.3027 7.30469 11.6055 7.73633 11.207L11.2227 7.6875H1.0625C0.464844 7.6875 0 7.22266 0 6.625C0 6.06055 0.464844 5.5625 1.0625 5.5625H11.2227L7.73633 2.07617C7.30469 1.67773 7.30469 0.980469 7.73633 0.582031C8.13477 0.150391 8.83203 0.150391 9.23047 0.582031L14.543 5.89453C14.9746 6.29297 14.9746 6.99023 14.543 7.38867Z" fill="#192335" className="group-hover:fill-white" />
            </svg>
        </div>
    </button>
}
export default Success
