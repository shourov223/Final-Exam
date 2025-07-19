import About_banner from '@/conponents/about/About_banner'
import About_vision from '@/conponents/about/About_vision'
import DailyActivity from '@/conponents/about/DailyActivity'
import Passion from '@/conponents/about/Passion'
import Company from '@/conponents/home/Company'
import PopularCourse from '@/conponents/home/PopularCourse'
import React from 'react'

const page = () => {
    return (
        <>
            <About_banner />
            <DailyActivity />
            <Passion />
            <PopularCourse />
            <Company />
            <About_vision />
        </>
    )
}

export default page
