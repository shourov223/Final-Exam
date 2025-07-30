import React from 'react'
import blog_one from "../../assets/blog_one.png"
import blog_two from "../../assets/blog_two.png"
import blog_three from "../../assets/blog_three.png"
import recent_news_one from "../../assets/recent_news_one.png"
import recent_news_two from "../../assets/recent_news_two.png"
import recent_news_three from "../../assets/recent_news_three.png"
import Image from 'next/image'
import { SiFiles } from "react-icons/si";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from 'react-icons/io5'
import { FaArrowRightLong, FaCalendarDays } from 'react-icons/fa6'
import Link from 'next/link'

const BlogContent = () => {
    return (
        <section className='py-[60px] md:py-[80px] lg:py-[120px]'>
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[1fr_350px] xl:grid-cols-[850px_1fr] gap-[20px] md:gap-[30px]'>
                    <div className='flex flex-col gap-10 md:gap-16 lg:gap-20'>
                        <LeftContent image={blog_one} title={"Unleashing Your Inner Genius: A Guide to Achieving Your Ambitions"} />
                        <LeftContent image={blog_two} title={"Educating for Success: A Guide to Achieving Your Goals"} />
                        <LeftContent image={blog_three} title={"Unlocking Your Potential: A Guide to Achieving Your Dreams"} />
                    </div>
                    <div>
                        <div className='p-[20px] md:p-[30px] rounded-[12px] border border-[#192335]/20 mb-[20px] md:mb-[30px]'>
                            <p className='text-[18px] md:text-[20px] font-semibold text-primary pb-[10px]'>Search Here </p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[20px] md:mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className='flex items-center justify-between max-w-full border border-[#E2E5F1] rounded-[12px] py-[12px] px-[15px] md:px-[20px]'>
                                <input className='focus:outline-0 outline-0 w-full text-sm md:text-base' type="search" placeholder='Search..' />
                                <button className='cursor-pointer ml-2'>
                                    <CiSearch className='text-secondary size-[20px] md:size-[25px] stroke-[2px]' />
                                </button>
                            </div>
                        </div>
                        <div className='p-[20px] md:p-[30px] rounded-[12px] border border-[#192335]/20 mb-6 md:mb-10'>
                            <p className='text-[18px] md:text-[20px] font-semibold text-primary pb-[10px]'>Recent Posts</p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[20px] md:mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className='flex flex-col gap-[15px] md:gap-[20px] items-center'>
                                <Recent_news img={recent_news_one} text={"The Benefits of Education: A Guide for Students"} />
                                <Recent_news img={recent_news_two} text={"Exploring the Impact of Education: A Compre Guide"} />
                                <Recent_news img={recent_news_three} text={"Unlocking the Power of Education: A ComprehensiLook"} />
                                <Recent_news img={recent_news_three} text={"The Benefits of Education: A Guide for Students"} />
                            </div>
                        </div>
                        <div className='p-[20px] md:p-[30px] rounded-[12px] border border-[#192335]/20'>
                            <p className='text-[18px] md:text-[20px] font-semibold text-primary pb-[10px]'>Popular Tags</p>
                            <div className='w-full h-[2px] bg-gray-300 mb-[20px] md:mb-[29px] relative after:absolute after:content-[""] after:w-[40px] after:h-[2px] after:left-0 after:top-0 after:bg-secondary'></div>
                            <div className=' flex items-center flex-wrap gap-[10px] md:gap-[15px] lg:gap-[20px]'>
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

const LeftContent = ({ image, title }) => {
    return (
        <div className='max-w-full lg:max-w-[850px] knowledge_shawow group'>
            <div className='overflow-hidden rounded-t-[12px] lg:rounded-t-0'>
                <Image className='group-hover:scale-[1.1] transition-all ease-in-out duration-700 w-full h-auto' alt='image' src={image} />
            </div>
            <div className='py-[20px] px-[20px] md:py-[25px] md:px-[30px] lg:py-[30px] lg:px-[40px]'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-[10px] sm:gap-[15px] md:gap-[20px] pb-3'>
                    <span className='flex items-center gap-1.5 text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'><IoPersonOutline className='text-sm md:text-base' /> By admin</span>
                    <span className='flex items-center gap-1.5 text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'><SiFiles className='text-sm md:text-base' /> Category</span>
                    <span className='flex items-center gap-1.5 text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'><FaCalendarDays className='text-sm md:text-base' /> October 19, 2023</span>
                </div>
                <h2 className='text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-[28px] md:leading-[34px] lg:leading-[39px] tracking-[-0.5px] md:tracking-[-0.65px] lg:tracking-[-0.79px] pb-[15px] md:pb-[18px] lg:pb-[20px] text-primary'>{title}</h2>
                <p className='text-[15px] md:text-[16px] lg:text-[17px] leading-[22px] md:leading-[24px] lg:leading-[26.1px] text-primary pb-[25px] md:pb-[30px] lg:pb-[33px]'>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper</p>
                <Link href={"/blog-details"}>
                    <button className="relative flex items-center justify-center sm:justify-start gap-[8px] md:gap-[10px] text-white text-[14px] md:text-[15px] font-medium tracking-[0.5px] py-4 md:py-5 lg:py-6 px-[20px] md:px-[25px] lg:px-[30px] bg-secondary rounded-[5px] overflow-hidden group cursor-pointer w-full sm:w-auto">
                        <span className="relative z-10">Read more</span>
                        <FaArrowRightLong className="text-white relative z-10 text-sm md:text-base" />
                        <span className="absolute top-0 left-0 w-0 h-full bg-black z-0 transition-all duration-700 group-hover:w-full"></span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export const Recent_news = ({ img, text }) => {
    return (
        <div className='flex items-start gap-[12px] md:gap-[15px] w-full'>
            <div className='min-w-[60px] md:min-w-[70px] lg:min-w-[75px] h-[60px] md:h-[70px] lg:h-[75px] rounded-[8px] md:rounded-[10px] overflow-hidden flex-shrink-0'>
                <Image className='w-full h-full object-cover' src={img} alt='image' />
            </div>
            <div className='flex-1'>
                <p className='text-[14px] md:text-[15px] lg:text-[16px] font-semibold text-primary pb-[8px] md:pb-[10px] leading-[20px] md:leading-[22px]'>{text}</p>
                <ul className='list-disc pl-[15px] md:pl-[20px]'>
                    <li className='text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] text-primary'>20 Aug,2022</li>
                </ul>
            </div>
        </div>
    )
}
export const Tags = ({ text }) => {
    return (
        <div className='text-[14px] md:text-[16px] lg:text-[17px] leading-[20px] md:leading-[24px] lg:leading-[26.1px] py-[4px] md:py-[5px] px-[10px] md:px-[12px] lg:px-[15px] rounded-[5px] bg-[#F3F6FB] whitespace-nowrap'>{text}</div>
    )
}
export default BlogContent
