"use client"
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import fromImage from "@/assets/images/icons/arraving-airplane-white.png";
import toImage from "@/assets/images/icons/plane-taking-off-white.png";
import location from "@/assets/images/icons/two-map-placeholders-white.png";
import formHeader from "@/assets/images/headOfForm.png";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { format, addDays } from "date-fns";
import SelectOption from "./SelectOption/SelectOption";
import toast from 'react-hot-toast';
import LocationSearch from "./LocationSearch/LocationSearch";
import { calculateDistance } from "@/app/utils/calculateDistance";
import { useAppDispatch } from "@/lib/hooks";
import { setFrom } from "@/lib/features/formdata/formdataSlice";
import { AirportList, Inputs, PlaceSelectHandler } from "./MainFromTypes";


const MainForm = () => {
    const router = useRouter();
    const [selectedVehicle, setSelectedVehicle] = useState(1); // Default to From Airport (id: 1)
    const [showAdditionalOptions, setShowAdditionalOptions] = useState(true);
    const [showAdditionalPetsOptions, setShowAdditionalPetsOptions] = useState(false);
    const [airports, setAirports] = useState<AirportList[]>([]);
    const [selectedAirportName, setSelectedAirportName] = useState<AirportList>({
        id: 1,
        place_id: "",
        name: ""
        // place_id: "ChIJN0na1RRw44kRRFEtH8OUkww",
        // name: "Boston Logan International Airport (BOS)"
    });
    const [catSeat, setCatSeat] = useState(0);
    const [catSeatTotal, setCatSeatTotal] = useState(0);
    const [dogSeat, setDogSeat] = useState(0);
    const [dogSeatTotal, setDogSeatTotal] = useState(0);
    const [infantSeats, setInfantSeats] = useState(0);
    const [regularSeats, setRegularSeats] = useState(0);
    const [boosterSeats, setBoosterSeats] = useState(0);
    const [selectTime, setSelectTime] = useState<string | undefined>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [pickupInp, setPickupInp] = useState("");
    const [dropoffInp, setDropoffInp] = useState("");
    const [pickupPlaceId, setPickupPlaceId] = useState("");
    const [dropoffPlaceId, setDropoffPlaceId] = useState("");
    const [distance, setDistance] = useState<number | null>(null);
    const [totalFare, setTotalFare] = useState(0);
    const [infantSeatTotal, setInfantSeatTotal] = useState(0);
    const [regularSeatTotal, setRegularSeatTotal] = useState(0);
    const [boosterSeatTotal, setBoosterSeatTotal] = useState(0);
    const [additionalOptionsTotal, setadditionalOptionsTotal] = useState(0);
    const [additionalPetsTotal, setAdditionalPetsTotal] = useState(0);
    const [changePickup, setChangePickup] = useState(0);
    const [changeDropoff, setChangeDropoff] = useState(0);
    const [vehicleName, setVehicleName] = useState("");
    const [nightCharge, setNightCharge] = useState(0);
    const [luggageCharge, setLuggageCharge] = useState(0);
    const [parkingToll, setParkingToll] = useState(0);
    const [airportToll, setAirportToll] = useState(0);
    const [distanceFare, setDistanceFare] = useState(0);
    const [gratuity, setGratuity] = useState(0);
    const [gratuityPercentage, setGratuityPercentage] = useState(0);
    const [hiddenNightCharge, setHiddenNightCharge] = useState(0);
    const [rushHourCharge, setRushHourCharge] = useState(0);
    const [stopOverCharge, setStopOverCharge] = useState(0);
    const [snowStromCharge, setSnowStromCharge] = useState(0);
    const [cashDiscountPercentage, setCashDiscountPercentage] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [extraLuggage, setExtraLuggage] = useState(0);
    const [minimumFare, setMinimumFare] = useState(0);
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: {
            passengers: 1,
            stopover: 0,
            byke: 0,
            children: 0,
            childSeats: 0,
            pickup: "Boston Logan International Airport (BOS), East Boston, MA, USA",
            dropoff: "Boston Logan International Airport (BOS), East Boston, MA, USA",
            luggage: 0,
        }
    });

    // Watch children and childSeats values
    const childrenCount = watch("children");
    const childSeatsCount = watch("childSeats");
    // Date handling
    const today = useMemo(() => new Date(), []);
    const minDate = format(today, 'yyyy-MM-dd');
    const maxDate = format(addDays(today, 90), 'yyyy-MM-dd'); // Allow booking up to 90 days in advance

    // Sample airport data - replace with your actual airport data
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API_2}/airports`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const sortedAirports = data
                        .map((airport) => ({
                            id: airport.id,
                            place_id: airport.place_id,
                            name: airport.name
                        }))
                    // .sort((a, b) => b.id - a.id); // Sort descending by id

                    setAirports(sortedAirports);
                    setSelectedAirportName(sortedAirports[0])
                }
            })
            .catch(err => {
                console.error("Failed to fetch airports:", err);
            });
    }, [])
    // Validate time selection when date or selectTime changes
    const watchedDate = watch("date");
    useEffect(() => {
        if (selectedVehicle == 1) {
            setPickupPlaceId(selectedAirportName?.place_id);
            console.log(selectedAirportName?.place_id)
        } else if (selectedVehicle == 2) {
            setDropoffPlaceId(selectedAirportName?.place_id);
            console.log(selectedAirportName?.place_id)
        }

        if (watchedDate === format(today, 'yyyy-MM-dd')) {
            if (
                selectTime &&
                (
                    (selectTime >= "23:00" && selectTime <= "23:59") ||
                    (selectTime >= "00:00" && selectTime <= "08:15")
                )
            ) {
                setErrorMsg("Select Correct Time!");
                toast.error('We cannot process a reservation from 11 pm to 8 am. For urgent bookings please call: +16172306362.');
                setSelectTime(undefined);
                return;
            }

            // Check if selectTime is at least 2 hours after the current time (today)
            if (selectTime) {
                const [selectedHour, selectedMinute] = selectTime.split(":").map(Number);
                const now = new Date();
                const selectedDate = new Date(
                    now.getFullYear(),
                    now.getMonth(),
                    now.getDate(),
                    selectedHour,
                    selectedMinute
                );
                const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);

                if (selectedDate < twoHoursLater) {
                    setErrorMsg("Select Correct Time!");
                    toast.error('We cannot process a reservation within 2 Hours of departure. For urgent bookings please call: +16172306362.');
                    setSelectTime(undefined);
                    return;
                }
            }
        }
    }, [watchedDate, selectTime, selectedVehicle, selectedAirportName, today, watch]);

    // Simplified time options (every 15 minutes)
    const times = Array.from({ length: 96 }, (_, i) => {
        const hours = Math.floor(i / 4);
        const minutes = (i % 4) * 15;
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours % 12 || 12;
        return {
            id: i + 1,
            title: `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`,
            value: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
        };
    });

    const vehicles = [
        {
            id: 1,
            name: "From Airport",
            image: fromImage,
        },
        {
            id: 2,
            name: "To Airport",
            image: toImage,
        },
        {
            id: 3,
            name: "Door to Door",
            image: location,
        }
    ];

    const handleVehicleSelect = (id: number): void => {
        setSelectedVehicle(id);
    };

    // Extract watched values to variables for useEffect dependencies
    const watchedPassengers = watch("passengers");
    const watchedLuggage = watch("luggage");

    useEffect(() => {
        const data1 = selectedVehicle === 1 ? "from_airport" : selectedVehicle === 2 ? "to_airport" : "door_to_door";
        const params = new URLSearchParams({
            passenger_seat: String(watchedPassengers),
            distance: distance !== null ? String(distance) : "0",
            infant_extra_seat: String(infantSeats),
            regular_extra_seat: String(regularSeats),
            booster_extra_seat: String(boosterSeats),
            cat_seat_number: String(catSeat),
            dog_seat_number: String(dogSeat),
            luggage_number: String(watchedLuggage),
            selected_location: selectedVehicle === 1 ? "from_airport" : selectedVehicle === 2 ? "to_airport" : "door_to_door",
            // selected_airport_name: selectedVehicle === 1 ? dropoffInp : selectedVehicle === 2 ? pickupInp : "door_to_door",
            selected_airport_name: selectedAirportName ? selectedAirportName.name : "",
            time: selectTime || "",
        });

        console.log("Passengers:", String(watchedPassengers), "time:", String(selectTime), "distance:", String(distance), "selected_airport_name:", selectedAirportName?.name, "infantSeats:", String(infantSeats), "regularSeats:", String(regularSeats), "boosterSeats:", String(boosterSeats), "selected Location", data1, "luggage:", String(watchedLuggage));

        fetch(`${process.env.NEXT_PUBLIC_BASE_API_2}/fare?` + params)
            .then(res => res.json())
            .then(data => {
                console.log('Total Fare:', data);
                if (distance === null || distance <= 0) {
                    setTotalFare(0);
                } else {
                    setTotalFare(data.total_fare);
                }
                setInfantSeatTotal(data.infantSeatExtraFare);
                setRegularSeatTotal(data.regularSeatExtraFare);
                setBoosterSeatTotal(data.boosterSeatExtraFare);
                setadditionalOptionsTotal(data.extraSeatFare);
                setVehicleName(data.vehicle_name);
                setNightCharge(data.night_charge);
                setLuggageCharge(data.extra_luggage);
                setAdditionalPetsTotal(data.totalPetsFare);
                setCatSeatTotal(data?.catSeatFare);
                setDogSeatTotal(data?.dogSeatFare);
                setParkingToll(data?.airport_toll);
                setAirportToll(data?.parking_toll);
                setDistanceFare(data?.distance_fare);
                setGratuity(data?.gratuity);
                setGratuityPercentage(data?.gratuity_percentage);
                setHiddenNightCharge(data?.hidden_night_charge);
                setRushHourCharge(data?.rush_hour_charge);
                setStopOverCharge(data?.stop_over_charge);
                setSnowStromCharge(data?.snow_strom_charge);
                setCashDiscountPercentage(data?.cash_discount_percentage);
                setDiscountAmount(data?.discountAmount);
                setExtraLuggage(data?.extra_luggage);
                setMinimumFare(data?.minimumFare);
            })
            .catch(err => console.error('API Error:', err));
    }, [watchedPassengers, selectTime, watchedLuggage, infantSeats, regularSeats, boosterSeats, distance, dropoffPlaceId, catSeat, dogSeat, selectedVehicle, pickupInp, dropoffInp, selectedAirportName, watch]);

    const toggleAdditionalOptions = () => {
        setShowAdditionalPetsOptions(false);
        setShowAdditionalOptions(!showAdditionalOptions);
    };
    const toggleAdditionalPetsOptions = () => {
        setShowAdditionalOptions(false)
        setShowAdditionalPetsOptions(!showAdditionalPetsOptions);
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data.pickup)
        if (Number(distance) > 0) {
            setIsSubmitting(true);
            try {
                // Prepare the data for API submission
                const payload = {
                    date: data.date,
                    time: selectTime,
                    luggage: `${data.luggage} bags`,
                    passenger: data.passengers,
                    children: data.children,
                    child_seats: data.childSeats,
                    pickup_address: selectedVehicle === 1 ? "None" : pickupInp,
                    dropoff_address: selectedVehicle === 2 ? "None" : dropoffInp,
                    from_airport: selectedVehicle === 1 ? data.pickup : "None",
                    to_airport: selectedVehicle === 2 ? data.dropoff : "None",
                    total_fare: totalFare,
                    vehicle_name: vehicleName,
                    night_charge: nightCharge.toString(),
                    luggage_charge: luggageCharge.toString(),
                    distance: (distance ?? 0).toString(),
                    selected_location: selectedVehicle === 1 ? "from_airport" : selectedVehicle === 2 ? "to_airport" : "door_to_door",
                    airport_toll: airportToll,
                    airport_parking_toll: parkingToll,
                    distance_fare: distanceFare,
                    gratuity: gratuity.toString(),
                    gratuity_percentage: gratuityPercentage,
                    hidden_night_charge: hiddenNightCharge,
                    rush_hour_charge: rushHourCharge,
                    stop_over_charge: stopOverCharge,
                    snow_strom_charge: snowStromCharge,
                    cash_discount_percentage: cashDiscountPercentage,
                    discountAmount: discountAmount,
                    extra_luggage: extraLuggage,
                    minimum_fare: minimumFare,
                    additional_travel_detail: {
                        below_24_month_seat_number: infantSeats,
                        two_yrs_to_five_yrs_seat_number: regularSeats,
                        five_yrs_to_eight_yrs_seat_number: boosterSeats,
                        cat_seat_number: catSeat,
                        dog_seat_number: dogSeat,
                        extraSeatFare: additionalOptionsTotal,
                        totalPetsFare: additionalPetsTotal,
                    }
                };

                console.log("Submitting payload:", payload);

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/travel-details`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log("API Response:", result);

                // Assuming the API returns an ID in the response
                if (result.data.uuid) {
                    dispatch(setFrom(result.data.uuid));
                    router.push(`/add-to-cart`);
                } else {
                    console.error("No ID received in response");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                toast.error('Fields the correct Information');
                setIsSubmitting(false)
            }
        } else {
            toast.error('Please select valid locations.');
        }
    };

    const handlePickupInp: PlaceSelectHandler = (placeId, description) => {
        setPickupInp(description);
        setPickupPlaceId(placeId);
        console.log(placeId)
    }

    const handleDropoffInp: PlaceSelectHandler = (placeId, description) => {
        setDropoffInp(description);
        setDropoffPlaceId(placeId);
    }
    // Calculate distance when pickupPlaceId or dropoffPlaceId changes
    useEffect(() => {
        async function getDistance() {
            if (changeDropoff < 1 && changePickup < 1) {
                setDistance(0);
            } else {
                if (pickupPlaceId && dropoffPlaceId) {
                    const result = await calculateDistance(pickupPlaceId, dropoffPlaceId);
                    if (result && result.rows && result.rows[0] && result.rows[0].elements && result.rows[0].elements[0] && result.rows[0].elements[0].distance) {
                        // Convert meters to miles (1 mile = 1609.34 meters)
                        setDistance((result.rows[0].elements[0].distance.value / 1609.34));
                    } else {
                        setDistance(null);
                        console.log('Failed to calculate distance.');
                    }
                }
            }
        }
        getDistance();
    }, [pickupPlaceId, dropoffPlaceId, changeDropoff, changePickup]);

    console.log(distance);
    console.log(watch("pickup"))
    return (
        <div className="bg-white rounded p-7 w-full shadow-sm border border-mainColor">
            <figure className="-mt-[22%] md:-mt-[94px] pb-2">
                <Image className="h-full w-full object-cover scale-110" src={formHeader} alt="Form Header" width={800} height={200} />
            </figure>
            <div className="w-full flex flex-col">
                <p className="font-bold">INSTANT RESERVATIONS</p>
                <div className="gap-2 w-full flex justify-between items-center pt-3">
                    {vehicles.map(vehicle => (
                        <div
                            key={vehicle.id}
                            className={`rounded px-2 md:px-3 py-1 flex items-center justify-center gap-2 cursor-pointer w-full ${selectedVehicle === vehicle.id ? 'bg-mainColor' : 'bg-gray-200'
                                }`}
                            onClick={() => handleVehicleSelect(vehicle.id)}
                        >
                            <p className={`text-center text-xs md:text-base font-semibold md:font-bold ${selectedVehicle === vehicle.id ? 'text-white' : 'text-gray-700'
                                }`}>{vehicle.name}</p>
                            <figure>
                                <Image
                                    className="h-5 w-5"
                                    src={vehicle.image}
                                    height={680}
                                    width={400}
                                    alt={vehicle.name}
                                    style={{
                                        filter: selectedVehicle === vehicle.id ? 'none' : 'brightness(0)'
                                    }}
                                />
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-full pt-5">
                {
                    errorMsg && <div className="text-xs text-red-500 font-medium">{errorMsg}</div>
                }
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col gap-1 w-full md:w-1/2">

                        <label className="block text-xl md:text-sm font-medium text-black">
                            {selectedVehicle === 1 ? "Select From Airport" : "Provide Complete PickUp Address"}
                        </label>
                        {selectedVehicle === 1 ? (
                            <select
                                {...register("pickup", { required: "Pickup location is required" })}
                                className="w-full p-2 py-2.5 border border-gray-300 rounded-sm focus:outline-0"
                                defaultValue={selectedAirportName?.name || (airports[0]?.name ?? "")}
                                onChange={(e) => {
                                    const selected = airports.find(a => a.name === e.target.value);
                                    if (selected) setSelectedAirportName(selected);
                                }}
                            >
                                {airports.map((airport) => (
                                    <option key={airport.id} value={airport.name}>
                                        {airport.name}
                                    </option>
                                ))}
                            </select>
                        ) : (<LocationSearch setLocationChanging={setChangePickup} onSelect={handlePickupInp} />)}
                        {errors.pickup && <span className="text-red-500 text-xs">{errors.pickup.message}</span>}
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-1/2">

                        <label className="block text-xl md:text-sm font-medium text-black">
                            {selectedVehicle === 2 ? "Select To Airport" : "Provide Complete Drop Off Address"}
                        </label>
                        {selectedVehicle === 2 ? (
                            <select
                                {...register("dropoff", { required: "Dropoff location is required" })}
                                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                                defaultValue={selectedAirportName?.name || (airports[0]?.name ?? "")}
                                onChange={(e) => {
                                    const selected = airports.find(a => a.name === e.target.value);
                                    if (selected) setSelectedAirportName(selected);
                                }}
                            >
                                {airports.map((airport) => (
                                    <option key={airport.id} value={airport?.name}>
                                        {airport.name}
                                    </option>
                                ))}
                            </select>
                        ) : (<LocationSearch setLocationChanging={setChangeDropoff} onSelect={handleDropoffInp} />)}
                        {errors.dropoff && <span className="text-red-500 text-xs">{errors.dropoff.message}</span>}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="block text-xl md:text-sm font-medium text-black">
                            Select Date
                        </label>
                        <input
                            type="date"
                            min={minDate}
                            max={maxDate}
                            {...register("date", { required: "Date is required" })}
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                        />
                        {errors.date && (
                            <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="block text-xl md:text-sm font-medium text-black">Time</label>
                        <SelectOption selectOptionData={{ title: "Time", selectData: times, selectValue: setSelectTime }} />
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="text-xs md:text-sm flex gap-1 items-center font-medium text-black">
                            <span className="text-black text-xl md:text-sm ml-1">Passenger</span>
                            <div className="relative group">
                                <div>
                                    <HiOutlineInformationCircle className="text-sm text-red-500" />
                                </div>
                                <div className="absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                    Adults - 8 Years & above
                                </div>
                            </div>
                        </label>
                        <select
                            {...register("passengers", { required: "Passenger count is required" })}
                            className="w-full p-2 py-2.5 border border-gray-300 rounded-sm focus:outline-0">
                            {[1, 2, 3, 4, 5, 6, 7].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                        {errors.passengers && <span className="text-red-500 text-xs">{errors.passengers.message}</span>}

                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="block text-xl md:text-sm font-medium text-black">Luggage</label>
                        <select
                            {...register("luggage")}
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                        >
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="block text-xl md:text-sm font-medium text-black">Stop Over</label>
                        <select
                            {...register("stopover")}
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                        >
                            {[0, 1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="block text-xl md:text-sm font-medium text-black">Bike</label>
                        <select
                            {...register("byke")}
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                        >
                            {[0, 1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1 w-full md:w-1/2">
                        <label className="text-xl md:text-sm flex gap-1 items-center font-medium text-black">
                            <span className="text-black ml-1">Children</span>
                            <div className="relative group">
                                <div>
                                    <HiOutlineInformationCircle className="text-sm text-red-500" />
                                </div>
                                <div className="absolute hidden group-hover:block bg-black text-white text-xs rounded py-1 px-2 bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                                    Children - Upto 7 Years
                                </div>
                            </div>
                        </label>
                        <select
                            {...register("children")}
                            className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                        >
                            {[0, 1, 2, 3, 4].map(num => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    {childrenCount > 0 && (
                        <div className="flex flex-col gap-1 w-full md:w-1/2">
                            <label className="block text-xl md:text-sm font-medium text-black">Child Seats</label>
                            <select
                                {...register("childSeats")}
                                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
                            >
                                {[0, 1, 2, 3, 4].map(num => (
                                    <option key={num} value={num}>{num}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>

                <div className="flex flex-col-reverse md:flex-row gap-2">
                    <button
                        type="button"
                        onClick={toggleAdditionalPetsOptions}
                        className={`${showAdditionalPetsOptions ? "text-white bg-mainColor" : "text-mainColor bg-transparent"} w-full text-sm font-bold py-2 px-4 rounded border border-mainColor hover:bg-mainColor hover:text-white transition-colors duration-300 cursor-pointer`} >
                        {showAdditionalPetsOptions ? 'Hide Pets Option' : 'Add Pets'}
                    </button>
                    {
                        childSeatsCount > 0 && <button
                            type="button"
                            onClick={toggleAdditionalOptions}
                            className={`${showAdditionalOptions ? "text-white bg-mainColor" : "text-mainColor bg-transparent"} w-full text-sm  font-bold py-2 px-4 rounded border border-mainColor hover:bg-mainColor hover:text-white transition-colors duration-300 cursor-pointer`} >
                            {showAdditionalOptions ? 'Hide Child Seat Options' : 'Add Child Seat'}
                        </button>
                    }
                </div>
                {/* Show "Add Upto 7 Years" button only when childSeats > 0 */}
                {childSeatsCount > 0 && (
                    <div className="bg-white rounded relative">
                        {showAdditionalOptions && (
                            <div className="absolute z-10 transition-all duration-500 bg-white w-full border border-gray-200 rounded p-4 mt-3 space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-medium">Infant Seat (Below 24 Mon)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={infantSeats}
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                    setInfantSeats(Number(e.target.value));
                                                    setShowAdditionalOptions(false);
                                                }}
                                                className="p-2 border border-gray-300 rounded-sm focus:outline-0"
                                            >
                                                {[0, 1, 2, 3, 4].map((num: number) => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <span className="font-medium w-16 text-right">${infantSeatTotal}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-medium">Regular Seat (2 Yrs - 5 Yrs)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={regularSeats}
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                    setRegularSeats(Number(e.target.value));
                                                    setShowAdditionalOptions(false);
                                                }}
                                                className="p-2 border border-gray-300 rounded-sm focus:outline-0"
                                            >
                                                {[0, 1, 2, 3, 4].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <span className="font-medium w-16 text-right">${regularSeatTotal}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-medium">Booster Seat (5 Yrs - 8 Yrs)</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={boosterSeats}
                                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                    setBoosterSeats(Number(e.target.value));
                                                    setShowAdditionalOptions(false);
                                                }}
                                                className="p-2 border border-gray-300 rounded-sm focus:outline-0"
                                            >
                                                {[0, 1, 2, 3, 4].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <span className="font-medium w-16 text-right">${boosterSeatTotal}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-3">
                                    <span className="font-semibold">Additional Options Total:</span>
                                    <span className="font-bold">${additionalOptionsTotal}</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                <div className="bg-white rounded relative">
                    {showAdditionalPetsOptions && (
                        <div className="absolute z-10 transition-all duration-500 bg-white w-full border border-gray-200 rounded p-4 mt-0 space-y-4">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="font-medium">Select Dog</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <select
                                            value={dogSeat}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                setDogSeat(Number(e.target.value));
                                                setShowAdditionalPetsOptions(false);
                                            }}
                                            className="p-2 border border-gray-300 rounded-sm focus:outline-0"
                                        >
                                            {[0, 1, 2, 3, 4].map((num: number) => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                        <span className="font-medium w-16 text-right">${dogSeatTotal}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="font-medium">Select Cat</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <select
                                            value={catSeat}
                                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                                setCatSeat(Number(e.target.value));
                                                setShowAdditionalPetsOptions(false);
                                            }}
                                            className="p-2 border border-gray-300 rounded-sm focus:outline-0"
                                        >
                                            {[0, 1, 2, 3, 4].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                        <span className="font-medium w-16 text-right">${catSeatTotal}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-3">
                                <span className="font-semibold">Additional Pets Total:</span>
                                <span className="font-bold">${additionalPetsTotal}</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-end mt-4">
                    <h2 className="font-bold text-xl font-poppins">Total: <span>${Math.round(totalFare)}</span></h2>
                    <div className="flex flex-col items-end">
                        <p className="text-white text-xs px-3 md:text-sm font-lato font-bold bg-red-400 p-1 rounded">Get 10% Discount on cash payments</p>
                        <button
                            type="submit"
                            className="flex justify-end mt-3"
                            disabled={isSubmitting}
                        >
                            <input
                                className={`text-sm rounded bg-mainColor cursor-pointer text-white px-6 py-2 font-extrabold ${isSubmitting ? 'opacity-70' : ''}`}
                                type="submit"
                                value={isSubmitting ? "Processing..." : "Book Now"}
                                disabled={isSubmitting}
                            />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MainForm;