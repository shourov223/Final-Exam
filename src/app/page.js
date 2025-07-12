import Banner from "@/conponents/Banner";
import BannerTopbar from "@/conponents/BannerTopbar";
import Course from "@/conponents/Course";
import Generation from "@/conponents/Generation";
import Knowledge from "@/conponents/Knowledge";
import Navbar from "@/conponents/Navbar";
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
    </>
  );
}
