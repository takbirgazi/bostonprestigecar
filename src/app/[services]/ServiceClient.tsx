"use client";
import PageHeader from "@/components/SharedComponent/PageHeader/PageHeader";
import pageHeaderBg from "@/assets/images/pageHeadearBg.webp";
import MainForm from "@/components/SharedComponent/MainForm/MainForm";
import PopularCities from "@/components/HomeComponents/PopularCities/PopularCities";
import Reviews from "@/components/HomeComponents/Reviews/Reviews";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image";
import trustpilot from "@/assets/images/trustpilot.png";
import tripadvisor from "@/assets/images/tripadvisor.png";
import limotrust from "@/assets/images/limotrust.png";
import google_ratings from "@/assets/images/google_ratings.png";


const ServiceClient = ({ route }: { route: string }) => {
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
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts/${route}`, {
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
            <div className="flex flex-col-reverse md:flex-row gap-8 max-w-[1250px] mx-auto px-4">
                <div className="w-full md:w-7/12 py-5">
                    <div className="flex items-center gap-2 text-xs font-medium mb-4">
                        <Link href="/" className="text-mainColor">Home</Link>
                        <FaAnglesRight className="text-mainColor text-[10px]" />
                        <h1 className="capitalize text-gray-500">{data.title}</h1>
                    </div>
                    <div>
                        <span className="flex items-center gap-1 flex-wrap">Ratings <strong>126</strong> votes, <strong>4.5</strong> out of 5, <strong>rated</strong> :
                            <span className="flex items-center gap-1">
                                <FaStar className="text-[#faa51b]" />
                                <FaStar className="text-[#faa51b]" />
                                <FaStar className="text-[#faa51b]" />
                                <FaStar className="text-[#faa51b]" />
                                <FaStarHalfAlt className="text-[#faa51b]" />
                            </span>
                        </span>
                    </div>
                    <div className="py-4 overflow-hidden" dangerouslySetInnerHTML={{ __html: data.description }} />
                </div>
                <div className="w-full md:w-6/12 md:-mt-14">
                    <MainForm />
                    <div className="w-full md:w-1/2 mx-auto">
                        <div className="py-5">
                            <a href="#" rel="noopener noreferrer">
                                <figure>
                                    <Image src={google_ratings} alt="Google Ratings" height={600} width={800} />
                                </figure>
                            </a>
                            <a href="https://www.trustpilot.com/review/bostonprestigecar.com" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <Image src={trustpilot} alt="Trustpilot Ratings" height={600} width={800} />
                                </figure>
                            </a>
                            <a href="https://www.tripadvisor.com/Attraction_Review-g60890-d32974160-Reviews-Boston_Prestige_Car-Cambridge_Massachusetts.html" target="_blank" rel="noopener noreferrer">
                                <figure>
                                    <Image src={tripadvisor} alt="Tripadvisor Ratings" height={600} width={800} />
                                </figure>
                            </a>
                            <a href="#" rel="noopener noreferrer">
                                <figure>
                                    <Image src={limotrust} alt="Limotrust Ratings" height={600} width={800} />
                                </figure>
                            </a>
                        </div>
                    </div>
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