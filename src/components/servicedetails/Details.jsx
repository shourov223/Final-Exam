import Image from "next/image"
import success_one from "../../assets/success_one.png"
import success_two from "../../assets/success_two.png"
import { FaCheck } from "react-icons/fa6"
import adobe from "../../assets/adobe.svg"

const Details = () => {
    return (
        <section className="py-[60px] md:py-[80px] lg:py-[120px]">
            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-[410px_1fr] xl:grid-cols-[410px_850px] gap-[30px] lg:gap-[30px] items-start'>
                    <div>
                        <div className="flex flex-col gap-[25px] order-2 lg:order-1">
                            <h2 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold leading-[33px] md:leading-[36px] lg:leading-[39px] tracking-common text-primary">Category</h2>
                            <Category text={"The Benefits"} />
                            <Category text={"Impact of Education"} />
                            <Category text={"Comprehensive Look"} />
                            <Category text={"Benefits of Education"} />
                            <Category text={"Impact of Education"} />
                            <Category text={"Comprehensive Look"} />
                            <Category text={"Guide for Students"} />
                        </div>
                        <div className="pt-[50px]">
                            <h3 className="text-[26px] font-bold leading-[39px] tracking-common relative after:content-[''] after:absolute after:w-[108px] after:h-[2px] after:bg-secondary after:bottom-[-4px] after:left-0">Brochure</h3>
                            <div className="flex items-center flex-col gap-[10px] pt-9">
                                <Brochure text={"Download Brochure"} />
                                <Brochure text={"Company Details"} />
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-bold leading-[36px] sm:leading-[41px] md:leading-[46px] lg:leading-[54.1px] pb-[20px] md:pb-[25px] text-primary">Unlocking the Power of Education: A Comprehensive Look</h1>

                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26.1px] text-primary pb-[25px] md:pb-[32px]">long established fact that a reader will be distracted by the readable content of a page when looking at its layout io The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using It is the best service of every</p>
                        <div className="flex flex-col sm:flex-row items-center gap-[20px] md:gap-[30px]">
                            <div className="w-full sm:w-1/2">
                                <Image
                                    width={410}
                                    src={success_one}
                                    alt="image"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full sm:w-1/2">
                                <Image
                                    width={410}
                                    src={success_two}
                                    alt="image"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <ul className="pt-[25px] md:pt-[30px] flex flex-col gap-[18px] md:gap-[22px] pb-[45px] md:pb-[60px]">
                            <ListItems text={"Your Startup industry standard our service decesion loream saum solar sysem in the world."} />
                            <ListItems text={"Knew About Fonts text the printing and solar minimum best service in our."} />
                            <ListItems text={"Mistakes To Avoid to the dummy printing solar system is the main power service."} />
                        </ul>

                        <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-bold leading-[33px] md:leading-[36px] lg:leading-[39px] tracking-common text-primary pb-1">Hand working</h3>

                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26.1px] text-primary pb-[35px] md:pb-[42px]">Aliquam eros justo, posuere loborti vive rra laoreet matti ullamc orper posu ere viverra .Aliquam eros justo, posuer lobortis non, vive rra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquam es justo, posuere loborti viverra laoreet mat ullamcorper posue viverra .Aliquam eros justonon, viverra</p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[25px] md:gap-[43px]">
                            <Li text={"A Guide for Students"} />
                            <Li text={"Unlocking the Power of Education"} />
                            <Li text={"Aliquam eros justo, posuere loborti "} />
                            <Li text={"A Comprehensive Look"} />
                            <Li text={"Impact of Education: A Comprehensive Guide"} />
                            <Li text={"Giverra laoreet "} />
                            <Li text={"A Comprehensive Guide"} />
                            <Li text={"Guide for Students"} />
                        </ul>

                        <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26.1px] text-primary pt-[20px] md:pt-[23px]">Aliquam eros justo, posuere loborti viverra laoreet matti ullam corper posuere viverra .Aliquam eros justo, posuere lobortis  viverra laoreet augue mattis fermentum ullamcorper viverra laoreet Aliquas justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Category = ({ text }) => {
    return (
        <div className='w-full border border-[#E1E1E1] rounded-[5px] py-[12px] md:py-[15px] px-[15px] md:px-[20px] flex items-center gap-[8px] md:gap-[10px] hover:bg-secondary transition-all duration-500 group'>
            <div className='size-[16px] md:size-[19px] flex items-center justify-center rounded-full border border-[#E1E1E1] group-hover:border-white flex-shrink-0'>
                <svg width={6} height={8} viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[5px] md:w-[6px] h-[6px] md:h-[8px]">
                    <path d="M1.25 3.27835e-07C1.42578 3.12468e-07 1.58203 0.058594 1.69922 0.175782L4.82422 3.30078C5.07812 3.53516 5.07812 3.94531 4.82422 4.17969L1.69922 7.30469C1.46484 7.55859 1.05469 7.55859 0.820312 7.30469C0.566406 7.07031 0.566406 6.66016 0.820312 6.42578L3.49609 3.75L0.820312 1.05469C0.566406 0.820313 0.566405 0.410157 0.820312 0.175782C0.937499 0.0585941 1.09375 3.41495e-07 1.25 3.27835e-07Z" fill="#2F57EF" className='group-hover:fill-white' />
                </svg>
            </div>
            <p className='text-[16px] md:text-[18px] leading-[32px] md:leading-[36px] text-primary group-hover:text-white transition-opacity'>{text}</p>
        </div>
    )
}

const ListItems = ({ text }) => {
    return (
        <li className="flex items-start gap-[15px] md:gap-[17px]">
            <div className="size-[18px] md:size-[20px] bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-[3px]">
                <FaCheck className="text-white size-[9px] md:size-[10px]" />
            </div>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26.1px] text-primary">{text}</p>
        </li>
    )
}

const Li = ({ text }) => {
    return (
        <li className="text-[15px] md:text-[16px] lg:text-[17px] leading-[23px] md:leading-[24px] lg:leading-[26.1px] text-primary flex items-start gap-[15px] md:gap-[23px]">
            <span className="size-[4px] md:size-[5px] rounded-full bg-secondary flex-shrink-0 mt-[10px] md:mt-[11px]"></span>
            {text}
        </li>
    )
}

const Brochure = ({ text }) => {
    return <div className="sm:w-full py-[10px] px-[20px] border border-[#E3E3E3] flex gap-[20px] items-center">
        <div>
            <Image src={adobe} alt="icons" />
        </div>
        <p className="text-[21px] font-bold leading-[31.5px] tracking-common text-primary">{text}</p>
    </div>
}
export default Details