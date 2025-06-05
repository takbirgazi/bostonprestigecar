import Image from "next/image";
import mobileIcon from "@/assets/images/icons/mobile.svg";
import howWork from "@/assets/images/howWork.webp";

const HowWork = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 pt-2 pb-10">
            <div className="w-full md:w-1/2">
                <div data-aos="fade-up" className='flex flex-col gap-2 py-4'>
                    <div className='flex justify-start'>
                        <h4 className='font-outfit text-mainColor font-semibold bg-[#f2f3f6] px-4 py-0.5 rounded-sm'>How It Work</h4>
                    </div>
                    <h2 className='font-outfit text-5xl text-gray-800 font-semibold py-2.5'>Tailored Ground Transportation in Massachusetts Since 2010</h2>
                    <p className='font-outfit text-lg text-gray-600'>The Boston Prestige Car company began offering transportation services across Massachusetts in 2010. They provide the same great services at the Boston airport as they do throughout the state. The company offers lower rates on cars for both individual customers and businesses. Boston Prestige Car provides excellent service and reliable help for customers. Our company offers fair prices and maintains our vehicles well. This keeps you comfortable and safe when you travel. We have Boston taxi service and taxi baby seats for babies as part of our many service options. ImproveShow HardOur services run on time. We keep you comfortable. Our drivers are experienced and credentialed. They have served us for many years. The app shows updates about your ride. You get notifications for driver assignment, journey progress, and flight delays.</p>
                </div>
                <div className="py-4 space-y-5">
                    <div className="flex gap-3 items-center">
                        <figure>
                            <Image className="w-full h-full" src={mobileIcon} alt="mobileIcon" height={100} width={80} />
                        </figure>
                        <div>
                            <h2 className="text-mainColor text-lg font-bold">Learn more about Boston Prestige Car Airport Cab here</h2>
                            <p>Confirmed pickup and drop with professional drivers and luxury vehicles – before time.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex justify-center items-center">
                    <figure>
                        <Image src={howWork} alt="Review" height={80} width={600} />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default HowWork;