import Image from "next/image";
import car_1 from "@/assets/images/homeImage_1.webp";
import mobileIcon from "@/assets/images/icons/mobile.svg";
import carIcon from "@/assets/images/icons/car.png";
import review_1 from "@/assets/images/trustpilot.png";
import review_2 from "@/assets/images/tripadvisor.png";


const HomeContent = () => {
    return (
        <div className="flex flex-col gap-8 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <div className="flex justify-center items-center">
                        <a href="https://www.trustpilot.com/review/bostonprestigecar.com" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <Image src={review_1} alt="Review" height={80} width={600} />
                            </figure>
                        </a>
                        <a href="https://www.tripadvisor.com/Attraction_Review-g60890-d32974160-Reviews-Boston_Prestige_Car-Cambridge_Massachusetts.html" target="_blank" rel="noopener noreferrer">
                            <figure>
                                <Image src={review_2} alt="Review" height={80} width={600} />
                            </figure>
                        </a>
                    </div>
                    <div className="flex justify-center items-center">
                        <figure>
                            <Image src={car_1} alt="Review" height={80} width={600} />
                        </figure>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div data-aos="fade-up" className='flex flex-col gap-2 py-4'>
                        <div className='flex justify-start'>
                            <h4 className='font-outfit text-mainColor font-semibold bg-[#f2f3f6] px-4 py-0.5 rounded-sm'>About Us</h4>
                        </div>
                        <h2 className='font-outfit text-5xl text-gray-800 font-semibold py-2.5'>Boston airport car service & taxi cab</h2>
                        <p className='font-outfit text-lg text-gray-600'>Boston airport car service and taxi cab offers many car services in Massachusetts and New York. We also do long trips from Boston to Pennsylvania, New York, Connecticut, and Rhode Island. Besides airport and hotel rides, we provide transport solutions to meet your needs.</p>
                    </div>
                    <div className="py-4 space-y-5">
                        <div className="flex gap-3 items-center">
                            <figure>
                                <Image className="w-full h-full" src={mobileIcon} alt="mobileIcon" height={100} width={80} />
                            </figure>
                            <div>
                                <h2 className="text-mainColor text-lg font-bold">Airport/Hotel Transfer</h2>
                                <p>Confirmed pickup and drop with professional drivers and luxury vehicles – before time.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <figure>
                                <Image className="w-full h-full" src={carIcon} alt="carIcon" height={100} width={80} />
                            </figure>
                            <div>
                                <h2 className="text-mainColor text-lg font-bold">Vacation Car Hire</h2>
                                <p>Need a chauffeured car service for your family vacation or group outing. Remember CabtoLogan.com</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <figure>
                                <Image className="w-24 h-full" src={mobileIcon} alt="mobileIcon" height={100} width={100} />
                            </figure>
                            <div>
                                <h2 className="text-mainColor text-lg font-bold">Corporate TaxiCab Service</h2>
                                <p>Need to a ride for a business meeting? Need pickup/drop services for your boss or a guest? We will be there.</p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <figure>
                                <Image className="w-20 h-full" src={carIcon} alt="carIcon" height={100} width={80} />
                            </figure>
                            <div>
                                <h2 className="text-mainColor text-lg font-bold">Door to Door Services</h2>
                                <p>Book us for any point to point service like weddings, prom nights, birthday parties etc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;