import AboutUs from "@/components/HomeComponents/AboutUs/AboutUs";
import Hero from "@/components/HomeComponents/Hero/Hero";
import HeroMobile from "@/components/HomeComponents/Hero/HeroMobile";
import HomeContent from "@/components/HomeComponents/HomeContent/HomeContent";
import HowWork from "@/components/HomeComponents/HowWork/HowWork";
import PopularCities from "@/components/HomeComponents/PopularCities/PopularCities";
import Rents from "@/components/HomeComponents/Rents/Rents";
import Reviews from "@/components/HomeComponents/Reviews/Reviews";
import SpecializedFeatures from "@/components/HomeComponents/SpecializedFeatures/SpecializedFeatures";
import 'aos/dist/aos.css';


export default function Home() {
  return (
    <div className="bg-[#ffffff]">
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="md:hidden block">
        <HeroMobile />
      </div>
      <div className="max-w-[1250px] mx-auto px-4">
        <HomeContent />
        <AboutUs />
        <HowWork />
        {/* <OurServices /> */}
        <SpecializedFeatures />
      </div>
      <PopularCities />
      <div className="max-w-[1250px] mx-auto px-4">
        <Reviews />
        <Rents />
      </div>
    </div>
  );
}
