import Image from 'next/image';
import loading from "@/assets/images/loading2.gif";

const LoadingPage = () => {
    return (
        <div className='h-svh'>
            <div className='bg-[#121212] h-[75px]'></div>
            <div className='h-svh flex justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-100'>
                <figure>
                    <Image width={100} height={100} src={loading} alt="Loading..." />
                </figure>
            </div>
        </div>
    );
};

export default LoadingPage;