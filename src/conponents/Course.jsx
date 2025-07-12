import Image from "next/image"
import { FaArrowRight, FaStar } from "react-icons/fa6"
import { IoPersonOutline } from "react-icons/io5"
import course from "../assets/course-1.png"
import course_one from "../assets/course_one.png"
import course_two from "../assets/course_two.png"
import course_three from "../assets/course_three.png"
import vector from "../assets/Vector.svg"

const Course = () => {
    return (
        <section className="mt-[800px] pb-[176px] relative">
            <Image width={65} height={76} className="absolute bottom-[80px] right-[80px] animate-top-to-bottom" src={vector} alt="icon" />
            <div className="container">
                <p className="text-[#2F57EF] text-[18px] font-bold leading-[31.5px] tracking-[-0.3px] text-center">Top Popular Course</p>
                <h2 className="text-[#192335] font-bold text-[42px] leading-[54.1px] pt-[10px] text-center pb-[60px]">Building a better tomorrow</h2>
                <div className="grid grid-cols-3">
                    <Courses rating={"15"} img={course_one} text={"Development"} title={"The Power of Personal Branding"} />
                    <Courses rating={"11"} img={course_two} text={"Development"} title={"The Power of Personal Branding"} />
                    <Courses rating={"12"} img={course_three} text={"Development"} title={"The Power of Personal Branding"} />
                </div>
            </div>
        </section>
    )
}

const Courses = ({ img, text, title, rating }) => {
    return (
        <div className="max-w-[410px] shadow-box rounded-[5px] overflow-hidden group">
            <div className="relative overflow-hidden">
                <Image width={410} src={img} alt="image" className="group-hover:scale-[1.1] transition-all ease-in duration-300" />
                <div className="absolute top-[21px] left-[21px] bg-[#2F57EF] text-[13px] font-medium leading-[21px] text-white py-[10px] px-[15px] rounded-[5px]">{text}</div>
            </div>
            <div className="px-[30px] pt-[40px]">
                <div className="pb-[30px] flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <IoPersonOutline />
                        <p className="text-[13px] text-[#192335] leading-[15px]">50 Students</p>
                    </div>
                    <div className="flex items-center gap-[7px]">
                        <ul className="flex items-center gap-[2px]">
                            <li><FaStar className="text-[#FF9747]" /></li>
                            <li><FaStar className="text-[#FF9747]" /></li>
                            <li><FaStar className="text-[#FF9747]" /></li>
                            <li><FaStar className="text-[#FF9747]" /></li>
                            <li><FaStar className="text-[#FF9747]" /></li>
                        </ul>
                        <p className="text-[#192335] text-[12px] font-medium leading-[21px]">({rating} Reviews)</p>
                    </div>
                </div>
                <h4 className="text-[#192335] font-bold text-[25px] leading-[32.5px] pb-[30px]">{title}</h4>
                <div className="pb-[40px] flex items-center justify-between">
                    <div>
                        <div className="size-[40px] rounded-full">
                            <Image src={course} alt="image" />
                        </div>
                        <p className="text-[#192335] text-[13px] font-medium leading-[21px]">By Angela</p>
                    </div>
                    <button className="text-[#2F57EF] text-[18px] font-bold leading-[36px] flex items-center gap-2">
                        Enroll Now
                        <FaArrowRight className="text-[#2F57EF]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Course
