import Image from "next/image"
import email from "../../assets/email.svg"
import { MdEmail } from "react-icons/md"
import thunder from "../../assets/thunder.svg"

const Email = () => {
    return (
        <section className="pt-[60px] md:pt-[80px] lg:pt-[120px] relative overflow-hidden">
            <div className="absolute bottom-0 left-[20px] sm:left-[60px] lg:left-[150px] animate-top-to-bottom z-10">
                <Image 
                    src={thunder} 
                    alt="image" 
                    className="w-[40px] h-[50px] sm:w-[60px] sm:h-[70px] lg:w-auto lg:h-auto transition-all duration-300"
                />
            </div>
            <div className="container">
                <div className="bg-[#00D09C] py-[40px] sm:py-[60px] lg:py-[94px] px-[20px] sm:px-[30px] lg:px-[52px] rounded-[8px] shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-0">
                        <div className="flex flex-col sm:flex-row items-center gap-[20px] sm:gap-[25px] lg:gap-[33px] text-center sm:text-left lg:flex-1">
                            <div className="flex-shrink-0">
                                <Image 
                                    src={email} 
                                    alt="email-icon" 
                                    className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-auto lg:h-auto transition-all duration-300 hover:scale-110"
                                />
                            </div>
                            <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[42px] leading-[32px] sm:leading-[42px] lg:leading-[54.1px] max-w-[300px] sm:max-w-[400px] lg:max-w-[445px] font-bold">
                                Subscribe your email for Newsletter
                            </h2>
                        </div>
                        <div className="w-full lg:w-auto">
                            <div className="bg-white min-w-full lg:min-w-[559px] flex flex-col sm:flex-row items-stretch sm:items-center gap-[15px] sm:gap-0 sm:justify-between rounded-[20px] sm:rounded-full py-[15px] sm:py-2 px-[20px] sm:pl-[33px] sm:pr-[9px] shadow-lg">
                                <input 
                                    className="focus:outline-none text-[16px] placeholder-gray-500 flex-1 py-[10px] sm:py-0 text-center sm:text-left" 
                                    type="email" 
                                    placeholder="Email Address" 
                                />
                                <button className="bg-[#2F57EF] flex items-center justify-center gap-[10px] sm:gap-3 py-[15px] sm:py-[20px] px-[25px] sm:px-[30px] rounded-[15px] sm:rounded-full cursor-pointer hover:bg-[#1e3ba8] transition-all duration-300 hover:scale-105 active:scale-95 shadow-md">
                                    <MdEmail className="text-white text-[18px] sm:text-[20px]" />
                                    <p className="text-[14px] sm:text-[15px] font-medium tracking-[0.5px] text-white whitespace-nowrap">
                                        Subscribe
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Email