import phn from "../../assets/phn.svg"
import email_box from "../../assets/email_box.svg"
import address from "../../assets/address.svg"
import Image from "next/image"

const Contact_details = () => {
    return (
        <section className='pt-[30px] md:pt-[40px] lg:pt-[50px]'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[25px] lg:gap-[30px] max-w-[320px] md:max-w-[680px] lg:max-w-[960px] mx-auto translate-y-[25%] md:translate-y-[35%] lg:translate-y-[50%]">
                    <Contact_option image={phn} heading={"Phone Number"} details={"012 345 678 9101"} extra={true} detailsTwo={"012 345 678 9101"} />
                    <Contact_option image={email_box} heading={"Email Address"} details={"abcd@gmail.com"} extra={true} detailsTwo={"efgh@gmail.com"} />
                    <Contact_option image={address} heading={"Office Address"} details={"66 Broklyant, New York India 3269 Road."} />
                </div>
                <div className="w-full h-[300px] md:h-[400px] lg:h-[480px]">
                    <iframe className="w-full h-full rounded-[8px] md:rounded-[10px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21570.132129560818!2d90.3600653077548!3d23.802066867142887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1f2a4049aeb%3A0xcffebf50a8b322f!2sCreative%20IT%20Institute%2C%20Mirpur%20Campus!5e1!3m2!1sen!2sbd!4v1753860441186!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
    )
}

const Contact_option = ({ image, heading, extra = false, details, detailsTwo }) => {
    return (
        <div className="bg-white border border-gray-200 text-center px-[20px] sm:px-[40px] md:px-[50px] lg:px-[76px] pb-[25px] md:pb-[30px] lg:pb-[35px] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="size-[60px] md:size-[70px] lg:size-[80px] bg-secondary rounded-b-[15px] md:rounded-b-[18px] lg:rounded-b-[20px] flex items-center justify-center mx-auto">
                <Image src={image} alt="image" className="w-[24px] md:w-[28px] lg:w-[32px] h-auto" />
            </div>
            <p className="text-[18px] md:text-[19px] lg:text-[21px] font-bold leading-[26px] md:leading-[28px] lg:leading-[31.5px] tracking-common pt-[20px] md:pt-[25px] lg:pt-[31px] pb-[15px] md:pb-[18px] lg:pb-[21px] text-primary">{heading}</p>
            <p className="text-[14px] md:text-[15px] lg:text-base text-primary leading-[22px] md:leading-[26px] lg:leading-[30px]">{details}</p>
            {extra && <p className="text-[14px] md:text-[15px] lg:text-base text-primary leading-[22px] md:leading-[26px] lg:leading-[30px]">{detailsTwo}</p>}
        </div>
    )
}
export default Contact_details