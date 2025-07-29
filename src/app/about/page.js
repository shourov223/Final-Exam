import About_banner from '@/components/about/About_banner'
import About_vision from '@/components/about/About_vision'
import DailyActivity from '@/components/about/DailyActivity'
import Passion from '@/components/about/Passion'
import Company from '@/components/home/Company'
import PopularCourse from '@/components/home/PopularCourse'
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
