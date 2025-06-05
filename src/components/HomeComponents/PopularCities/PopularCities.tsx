'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCar } from "react-icons/fa";
import logo from "@/assets/images/footerLogo.jpeg";

interface City {
    city_name: string;
    url: string;
}

const PopularCities = () => {
    const [cities, setCities] = useState<City[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API}/cities`)
            .then(response => response.json())
            .then(data => {
                setCities(data.data);
            })
            .catch(error => {
                console.error('Error fetching cities:', error);
            });
    }, []);

    return (
        <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-4">
            <div className="max-w-[1250px] mx-auto px-4 text-center">
                <div className='flex justify-center items-center'>
                    <figure className='pb-4'>
                        <Image height={100} width={100} src={logo} alt="bostonprestigecar" />
                    </figure>
                </div>
                <h2 className="text-3xl md:text-4xl max-w-4xl mx-auto font-bold text-gray-800 mb-10">Boston airport car service & taxi cab Neighbourhood - Popular Cities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {cities.map((city, idx) => (
                        <Link
                            key={idx}
                            href={`/${city.url.split('/')[city.url.split('/').length - 1]}`}
                            className="group bg-white hover:bg-blue-50 border border-gray-100 hover-border-mainColor rounded-xl p-2 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                        >
                            <div className="p-2 bg-blue-100 rounded-full group-hover-mainColor transition">
                                <FaCar className="text-mainColor group-hover:text-white transition-colors duration-300 text-lg" />
                            </div>
                            <span className="text-gray-700 group-hover-mainColor font-medium text-sm md:text-base">
                                {city.city_name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCities;
