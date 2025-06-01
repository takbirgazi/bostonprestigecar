import { FaPhoneAlt } from "react-icons/fa";


const FooterTop = () => {
    return (
        <div className='bg-mainColor py-14 md:py-16 px-10'>
            <div className='container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row gap-8 md:gap-20 justify-between'>
                <div className='w-full md:w-1/2 flex justify-end'>
                    <div className='w-full md:w-sm'>
                        <div className='flex pb-3'>
                            <p className='px-3 py-1 bg-[#d4af3548] rounded-sm font-bold text-white'>Call us for further information</p>
                        </div>
                        <h2 className='text-5xl text-white font-medium'>Rentaly customer care is here to help you anytime.</h2>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='w-full md:w-sm h-full flex gap-3 flex-col md:items-center md:justify-center '>
                        <p className="text-white text-4xl"><FaPhoneAlt /></p>
                        <p className="text-white uppercase text-xs tracking-[5px]">Call Us Now</p>
                        <h2 className='text-4xl text-white font-semibold font-poppins'>1 200 333 800</h2>
                        <div>
                            <button className="px-5 py-1.5 rounded-sm bg-secondColor text-white font-semibold cursor-pointer">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;