"use client";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";
import pageHeaderBg from "@/assets/images/cars/pageHeadearBg.webp";
import MainForm from "@/components/SharedComponent/MainForm/MainForm";
import PopularCities from "@/components/HomeComponents/PopularCities/PopularCities";
import Reviews from "@/components/HomeComponents/Reviews/Reviews";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const ServiceClient = () => {
    const route = usePathname();
    const [pageHeading, setPageHeading] = useState("");
    const [data, setData] = useState({
        title: "",
        description: ""
    });

    const pageHeaderData = {
        heading: pageHeading,
        bgImage: pageHeaderBg.src
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts${route}`, {
                next: { revalidate: 60 },
            });

            if (!res.ok) {
                setPageHeading("Service Not Found");
                return;
            }
            const data = await res.json();
            setData(data);
            setPageHeading(data?.title);
        };

        fetchData();

    }, [route]);

    return (
        <div className="bg-[#ffffff]">
            <PageHeader pageHeaderData={pageHeaderData} />
            <div className="flex flex-col md:flex-row gap-8 max-w-[1250px] mx-auto px-4">
                <div className="w-full md:w-7/12 py-5">
                    <div className="flex items-center gap-2 text-xs font-medium mb-4">
                        <Link href="/" className="text-mainColor">Home</Link>
                        <FaAnglesRight className="text-mainColor text-[10px]" />
                        <h1 className="capitalize text-gray-500">{data.title}</h1>
                    </div>
                    <div>
                        <h4 className="flex items-center gap-1">Ratings <b>126</b> votes, <b>4.5</b> out of 5, <b>rated</b> :
                            <div className="flex items-center gap-1">
                                <FaStar className="text-[#faa51b]" />
                                <FaStar className="text-[#faa51b]" />
                                <FaStar className="text-[#faa51b]" />
                                <FaStar className="text-[#faa51b]" />
                                <FaStarHalfAlt className="text-[#faa51b]" />
                            </div>
                        </h4>
                    </div>
                    <div className="py-4" dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
                <div className="w-full md:w-6/12 -mt-14">
                    <MainForm />
                </div>
            </div>
            <div className="py-12">
                <PopularCities />
                <div className="max-w-[1250px] mx-auto px-4">
                    <Reviews />
                </div>
            </div>
        </div>
    );
};

export default ServiceClient;