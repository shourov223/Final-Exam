import Image from "next/image";
import bannerImage from "../assets/bannerImage.png";

const Banner = () => {
    return (
        <section className="absolute w-full h-full top-[125px] left-0">
            <div className="bg-[#192335] relative w-full">
                <div className="background absolute top-0 left-0 w-full h-full"></div>
                <div className="w-full">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-10 px-4 md:px-12 lg:px-[100px] xl:pl-[315px] py-12">
                        <div className="text-center lg:text-left">
                            <p className="text-[16px] md:text-[18px] font-bold text-[#4ADA85] leading-[28px] md:leading-[31.5px] tracking-[-0.3px] pb-[11px]">
                                Click Learn Thrive
                            </p>
                            <h1 className="text-white font-bold text-[32px] md:text-[44px] lg:text-[59px] leading-[40px] md:leading-[56px] lg:leading-[71.4px] max-w-[532px] mx-auto lg:mx-0 pb-[17px]">
                                Unlock your potential through education
                            </h1>
                            <p className="text-[15px] md:text-[17px] leading-[24px] md:leading-[26.1px] max-w-[500px] text-white pb-[30px] mx-auto lg:mx-0">
                                Magnis viverra nisl rhoncus egestas rhoncus elit at. Massa volutpat eleifend pellentesque vivamus nulla
                            </p>
                            <button className="bg-[#F8BC26] rounded-[5px] text-[14px] text-[#192335] font-medium leading-[50px] md:leading-[60px] tracking-[0.5px] px-6 md:px-9">
                                Contact us
                            </button>
                        </div>
                        <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[650px]">
                            <Image src={bannerImage} alt="image" className="w-full h-auto" priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
