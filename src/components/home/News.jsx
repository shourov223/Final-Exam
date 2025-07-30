"use client"
import news_one from "../../assets/news_one.png"
import news_two from "../../assets/news_two.png"
import news_three from "../../assets/news_three.png"
import Image from "next/image"
import { IoPersonOutline } from "react-icons/io5"
import { FaCalendarAlt } from "react-icons/fa"
import { RiSendPlaneFill } from "react-icons/ri"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link"

const News = () => {
    const [email, setEmail] = useState("")
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    console.log(email);

    const notify = () => {
        if (email === "") {
            toast(`Please Input a valid Email first`)
        } else {
            toast(`Check your inbox in this email address: ${email}`)
        }
    };
    return (
        <section className="pt-[109px]">
            <div className="container px-4 md:px-6 lg:px-0">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-[60px]">
                    <div className="max-w-[524px]">
                        <p className="text-[18px] text-secondary font-bold leading-[31.5px] tracking-common">Latest news</p>
                        <h2 className="text-[32px] md:text-[42px] font-bold text-primary leading-[40px] md:leading-[54.1px]">
                            Transforming your vision into reality
                        </h2>
                    </div>
                    <Link href="/blog" className="text-[15px] font-medium bg-secondary tracking-[0.5px] py-[18px] md:py-[24px] px-[24px] md:px-[30px] rounded-[5px] text-white whitespace-nowrap">
                        more blogs
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    <Items image={news_one} text={"Empowering your business for growth"} />
                    <Items image={news_two} text={"Hard Work Always Brings You Success"} />
                    <Items image={news_three} text={"Results-driven consulting at its finest"} />
                </div>
                {/*  */}
                <div className="rounded-[10px] bg-secondary py-[40px] px-[30px] md:py-[60px] md:px-[80px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-4 mt-[80px] translate-y-[10%] sm:translate-y-[20%] lg:translate-y-[40%]">
                    <div className="max-w-[396px]">
                        <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-[40px] md:leading-[54.1px] pb-[15px]">
                            Newsletters
                        </h2>
                        <p className="text-[16px] md:text-[17px] leading-[26.1px] text-white">
                            Lorem Ipsum is simply dummy text of the printing
                        </p>
                    </div>
                    <div className="w-full lg:w-[588px] p-[10px] rounded-[5px] border border-white/50 flex flex-col sm:flex-row items-center gap-4">
                        <input
                            placeholder="Enter Email Adress"
                            className="outline-none w-full text-white bg-transparent placeholder:text-white placeholder:text-[17px] text-[17px] focus:outline-0 focus:bg-none"
                            type="email"
                            onChange={getEmail}
                        />
                        <button onClick={notify} className="flex items-center gap-[10px] rounded-[5px] border w-full sm:w-auto border-white py-[14px] px-[25px] cursor-pointer">
                            <RiSendPlaneFill className="text-white size-6" />
                            <p className="text-white text-[17px] leading-[26.1px] whitespace-nowrap">Browse More</p>
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

const Items = ({ image, text }) => {
    return (
        <div className="group w-full max-w-[410px] mx-auto lg:mx-0">
            <div className="rounded-[5px] overflow-hidden">
                <Image className="group-hover:scale-[1.05] transition-all ease-in duration-300 w-full" src={image} alt="image" />
            </div>
            <div className="w-full max-w-[350px] mx-auto px-[20px] md:px-[30px] py-[20px] news_shadow rounded-[10px] translate-y-[-45px] bg-white">
                <div className="pb-[19px] border-b border-b-[#E3E3E3] flex items-center justify-between text-sm md:text-base">
                    <span className="flex items-center gap-[10px]">
                        <IoPersonOutline className="text-primary" />
                        <p className="text-primary">Admin</p>
                    </span>
                    <span className="flex items-center gap-[10px]">
                        <FaCalendarAlt />
                        <p>Oct 19, 2023</p>
                    </span>
                </div>
                <div>
                    <p className="text-[18px] md:text-[21px] font-bold leading-[28px] md:leading-[31.5px] pt-[15px] text-primary">{text}</p>
                </div>
            </div>
        </div>
    )
}

export default News
