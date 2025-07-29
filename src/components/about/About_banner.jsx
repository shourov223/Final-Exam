import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const About_banner = () => {
    return (
        <CommonBanner heading={"About Us"} link={"About Us"} href={"/about"} />
    )
}

export const CommonBanner = ({ heading, link, href }) => {
    return (
        <section className='about_banner'>
            <div className="container">
                <div className='text-center pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[150px] pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[123px] px-4 sm:px-6'>
                    <h1 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold leading-[1.3] sm:leading-[1.35] md:leading-[1.4] lg:leading-[49px] tracking-common pb-[15px] sm:pb-[18px] lg:pb-[20px] text-primary'>{heading}</h1>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-[12px] sm:gap-[15px] md:gap-[19px]'>
                        <Link className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-bold leading-[1.5] tracking-common hover:text-primary transition-colors' href={"/"}>Home</Link >
                        <MdKeyboardArrowRight className='text-primary text-[18px] sm:text-[20px] md:text-[22px] rotate-90 sm:rotate-0' />
                        <Link className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-bold leading-[1.5] tracking-common hover:text-primary transition-colors' href={href}>{link}</Link >
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About_banner