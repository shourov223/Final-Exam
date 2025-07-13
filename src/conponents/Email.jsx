import Image from "next/image"
import email from "../assets/email.svg"
import { MdEmail } from "react-icons/md"
import thunder from "../assets/thunder.svg"


const Email = () => {
    return (
        <section className="pt-[120px] relative">
            <div className="absolute bottom-0 left-[150px] animate-top-to-bottom">
                <Image src={thunder} alt="image" />
            </div>
            <div className="container">
                <div className="bg-[#00D09C] py-[94px] px-[52px] rounded-[8px]">
                    <div className="flex items-center">
                        <div className="flex items-center  gap-[33px]">
                            <Image src={email} alt="email-icon" />
                            <h2 className="text-white text-[42px] leading-[54.1px] max-w-[445px]">Subscribe your email for Newsletter</h2>
                        </div>
                        <div className="bg-white min-w-[559px] flex items-center justify-between rounded-full py-2 pl-[33px] pr-[9px]">
                            <input className="focus:outline-none" type="email" placeholder="Email Address" />
                            <button className="bg-[#2F57EF] flex items-center gap-3 py-[20px] px-[30px] rounded-full cursor-pointer">
                                <MdEmail className="text-white" />
                                <p className="text-[15px] font-medium tracking-[0.5px] text-white">Subscribe</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Email
