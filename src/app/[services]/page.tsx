import ServiceClient from "./ServiceClient";
import { Metadata } from "next";

export async function generateMetadata({ params }: {
    params: Promise<{
        services: string
    }>
}): Promise<Metadata> {
    const { services } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/service-posts/${services}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) return { title: "Service Not Found" };

    const data = await res.json();

    return {
        title: {
            default: data.meta_title || data.title,
            template: `%s | Boston Express Cab`,
            absolute: data.meta_title || data.title,
        },
        description: data.meta_description,
        keywords: data.meta_tag?.split(" "),
        openGraph: {
            title: data.meta_title || data.title,
            description: data.meta_description,
            url: `https://bostonprestigecar.com/${data.services}`,
        },
        twitter: {
            card: "summary_large_image",
            title: data.meta_title || data.title,
            description: data.meta_description,
        },
    };
}

export default async function ServicePage({ params }: {
    params: Promise<{
        services: string
    }>
}) {
    const {services} = await params;
    return <ServiceClient route={services} />;
}
