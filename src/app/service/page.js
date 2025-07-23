import About_vision from "@/conponents/about/About_vision"
import Email from "@/conponents/home/Email"
import Goals from "@/conponents/service/Goals"
import ServiceBanner from "@/conponents/service/ServiceBanner"
import Success from "@/conponents/service/Success"

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
