"use client"
import AOS from 'aos';
import { SectionHeaderType } from './SectionHeaderType';
import { useEffect } from 'react';

const SectionHeader: React.FC<SectionHeaderType> = ({ headerInfo }) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease',
        });
    }, [])

    return (
        <div data-aos="fade-up" className='flex flex-col gap-2 text-center py-4'>
            <div className='flex justify-center'>
                <h4 className='font-outfit text-mainColor font-semibold bg-[#f2f3f6] text-center px-4 py-0.5 rounded-sm'>{headerInfo.title}</h4>
            </div>
            <h2 className='font-outfit text-5xl text-gray-800 font-semibold py-2.5'>{headerInfo.heading}</h2>
            <p className='font-outfit text-lg text-gray-600'>{headerInfo.description}</p>
        </div>
    );
};

export default SectionHeader;