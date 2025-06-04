'use client';

import { BookingTypes } from '@/components/BookingComponents/BookingTypes';
import Charges from '@/components/BookingComponents/Charges/Charges';
import TripSummary from '@/components/BookingComponents/TripSummary/TripSummary';
import RentsCard from '@/components/HomeComponents/Rents/RentsCard/RentsCard';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import {
  FaPlaneDeparture,
  FaUser,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import car_1 from "@/assets/images/cars/car_1.webp";
import car_2 from "@/assets/images/cars/car_2.webp";
import car_3 from "@/assets/images/cars/car_3.webp";
import car_4 from "@/assets/images/cars/car_4.webp";
import car_5 from "@/assets/images/cars/car_5.webp";
import car_6 from "@/assets/images/cars/car_6.webp";


export default function BookingSummaryPage() {
  const [isTraveler, setIsTraveler] = useState(true);
  const path = usePathname();
  const route = path.split("/")[2];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingData, setBookingData] = useState<BookingTypes>({
    session_id: '',
    uuid: '',
    date: '',
    time: '',
    luggage: '',
    passenger: '',
    children: '',
    selected_location: '',
    pickup_address: '',
    dropoff_address: '',
    from_airport: '',
    to_airport: '',
    vehicle_name: '',
    distance: '',
    night_charge: '',
    total_fare: '',
    luggage_charge: '',
    extra_toll: '',
    airport_toll: ''
  })

  const [formData, setFormData] = useState({
    uuid: route.startsWith('/') ? route.slice(2) : route,
    travel_detail_id: 1,
    passenger_name: '',
    email: '',
    airline_name: '',
    flight_no: '',
    phone: '',
    alternate_phone: '',
    mailing_address: '',
    special_needs: ''
  });

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


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_API}/travel-details/${route}`)
      .then(res => res.json())
      .then(data => {
        setBookingData(data);
        console.log(data)
      })
  }, [route]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("formData", formData)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data)
      // setIsModalOpen(true);
      window.location.href = `${process.env.NEXT_PUBLIC_PAYMENT_API}?user=${route.startsWith('/') ? route.slice(2) : route}` as string;
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Please try again');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#ffffff]">
      <div className='h-[90px] bg-gray-700'></div>
      <div className="max-w-7xl mx-auto space-y-10 py-10 px-4 md:px-10">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Booking Summary</h1>
          <p className="text-gray-500 mt-2">Confirm your travel and payment details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 space-y-6 border-t-[6px] border-mainColor">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-between mb-2">
              <h2 className="text-xl w-full font-semibold text-gray-800">Passenger Details</h2>
              <div className="flex flex-col w-full md:flex-row md:gap-4 text-sm text-gray-600">
                <label className="flex md:items-center gap-1">
                  <input
                    type="radio"
                    checked={isTraveler}
                    onChange={() => setIsTraveler(true)}
                  />
                  I&apos;m the traveler
                </label>
                <label className="flex md:items-center gap-1">
                  <input
                    type="radio"
                    checked={!isTraveler}
                    onChange={() => setIsTraveler(false)}
                  />
                  I&apos;m booking for someone else
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { name: 'passenger_name', icon: <FaUser />, label: 'Passenger Name', required: true },
                { name: 'email', icon: <FaEnvelope />, label: 'Email', required: true },
                ...((bookingData.selected_location === 'from_airport' || bookingData.selected_location === 'to_airport')
                  ? [{ name: 'airline_name', icon: <FaPlaneDeparture />, label: 'Airline Name', required: bookingData.selected_location === 'to_airport' ? false : true }, { name: 'flight_no', icon: <FaPlaneDeparture />, label: 'Flight No.', required: bookingData.selected_location === 'to_airport' ? false : true },]
                  : []),
                { name: 'phone', icon: <FaPhone />, label: 'Phone', required: true },
                { name: 'alternate_phone', icon: <FaPhone />, label: 'Alternate Phone', required: false },
              ].map(({ name, icon, label, required }) => (
                <div key={name} className="relative">
                  <label className="text-sm text-gray-700 block mb-1">
                    {label} {required && <span className='text-red-600'>*</span>}
                  </label>
                  <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 bg-white">
                    <span className="text-mainColor">{icon}</span>
                    <input
                      type="text"
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleInputChange}
                      placeholder={`Enter ${(label ?? '').toLowerCase()}`}
                      className="w-full focus:outline-none"
                      required={required}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div>
              <label className="text-sm text-gray-700 block mb-1">Mailing Address</label>
              <textarea
                name="mailing_address"
                value={formData.mailing_address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                rows={2}
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 block mb-1">Special Needs</label>
              <textarea
                name="special_needs"
                value={formData.special_needs}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3"
                rows={2}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 w-full mt-6 bg-mainColor hover-bg-mainColor text-white font-semibold py-3 rounded-md text-lg transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Processing...' : 'Continue to Payment'}
            </button>
          </form>

          {/* Summary Card - remains the same */}
          <div className="space-y-6">
            <TripSummary bookingData={bookingData} />
            <Charges bookingData={bookingData} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {
            rentCars.map((car) => (
              <RentsCard key={car.id} rentCardData={car} />
            ))
          }
        </div>
      </div>
    </main>
  );
}