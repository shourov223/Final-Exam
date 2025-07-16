import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import course from "../assets/course-1.png";
import course_one from "../assets/course_one.png";
import course_two from "../assets/course_two.png";
import course_three from "../assets/course_three.png";
import vector from "../assets/Vector.svg";

const Course = () => {
    return (
        <section className="mt-[600px] sm:mt-[800px] md:mt-[1000px] lg:mt-[650px] xl:mt-[700px] pb-[176px] relative">
            <Image
                width={65}
                height={76}
                className="absolute bottom-[80px] right-[20px] md:right-[80px] animate-top-to-bottom"
                src={vector}
                alt="icon"
            />
            <div className="container">
                <p className="text-[#2F57EF] text-[16px] md:text-[18px] font-bold leading-[31.5px] tracking-[-0.3px] text-center">
                    Top Popular Course
                </p>
                <h2 className="text-[#192335] font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[38px] md:leading-[46px] lg:leading-[54.1px] pt-[10px] text-center pb-[60px]">
                    Building a better tomorrow
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[30px]">
                    <Courses rating={"15"} img={course_one} text={"Development"} title={"The Power of Personal Branding"} />
                    <Courses rating={"11"} img={course_two} text={"Development"} title={"The Power of Personal Branding"} />
                    <Courses rating={"12"} img={course_three} text={"Development"} title={"The Power of Personal Branding"} />
                </div>
            </div>
        </section>
    );
};

const Courses = ({ img, text, title, rating }) => {
    return (
        <div className="w-full max-w-[410px] mx-auto shadow-box rounded-[5px] overflow-hidden group bg-white">
            <div className="relative overflow-hidden">
                <Image
                    width={410}
                    src={img}
                    alt="image"
                    className="group-hover:scale-[1.1] transition-all ease-in duration-300 w-full h-auto"
                />
                <div className="absolute top-[21px] left-[21px] bg-[#2F57EF] text-[13px] font-medium leading-[21px] text-white py-[10px] px-[15px] rounded-[5px]">
                    {text}
                </div>
            </div>
            <div className="px-[20px] md:px-[30px] pt-[40px]">
                <div className="pb-[30px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
                <h4 className="text-[#192335] font-bold text-[20px] md:text-[25px] leading-[32.5px] pb-[30px]">{title}</h4>
                <div className="pb-[40px] flex items-center justify-between">
                    <div className="flex flex-col items-start">
                        <div className="size-[40px] rounded-full overflow-hidden mb-1">
                            <Image src={course} alt="image" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[#192335] text-[13px] font-medium leading-[21px]">By Angela</p>
                    </div>
                    <button className="text-[#2F57EF] text-[16px] md:text-[18px] font-bold leading-[36px] flex items-center gap-2">
                        Enroll Now
                        <FaArrowRight className="text-[#2F57EF]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Course;
