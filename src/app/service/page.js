import About_vision from "@/components/about/About_vision"
import Email from "@/components/home/Email"
import Goals from "@/components/service/Goals"
import ServiceBanner from "@/components/service/ServiceBanner"
import Success from "@/components/service/Success"

const page = () => {
    return (
        <>
            <ServiceBanner />
            <Goals />
            <Success />
            <Email />
            <About_vision />
        </>
    )
}

export default page
