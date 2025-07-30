import Image from "next/image"
import { FaCalendarDays, FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { IoPersonOutline } from "react-icons/io5"
import { SiFiles } from "react-icons/si"
import details_one from "@/assets/details_one.png"
import details_two from "@/assets/details_two.png"
import comment_one from "../../assets/comment_one.png"
import comment_two from "../../assets/comment_two.png"
import quotes from "../../assets/quotes.svg"
import recent_news_one from "../../assets/recent_news_one.png"
import recent_news_two from "../../assets/recent_news_two.png"
import recent_news_three from "../../assets/recent_news_three.png"
import { Recent_news, Tags } from "../blog/BlogContent"
import { CiSearch } from "react-icons/ci"


const BlogContent_details = () => {
    return (
        <section className="py-[60px] md:py-[80px] lg:py-[120px]">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[850px_1fr] gap-[20px] md:gap-[30px] items-start">
                    <div className="group">
                        <div className="rounded-[8px] md:rounded-[10px] overflow-hidden">
                            <Image className="group-hover:scale-[1.1] transition-all duration-500 ease-in-out w-full h-auto" src={details_one} alt="image" />
                        </div>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-[10px] sm:gap-[15px] md:gap-[20px] pt-[15px] md:pt-[20px] pb-3'>
                            <span className='flex items-center gap-1.5 text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'><IoPersonOutline className='text-sm md:text-base' /> By admin</span>
                            <span className='flex items-center gap-1.5 text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'><SiFiles className='text-sm md:text-base' /> Category</span>
                            <span className='flex items-center gap-1.5 text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'><FaCalendarDays className='text-sm md:text-base' /> October 19, 2023</span>
                        </div>
                        <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-primary pb-[15px] md:pb-[18px] lg:pb-[20px] leading-[32px] md:leading-[38px] lg:leading-[44px]">Exploring the Impact of Education: A Comprehensive Guide</h2>
                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary pb-[15px] md:pb-[18px] lg:pb-[20px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary pb-[25px] md:pb-[28px] lg:pb-[30px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                        <div className="p-[20px] md:p-[25px] lg:p-[30px] rounded-[5px] bg-[#F3F6FB] flex flex-col sm:flex-row sm:items-start gap-[20px] md:gap-[28px] lg:gap-[33px]">
                            <div className="min-w-[36px] md:min-w-[41px] lg:min-w-[46px] h-[36px] md:h-[41px] lg:h-[46px] flex-shrink-0">
                                <Image src={quotes} alt="icons" className="w-full h-full" />
                            </div>
                            <div>
                                <p className="text-[16px] md:text-[17px] lg:text-[18px] text-primary pb-3 md:pb-4 leading-[24px] md:leading-[26px] lg:leading-[28px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                                <div className="flex items-center gap-3 md:gap-4">
                                    <div className="bg-[#2F57EF] w-[50px] md:w-[60px] lg:w-[69px] h-[1px]"></div>
                                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-primary"><span className="font-bold">Jane Cooper</span>,CEO</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary pt-[25px] md:pt-[28px] lg:pt-[30px] pb-[35px] md:pb-[42px] lg:pb-[49px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virgini</p>

                        <div className="flex flex-col lg:flex-row lg:items-start gap-[20px] md:gap-[25px] lg:gap-[30px] pb-[25px] md:pb-[28px] lg:pb-[30px]">
                            <div className="w-full lg:min-w-[350px] xl:min-w-[410px] h-[200px] md:h-[235px] lg:h-[270px] overflow-hidden rounded-[8px]">
                                <Image className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-500" src={details_two} alt="image" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-[22px] md:text-[25px] lg:text-[28px] font-semibold text-primary pb-[12px] md:pb-[14px] lg:pb-[15px] leading-[26px] md:leading-[30px] lg:leading-[34px]">Keep your free time free!</h4>
                                <p className="text-[15px] md:text-[16px] lg:text-[17px] text-primary leading-[22px] md:leading-[24px] lg:leading-[26px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem</p>
                            </div>
                        </div>
                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-[20px] md:gap-[30px] lg:gap-[44px] pt-[70px] md:pt-[90px] lg:pt-[110px] pb-[40px] md:pb-[50px] lg:pb-[60px]">
                            <p className="text-[18px] md:text-[20px] lg:text-[21px] leading-[26px] md:leading-[29px] lg:leading-[31.5px] font-bold text-primary tracking-common">Tags:</p>
                            <div className="flex items-center flex-wrap gap-[8px] md:gap-[10px]">
                                <Tags text={"Solutions"} />
                                <Tags text={"Wheepup"} />
                                <Tags text={"Educational Excellence"} />
                            </div>
                        </div>
                        <div className="border border-[#E3E3E3] py-[25px] md:py-[29px] lg:py-[33px] px-[20px] md:px-[25px] lg:px-[30px] rounded-[5px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[25px] lg:gap-0">
                            <div className="flex items-center gap-[15px] md:gap-[20px]">
                                <button className="size-[40px] md:size-[45px] lg:size-[50px] flex items-center justify-center bg-secondary rounded-[5px] cursor-pointer flex-shrink-0">
                                    <FaChevronLeft className="text-white text-sm md:text-base" />
                                </button>
                                <p className="text-[16px] md:text-[17px] lg:text-[18px] font-bold leading-[24px] md:leading-[28px] lg:leading-[31.5px] text-primary max-w-[200px] lg:max-w-[169px]">We have Solutions for Agri Need</p>
                            </div>
                            <div className="w-full lg:w-[1px] h-[1px] lg:h-[50px] bg-secondary"></div>
                            <div className="flex items-center gap-[15px] md:gap-[20px]">
                                <button className="size-[40px] md:size-[45px] lg:size-[50px] flex items-center justify-center bg-secondary rounded-[5px] cursor-pointer flex-shrink-0">
                                    <FaChevronRight className="text-white text-sm md:text-base" />
                                </button>
                                <p className="text-[16px] md:text-[17px] lg:text-[18px] font-bold leading-[24px] md:leading-[28px] lg:leading-[31.5px] text-primary max-w-[200px] lg:max-w-[169px]">Finest Products, Finest Results</p>
                            </div>
                        </div>
                        <p className="pt-[60px] md:pt-[70px] lg:pt-20 text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[24px] md:leading-[26px] lg:leading-[28px] text-primary pb-[25px] md:pb-[28px] lg:pb-[30px]">Many Thoughts On "Reach your health potential"</p>
                        <div className="flex flex-col gap-[25px] md:gap-[28px] lg:gap-[30px] items-center">
                            <Comment img={comment_one} name={"Mike Dooley"} />
                            <Comment img={comment_one} name={"Mike Dooley"} />
                            <Comment img={comment_two} name={"Chis Wensel"} />
                        </div>
                        <form className="pt-[60px] md:pt-[70px] lg:pt-20">
                            <p className="text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-primary pb-5 md:pb-6 lg:pb-7">Leave a reply</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] md:gap-[20px] lg:gap-[23px] items-center">
                                <input placeholder="Name" className="placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary py-[12px] md:py-[13px] lg:py-[14px] px-[15px] md:px-[16px] lg:px-[18px] outline-0 focus:outline-0 border border-gray-400 rounded-[5px] w-full" type="text" />
                                <input placeholder="E-mail" className="placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary py-[12px] md:py-[13px] lg:py-[14px] px-[15px] md:px-[16px] lg:px-[18px] outline-0 focus:outline-0 border border-gray-400 rounded-[5px] w-full" type="email" />
                                <input placeholder="Subject" className="placeholder:text-[15px] md:placeholder:text-[16px] lg:placeholder:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary py-[12px] md:py-[13px] lg:py-[14px] px-[15px] md:px-[16px] lg:px-[18px] outline-0 focus:outline-0 border border-gray-400 rounded-[5px] w-full md:col-span-2 lg:col-span-1" type="text" />
                            </div>
                            <div className="pt-[18px] md:pt-[19px] lg:pt-[20px]">
                                <textarea className="outline-0 focus:outline-0 border border-[#D4D7E5] rounded-[5px] w-full h-[120px] md:h-[150px] lg:h-[180px] p-[15px] md:p-[18px] lg:p-[20px] resize-none" placeholder="Write your message..."></textarea>
                            </div>
                            <div className="flex items-start gap-[8px] md:gap-[10px] pt-[20px] md:pt-[22px] lg:pt-[23px]">
                                <input type="checkbox" className="mt-1 flex-shrink-0" />
                                <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary">Save my name,email and website in this browser for the next time</p>
                            </div>
                            <button className="text-[14px] md:text-[15px] font-medium tracking-[0.5px] text-white py-[20px] md:py-[22px] lg:py-[24.5px] px-[25px] md:px-[28px] lg:px-[30px] bg-secondary rounded-[5px] mt-[18px] md:mt-[19px] lg:mt-[20px] cursor-pointer w-full sm:w-auto">Submit comment</button>
                        </form>
                    </div>
                    <div>
                        <div className='p-[20px] md:p-[25px] lg:p-[30px] rounded-[12px] border border-[#192335]/20 mb-[20px] md:mb-[25px] lg:mb-[30px]'>
                            <p className='text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-primary pb-[10px]'>Search Here </p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[25px] md:mb-[27px] lg:mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className='flex items-center justify-between max-w-full border border-[#E2E5F1] rounded-[12px] py-[12px] px-[15px] md:px-[18px] lg:px-[20px]'>
                                <input className='focus:outline-0 outline-0 w-full text-sm md:text-base' type="search" placeholder='Search..' />
                                <button className='cursor-pointer ml-2'>
                                    <CiSearch className='text-secondary size-[20px] md:size-[23px] lg:size-[25px] stroke-[2px]' />
                                </button>
                            </div>
                        </div>

                        <div className='p-[20px] md:p-[25px] lg:p-[30px] rounded-[12px] border border-[#192335]/20 mb-8 md:mb-9 lg:mb-10'>
                            <p className='text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-primary pb-[10px]'>Recent Posts</p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[25px] md:mb-[27px] lg:mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className='flex flex-col gap-[18px] md:gap-[19px] lg:gap-[20px] items-center'>
                                <Recent_news img={recent_news_one} text={"The Benefits of Education: A Guide for Students"} />
                                <Recent_news img={recent_news_two} text={"Exploring the Impact of Education: A Compre Guide"} />
                                <Recent_news img={recent_news_three} text={"Unlocking the Power of Education: A ComprehensiLook"} />
                                <Recent_news img={recent_news_three} text={"The Benefits of Education: A Guide for Students"} />
                            </div>
                        </div>

                        <div className='p-[20px] md:p-[25px] lg:p-[30px] rounded-[12px] border border-[#192335]/20'>
                            <p className='text-[18px] md:text-[19px] lg:text-[20px] font-semibold text-primary pb-[10px]'>Popular Tags</p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[25px] md:mb-[27px] lg:mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className=' flex items-center flex-wrap gap-[12px] md:gap-[16px] lg:gap-[20px]'>
                                <Tags text={"Facilities"} />
                                <Tags text={"Children"} />
                                <Tags text={"Policy"} />
                                <Tags text={"Vote"} />
                                <Tags text={"Medical"} />
                                <Tags text={"Education"} />
                                <Tags text={"Meeting"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Comment = ({ img, name }) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-start gap-[15px] md:gap-[17px] lg:gap-[19px] p-[15px] md:p-[18px] lg:p-[20px] border border-gray-200 rounded-[5px] w-full">
            <div className="min-w-[55px] md:min-w-[60px] lg:min-w-[65px] h-[55px] md:h-[60px] lg:h-[65px] rounded-[5px] overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                <Image className="w-full h-full object-cover" src={img} alt="image" />
            </div>
            <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div className="flex flex-col gap-[5px] md:gap-[6px] lg:gap-[7px]">
                        <p className="text-[18px] md:text-[19px] lg:text-[20px] font-bold leading-[24px] md:leading-[26px] lg:leading-[28px] text-primary">{name}</p>
                        <p className="text-secondary text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-[24px] md:leading-[27px] lg:leading-[30px]">December 23,2022 at 8:50 P.M</p>
                    </div>
                    <button className="py-2 md:py-2.5 lg:py-3 px-[15px] md:px-[17px] lg:px-[19px] bg-secondary rounded-[3px] text-white font-medium text-[13px] md:text-[14px] lg:text-[15px] tracking-[0.5px] cursor-pointer self-start sm:self-auto">REPLY</button>
                </div>
                <p className="text-[14px] md:text-[15px] lg:text-base font-medium leading-[24px] md:leading-[27px] lg:leading-[30px] text-primary">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. RichardClintock</p>
            </div>
        </div>
    )
}

export default BlogContent_details