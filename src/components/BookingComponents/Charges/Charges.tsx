
import ChargeItem from "../ChargeItem/ChargeItem";
import Image from "next/image";
import car_1 from "@/assets/images/cars/car_1.webp";
import car_2 from "@/assets/images/cars/car_2.webp";
import car_3 from "@/assets/images/cars/car_3.webp";
import { BookingTypes } from "../BookingTypes";

interface Charge {
    bookingData: BookingTypes
}

const Charges: React.FC<Charge> = ({ bookingData }) => {

    return (
        <div className="bg-white p-6 rounded-3xl shadow-md border-t-[6px] border-mainColor space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Charges</h3>
            {bookingData.uuid ? <>
                <div className="rounded-2xl flex justify-center items-center">
                    <figure>
                        <Image className="h-full max-h-40 rounded-md w-full object-cover" src={Number(bookingData.passenger) < 4 ? car_1 : (Number(bookingData.passenger) >= 4 && Number(bookingData.passenger) <= 6) ? car_2 : car_3} alt="Trip Summary" />
                    </figure>
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                    <ChargeItem label="Vehicle" value={bookingData.vehicle_name} />
                    <ChargeItem label="Distance" value={`${bookingData.distance.split(".")[0]} Miles`} />
                    <ChargeItem label="Airport Toll" value={`$ ${bookingData.airport_toll || 0}`} />
                    <ChargeItem label="Extra Toll" value={`$ ${bookingData.extra_toll || 0}`} />
                    <ChargeItem label="Night Charge" value={`$ ${bookingData.night_charge || 0}`} />
                    <ChargeItem label="Extra Luggage" value={`$ ${bookingData.luggage_charge || 0}`} />
                    <div className="border-t pt-2 mt-2 text-lg font-semibold text-gray-900 flex justify-between">
                        <span>Total</span>
                        <span>{`$ ${bookingData.total_fare || 0}`}</span>
                    </div>
                </div>
            </> : <h2 className="text-center font-bold text-2xl py-4">No data Found</h2>

            }
        </div>
    );
};

export default Charges;