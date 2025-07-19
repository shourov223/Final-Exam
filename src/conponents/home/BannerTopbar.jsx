import { MdMail } from "react-icons/md";
import { FaArrowRight, FaFacebookF, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";

const BannerTopbar = () => {
  return (
    <section className='px-[20px] md:px-[45px] z-10 relative bg-white py-2 md:py-0'>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-10 w-full md:w-auto">
          <div className="flex items-center gap-[10px]">
            <MdMail className="text-[#0D7DFB] text-sm md:text-base" />
            <p className="text-[14px] md:text-[16px] leading-[160%]">info@example.com</p>
          </div>
          <div className="flex items-center gap-[10px] text-center sm:text-left">
            <FaLocationDot className="text-[#0D7DFB] text-sm md:text-base flex-shrink-0" />
            <p className="text-[14px] md:text-[16px] leading-[160%]">6391 Elgin St. Celina, 10299</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full md:w-auto">
          <button className="relative overflow-hidden flex items-center gap-[10px] bg-[#0D7DFB] py-[15px] md:py-[20px] px-[20px] md:px-[30px] text-white group cursor-pointer text-sm md:text-base w-full sm:w-auto justify-center">
            <span className="relative z-10 flex items-center gap-[10px] whitespace-nowrap">
              Get a quote
              <FaArrowRight className="text-white" />
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-gray-950 opacity-70 transition-all duration-500 group-hover:w-full z-0"></span>
          </button>
          <div className="flex items-center gap-[15px] sm:gap-[20px] md:gap-[25px] pl-0 sm:pl-[20px] md:pl-[30px] justify-center">
            <FaFacebookF className="text-sm md:text-base hover:text-[#0D7DFB] transition-colors cursor-pointer" />
            <IoLogoInstagram className="text-sm md:text-base hover:text-[#0D7DFB] transition-colors cursor-pointer" />
            <FaTwitter className="text-sm md:text-base hover:text-[#0D7DFB] transition-colors cursor-pointer" />
            <IoLogoLinkedin className="text-sm md:text-base hover:text-[#0D7DFB] transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerTopbar