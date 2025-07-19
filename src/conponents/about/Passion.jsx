import Image from "next/image"
import play from "../../assets/play.png"
import passion from "../../assets/passion.png"

const Passion = () => {
    return (
        <section className="py-[120px]">
            <div className="container">
                <div className="bg-secondary flex items-center justify-between">
                    <div className="py-[56px] rounded-[5px] pl-[71px]">
                        <h2 className="text-white text-[42px] font-bold leading-[56.1px] max-w-[446px] pb-[57px]">We made passion our raw material</h2>
                        <div className="flex items-center gap-[13px]">
                            <div>
                                <Image src={play} alt="icons" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <p className="text-[17px] leading-[26.1px] text-white">Call us now</p>
                                <a className="text-[21px] font-bold leading-[31.5px] tracking-common text-white" href="tel:+44 7700 900217">+44 7700 900217</a>
                            </div>
                        </div>
                    </div>
                    <div className="animate-left-to-right">
                        <Image src={passion} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Passion
