export interface BookingTypes {
    uuid: string,
    date: string,
    time: string,
    luggage: string,
    passenger: string,
    selected_location: string,
    children: string,
    pickup_address: string,
    dropoff_address: string,
    from_airport: string,
    to_airport: string,
    vehicle_name: string,
    distance: string,
    night_charge: string,
    total_fare: string,
    luggage_charge: string,
    extra_toll: string,
    airport_toll: string,
    parking_toll: string,
    gratuity: string,
    gratuity_percentage: string,
    airport_parking_toll: string,
    hidden_night_charge: string,
    rush_hour_charge: string,
    extra_luggage: string,
    stop_over_charge: string,
    snow_strom_charge: string,
    distance_fare: string,
    discountAmount: string,
    cash_discount_percentage: string,
    additional_travel_detail: {
        extraSeatFare: string,
        totalPetsFare: string,
    },
    minimum_fare: string,
}