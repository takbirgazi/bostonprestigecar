import React from 'react';

const ReservationForm = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden  mx-auto">
      {/* Header Section */}
      <div>
        <div className="border-b-2 flex flex-wrap justify-center items-center border-dotted border-gray-800 p-4 md:p-6">
          <div className="text-center mb-4 min-w-1/3">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase">INSTANT RESERVATIONS</h2>
            <p className="text-xs md:text-sm text-gray-600">Instant Reservation, SMS, & EMAIL Confirmation</p>
          </div>

          {/* Service Type Buttons */}
          <div className="flex grow justify-between items-center gap-2 md:gap-4">
            <button className="bg-gray-300 px-4 w-1/3 rounded-3xl cursor-pointer py-2">
              From Airport
            </button>
            <button className="bg-gray-300 px-4 w-1/3 rounded-3xl cursor-pointer py-2">
              To Airport
            </button>
            <button className="bg-gray-300 px-4 w-1/3 rounded-3xl cursor-pointer py-2">
              Door to Door
            </button>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div>
        <div className="p-4 md:p-6 flex flex-col gap-4">
          <div className='flex flex-wrap gap-4'>
            {/* Date & Time */}
            <div className="flex flex-col md:flex-row gap-4 grow min-w-1/2">
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Select Date</label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Address Fields */}
            <div className="flex flex-col md:flex-row gap-4 grow">
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Provide Complete PickUp Address</label>
                <input
                  type="text"
                  placeholder="Enter pickup address"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Provide Complete Drop Off Address</label>
                <input
                  type="text"
                  placeholder="Enter drop off address"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
          <div className='flex gap-4 flex-wrap'>
            {/* Passenger Info */}
            <div className="flex flex-col md:flex-row gap-4 grow">
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Adults - 8 Years & above
                  <span className="text-gray-500 ml-1">Passenger</span>
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Luggage</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {[0, 1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Children Info */}
            <div className="flex flex-col md:flex-row gap-4 grow">
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                  Children - Upto 7 Years
                  <span className="text-gray-500 ml-1">Children</span>
                </label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div className='w-full md:w-1/2'>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Child Seats</label>
                <select className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  {[0, 1, 2].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <div>
              <button className="px-8 py-3 bg-mainColor cursor-pointer hover:bg-secondColor text-white font-medium rounded-md transition-colors">
                Get Fare &gt; Continue Reservation
              </button>
              <p className="text-center text-xs md:text-sm text-gray-600 mt-4">
                Get 10% Discount on cash payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;