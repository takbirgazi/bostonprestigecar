import Hero from "@/components/HomeComponents/Hero/Hero";
import HeroMobile from "@/components/HomeComponents/Hero/HeroMobile";


export default function Home() {
  return (
    <div className="bg-[#ffffff]">
      <div className="hidden md:block">
        <Hero />
      </div>
      <div className="md:hidden block">
        <HeroMobile />
      </div>
    </div>
  );
}
