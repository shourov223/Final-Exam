import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const About_banner = () => {
    return (
        <section className='about_banner'>
            <div className="container">
                <div className='text-center pt-[150px] pb-[123px]'>
                    <h1 className='text-[36px] font-bold leading-[49px] tracking-common pb-[20px] text-primary'>About Us</h1>
                    <span className='flex items-center justify-center gap-[19px]'>
                        <Link className='text-[21px] font-bold leading-[31.5px] tracking-common' href={"/"}>Home</Link >
                        <MdKeyboardArrowRight className='text-primary' />
                        <Link className='text-[21px] font-bold leading-[31.5px] tracking-common' href={"/about"}>About Us</Link >
                    </span>
                </div>
            </div>
        </section>
    )
}

export default About_banner
