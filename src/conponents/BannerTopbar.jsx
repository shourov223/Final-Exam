import { MdMail } from "react-icons/md";
import { FaArrowRight, FaFacebookF, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";


const BannerTopbar = () => {
  return (
    <section className='px-[45px] z-10 relative bg-white'>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-[10px]">
            <MdMail className="text-[#0D7DFB]" />
            <p className="text-[16px] leading-[160%]">info@example.com</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <FaLocationDot className="text-[#0D7DFB]" />
            <p className="text-[16px] leading-[160%]">6391 Elgin St. Celina, 10299</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="relative overflow-hidden flex items-center gap-[10px] bg-[#0D7DFB] py-[20px] px-[30px] text-white group cursor-pointer">
            <span className="relative z-10 flex items-center gap-[10px]">
              Get a quote
              <FaArrowRight className="text-white" />
            </span>
            <span className="absolute left-0 top-0 h-full w-0 bg-gray-950 opacity-70 transition-all duration-500 group-hover:w-full z-0"></span>
          </button>
          <div className="flex items-center gap-[25px] pl-[30px]">
            <FaFacebookF />
            <IoLogoInstagram />
            <FaTwitter />
            <IoLogoLinkedin />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerTopbar
