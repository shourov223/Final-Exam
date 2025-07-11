import Image from "next/image"
import bannerImage from "../assets/bannerImage.png"

const Banner = () => {
    return (
        <section className="absolute w-full h-full top-[125px] left-0">
            <div className="bg-[#192335] relative w-auto">
                <div className="background absolute top-0 left-0 w-full h-full"></div>
                <div className="">
                    <div className="flex items-center justify-between gap-[177px]">
                        <div className="pl-[315px]">
                            <p className="text-[18px] font-bold text-[#4ADA85] leading-[31.5px] tracking-[-0.3px] pb-[11px]">Click Learn Thrive</p>
                            <h1 className="text-white font-bold text-[59px] leading-[71.4px] max-w-[532px] pb-[17px]">Unlock your potential through education</h1>
                            <p className="text-[17px] leading-[26.1px] max-w-[521px] pb-[30px] text-white">Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa volutpat eleifend pellentesque vivamus nulla</p>
                            <button className="bg-[#F8BC26] rounded-[5px] text-[14px] text-[#192335] font-medium leading-[60px] tracking-[0.5px] px-9">Contact us</button>
                        </div>
                        <div>
                            <Image src={bannerImage} alt="image"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
