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
        <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] px-4 sm:px-6">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[548px_630px] justify-between items-center gap-8 md:gap-12 lg:gap-16">
                    <div data-aos="fade-right" className="w-full">
                        <Image
                            src={aboutVision}
                            alt="About vision image"
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    <form data-aos="fade-left" className="w-full">
                        <div>
                            <p className="text-base sm:text-lg md:text-[18px] font-bold leading-[1.8] tracking-common pb-2">
                                GET IN TOUCH
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold md:leading-[54.1px] text-primary max-w-full md:max-w-[601px] pb-6 md:pb-[60px]">
                                Bringing your <span className="text-secondary">vision</span> to life
                            </h2>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-[30px]">
                            <input
                                className="w-full sm:flex-1 border border-[#E3E3E3] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary py-4 lg:py-[22px] px-4 lg:px-[20px] rounded-[5px] transition-all"
                                placeholder="Your Name"
                                type="text"
                            />
                            <input
                                className="w-full sm:flex-1 border border-[#E3E3E3] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary py-4 lg:py-[22px] px-4 lg:px-[20px] rounded-[5px] transition-all"
                                placeholder="Your Email"
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-[30px] pt-4 lg:pt-[20px]">
                            <input
                                className="w-full sm:flex-1 border border-[#E3E3E3] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary py-4 lg:py-[22px] px-4 lg:px-[20px] rounded-[5px] transition-all"
                                placeholder="Phone Number"
                                type="tel"
                            />
                            <input
                                className="w-full sm:flex-1 border border-[#E3E3E3] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary py-4 lg:py-[22px] px-4 lg:px-[20px] rounded-[5px] transition-all"
                                placeholder="Subject"
                                type="text"
                            />
                        </div>
                        <div className="pt-4 lg:pt-[20px]">
                            <textarea
                                className="w-full px-4 lg:px-[20px] py-4 h-[100px] sm:h-[120px] lg:h-[130px] border border-[#E3E3E3] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary rounded-[5px] resize-none transition-all"
                                placeholder="Message"
                                rows="5"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto rounded-[5px] bg-secondary hover:bg-secondary/90 px-8 sm:px-16 md:px-24 lg:px-[268px] py-4 lg:py-[21px] text-white text-[15px] sm:text-[16px] lg:text-[17px] mt-6 lg:mt-[30px] cursor-pointer transition-all duration-300 font-medium text-nowrap"
                        >
                            Submit Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default About_vision