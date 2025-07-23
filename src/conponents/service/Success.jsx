"use client"
import Slider from "react-slick"
import sliderImage from "../../assets/sliderImage.png"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import success_one from "../../assets/success_one.png"
import success_two from "../../assets/success_two.png"
import Link from "next/link";

const Success = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section>
            <div className="container px-4">
                <p className="text-secondary text-[16px] md:text-[17px] lg:text-[18px] font-bold leading-[28px] md:leading-[30px] lg:leading-[31.5px] tracking-common pb-[12px]">Services we're offering</p>
                <h2 className="text-[28px] md:text-[35px] lg:text-[42px] font-bold leading-[36px] md:leading-[45px] lg:leading-[54.1px] max-w-full md:max-w-[434px] pb-6 md:pb-8 lg:pb-10 text-primary">Navigating your path to success</h2>
            </div>
            <div className="pl-0 2xl:pl-[318px]">
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
        <div className="pt-[15px] md:pt-[17px] lg:pt-[20px] pb-[20px] md:pb-[24px] lg:pb-[29px] px-[20px] md:px-[25px] lg:px-[30px] rounded-[5px] bg-white max-w-[410px] knowledge_shawow mx-[10px] md:mx-[20px] lg:mx-[30px] group">
            <Link href={"/servicedetails"}>
                <div className="flex items-center justify-between pb-[15px] md:pb-[16px] lg:pb-[18px]">
                    <div className="flex items-center gap-[8px] md:gap-[9px] lg:gap-[10px]">
                        <div className="size-[35px] md:size-[37px] lg:size-[40px] rounded-full overflow-hidden">
                            <Image src={sliderImage} alt="image" />
                        </div>
                        <p className="text-[12px] md:text-[12.5px] lg:text-[13px] leading-[18px] md:leading-[19px] lg:leading-[21px] text-primary">By Angela</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <IoPersonOutline className="text-secondary text-[14px] md:text-[15px] lg:text-[16px]" />
                        <p className="text-[11px] md:text-[12px] lg:text-[13px] leading-[13px] md:leading-[14px] lg:leading-[15px] text-primary">50 Students</p>
                    </div>
                </div>
                <div className="relative rounded-[5px] overflow-hidden">
                    <Image className="group-hover:scale-[1.1] transition-all ease-in-out duration-500 w-full h-auto" src={image} alt="image" />
                    <div className="py-[7px] md:py-[8px] lg:py-[9.5px] px-[12px] md:px-[13px] lg:px-[15px] rounded-[5px] bg-secondary absolute bottom-[8px] md:bottom-[9px] lg:bottom-[10px] right-[8px] md:right-[9px] lg:right-[10px] font-medium text-white text-[12px] md:text-[13px] lg:text-[14px]">Development</div>
                </div>
                <div className="pt-[15px] md:pt-[16px] lg:pt-[18px] flex items-center gap-[6px] md:gap-[6.5px] lg:gap-[7px]">
                    <ul className="flex items-center gap-[2px]">
                        <li><FaStar className="text-[#FF9747] text-[12px] md:text-[13px] lg:text-[14px]" /></li>
                        <li><FaStar className="text-[#FF9747] text-[12px] md:text-[13px] lg:text-[14px]" /></li>
                        <li><FaStar className="text-[#FF9747] text-[12px] md:text-[13px] lg:text-[14px]" /></li>
                        <li><FaStar className="text-[#FF9747] text-[12px] md:text-[13px] lg:text-[14px]" /></li>
                        <li><FaStar className="text-[#FF9747] text-[12px] md:text-[13px] lg:text-[14px]" /></li>
                    </ul>
                    <p className="text-[11px] md:text-[11.5px] lg:text-[12px] font-medium leading-[18px] md:leading-[19px] lg:leading-[21px] text-primary">(15 Reviews)</p>
                </div>
                <h2 className="text-[20px] md:text-[22px] lg:text-[25px] leading-[26px] md:leading-[29px] lg:leading-[32.5px] text-primary font-bold pt-3 md:pt-3.5 lg:pt-4 group-hover:text-secondary transition-all">The Power of Personal Branding</h2>
                <button className="text-secondary text-[16px] md:text-[17px] lg:text-[18px] gap-2 flex items-center pt-[12px] md:pt-[13px] lg:pt-[14px] font-bold">Enroll Now <FaArrowRight className="text-secondary text-[14px] md:text-[15px] lg:text-[16px]" /></button>
            </Link>
        </div>
    )
}
const NextArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className="size-[50px] md:size-[58px] lg:size-[67px] rounded-full flex items-center justify-center border border-[#192335] hover:bg-secondary hover:border-0 group transition-all absolute top-[-60px] md:top-[-75px] lg:top-[-90px] xl:top-[-110px] right-[15px] md:right-[25px] lg:right-[35px] xl:right-[50px]">
        <div>
            <svg className="w-3 h-2.5 md:w-3.5 md:h-3 lg:w-4 lg:h-3.5" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.543 7.38867L9.23047 12.7012C9.03125 12.9004 8.76562 13 8.5 13C8.20117 13 7.93555 12.9004 7.73633 12.7012C7.30469 12.3027 7.30469 11.6055 7.73633 11.207L11.2227 7.6875H1.0625C0.464844 7.6875 0 7.22266 0 6.625C0 6.06055 0.464844 5.5625 1.0625 5.5625H11.2227L7.73633 2.07617C7.30469 1.67773 7.30469 0.980469 7.73633 0.582031C8.13477 0.150391 8.83203 0.150391 9.23047 0.582031L14.543 5.89453C14.9746 6.29297 14.9746 6.99023 14.543 7.38867Z" fill="#192335" className="group-hover:fill-white" />
            </svg>
        </div>
    </button>
}
const PrevArrow = (props) => {
    const { onClick } = props
    return <button onClick={onClick} className="size-[50px] md:size-[58px] lg:size-[67px] rounded-full flex items-center justify-center border border-[#192335] hover:bg-secondary hover:border-0 group transition-all absolute top-[-60px] md:top-[-75px] lg:top-[-90px] xl:top-[-110px] right-[70px] md:right-[90px] lg:right-[110px] xl:right-[140px]">
        <div className="rotate-180">
            <svg className="w-3 h-2.5 md:w-3.5 md:h-3 lg:w-4 lg:h-3.5" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.543 7.38867L9.23047 12.7012C9.03125 12.9004 8.76562 13 8.5 13C8.20117 13 7.93555 12.9004 7.73633 12.7012C7.30469 12.3027 7.30469 11.6055 7.73633 11.207L11.2227 7.6875H1.0625C0.464844 7.6875 0 7.22266 0 6.625C0 6.06055 0.464844 5.5625 1.0625 5.5625H11.2227L7.73633 2.07617C7.30469 1.67773 7.30469 0.980469 7.73633 0.582031C8.13477 0.150391 8.83203 0.150391 9.23047 0.582031L14.543 5.89453C14.9746 6.29297 14.9746 6.99023 14.543 7.38867Z" fill="#192335" className="group-hover:fill-white" />
            </svg>
        </div>
    </button>
}
export default Success