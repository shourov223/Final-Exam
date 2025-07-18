import Image from "next/image"
import books from "../assets/books.svg"
import { FaCheck, FaLocationDot } from "react-icons/fa6"
import Link from "next/link"
import { IoCall } from "react-icons/io5"
import { MdCopyright, MdEmail } from "react-icons/md"

const Footer = () => {
    return (
        <footer className="footer_bg">
            <div className="container">
                <div className="grid xl:grid-cols-[495px_184px_301px] lg:grid-cols-[1fr_300px] md:grid-cols-2 grid-cols-1 justify-between items-start xl:gap-[144px] lg:gap-[60px] md:gap-[40px] gap-[30px] xl:pt-[186px] lg:pt-[120px] md:pt-[80px] pt-[60px] xl:pb-[82px] lg:pb-[60px] md:pb-[50px] pb-[40px] border-b border-b-white/30">
                    <div className="xl:order-1 lg:order-1 md:order-1 order-1">
                        <div className="pb-[13px] flex items-center gap-[10px]">
                            <div>
                                <Image src={books} alt="image" />
                            </div>
                            <h1 className="text-[30px] xl:text-[30px] lg:text-[28px] md:text-[26px] text-[24px] font-bold leading-[54.1px] xl:leading-[54.1px] lg:leading-[42px] md:leading-[36px] leading-[32px] text-white">Escola</h1>
                        </div>
                        <p className="text-white text-[17px] xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[24px] md:leading-[22px] leading-[20px] max-w-[495px] xl:max-w-[495px] lg:max-w-[400px] md:max-w-[350px] max-w-full pb-10 xl:pb-10 lg:pb-8 md:pb-6 pb-5">Many desktop ublishing packages web page editors no Lorem Ipsum a default model text, and a search for</p>
                        <div className="flex items-center gap-[10px] xl:gap-[10px] lg:gap-[8px] md:gap-[8px] gap-[6px]">
                            <div className="size-[40px] xl:size-[40px] lg:size-[38px] md:size-[36px] size-[34px] flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary transition-all ease-in-out duration-200">
                                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[10px] lg:w-[9px] md:w-[8px] w-[7px]">
                                    <path d="M8.71875 8.99512H6.375V15.9951H3.25V8.99512H0.6875V6.12012H3.25V3.90137C3.25 1.40137 4.75 -0.00488281 7.03125 -0.00488281C8.125 -0.00488281 9.28125 0.213867 9.28125 0.213867V2.68262H8C6.75 2.68262 6.375 3.43262 6.375 4.24512V6.12012H9.15625L8.71875 8.99512Z" fill="white" />
                                </svg>
                            </div>
                            <div className="size-[40px] xl:size-[40px] lg:size-[38px] md:size-[36px] size-[34px] flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary transition-all ease-in-out duration-200">
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[14px] lg:w-[13px] md:w-[12px] w-[11px]">
                                    <path d="M3.125 14.9951H0.21875V5.65137H3.125V14.9951ZM1.65625 4.40137C0.75 4.40137 0 3.62012 0 2.68262C0 1.40137 1.375 0.588867 2.5 1.24512C3.03125 1.52637 3.34375 2.08887 3.34375 2.68262C3.34375 3.62012 2.59375 4.40137 1.65625 4.40137ZM13.9688 14.9951H11.0938V10.4639C11.0938 9.37012 11.0625 7.99512 9.5625 7.99512C8.0625 7.99512 7.84375 9.15137 7.84375 10.3701V14.9951H4.9375V5.65137H7.71875V6.93262H7.75C8.15625 6.21387 9.09375 5.43262 10.5 5.43262C13.4375 5.43262 14 7.37012 14 9.87012V14.9951H13.9688Z" fill="white" />
                                </svg>
                            </div>
                            <div className="size-[40px] xl:size-[40px] lg:size-[38px] md:size-[36px] size-[34px] flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary transition-all ease-in-out duration-200">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[15px] lg:w-[14px] md:w-[13px] w-[12px]">
                                    <path d="M8 3.40137C9.96875 3.40137 11.5938 5.02637 11.5938 6.99512C11.5938 8.99512 9.96875 10.5889 8 10.5889C6 10.5889 4.40625 8.99512 4.40625 6.99512C4.40625 5.02637 6 3.40137 8 3.40137ZM8 9.33887C9.28125 9.33887 10.3125 8.30762 10.3125 6.99512C10.3125 5.71387 9.28125 4.68262 8 4.68262C6.6875 4.68262 5.65625 5.71387 5.65625 6.99512C5.65625 8.30762 6.71875 9.33887 8 9.33887ZM12.5625 3.27637C12.5625 2.80762 12.1875 2.43262 11.7188 2.43262C11.25 2.43262 10.875 2.80762 10.875 3.27637C10.875 3.74512 11.25 4.12012 11.7188 4.12012C12.1875 4.12012 12.5625 3.74512 12.5625 3.27637ZM14.9375 4.12012C15 5.27637 15 8.74512 14.9375 9.90137C14.875 11.0264 14.625 11.9951 13.8125 12.8389C13 13.6514 12 13.9014 10.875 13.9639C9.71875 14.0264 6.25 14.0264 5.09375 13.9639C3.96875 13.9014 3 13.6514 2.15625 12.8389C1.34375 11.9951 1.09375 11.0264 1.03125 9.90137C0.96875 8.74512 0.96875 5.27637 1.03125 4.12012C1.09375 2.99512 1.34375 1.99512 2.15625 1.18262C3 0.370117 3.96875 0.120117 5.09375 0.0576172C6.25 -0.00488281 9.71875 -0.00488281 10.875 0.0576172C12 0.120117 13 0.370117 13.8125 1.18262C14.625 1.99512 14.875 2.99512 14.9375 4.12012ZM13.4375 11.1201C13.8125 10.2139 13.7188 8.02637 13.7188 6.99512C13.7188 5.99512 13.8125 3.80762 13.4375 2.87012C13.1875 2.27637 12.7188 1.77637 12.125 1.55762C11.1875 1.18262 9 1.27637 8 1.27637C6.96875 1.27637 4.78125 1.18262 3.875 1.55762C3.25 1.80762 2.78125 2.27637 2.53125 2.87012C2.15625 3.80762 2.25 5.99512 2.25 6.99512C2.25 8.02637 2.15625 10.2139 2.53125 11.1201C2.78125 11.7451 3.25 12.2139 3.875 12.4639C4.78125 12.8389 6.96875 12.7451 8 12.7451C9 12.7451 11.1875 12.8389 12.125 12.4639C12.7188 12.2139 13.2188 11.7451 13.4375 11.1201Z" fill="white" />
                                </svg>
                            </div>
                            <div className="size-[40px] xl:size-[40px] lg:size-[38px] md:size-[36px] size-[34px] flex items-center justify-center rounded-full bg-white/20 hover:bg-secondary transition-all ease-in-out duration-200">
                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:w-[16px] lg:w-[15px] md:w-[14px] w-[13px]">
                                    <path d="M14.3438 3.74512C14.3438 3.90137 14.3438 4.02637 14.3438 4.18262C14.3438 8.52637 11.0625 13.4951 5.03125 13.4951C3.15625 13.4951 1.4375 12.9639 0 12.0264C0.25 12.0576 0.5 12.0889 0.78125 12.0889C2.3125 12.0889 3.71875 11.5576 4.84375 10.6826C3.40625 10.6514 2.1875 9.71387 1.78125 8.40137C2 8.43262 2.1875 8.46387 2.40625 8.46387C2.6875 8.46387 3 8.40137 3.25 8.33887C1.75 8.02637 0.625 6.71387 0.625 5.12012V5.08887C1.0625 5.33887 1.59375 5.46387 2.125 5.49512C1.21875 4.90137 0.65625 3.90137 0.65625 2.77637C0.65625 2.15137 0.8125 1.58887 1.09375 1.12012C2.71875 3.08887 5.15625 4.40137 7.875 4.55762C7.8125 4.30762 7.78125 4.05762 7.78125 3.80762C7.78125 1.99512 9.25 0.526367 11.0625 0.526367C12 0.526367 12.8438 0.901367 13.4688 1.55762C14.1875 1.40137 14.9062 1.12012 15.5312 0.745117C15.2812 1.52637 14.7812 2.15137 14.0938 2.55762C14.75 2.49512 15.4062 2.30762 15.9688 2.05762C15.5312 2.71387 14.9688 3.27637 14.3438 3.74512Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ul className="xl:order-2 lg:order-3 md:order-2 order-2">
                        <li className="text-white text-[21px] xl:text-[21px] lg:text-[20px] md:text-[19px] text-[18px] font-bold leading-[31.5px] xl:leading-[31.5px] lg:leading-[28px] md:leading-[26px] leading-[24px] tracking-common pb-6 xl:pb-6 lg:pb-5 md:pb-4 pb-3">Useful Links</li>
                        <Links text={"Software Corner"} />
                        <Links text={"Application Center"} />
                        <Links text={"Research Section"} />
                        <Links text={"Developing Corner"} />
                    </ul>
                    <ul className="flex flex-col gap-[10px] xl:gap-[10px] lg:gap-[8px] md:gap-[8px] gap-[6px] xl:order-3 lg:order-2 md:order-3 order-3">
                        <li className="text-white text-[21px] xl:text-[21px] lg:text-[20px] md:text-[19px] text-[18px] font-bold leading-[31.5px] xl:leading-[31.5px] lg:leading-[28px] md:leading-[26px] leading-[24px] tracking-common pb-6 xl:pb-6 lg:pb-5 md:pb-4 pb-3">Contact</li>
                        <li className="flex items-center gap-[18px] xl:gap-[18px] lg:gap-[15px] md:gap-[12px] gap-[10px]">
                            <IoCall className="text-secondary xl:text-base lg:text-sm md:text-sm text-xs" />
                            <p className="text-[17px] xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[24px] md:leading-[22px] leading-[20px] text-white max-w-[268px] xl:max-w-[268px] lg:max-w-[220px] md:max-w-[200px] max-w-full">+880 123 45 67 89</p>
                        </li>
                        <li className="flex items-center gap-[18px] xl:gap-[18px] lg:gap-[15px] md:gap-[12px] gap-[10px]">
                            <MdEmail className="text-secondary xl:text-base lg:text-sm md:text-sm text-xs" />
                            <p className="text-[17px] xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[24px] md:leading-[22px] leading-[20px] text-white max-w-[268px] xl:max-w-[268px] lg:max-w-[220px] md:max-w-[200px] max-w-full">yourmail@gmail.com</p>
                        </li>
                        <li className="flex items-start gap-[18px] xl:gap-[18px] lg:gap-[15px] md:gap-[12px] gap-[10px]">
                            <FaLocationDot className="text-secondary xl:text-base lg:text-sm md:text-sm text-xs mt-1" />
                            <p className="text-[17px] xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[24px] md:leading-[22px] leading-[20px] text-white max-w-[268px] xl:max-w-[268px] lg:max-w-[220px] md:max-w-[200px] max-w-full">1212, Lav Vegas, The Veg Street, USA</p>
                        </li>
                    </ul>
                </div>
                <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col xl:items-center lg:items-center md:items-center items-start justify-between gap-5 xl:gap-5 lg:gap-4 md:gap-3 gap-4 py-[30px] xl:py-[30px] lg:py-[25px] md:py-[20px] py-[15px]">
                    <div className="flex items-center gap-1">
                        <MdCopyright className="text-white/50 xl:text-base lg:text-sm md:text-sm text-xs" />
                        <p className="text-white/50 text-[17px] xl:text-[17px] lg:text-[15px] md:text-[14px] text-[13px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[22px] md:leading-[20px] leading-[18px]">Yoursitename  2023 | All Rights Reserved</p>
                    </div>
                    <p className="text-white/50 text-[17px] xl:text-[17px] lg:text-[15px] md:text-[14px] text-[13px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[22px] md:leading-[20px] leading-[18px]">Privacy   |   Terms   |   Sitemap   |   Help</p>
                </div>
            </div>
        </footer>
    )
}

const Links = ({ text }) => {
    return (
        <li className="group">
            <Link href={"*"} className="flex items-center gap-[18px] xl:gap-[18px] lg:gap-[15px] md:gap-[12px] gap-[10px]">
                <FaCheck className="text-white size-[16px] xl:size-[16px] lg:size-[14px] md:size-[13px] size-[12px] group-hover:text-secondary transition-all duration-200" />
                <p className="text-white text-[17px] xl:text-[17px] lg:text-[16px] md:text-[15px] text-[14px] leading-[26.1px] xl:leading-[26.1px] lg:leading-[24px] md:leading-[22px] leading-[20px] group-hover:text-secondary transition-all duration-200">{text}</p>
            </Link>
        </li>
    )
}
export default Footer