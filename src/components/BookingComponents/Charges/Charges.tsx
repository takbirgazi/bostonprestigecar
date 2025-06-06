
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
                    {bookingData.vehicle_name && (
                        <ChargeItem label="Vehicle" value={bookingData.vehicle_name} />
                    )}
                    {bookingData.distance && Number(bookingData.distance) > 0 && (
                        <ChargeItem label="Distance" value={`${bookingData.distance.split(".")[0]} Miles`} />
                    )}
                    {bookingData.distance_fare && Number(bookingData.distance_fare) > 0 && (
                        <ChargeItem label="Distance Fare" value={`$ ${bookingData.distance_fare}`} />
                    )}
                    {bookingData.airport_toll && Number(bookingData.airport_toll) > 0 && (
                        <ChargeItem label="Airport Toll" value={`$ ${bookingData.airport_toll}`} />
                    )}
                    {bookingData.airport_parking_toll && Number(bookingData.airport_parking_toll) > 0 && (
                        <ChargeItem label="Airport Parking Toll" value={`$ ${bookingData.airport_parking_toll}`} />
                    )}
                    {/* <ChargeItem label="Parking Toll" value={`$ ${bookingData.parking_toll || 0}`} /> */}
                    {bookingData.gratuity && Number(bookingData.gratuity) > 0 && (
                        <ChargeItem label={`Gratuity ${Number(bookingData.gratuity_percentage || 0)}%`} value={`$ ${(Number(bookingData.gratuity) || 0).toFixed(2)}`} />
                    )}
                    {bookingData.extra_toll && Number(bookingData.extra_toll) > 0 && (
                        <ChargeItem label="Extra Toll" value={`$ ${bookingData.extra_toll}`} />
                    )}
                    {bookingData.night_charge && Number(bookingData.night_charge) > 0 && (
                        <ChargeItem label="Night Charge" value={`$ ${bookingData.night_charge}`} />
                    )}
                    {bookingData.hidden_night_charge && Number(bookingData.hidden_night_charge) > 0 && (
                        <ChargeItem label="Hidden Night Charge" value={`$ ${bookingData.hidden_night_charge}`} />
                    )}
                    {bookingData.rush_hour_charge && Number(bookingData.rush_hour_charge) > 0 && (
                        <ChargeItem label="Rush Hour Charge" value={`$ ${bookingData.rush_hour_charge}`} />
                    )}
                    {bookingData.extra_luggage && Number(bookingData.extra_luggage) > 0 && (
                        <ChargeItem label="Extra Luggage" value={`$ ${bookingData.extra_luggage}`} />
                    )}
                    {bookingData.stop_over_charge && Number(bookingData.stop_over_charge) > 0 && (
                        <ChargeItem label="Stop Over Charge" value={`$ ${bookingData.stop_over_charge}`} />
                    )}
                    {bookingData.snow_strom_charge && Number(bookingData.snow_strom_charge) > 0 && (
                        <ChargeItem label="Snow Storm Charge" value={`$ ${bookingData.snow_strom_charge}`} />
                    )}
                    {bookingData.additional_travel_detail?.extraSeatFare && Number(bookingData.additional_travel_detail.extraSeatFare) > 0 && (
                        <ChargeItem label="Extra Sits Charge" value={`$ ${bookingData.additional_travel_detail.extraSeatFare}`} />
                    )}
                    {bookingData.additional_travel_detail?.totalPetsFare && Number(bookingData.additional_travel_detail.totalPetsFare) > 0 && (
                        <ChargeItem label="Pets Sits Charge" value={`$ ${bookingData.additional_travel_detail.totalPetsFare}`} />
                    )}
                    {bookingData.discountAmount && Number(bookingData.discountAmount) > 0 && (
                        <ChargeItem label={`Discount ${Number(bookingData.cash_discount_percentage || 0)}%`} value={`- $ ${bookingData.discountAmount}`} />
                    )}
                    {bookingData.total_fare && Number(bookingData.total_fare) > 0 && (
                        <div className="border-t pt-2 mt-2 text-lg font-semibold text-gray-900 flex justify-between">
                            <span>Total</span>
                            <span>{`$ ${bookingData.total_fare}`}</span>
                        </div>
                    )}
                </div>
            </> : <h2 className="text-center font-bold text-2xl py-4">No data Found</h2>

            }
        </div>
    );
};

export default Charges;