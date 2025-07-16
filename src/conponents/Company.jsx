"use client"
import c_one from "../assets/c_one.svg"
import c_two from "../assets/c_two.svg"
import c_three from "../assets/c_three.svg"
import c_four from "../assets/c_four.svg"
import c_five from "../assets/c_five.svg"
import sliderImage from "../assets/sliderImage.png"
import Image from "next/image"
import Slider from "react-slick"
import { FaStar } from "react-icons/fa6"
import quote from "../assets/quote.svg"

const Company = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section className="pt-[60px] md:pt-[90px] lg:pt-[120px]">
            <div className="container world_image">
                <div className="py-[30px] md:py-[45px] lg:py-[60px] px-[20px] md:px-[40px] knowledge_shawow flex items-center justify-center gap-[20px] md:gap-[40px] lg:gap-[129px] bg-white rounded-[5px] mb-[60px] md:mb-[85px] lg:mb-[111px]">
                    <div>
                        <Image src={c_one} alt="image" className="w-auto h-[25px] md:h-[35px] lg:h-auto" />
                    </div>
                    <div>
                        <Image src={c_two} alt="iamge" className="w-auto h-[25px] md:h-[35px] lg:h-auto" />
                    </div>
                    <div>
                        <Image src={c_three} alt="image" className="w-auto h-[25px] md:h-[35px] lg:h-auto" />
                    </div>
                    <div>
                        <Image src={c_four} alt="image" className="w-auto h-[25px] md:h-[35px] lg:h-auto" />
                    </div>
                    <div>
                        <Image src={c_five} alt="image" className="w-auto h-[25px] md:h-[35px] lg:h-auto" />
                    </div>
                </div>

                <div className="pb-[100px]">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] text-secondary font-bold leading-[24px] md:leading-[28px] lg:leading-[31.5px] tracking-common pb-[20px] md:pb-[25px] lg:pb-[31px]">Clients review</p>
                    <h2 className="text-primary text-wrap text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[46px] lg:leading-[54.1px] pb-[40px] md:pb-[50px] lg:pb-[60px] max-w-[414px] lg:max-w-[414px] font-bold">Expert Guidance for Your Journey</h2>
                    <Slider {...settings} className="relative">
                        <div>
                            <Slide name={"Courtney Henry"} text={"Architecto id sint aut est molestiae reiciendis. Minima quis illo. Accusamus repudiandae neque veniam. Quasi rerum sit consequuntur aut tenetur ."} title={"Marketing specialist"} />
                        </div>
                        <div>
                            <Slide name={"Ralph Edwards"} text={"Blanditiis eius neque sed voluptatibus qui velit voluptatibus dolor reiciendis. Pariatur ex ipsam mollitia at. Iste temporibus labore nihil velit"} title={"CEO specialist"} />
                        </div>
                        <div>
                            <Slide name={"Ralph Edwards"} text={"Et recusandae consequatur voluptatibus quia occaecati sed velit. Recusandae ducimus voluptas illo sunt occaecati. Fugiat nihil sed reprehenderit"} title={"CEO specialist"} />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

const Slide = ({ text, name, title }) => {
    return (
        <div className="max-w-[410px] p-[20px] md:p-[30px] h-[373px] lg:p-10 rounded-[5px] bg-white shadow-box mx-[20px]">
            <div className="flex items-center justify-between gap-2">
                <ul className="flex items-center gap-1 md:gap-2">
                    <li><FaStar className="text-[#FFBA08] text-[14px] md:text-[16px]" /></li>
                    <li><FaStar className="text-[#FFBA08] text-[14px] md:text-[16px]" /></li>
                    <li><FaStar className="text-[#FFBA08] text-[14px] md:text-[16px]" /></li>
                    <li><FaStar className="text-[#FFBA08] text-[14px] md:text-[16px]" /></li>
                    <li><FaStar className="text-[#FFBA08] text-[14px] md:text-[16px]" /></li>
                </ul>
                <div className="size-[40px] md:size-[45px] lg:size-[50px] flex items-center justify-center rounded-full bg-secondary">
                    <Image src={quote} alt="icons" className="w-[16px] md:w-[18px] lg:w-auto" />
                </div>
            </div>
            <p className="py-[20px] md:py-[30px] lg:py-10 text-[15px] md:text-[16px] lg:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26.1px] text-primary">{text}</p>
            <div className="flex items-center justify-between gap-2">
                <div>
                    <Image src={sliderImage} alt="image" className="w-[40px] md:w-[50px] lg:w-auto h-[40px] md:h-[50px] lg:h-auto rounded-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 text-right">
                    <p className="text-[16px] md:text-[17px] lg:text-[18px] font-bold leading-[24px] md:leading-[25px] lg:leading-[27px] text-primary">{name}</p>
                    <p className="text-[14px] md:text-[15px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary">{title}</p>
                </div>
            </div>
        </div>
    )
}

const LeftArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className="p-[15px] md:p-[19px] lg:p-[23px] absolute top-[-70px] md:top-[-90px] lg:top-[-110px] right-[80px] md:right-[110px] lg:right-[140px] bg-[#eaeefd] size-[45px] md:size-[52px] lg:size-[60px] rounded-[5px] hover:bg-[#2F57EF] group transition-all duration-200">
        <svg width="10" height="9" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[11px] md:h-[10px] lg:w-[13px] lg:h-[12px]">
            <path d="M1.12109 5.14844L5.49609 0.773438C5.82422 0.417969 6.39844 0.417969 6.72656 0.773438C7.08203 1.10156 7.08203 1.67578 6.72656 2.00391L2.98047 5.75L6.72656 9.52344C7.08203 9.85156 7.08203 10.4258 6.72656 10.7539C6.39844 11.1094 5.82422 11.1094 5.49609 10.7539L1.12109 6.37891C0.765625 6.05078 0.765625 5.47656 1.12109 5.14844ZM10.7461 0.773438C11.0742 0.417969 11.6484 0.417969 11.9766 0.773438C12.332 1.10156 12.332 1.67578 11.9766 2.00391L8.23047 5.75L11.9766 9.52344C12.332 9.85156 12.332 10.4258 11.9766 10.7539C11.6484 11.1094 11.0742 11.1094 10.7461 10.7539L6.37109 6.37891C6.01562 6.05078 6.01562 5.47656 6.37109 5.14844L10.7461 0.773438Z" fill="#2F57EF" className="group-hover:fill-white" />
        </svg>
    </button>
}
const RightArrow = (props) => {
    const { onClick } = props;
    return <button onClick={onClick} className="p-[15px] md:p-[19px] lg:p-[23px] absolute top-[-70px] md:top-[-90px] lg:top-[-110px] right-[20px] md:right-[35px] lg:right-[50px] bg-[#eaeefd] size-[45px] md:size-[52px] lg:size-[60px] rounded-[5px] hover:bg-[#2F57EF] rotate-180 group transition-all duration-200">
        <svg width="10" height="9" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[11px] md:h-[10px] lg:w-[13px] lg:h-[12px]">
            <path d="M1.12109 5.14844L5.49609 0.773438C5.82422 0.417969 6.39844 0.417969 6.72656 0.773438C7.08203 1.10156 7.08203 1.67578 6.72656 2.00391L2.98047 5.75L6.72656 9.52344C7.08203 9.85156 7.08203 10.4258 6.72656 10.7539C6.39844 11.1094 5.82422 11.1094 5.49609 10.7539L1.12109 6.37891C0.765625 6.05078 0.765625 5.47656 1.12109 5.14844ZM10.7461 0.773438C11.0742 0.417969 11.6484 0.417969 11.9766 0.773438C12.332 1.10156 12.332 1.67578 11.9766 2.00391L8.23047 5.75L11.9766 9.52344C12.332 9.85156 12.332 10.4258 11.9766 10.7539C11.6484 11.1094 11.0742 11.1094 10.7461 10.7539L6.37109 6.37891C6.01562 6.05078 6.01562 5.47656 6.37109 5.14844L10.7461 0.773438Z" fill="#2F57EF" className="group-hover:fill-white" />
        </svg>
    </button>
}
export default Company