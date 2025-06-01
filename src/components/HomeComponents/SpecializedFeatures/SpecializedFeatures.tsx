import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import featuredImage from "@/assets/images/featureImage.jpg";

const SpecializedFeatures = () => {
    const SectionHeaderData = {
        heading: "Our Specialized Features at Boston Express Cab",
        description: "Enjoy unmatched convenience, safety, and customization with Boston Express Cab. We ensure seamless travel solutions for memorable journeys and stress-free rides.",
    };

    return (
        <div className="pt-2 pb-10">
            <div className="w-full md:max-w-3xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Airport Transfer</h2>
                        <p>Enjoy seamless, reliable airport transfers with Boston Express Cab. Our professional drivers ensure a smooth ride from Logan Airport to your destination.</p>
                    </div>
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Child Seat</h2>
                        <p>Ensure your little one&apos;s safety with our child seat facility. Boston Express Cab provides secure and comfortable child seats for a stress-free journey.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
                    <figure className="rounded-xs overflow-hidden">
                        <Image src={featuredImage} alt="SUV cabs logan airport" />
                    </figure>
                </div>
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Corporate Taxi Service</h2>
                        <p>Experience reliable transportation with our Corporate Taxi Service. Boston Express Cab ensures punctual and comfortable rides for your business needs.</p>
                    </div>
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Hourly Service</h2>
                        <p>Take control of your schedule with our Hourly Service. Boston Express Cab offers flexible and convenient transportation options, tailored to your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecializedFeatures;