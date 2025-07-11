import Banner from "@/conponents/Banner";
import BannerTopbar from "@/conponents/BannerTopbar";
import Course from "@/conponents/Course";
import Navbar from "@/conponents/Navbar";


export default function Home() {
  return (
    <>
      <BannerTopbar />
      <Navbar />
      <Banner />
      <Course/>
    </>
  );
}
