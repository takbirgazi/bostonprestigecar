
import SummaryItem from "../SummaryItem/SummaryItem";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaClock,
    FaUserFriends,
    FaSuitcase,
} from 'react-icons/fa';
import { BookingTypes } from "../BookingTypes";

interface Charge {
    bookingData: BookingTypes
}

const TripSummary: React.FC<Charge> = ({ bookingData }) => {

    return (
        <div className="bg-white p-6 rounded-3xl shadow-md border-t-[6px] border-[#f6c015] space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Trip Summary</h3>
            {
                bookingData.uuid ? <div className="text-sm space-y-2 text-gray-700">
                    <SummaryItem icon={<FaMapMarkerAlt />} label="Pick Up" value={bookingData.pickup_address == "None" ? bookingData.from_airport : bookingData.pickup_address} />
                    <SummaryItem icon={<FaMapMarkerAlt />} label="Drop Off" value={bookingData.dropoff_address == "None" ? bookingData.to_airport : bookingData.dropoff_address} />
                    <SummaryItem icon={<FaCalendarAlt />} label="Date" value={bookingData.date || "5/16/2025"} />
                    <SummaryItem
                        icon={<FaClock />}
                        label="Time"
                        value={
                            bookingData.time
                                ? new Date(`1970-01-01T${bookingData.time.trim()}`).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true })
                                : ""
                        }
                    />
                    <SummaryItem
                        icon={<FaUserFriends />}
                        label="Passengers"
                        value={`${bookingData.passenger} Adults, ${bookingData.children} Children`}
                    />
                    <SummaryItem icon={<FaSuitcase />} label="Luggage" value={bookingData.luggage} />
                </div> : <h2 className="text-center font-bold text-2xl py-4">No data Found</h2>
            }
        </div>
    );
};

export default TripSummary;