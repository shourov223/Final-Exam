import Image from "next/image"
import { CommonPart } from "./PopularCourse"
import knowledge from "../assets/knowledge.png"
import { FaCheckCircle } from "react-icons/fa";
import threeLineDots from "../assets/3-lineDots.png"

const Knowledge = () => {
    return (
        <section className="knowledge_background mt-[124px] relative">
            <div className="absolute top-[54px] right-[70px] animate-top-to-bottom">
                <Image src={threeLineDots} alt="dost" />
            </div>
            <div className="container">
                <div className="pt-[127px]">
                    <CommonPart />
                    <div className="grid grid-cols-[706px_584px] rounded-[40px] overflow-hidden knowledge_shawow translate-y-[35px]">
                        <div>
                            <Image src={knowledge} alt="image" />
                        </div>
                        <ul className="bg-white py-20 flex items-center justify-center flex-col gap-10">
                            <Point title={"parse Optional"} text={"The goal of ecology is to understand how organisms interact with each other and their environment"} />
                            <Point title={"Unbranded"} text={"Ecologists use a variety of methods, such as field observa tions, experiments, and modeling, to study the complex"} />
                            <Point title={"nulla iste commodi"} text={"Ecologists use a variety of methods, such as field observa tions, experiments, and modeling, to study the complex"} />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Point = ({ title, text }) => {
    return (
        <li className="flex gap-[20px] items-start">
            <FaCheckCircle className="text-[#3D64FF] mt-3" />
            <div className="flex flex-col gap-[7px]">
                <p className="text-primary text-[21px] font-bold leading-[31.5px] tracking-[-0.3px]">{title}</p>
                <p className="max-w-[390px] text-[17px] text-primary leading-[27.1px]">{text}</p>
            </div>
        </li>
    )
}
export default Knowledge
