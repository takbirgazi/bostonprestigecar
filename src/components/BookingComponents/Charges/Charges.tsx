"use client";
import ChargeItem from "../ChargeItem/ChargeItem";
import Image from "next/image";
import { BookingTypes } from "../BookingTypes";
import { useEffect, useState } from "react";

interface Charge {
    bookingData: BookingTypes
}

const Charges: React.FC<Charge> = ({ bookingData }) => {
    const [carImage, setCarImage] = useState<string | null>(null);
    const passenger = (bookingData.additional_travel_detail.below_24_month_seat_number) + (bookingData.additional_travel_detail.five_yrs_to_eight_yrs_seat_number) + (bookingData.additional_travel_detail.two_yrs_to_five_yrs_seat_number) + bookingData.passenger;
    useEffect(() => {
        // fetch(`${process.env.NEXT_PUBLIC_BASE_API_2}/car-photo/${(bookingData.vehicle_name).split(" ")[0]}`)
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_2}/car-photo/${passenger}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setCarImage(("https://apis.bostonexpresscab.com/" + data.photo) || null);
            })
            .catch(error => {
                console.error("Failed to fetch car image:", error);
                setCarImage(null);
            });
    }, [passenger]);

    return (
        <div className="bg-white p-6 rounded-3xl shadow-md border-t-[6px] border-mainColor space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Charges</h3>
            {bookingData.uuid ? <>
                <div className="rounded-2xl flex justify-center items-center">
                    {
                        carImage && <figure>
                            {
                                carImage ? <Image className="h-full max-h-40 rounded-md w-full object-cover" height={160} width={256} src={carImage} alt="Trip Summary" /> : ""
                            }
                        </figure>
                    }
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                    {bookingData.vehicle_name && (
                        <ChargeItem label="Vehicle" value={bookingData.vehicle_name} />
                    )}
                    {bookingData.distance && Number(bookingData.distance) > 0 && (
                        <ChargeItem label="Distance" value={`${Math.round(Number(bookingData.distance))} Miles`} />
                    )}
                    {bookingData.distance_fare && Number(bookingData.distance_fare) > 0 && (
                        <ChargeItem label="Fare" value={`$ ${(Math.round(Number(bookingData.distance_fare)) > Math.round(Number(bookingData.minimum_fare)) ? Math.round(Number(bookingData.distance_fare)) : Math.round(Number(bookingData.minimum_fare)))}`} />
                    )}
                    {bookingData.airport_toll && Number(bookingData.airport_toll) > 0 && (
                        <ChargeItem label="Airport Toll" value={`$ ${Math.round(Number(bookingData.airport_toll))}`} />
                    )}
                    {bookingData.airport_parking_toll && Number(bookingData.airport_parking_toll) > 0 && (
                        <ChargeItem label="Airport Parking Toll" value={`$ ${Math.round(Number(bookingData.airport_parking_toll))}`} />
                    )}
                    {bookingData.extra_charge_of_city && Number(bookingData.extra_charge_of_city) > 0 && (
                        <ChargeItem label="Extra Charge Of City" value={`$ ${Math.round(Number(bookingData.extra_charge_of_city))}`} />
                    )}
                    {bookingData.extra_toll_of_city && Number(bookingData.extra_toll_of_city) > 0 && (
                        <ChargeItem label="Extra Toll Of City" value={`$ ${Math.round(Number(bookingData.extra_toll_of_city))}`} />
                    )}
                    {bookingData.gratuity && Number(bookingData.gratuity) > 0 && (
                        <ChargeItem label={`Gratuity ${Math.round(Number(bookingData.gratuity_percentage || 0))}%`} value={`$ ${Math.round(Number(bookingData.gratuity) || 0)}`} />
                    )}
                    {bookingData.extra_toll && Number(bookingData.extra_toll) > 0 && (
                        <ChargeItem label="Extra Toll" value={`$ ${Math.round(Number(bookingData.extra_toll))}`} />
                    )}
                    {bookingData.night_charge && Number(bookingData.night_charge) > 0 && (
                        <ChargeItem label="Night Charge" value={`$ ${Math.round(Number(bookingData.night_charge))}`} />
                    )}
                    {bookingData.hidden_night_charge && Number(bookingData.hidden_night_charge) > 0 && (
                        <ChargeItem label="Hidden Night Charge" value={`$ ${Math.round(Number(bookingData.hidden_night_charge))}`} />
                    )}
                    {bookingData.rush_hour_charge && Number(bookingData.rush_hour_charge) > 0 && (
                        <ChargeItem label="Rush Hour Charge" value={`$ ${Math.round(Number(bookingData.rush_hour_charge))}`} />
                    )}
                    {bookingData.extra_luggage && Number(bookingData.extra_luggage) > 0 && (
                        <ChargeItem label="Extra Luggage" value={`$ ${Math.round(Number(bookingData.extra_luggage))}`} />
                    )}
                    {bookingData.stop_over_charge && Number(bookingData.stop_over_charge) > 0 && (
                        <ChargeItem label="Stop Over Charge" value={`$ ${Math.round(Number(bookingData.stop_over_charge))}`} />
                    )}
                    {bookingData.snow_strom_charge && Number(bookingData.snow_strom_charge) > 0 && (
                        <ChargeItem label="Snow Storm Charge" value={`$ ${Math.round(Number(bookingData.snow_strom_charge))}`} />
                    )}
                    {bookingData.additional_travel_detail?.extraSeatFare && Number(bookingData.additional_travel_detail.extraSeatFare) > 0 && (
                        <ChargeItem label="Child Sits Charge" value={`$ ${Math.round(Number(bookingData.additional_travel_detail.extraSeatFare))}`} />
                    )}
                    {bookingData.additional_travel_detail?.totalPetsFare && Number(bookingData.additional_travel_detail.totalPetsFare) > 0 && (
                        <ChargeItem label="Pets Sits Charge" value={`$ ${Math.round(Number(bookingData.additional_travel_detail.totalPetsFare))}`} />
                    )}
                    {bookingData.bike_charge && Number(bookingData.bike_charge) > 0 && (
                        <ChargeItem label="Bike Charge" value={`$ ${Math.round(Number(bookingData.bike_charge))}`} />
                    )}
                    {/* {bookingData.discountAmount && Number(bookingData.discountAmount) > 0 && (
                        <ChargeItem label={`Discount ${Math.round(Number(bookingData.cash_discount_percentage || 0))}% on cash payment`} value={`- $ ${Math.round(Number(bookingData.discountAmount))}`} />
                    )} */}
                    {bookingData.total_fare && Number(bookingData.total_fare) > 0 && (
                        <div className="border-t pt-2 mt-2 text-lg font-semibold text-gray-900 flex justify-between">
                            <span>Total</span>
                            <span>{`$ ${Math.round(Number(bookingData.total_fare))}`}</span>
                        </div>
                    )}
                    <div className="bg-gray-50 rounded-xl p-4 mt-4 shadow-sm">
                        {bookingData.discountAmount && Number(bookingData.discountAmount) > 0 && (
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-green-700 font-medium">
                                    {`Discount${bookingData.cash_discount_percentage ? ` (${Math.round(Number(bookingData.cash_discount_percentage))}% on cash)` : ""}`}
                                </span>
                                <span className="text-sm text-green-700 font-semibold">
                                    {`- $${Math.round(Number(bookingData.discountAmount))}`}
                                </span>
                            </div>
                        )}
                        <div className="border-t border-dashed border-gray-300 pt-3 mt-3 flex items-center justify-between">
                            <span className="text-base font-bold text-gray-800">Total</span>
                            <span className="text-xl font-extrabold text-mainColor">{`$${Math.round(Number(bookingData.fare_after_discount))}`}</span>
                        </div>
                    </div>
                </div>
            </> : <h2 className="text-center font-bold text-2xl py-4">No data Found</h2>

            }
        </div>
    );
};

export default Charges;