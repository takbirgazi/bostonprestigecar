import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import featuredImage from "@/assets/images/homeImage_2.jpeg";

const SpecializedFeatures = () => {
    const SectionHeaderData = {
        title: "Why Choose Us",
        heading: "Unmatched quality and service Boston airport car service & taxi cab with taxi baby seat Options.",
        description: "",
    };

    return (
        <div className="pt-2 pb-10">
            <div className="w-full md:max-w-3xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Comfortable and Clean Vehicles</h2>
                        <p>All our cars are cleaned and cared for regularly. They are roomy and have modern features. These help make your trip comfortable, whether you have one person or ten in the car.</p>
                    </div>
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Child Car Seats</h2>
                        <p>Traveling to Boston or leaving from JFK airport? Keep your child safe. Follow Boston&apos;s road traffic laws. We offer age-appropriate child seats for a small fee.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
                    <figure className="rounded-xs overflow-hidden">
                        <Image src={featuredImage} alt="SUV cabs logan airport" />
                    </figure>
                </div>
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Hand Picked Drivers</h2>
                        <p>Our drivers are trusted professionals we’ve known personally for over 5-15 years. They are highly experienced and familiar with local routes, ensuring your safety and timely arrival</p>
                    </div>
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">$1 Ride Confirmation</h2>
                        <p>Reserve your ride for just $1! Pay the rest later when you use the service. Secure your ride for busy days or future plans without the hassle of upfront payments.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecializedFeatures;