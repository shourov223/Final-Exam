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
        <section className='py-[120px]'>
            <div className="container">
                <div className='grid grid-cols-[850px_1fr] gap-[30px]'>
                    <div className='flex flex-col gap-20'>
                        <LeftContent image={blog_one} title={"Unleashing Your Inner Genius: A Guide to Achieving Your Ambitions"} />
                        <LeftContent image={blog_two} title={"Educating for Success: A Guide to Achieving Your Goals"} />
                        <LeftContent image={blog_three} title={"Unlocking Your Potential: A Guide to Achieving Your Dreams"} />
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

const LeftContent = ({ image, title }) => {
    return (
        <div className='max-w-[850px] knowledge_shawow group'>
            <div className='overflow-hidden'>
                <Image className='group-hover:scale-[1.1] transition-all ease-in-out duration-700' alt='image' src={image} />
            </div>
            <div className='py-[30px] px-[40px]'>
                <div className='flex items-center gap-[20px] pb-3'>
                    <span className='flex items-center gap-1.5 text-[17px] leading-[26.1px] text-primary'><IoPersonOutline /> By admin</span>
                    <span className='flex items-center gap-1.5 text-[17px] leading-[26.1px] text-primary'><SiFiles /> Category</span>
                    <span className='flex items-center gap-1.5 text-[17px] leading-[26.1px] text-primary'><FaCalendarDays /> October 19, 2023</span>
                </div>
                <h2 className='text-[36px] font-bold leading-[39px] tracking-[-0.79px] pb-[20px] text-primary'>{title}</h2>
                <p className='text-[17px] leading-[26.1px] text-primary pb-[33px]'>Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra .Aliquam eros justo, posuere Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper</p>
                <Link href={"/blog-details"}>
                    <button className="relative flex items-center gap-[10px] text-white text-[15px] font-medium tracking-[0.5px] py-6 px-[30px] bg-secondary rounded-[5px] overflow-hidden group cursor-pointer">
                        <span className="relative z-10">Read more</span>
                        <FaArrowRightLong className="text-white relative z-10" />
                        <span className="absolute top-0 left-0 w-0 h-full bg-black z-0 transition-all duration-700 group-hover:w-full"></span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export const Recent_news = ({ img, text }) => {
    return (
        <div className='flex items-center gap-[15px]'>
            <div className='min-w-[75px] h-[75px] rounded-[10px] overflow-hidden'>
                <Image className='w-full h-full' src={img} alt='image' />
            </div>
            <div>
                <p className='text-[16px] font-semibold text-primary pb-[10px]'>{text}</p>
                <ul className='list-disc pl-[20px]'>
                    <li className='text-[17px] leading-[26.1px] text-primary'>20 Aug,2022</li>
                </ul>
            </div>
        </div>
    )
}
export const Tags = ({ text }) => {
    return (
        <div className='text-[17px] leading-[26.1px] py-[5px] px-[15px] rounded-[5px] bg-[#F3F6FB]'>{text}</div>
    )
}
export default BlogContent
