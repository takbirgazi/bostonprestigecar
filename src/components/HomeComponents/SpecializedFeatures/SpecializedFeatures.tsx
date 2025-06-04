import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import Image from "next/image";
import featuredImage from "@/assets/images/homeImage_2.jpeg";

const SpecializedFeatures = () => {
    const SectionHeaderData = {
        heading: "Checkout our complete and Safe Boston Airport Car Service with Baby Seat Options.",
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
                        <h2 className="text-mainColor text-lg font-bold">Pick location & date</h2>
                        <p>Pick your pick up & drop location and date, and provide passenger details like number of adults and children.</p>
                    </div>
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Choose Requirements</h2>
                        <p>Do you need child car seats, stopovers, extra luggage? Add age appropriate seats & stopovers enroute your destination.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
                    <figure className="rounded-xs overflow-hidden">
                        <Image src={featuredImage} alt="SUV cabs logan airport" />
                    </figure>
                </div>
                <div className="w-full md:w-1/3 p-4 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Choose a vehicle</h2>
                        <p>Pick the right vehicle according to your requirement and style from our fleet of luxury SUVs, Minivans and Sedans.</p>
                    </div>
                    <div>
                        <h2 className="text-mainColor text-lg font-bold">Pay and Confirm</h2>
                        <p>Make a secured payment and get instant confirmation via SMS and Email. We keep you updated about the ride with timely alerts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecializedFeatures;