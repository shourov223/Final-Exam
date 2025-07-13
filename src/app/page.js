import Banner from "@/conponents/Banner";
import BannerTopbar from "@/conponents/BannerTopbar";
import Company from "@/conponents/Company";
import Course from "@/conponents/Course";
import Email from "@/conponents/Email";
import Generation from "@/conponents/Generation";
import Knowledge from "@/conponents/Knowledge";
import Navbar from "@/conponents/Navbar";
import Partnar from "@/conponents/Partnar";
import PopularCourse from "@/conponents/PopularCourse";


export default function Home() {
  return (
    <>
      <BannerTopbar />
      <Navbar />
      <Banner />
      <Course />
      <PopularCourse />
      <Knowledge />
      <Generation />
      <Email />
      <Partnar />
      <Company />
    </>
  );
}
