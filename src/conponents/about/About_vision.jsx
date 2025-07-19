"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import aboutVision from "../../assets/about-vision.png"
import { useEffect } from "react";
import AOS from 'aos';


const About_vision = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <section className="py-[120px]">
            <div className="container">
                <div className="grid grid-cols-[548px_630px] justify-between items-center">
                    <div data-aos="fade-right">
                        <Image src={aboutVision} alt="image" />
                    </div>
                    <form data-aos="fade-left">
                        <div className="flex items-center gap-[30px]">
                            <input className="min-w-[301px] border border-[#E3E3E3] focus:outline-[#E3E3E3] py-[22px] px-[20px] rounded-[5px]" placeholder="Your Name" type="text" />
                            <input className="min-w-[301px] border border-[#E3E3E3] focus:outline-[#E3E3E3] py-[22px] px-[20px] rounded-[5px]" placeholder="Your Email" type="email" />
                        </div>
                        <div className="flex items-center gap-[30px] pt-[20px]">
                            <input className="min-w-[301px] border border-[#E3E3E3] focus:outline-[#E3E3E3] py-[22px] px-[20px] rounded-[5px]" placeholder="Phone Number" type="number" />
                            <input className="min-w-[301px] border border-[#E3E3E3] focus:outline-[#E3E3E3] py-[22px] px-[20px] rounded-[5px]" placeholder="Subject" type="text" />
                        </div>
                        <div className="pt-[20px]">
                            <input className="min-w-[630px] px-[20px] h-[130px] border border-[#E3E3E3] focus:outline-[#E3E3E3] rounded-[5px]" type="text" placeholder="Message" />
                        </div>
                        <button className="rounded-[5px] bg-secondary px-[268px] py-[21px] text-white text-nowrap text-[17px] mt-[30px] cursor-pointer">
                            submit now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default About_vision
