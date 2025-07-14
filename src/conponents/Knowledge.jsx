import Image from "next/image";
import { CommonPart } from "./PopularCourse";
import knowledge from "../assets/knowledge.png";
import { FaCheckCircle } from "react-icons/fa";
import threeLineDots from "../assets/3-lineDots.png";

const Knowledge = () => {
    return (
        <section className="knowledge_background mt-[124px] relative">
            <div className="absolute top-[20px] right-[20px] md:top-[54px] md:right-[70px] animate-top-to-bottom">
                <Image src={threeLineDots} alt="dost" />
            </div>
            <div className="container">
                <div className="pt-[80px] md:pt-[127px]">
                    <CommonPart />
                    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-[40px] overflow-hidden knowledge_shawow translate-y-[35px]">
                        <div className="w-full h-full">
                            <Image src={knowledge} alt="image" className="w-full h-full object-cover" />
                        </div>
                        <ul className="bg-white py-10 px-6 md:px-10 flex items-center justify-center flex-col gap-10">
                            <Point
                                title={"parse Optional"}
                                text={
                                    "The goal of ecology is to understand how organisms interact with each other and their environment"
                                }
                            />
                            <Point
                                title={"Unbranded"}
                                text={
                                    "Ecologists use a variety of methods, such as field observations, experiments, and modeling, to study the complex"
                                }
                            />
                            <Point
                                title={"nulla iste commodi"}
                                text={
                                    "Ecologists use a variety of methods, such as field observations, experiments, and modeling, to study the complex"
                                }
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Point = ({ title, text }) => {
    return (
        <li className="flex gap-4 items-start">
            <FaCheckCircle className="text-[#3D64FF] mt-1.5 text-[20px]" />
            <div className="flex flex-col gap-2">
                <p className="text-primary text-[18px] md:text-[21px] font-bold leading-[28px] md:leading-[31.5px] tracking-[-0.3px]">
                    {title}
                </p>
                <p className="max-w-[390px] text-[15px] md:text-[17px] text-primary leading-[24px] md:leading-[27.1px]">
                    {text}
                </p>
            </div>
        </li>
    );
};

export default Knowledge;
