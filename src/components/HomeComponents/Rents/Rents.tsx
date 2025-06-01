import SectionHeader from "@/components/SharedComponent/SectionHeader/SectionHeader";
import RentsCard from "./RentsCard/RentsCard";
import car_1 from "@/assets/images/cars/car_1.webp";
import car_2 from "@/assets/images/cars/car_2.webp";
import car_3 from "@/assets/images/cars/car_3.webp";
import car_4 from "@/assets/images/cars/car_4.webp";
import car_5 from "@/assets/images/cars/car_5.webp";
import car_6 from "@/assets/images/cars/car_6.webp";

const Rents = () => {
    const SectionHeaderData = {
        heading: "Our Vehicles",
        description: "Here is a list of our vehicles. We maintain a fleet a comfortable luxury minivans suitable for upto 7 passengers. We will be adding more vehicles to our fleet soon.",
    };
    const rentCars = [
        {
            id: 1,
            name: "2 Passenger Luxury Minivan",
            image: car_1.src,
            rating: 36,
            dailyRate: 60,
            specifications: {
                seat: 2,
                luggage: 2,
                door: 2,
                carColor: "Silver",
            }
        },
        {
            id: 2,
            name: "3 Passenger Luxury Vehicle",
            image: car_2.src,
            rating: 90,
            dailyRate: 90,
            specifications: {
                seat: 3,
                luggage: 3,
                door: 2,
                carColor: "White",
            }
        },
        {
            id: 3,
            name: "4 Passenger Luxury Vehicle",
            image: car_3.src,
            rating: 99,
            dailyRate: 99,
            specifications: {
                seat: 4,
                luggage: 4,
                door: 4,
                carColor: "Black",
            }
        },
        {
            id: 4,
            name: "5 Passenger Luxury Vehicle",
            image: car_4.src,
            rating: 99,
            dailyRate: 110,
            specifications: {
                seat: 5,
                luggage: 5,
                door: 4,
                carColor: "White",
            }
        },
        {
            id: 5,
            name: "6 Passenger Luxury Vehicle",
            image: car_5.src,
            rating: 99,
            dailyRate: 120,
            specifications: {
                seat: 6,
                luggage: 6,
                door: 4,
                carColor: "White",
            }
        },
        {
            id: 6,
            name: "7 Passenger Luxury Vehicle",
            image: car_6.src,
            rating: 99,
            dailyRate: 130,
            specifications: {
                seat: 7,
                luggage: 5,
                door: 4,
                carColor: "White",
            }
        },
    ]

    return (
        <div className="py-2 pb-12">
            <div className="w-full md:max-w-xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {
                    rentCars.map((car) => (
                        <RentsCard key={car.id} rentCardData={car} />
                    ))
                }
            </div>
        </div>
    );
};

export default Rents;