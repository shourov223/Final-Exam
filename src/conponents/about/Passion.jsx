import Image from "next/image";
import play from "../../assets/play.png";
import passion from "../../assets/passion.png";

const Passion = () => {
    return (
        <section className="py-[60px] md:py-[120px]">
            <div className="container">
                <div className="bg-secondary flex flex-col lg:flex-row items-center justify-between rounded-[5px] overflow-hidden">
                    <div className="py-10 px-6 md:px-[71px] text-center lg:text-left">
                        <h2 className="text-white text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-tight max-w-[446px] mx-auto lg:mx-0 pb-6">
                            We made passion our raw material
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-[13px]">
                            <div className="w-10 h-10">
                                <Image src={play} alt="Play Icon" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[16px] md:text-[17px] leading-[26.1px] text-white">Call us now</p>
                                <a
                                    href="tel:+44 7700 900217"
                                    className="text-[18px] md:text-[21px] font-bold leading-[31.5px] tracking-wide text-white"
                                >
                                    +44 7700 900217
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-auto animate-left-to-right mt-8 lg:mt-0">
                        <Image src={passion} alt="Passion Visual" className="w-full max-w-[500px] mx-auto" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Passion;
