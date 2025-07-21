import gOne from "../../assets/gOne.svg"
import gTwo from "../../assets/gTwo.svg"
import gThree from "../../assets/gThree.svg"
import gFour from "../../assets/gFour.svg"
import Image from "next/image"

const Goals = () => {
    return (
        <section className="py-[120px]">
            <div className="container">
                <div className="grid grid-cols-4 gap-[30px]">
                    <GoalsBox image={gOne} color={"#FFE6E2"} title={"Future Focus"} />
                    <GoalsBox image={gTwo} color={"#E3F8FB"} title={"Smart Scholars"} translate={"40px"} />
                    <GoalsBox image={gThree} color={"#FFF9DF"} title={"Knowledge Hub"} />
                    <GoalsBox image={gFour} color={"#F5E6FD"} title={" Learning Pathways"} translate={"40px"} />
                </div>
            </div>
        </section>
    )
}

const GoalsBox = ({ image, title, color, translate }) => {
    return (
        <div className={`goals_shadow max-w-[300px] px-[30px] pt-[30px] pb-[45px] bg-white rounded-[10px]`} style={{ transform: `translateY(${translate})` }} >
            <div className={`bg-[${color}] size-[80px] rounded-[5px] flex items-center justify-center mx-auto`}>
                <Image src={image} alt="icons" />
            </div>
            <h3 className="text-[21px] font-bold leading-[31.5px] tracking-common text-primary pt-[20px] pb-[15px] text-center">{title}</h3>
            <p className="text-center text-[17px] leading-[26.1px]">Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
        </div >
    )
}
export default Goals
