import "slick-carousel/slick/slick.css";
import Banner from "@/components/home/Banner.jsx";
import Company from "@/components/home/Company.jsx";
import Course from "@/components/home/Course.jsx";
import Email from "@/components/home/Email.jsx";
import Generation from "@/components/home/Generation.jsx";
import Knowledge from "@/components/home/Knowledge.jsx";
import Partnar from "@/components/home/Partnar.jsx";
import PopularCourse from "@/components/home/PopularCourse.jsx";
import Vision from "@/components/home/Vision.jsx";
import News from "@/components/home/News.jsx";


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
