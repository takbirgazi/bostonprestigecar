'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaCar } from "react-icons/fa";

interface City {
    city_name: string;
    url: string;
}

// const demoCities: City[] = [
//     { name: 'Arlington', slug: 'arlington' },
//     { name: 'Belmont', slug: 'belmont' },
//     { name: 'Cambridge', slug: 'cambridge' },
//     { name: 'Somerville', slug: 'somerville' },
//     { name: 'Medford', slug: 'medford' },
//     { name: 'Winchester', slug: 'winchester' },
//     { name: 'Allston', slug: 'allston' },
//     { name: 'Lexington', slug: 'lexington' },
//     { name: 'Wilmington', slug: 'wilmington' },
//     { name: 'Lynnfield', slug: 'lynnfield' },
//     { name: 'Tewksbury', slug: 'tewksbury' },
//     { name: 'Methuen', slug: 'methuen' },
//     { name: 'Worcester', slug: 'worcester' },
//     { name: 'Haverhill', slug: 'haverhill' },
//     { name: 'Sudbury', slug: 'sudbury' },
//     { name: 'Concord', slug: 'concord' },
//     { name: 'Woburn', slug: 'woburn' },
//     { name: 'Southborough', slug: 'southborough' },
//     { name: 'Wellesley', slug: 'wellesley' },
//     { name: 'Andover', slug: 'andover' },
//     { name: 'Acton', slug: 'acton' },
//     { name: 'Burlington', slug: 'burlington' },
//     { name: 'Chelmsford', slug: 'chelmsford' },
//     { name: 'Gloucester', slug: 'gloucester' },
//     { name: 'Nashua NH', slug: 'nashua-nh' },
//     { name: 'Beverly', slug: 'beverly' },
//     { name: 'Laconia NH', slug: 'laconia-nh' },
//     { name: 'Manchester NH', slug: 'manchester-nh' },
//     { name: 'Bedford', slug: 'bedford' },
//     { name: 'Reading', slug: 'reading' },
//     { name: 'Stoneham', slug: 'stoneham' },
//     { name: 'Wakefield', slug: 'wakefield' },
//     { name: 'Rochester NH', slug: 'rochester-nh' },
//     { name: 'Newport NH', slug: 'newport-nh' },
//     { name: 'Keene NH', slug: 'keene-nh' },
//     { name: 'Claremont NH', slug: 'claremont-nh' },
//     { name: 'Waltham MA', slug: 'waltham-ma' },
//     { name: 'Londonderry NH', slug: 'londonderry-nh' },
//     { name: 'Lawrence MA', slug: 'lawrence-ma' },
// ];

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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    🚗 Popular Cities for Car Service in Boston Neighborhood
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {cities.map((city, idx) => (
                        <Link
                            key={idx}
                            href={`/${city.url.split('/')[city.url.split('/').length - 1]}`}
                            className="group bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-400 rounded-xl p-2 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3"
                        >
                            <div className="p-2 bg-blue-100 rounded-full group-hover:bg-blue-500 transition">
                                <FaCar className="text-blue-600 group-hover:text-white transition-colors duration-300 text-lg" />
                            </div>
                            <span className="text-gray-700 group-hover:text-blue-700 font-medium text-sm md:text-base">
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
