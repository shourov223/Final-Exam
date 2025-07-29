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
        <section className="py-[120px]">
            <div className="container">
                <div className="grid grid-cols-[850px_1fr] gap-[30px] items-start">
                    <div>
                        <div className="rounded-[10px] overflow-hidden">
                            <Image src={details_one} alt="image" />
                        </div>
                        <div className='flex items-center gap-[20px] pt-[20px] pb-3'>
                            <span className='flex items-center gap-1.5 text-[17px] leading-[26.1px] text-primary'><IoPersonOutline /> By admin</span>
                            <span className='flex items-center gap-1.5 text-[17px] leading-[26.1px] text-primary'><SiFiles /> Category</span>
                            <span className='flex items-center gap-1.5 text-[17px] leading-[26.1px] text-primary'><FaCalendarDays /> October 19, 2023</span>
                        </div>
                        <h2 className="text-[40px] font-bold text-primary pb-[20px]">Exploring the Impact of Education: A Comprehensive Guide</h2>
                        <p className="text-[17px] leading-[26.1px] text-primary pb-[20px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,</p>
                        <p className="text-[17px] leading-[26.1px] text-primary pb-[30px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock</p>
                        <div className="p-[30px] rounded-[5px] bg-[#F3F6FB] flex items-start gap-[33px]">
                            <div className="min-w-[46px] h-[46px]">
                                <Image src={quotes} alt="icons" />
                            </div>
                            <div>
                                <p className="text-[18px] text-primary pb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                                <div className="flex items-center gap-4">
                                    <div className="bg-[#2F57EF] w-[69px] h-[1px]"></div>
                                    <p className="text-[16px] text-primary"><span className="font-bold">Jane Cooper</span>,CEO</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-[17px] leading-[26.1px] text-primary pt-[30px] pb-[49px]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virgini</p>

                        <div className="flex items-start gap-[30px] pb-[30px]">
                            <div className="min-w-[410px] h-[270px]">
                                <Image className="w-full h-full" src={details_two} alt="image" />
                            </div>
                            <div>
                                <h4 className="text-[28px] font-semibold text-primary pb-[15px]">Keep your free time free!</h4>
                                <p className="text-[17px] text-primary">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem</p>
                            </div>
                        </div>
                        <p className="text-[17px] leading-[26.1px] text-primary">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem IpsumContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
                        <div className="flex items-center gap-[44px] pt-[110px] pb-[60px]">
                            <p className="text-[21px] leading-[31.5px] font-bold text-primary tracking-common">Tags:</p>
                            <div className="flex items-center gap-[10px]">
                                <Tags text={"Solutions"} />
                                <Tags text={"Wheepup"} />
                                <Tags text={"Educational Excellence"} />
                            </div>
                        </div>
                        <div className="border border-[#E3E3E3] py-[33px] px-[30px] rounded-[5px] flex items-center justify-between">
                            <div className="flex items-center gap-[20px]">
                                <button className="size-[50px] flex items-center justify-center bg-secondary rounded-[5px] cursor-pointer">
                                    <FaChevronLeft className="text-white" />
                                </button>
                                <p className="text-[18px] font-bold leading-[31.5px] text-primary max-w-[169px]">We have Solutions for Agri Need</p>
                            </div>
                            <div className="w-[1px] h-[50px] bg-secondary"></div>
                            <div className="flex items-center gap-[20px]">
                                <button className="size-[50px] flex items-center justify-center bg-secondary rounded-[5px] cursor-pointer">
                                    <FaChevronRight className="text-white" />
                                </button>
                                <p className="text-[18px] font-bold leading-[31.5px] text-primary max-w-[169px]">Finest Products, Finest Results</p>
                            </div>
                        </div>
                        <p className="pt-20 text-[20px] font-bold leading-[28px] text-primary pb-[30px]">Many Thoughts On “Reach your health potential”</p>
                        <div className="flex flex-col gap-[30px] items-center">
                            <Comment img={comment_one} name={"Mike Dooley"} />
                            <Comment img={comment_one} name={"Mike Dooley"} />
                            <Comment img={comment_two} name={"Chis Wensel"} />
                        </div>
                        <form className="pt-20">
                            <p className="text-[28px] font-semibold text-primary pb-7">Leave a reply</p>
                            <div className="grid grid-cols-3 gap-[23px] items-center">
                                <input placeholder="Name" className="placeholder:text-[17px] leading-[26.1px] text-primary py-[14px] px-[18px] outline-0 focus:outline-0 border border-gray-400 rounded-[5px]" type="text" />
                                <input placeholder="E-mail" className="placeholder:text-[17px] leading-[26.1px] text-primary py-[14px] px-[18px] outline-0 focus:outline-0 border border-gray-400 rounded-[5px]" type="email" />
                                <input placeholder="Subject" className="placeholder:text-[17px] leading-[26.1px] text-primary py-[14px] px-[18px] outline-0 focus:outline-0 border border-gray-400 rounded-[5px]" type="text" />
                            </div>
                            <div className="pt-[20px]">
                                <input type="text" className="outline-0 focus:outline-0 border border-[#D4D7E5] rounded-[5px] w-full h-[180px]" />
                            </div>
                            <div className="flex items-center gap-[10px] pt-[23px]">
                                <input type="checkbox" />
                                <p className="text-[17px] leading-[26.1px] text-primary">Save my name,email and website in this browser for the next time</p>
                            </div>
                            <button className="text-[15px] font-medium tracking-[0.5px] text-white py-[24.5px] px-[30px] bg-secondary rounded-[5px] mt-[20px] cursor-pointer">Submit comment</button>
                        </form>
                    </div>
                    <div>
                        <div className='p-[30px] rounded-[12px] border border-[#192335]/20 mb-[30px]'>
                            <p className='text-[20px] font-semibold text-primary pb-[10px]'>Search Here </p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className='flex items-center justify-between max-w-full border border-[#E2E5F1] rounded-[12px] py-[12px] px-[20px]'>
                                <input className='focus:outline-0 outline-0 w-full' type="search" placeholder='Search..' />
                                <button className='cursor-pointer'>
                                    <CiSearch className='text-secondary size-[25px] stroke-[2px]' />
                                </button>
                            </div>
                        </div>

                        <div className='p-[30px] rounded-[12px] border border-[#192335]/20 mb-10'>
                            <p className='text-[20px] font-semibold text-primary pb-[10px]'>Recent Posts</p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className='flex flex-col gap-[20px] items-center'>
                                <Recent_news img={recent_news_one} text={"The Benefits of Education: A Guide for Students"} />
                                <Recent_news img={recent_news_two} text={"Exploring the Impact of Education: A Compre Guide"} />
                                <Recent_news img={recent_news_three} text={"Unlocking the Power of Education: A ComprehensiLook"} />
                                <Recent_news img={recent_news_three} text={"The Benefits of Education: A Guide for Students"} />
                            </div>
                        </div>

                        <div className='p-[30px] rounded-[12px] border border-[#192335]/20'>
                            <p className='text-[20px] font-semibold text-primary pb-[10px]'>Popular Tags</p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className=' flex items-center flex-wrap gap-[20px]'>
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
        <div className="flex items-start gap-[19px] p-[20px] border border-gray-200">
            <div className="min-w-[65px] h-[65px] rounded-[5px] overflow-hidden">
                <Image className="w-full h-full" src={img} alt="iamge" />
            </div>
            <div>
                <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-[7px]">
                        <p className="text-[20px] font-bold leading-[28px] text-primary">{name}</p>
                        <p className="text-secondary text-[16px] font-medium leading-[30px]">December 23,2022 at 8:50 P.M</p>
                    </div>
                    <button className="py-3 px-[19px] bg-secondary rounded-[3px] text-white font-medium text-[15px] tracking-[0.5px] cursor-pointer">REPLY</button>
                </div>
                <p className="text-base font-medium leading-[30px] text-primary">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. RichardClintock</p>
            </div>
        </div>
    )
}

export default BlogContent_details
