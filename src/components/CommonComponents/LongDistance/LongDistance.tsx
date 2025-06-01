import { FaRegStar } from "react-icons/fa";
import parish_tower from "@/assets/images/parish_tower.jpg"
import parish_tower_2 from "@/assets/images/parish_tower_2.jpg"
import parish_tower_3 from "@/assets/images/parish_tower_3.jpg"
import parish_tower_4 from "@/assets/images/parish_tower_4.jpg"
import parish_tower_5 from "@/assets/images/parish_tower_5.jpg"
import parish_tower_6 from "@/assets/images/parish_tower_6.jpg"
import parish_tower_7 from "@/assets/images/parish_tower_7.jpg"
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

interface Ride {
    id: number;
    startFrom: string;
    endsTo: string;
    image: string;
    description: string;
}

const LongDistance = () => {
    const rides: Ride[] = [
        {
            id: 1,
            startFrom: "Boston",
            endsTo: "New Jersey",
            image: parish_tower.src,
            description: "Boston to New Jersey car service",
        },
        {
            id: 2,
            startFrom: "Boston",
            endsTo: "Connecticut",
            image: parish_tower_2.src,
            description: "Boston to Connecticut car service",
        },
        {
            id: 3,
            startFrom: "Boston",
            endsTo: "Portland (ME)",
            image: parish_tower_3.src,
            description: "Boston to Portland (ME) car service",
        },
        {
            id: 4,
            startFrom: "Boston",
            endsTo: "New Hampshire",
            image: parish_tower_4.src,
            description: "Boston to New Hampshire car service",
        },
        {
            id: 5,
            startFrom: "Boston",
            endsTo: "Providence (RI)",
            image: parish_tower_5.src,
            description: "Boston to Providence (RI) car service",
        },
        {
            id: 6,
            startFrom: "Boston",
            endsTo: "Cape Cod",
            image: parish_tower_6.src,
            description: "Boston to Cape Cod car service",
        },
        {
            id: 7,
            startFrom: "Boston",
            endsTo: "New York",
            image: parish_tower_7.src,
            description: "Boston to New York Car Service",
        },
    ];

    return (
        <div className="pt-10">
            <div className="py-3 flex flex-row items-center gap-1">
                <span className="text-xl">
                    <FaRegStar />
                </span>
                <p className="font-lato font-bold text-lg pr-2">Long Distance Rides</p>
                <span className="grow h-[1px] bg-gray-200"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {rides.map((ride) => (
                    <div key={ride.id} className="relative group rounded-xs overflow-hidden cursor-pointer">
                        <figure className="h-full w-full">
                            <Image className="h-full w-full object-cover" src={ride.image} alt={ride.description} width={500} height={400} />
                        </figure>
                        <div className="absolute bottom-0 left-0 w-full">
                            <div className="flex p-2">
                                <p className="flex items-center gap-1 transition-colors duration-300 group-hover:bg-[#aa8818] bg-black text-xs rounded-xs text-white px-2 py-0.5">
                                    <span>{ride.startFrom}</span>
                                    <MdArrowRightAlt className="text-xs" />
                                    <span>{ride.endsTo}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LongDistance;