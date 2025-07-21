import Goals from "@/conponents/service/Goals"
import ServiceBanner from "@/conponents/service/ServiceBanner"
import Success from "@/conponents/service/Success"

const page = () => {
    return (
        <>
            <ServiceBanner />
            <Goals />
            <Success />
        </>
    )
}

export default page
