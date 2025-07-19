import "slick-carousel/slick/slick.css";
import Banner from "@/conponents/home/Banner.jsx";
import Company from "@/conponents/home/Company.jsx";
import Course from "@/conponents/home/Course.jsx";
import Email from "@/conponents/home/Email.jsx";
import Generation from "@/conponents/home/Generation.jsx";
import Knowledge from "@/conponents/home/Knowledge.jsx";
import Partnar from "@/conponents/home/Partnar.jsx";
import PopularCourse from "@/conponents/home/PopularCourse.jsx";
import Vision from "@/conponents/home/Vision.jsx";
import News from "@/conponents/home/News.jsx";


export default function Home() {
  return (
    <>
      <Banner />
      <Course />
      <PopularCourse />
      <Knowledge />
      <Generation />
      <Email />
      <Partnar />
      <Company />
      <Vision />
      <News/>
    </>
  );
}
