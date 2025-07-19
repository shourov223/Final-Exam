"use client"
import Image from "next/image"
import dailyActivity from "../../assets/dailyActivity.png"
import settings from "../../assets/settings.svg"
import subject from "../../assets/subject.svg"
import CountUp from "react-countup"
import { Point } from "../home/Knowledge"

const DailyActivity = () => {
    return (
        <section className="pt-[120px]">
            <div className="container">
                <div className='grid grid-cols-[770px_440px] items-start gap-20'>
                    <div>
                        <div>
                            <Image src={dailyActivity} alt="image" />
                        </div>
                        <div className="flex items-center gap-[32px] pt-[30px]">
                            <div className="flex items-center gap-[20px] w-[369px] bg-[#F3F6FB] py-[45px] px-[70px]">
                                <div className="size-[64px] flex items-center justify-center rounded-full bg-[#33CC79]">
                                    <Image src={settings} alt="icons" />
                                </div>
                                <div>
                                    <p className="text-[42px] font-bold leading-[54.1px] text-[#6864ED]"><CountUp className="text-[42px] font-bold leading-[54.1px] text-[#6864ED]" start={0} end={200} />+</p>
                                    <p className="text-gray-900 text-[21px] font-medium leading-[31.5px] tracking-common">Courses</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-[20px] w-[369px] bg-[#F3F6FB] py-[45px] px-[70px]">
                                <div className="size-[64px] flex items-center justify-center rounded-full bg-[#33CC79]">
                                    <Image src={subject} alt="icons" />
                                </div>
                                <div>
                                    <p className="text-[42px] font-bold leading-[54.1px] text-[#6864ED]"><CountUp className="text-[42px] font-bold leading-[54.1px] text-[#6864ED]" start={0} end={10} />K+</p>
                                    <p className="text-gray-900 text-[21px] font-medium leading-[31.5px] tracking-common">Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-secondary text-[18px] font-bold leading-[31.5px] tracking-common pb-[18px]">Top Popular Course</p>
                        <h2 className="text-[42px] font-bold leading-[54.1px] text-primary pb-[17px]">Knowledge is power  education is the key</h2>
                        <p className="pb-[43px] text-[17px] leading-[26.1px] text-primary">Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training</p>
                        <div>
                            <ul className="flex flex-col gap-[37px]">
                                <Point title={"Smart Scholars"} text={"The goal of ecology is to understand how organisms interact with each other "} />
                                <Point title={"Knowledge Hub"} text={"Ecologists use a variety of methods, such as field observa tions, experiments"} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DailyActivity
