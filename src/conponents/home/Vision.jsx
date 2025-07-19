"use client"
import Image from "next/image"
import vision_image from "../../assets/vision_iamge.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Vision = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <section className="vision_bg pt-[60px] md:pt-[119px] pb-[60px] md:pb-[113px]">
            <div className="container">
                <div className="max-w-[610px] mx-auto text-center pb-[40px] md:pb-[60px]">
                    <p className="text-secondary text-[16px] md:text-[18px] font-bold leading-[28px] md:leading-[31.5px] tracking-common pb-[2px]">Clients review</p>
                    <h2 className="text-[28px] md:text-[42px] leading-[36px] md:leading-[54.1px] text-white pb-[15px] md:pb-[20px]">Bringing your <span className="text-secondary">vision</span> to life</h2>
                    <p className="text-[15px] md:text-[17px] leading-[23px] md:leading-[26.1px] text-white px-4 md:px-0">For your car we will do everything  advice design in us repairs and maintenance. We are the some preferred.</p>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[56px] justify-between">
                    <div data-aos="fade-right" className="w-full lg:w-auto flex justify-center">
                        <Image src={vision_image} alt="image" className="max-w-full h-auto" />
                    </div>
                    <form data-aos="fade-left" className=" lg:w-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[29px] mb-[20px]">
                            <input type="text" className="py-[20px] px-[19px] placeholder:text-[17px] placeholder:text-white border border-[#E3E3E3] text-white rounded-[5px] w-full sm:min-w-[300px] outline" placeholder="Your Name" />
                            <input type="email" className="py-[20px] px-[19px] placeholder:text-[17px] placeholder:text-white border border-[#E3E3E3] text-white rounded-[5px] w-full sm:min-w-[300px] outline" placeholder="Your Email" />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[29px]">
                            <input type="number" className="py-[20px] px-[19px] placeholder:text-[17px] placeholder:text-white border border-[#E3E3E3] text-white rounded-[5px] w-full sm:w-[300px] outline" placeholder="Phone Number" />
                            <input type="text" className="py-[20px] px-[19px] placeholder:text-[17px] placeholder:text-white border border-[#E3E3E3] text-white rounded-[5px] w-full sm:w-[300px] outline" placeholder="Subject" />
                        </div>
                        <div className="w-full sm:max-w-[629px] rounded-[5px] h-[130px] border border-[#E3E3E3] mt-[20px] py-[15px] px-[19px]">
                            <input type="text" className="outline-none focus:outline-none w-full placeholder:text-[white] text-white" placeholder="Message" />
                        </div>
                        <button className="text-white text-[17px] leading-[26.1px] py-[21.5px] px-[43.5px] bg-secondary rounded-[5px] mt-[20px] cursor-pointer w-full sm:w-auto">submit now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Vision