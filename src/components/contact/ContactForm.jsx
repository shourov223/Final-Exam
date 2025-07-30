"use client"
import { useState } from "react"
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa6"

const ContactForm = () => {
    const [info, setInfo] = useState("")

    const handleInfo = (e) => {
        setInfo(e.target.value)
    }
    const handelForn = (e) => {
        e.preventDefault()
        if (info !== "") {
            alert(`thank you for submite your information`)
        } else {
            alert("Please giv us your information")
        }
    }
    return (
        <section className="py-[60px] md:py-[80px] lg:py-[120px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[410px_1fr] xl:grid-cols-[450px_1fr] gap-[30px] md:gap-[40px] lg:gap-[30px] items-start">
                    <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-[10px] pb-[15px] md:pb-[17px] lg:pb-[19px]">
                            <span className="w-[3px] h-[15px] md:h-[16px] lg:h-[17px] bg-secondary"></span>
                            <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-secondary">Contact us</p>
                        </div>
                        <h2 className="text-[28px] md:text-[35px] lg:text-[42px] font-bold leading-[36px] md:leading-[45px] lg:leading-[54.1px] text-primary pb-[25px] md:pb-[31px] lg:pb-[37px]">Do you have any question? </h2>
                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary pb-[25px] md:pb-[28px] lg:pb-[30px] max-w-[500px] mx-auto lg:mx-0">For your car we will do everything  advice, repairs and maintenance. We are the some preferred choice by many car owners because </p>
                        <div className="flex items-center justify-center lg:justify-start gap-[8px] md:gap-[10px]">
                            <div className="size-[35px] md:size-[38px] lg:size-[40px] rounded-[5px] flex items-center justify-center bg-[#F0F5FD] hover:bg-secondary group transition-all duration-200 cursor-pointer">
                                <FaFacebookF className="text-secondary group-hover:text-white text-sm md:text-base" />
                            </div>
                            <div className="size-[35px] md:size-[38px] lg:size-[40px] rounded-[5px] flex items-center justify-center bg-[#F0F5FD] hover:bg-secondary group transition-all duration-200 cursor-pointer">
                                <FaTwitter className="text-secondary group-hover:text-white text-sm md:text-base" />
                            </div>
                            <div className="size-[35px] md:size-[38px] lg:size-[40px] rounded-[5px] flex items-center justify-center bg-[#F0F5FD] hover:bg-secondary group transition-all duration-200 cursor-pointer">
                                <FaInstagram className="text-secondary group-hover:text-white text-sm md:text-base" />
                            </div>
                            <div className="size-[35px] md:size-[38px] lg:size-[40px] rounded-[5px] flex items-center justify-center bg-[#F0F5FD] hover:bg-secondary group transition-all duration-200 cursor-pointer">
                                <FaPinterestP className="text-secondary group-hover:text-white text-sm md:text-base" />
                            </div>
                        </div>
                    </div>
                    <form className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] md:gap-x-[25px] lg:gap-x-[30px] gap-y-[15px] md:gap-y-[18px] lg:gap-y-[20px]">
                            <input onChange={handleInfo} className="py-4 md:py-5 lg:py-6 px-[20px] md:px-[25px] lg:px-[30px] bg-[#F3F6FB] outline-0 focus:outline-0 placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:text-primary rounded-[5px] w-full" type="text" placeholder="Name" />
                            <input onChange={handleInfo} className="py-4 md:py-5 lg:py-6 px-[20px] md:px-[25px] lg:px-[30px] bg-[#F3F6FB] outline-0 focus:outline-0 placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:text-primary rounded-[5px] w-full" type="email" placeholder="Your Email" />
                            <input onChange={handleInfo} className="py-4 md:py-5 lg:py-6 px-[20px] md:px-[25px] lg:px-[30px] bg-[#F3F6FB] outline-0 focus:outline-0 placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:text-primary rounded-[5px] w-full" type="tel" placeholder="Phone Number" />
                            <input onChange={handleInfo} className="py-4 md:py-5 lg:py-6 px-[20px] md:px-[25px] lg:px-[30px] bg-[#F3F6FB] outline-0 focus:outline-0 placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:text-primary rounded-[5px] w-full" type="text" placeholder="Subject" />
                        </div>
                        <input type="text" className="w-full py-4 md:py-5 lg:py-6 px-[20px] md:px-[25px] lg:px-[30px] bg-[#F3F6FB] placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:leading-[22px] md:placeholder:leading-[24px] lg:placeholder:leading-[26.1px] placeholder:text-primary focus:outline-0 outline-0 mt-[15px] md:mt-[18px] lg:mt-[20px] rounded-[5px]" placeholder="Service" />
                        <div className="h-[120px] md:h-[140px] lg:h-[158px] mt-[15px] md:mt-[18px] lg:mt-[20px] bg-[#F3F6FB] rounded-[5px] overflow-hidden">
                            <textarea className="w-full h-full resize-none focus:outline-0 outline-0 px-[20px] md:px-[25px] lg:px-[30px] py-4 md:py-5 lg:py-6 bg-transparent placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] placeholder:text-primary" placeholder="Your Message"></textarea>
                        </div>
                        <button onClick={handelForn} className="w-full sm:w-auto px-[30px] md:px-[50px] lg:px-[60px] xl:px-[80px] py-4 md:py-5 lg:py-6 bg-secondary hover:bg-black text-white text-[14px] md:text-[15px] font-medium mt-[15px] md:mt-[18px] lg:mt-[20px] rounded-[5px] cursor-pointer transition-colors duration-300">Submit Now</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm