import SectionHeader from '@/components/SharedComponent/SectionHeader/SectionHeader';


const Reviews = () => {
    const SectionHeaderData = {
        heading: "We are trusted all over the world",
        description: "Professionals from all over the world have already appreciated our work, and we are happy to serve everyone.",
    };

    const reviewData = [
        {
            id: 1,
            name: "Graham Brosnan",
            review: "The driver arrived promptly, and the vehicle was clean and comfortable. What stood out the most was the driver’s professionalism and friendly demeanor, making the journey enjoyable and stress-free. I highly recommend Boston Express Cab for their reliable and top-notch service."
        },
        {
            id: 2,
            name: "Nasreen Khumani",
            review: "I recently had the pleasure of using Boston Express Cab for my transportation needs, and I couldn’t be more impressed! From the moment I booked my ride, the service was exceptional. Whether you’re heading to the airport, a business meeting, or just around town call Boston Express Cab."
        },
        {
            id: 3,
            name: "Kanesha Keyton",
            review: "I have been using Rentaly for my Car Rental needs for over 5 years now. I have never had any problems with their service. Their customer support is always responsive and helpful. I would recommend Rentaly to anyone looking for a reliable Car Rental provider."
        }
    ]

    return (
        <div className="pt-2 pb-10">
            <div className="w-full md:max-w-3xl mx-auto">
                <SectionHeader headerInfo={SectionHeaderData} />
            </div>
            <div className="flex justify-center px-4 md:px-0 pt-4">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {reviewData.map((review) => (
                            <div
                                key={review.id}
                                className="relative bg-gradient-to-br from-blue-50 to-white shadow-lg rounded-2xl p-8 border border-blue-100 flex flex-col"
                            >
                                <svg
                                    className="absolute -top-5 left-6 w-10 h-10 text-blue-200 opacity-60"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M7.17 6.17A5.001 5.001 0 0 1 12 2v2a3 3 0 0 0-3 3v2h3a3 3 0 0 1 3 3v2a5 5 0 0 1-5 5H7a1 1 0 0 1-1-1v-2a7 7 0 0 1 1.17-3.83zM19.17 6.17A5.001 5.001 0 0 1 24 2v2a3 3 0 0 0-3 3v2h3a3 3 0 0 1 3 3v2a5 5 0 0 1-5 5h-2a1 1 0 0 1-1-1v-2a7 7 0 0 1 1.17-3.83z" />
                                </svg>
                                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                                    &quot;{review.review}&quot;
                                </p>
                                <div className="flex items-center justify-end mt-4">
                                    <div className="flex flex-col items-end">
                                        <span className="font-bold text-blue-700 text-base">{review.name}</span>
                                        <span className="w-12 h-1 bg-blue-200 rounded mt-1"></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;