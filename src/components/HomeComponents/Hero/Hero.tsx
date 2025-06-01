
import MainForm from "@/components/SharedComponent/MainForm/MainForm";
import heroBg from "@/assets/images/heroBg2.jpg";

const Hero = () => {

    return (
        <div style={{ background: `url(${heroBg.src})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "bottom" }} className="min-h-[600px]">
            <div className="container mx-auto max-w-[1200px] px-4 flex flex-col h-full">
                <div className="flex flex-col items-center pb-12 md:flex-row gap-4 md:gap-8 pt-36">
                    <div className="w-full md:w-1/2 pb-20 md:pb-0">
                        <h2 className="text-white font-bold text-3xl md:text-5xl">Looking for a <span className="text-mainColor">taxi</span>? You&apos;re at the right place.</h2>
                    </div>
                    <div className="w-full md:w-1/2">
                        <MainForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;