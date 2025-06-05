import SectionHeader from '@/components/SharedComponent/SectionHeader/SectionHeader';
import about_icon_1 from "@/assets/images/icons/about_icon_1.png";
import about_icon_2 from "@/assets/images/icons/about_icon_2.png";
import about_icon_3 from "@/assets/images/icons/about_icon_3.png";
import about_icon_4 from "@/assets/images/icons/about_icon_4.png";
import Image from 'next/image';

const AboutUs = () => {
    const SectionHeaderData = {
        title: "About Us",
        heading: "Checkout our complete and Safe Boston Airport Car Service with Baby Seat Options.",
        description: "",
    };

    const cards = [
        {
            icon: about_icon_1,
            title: "Pick location & date",
            description: "Pick your pick up & drop location and date, and provide passenger details like number of adults and children.",
        },
        {
            icon: about_icon_2,
            title: "Choose Requirements",
            description: "Do you need child car seats, stopovers, extra luggage? Add age appropriate seats & stopovers enroute your destination.",
        },
        {
            icon: about_icon_3,
            title: "Choose a vehicle",
            description: "Pick the right vehicle according to your requirement and style from our fleet of luxury SUVs, Minivans and Sedans.",
        },
        {
            icon: about_icon_4,
            title: "Pay and Confirm",
            description: "Make a secured payment and get instant confirmation via SMS and Email. We keep you updated about the ride with timely alerts.",
        },
    ];

    return (
        <div className="py-2 pb-12">
            <div className="w-full md:max-w-4xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>

            <div className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300 border border-gray-300"
                    >
                        <div className="mb-4 flex justify-center">
                            <figure>
                                <Image src={card.icon} alt={card.title} />
                            </figure>
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
