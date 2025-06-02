import ServiceClient from "./ServiceClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { services: string } }): Promise<Metadata> {
    const paramsPath = await params;
    const slug = paramsPath.services;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts/${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return { title: "Service Not Found" };

    const data = await res.json();

    return {
        title: data.meta_title || data.title,
        description: data.meta_description,
        keywords: data.meta_tag?.split(" "),
        openGraph: {
            title: data.meta_title || data.title,
            description: data.meta_description,
            url: `https://bostonexpresscab.com/${data.slug}`,
        },
        twitter: {
            card: "summary_large_image",
            title: data.meta_title || data.title,
            description: data.meta_description,
        },
    };
}

export default async function ServicePage() {
    return <ServiceClient />;
}
