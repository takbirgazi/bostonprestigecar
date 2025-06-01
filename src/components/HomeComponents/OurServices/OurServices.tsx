
import Image from 'next/image';
import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import carServices_1 from "@/assets/images/cars/carServices_1.webp";
import carServices_2 from "@/assets/images/cars/carServices_2.webp";
import carServices_3 from "@/assets/images/cars/carServices_3.webp";
import carServices_4 from "@/assets/images/cars/carServices_4.webp";



const OurServices = () => {
    const SectionHeaderData = {
        heading: "Our Services - What We Do at Boston Express Cab",
        description: "Experience unmatched convenience, safety, and personalized service with Boston Express Cab. We ensure unforgettable journeys and seamless transportation solutions, tailored to your needs. Whether you need a taxi in Woburn, MA or a Gloucester taxi, we have you covered.",
    };

    const services = [
        {
            title: 'Pickup Location Service',
            heading: 'Pickup Location',
            description: 'Meeting Your Driver at Logan Airport. Find your designated ‘Taxi Cab stand’ right outside every airport exit.',
            image: carServices_1.src
        },
        {
            title: 'Airport Car Service',
            heading: 'Airport Car Service',
            description: 'Enjoy punctual, comfortable airport transfers with Boston Express Cab. Our professional drivers ensure a seamless, stress-free journey.',
            image: carServices_2.src,
        },
        {
            title: 'Minivan Taxi Service',
            heading: 'Minivan Taxi',
            description: 'For families and student groups, minivans are the best choice of transport as they offer comfort. We also provide child-friendly options.',
            image: carServices_3.src,
        },
        {
            title: 'Long Distance Service',
            heading: 'Long Distance',
            description: 'Travel from Boston to major Massachusetts cities with ease. Our long-distance rides ensure comfort and convenience for your journey.',
            image: carServices_4.src
        },
    ];

    return (
        <div className="pt-2 pb-10">
            <div className="w-full md:max-w-3xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pt-2">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={service.image}
                                alt={service.heading}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg text-blue-600 font-semibold">{service.heading}</h3>
                            <p className="mt-2 text-gray-700 text-sm">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;