"use client";
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogComponents/BlogCard/BlogCard';
import PageHeader from '@/components/SharedComponent/PageHeader/PageHeader';
import pageHeaderBg from "@/assets/images/pageHeadearBg.webp";


interface BlogPostProps {
    id: number;
    title: string;
    slug: string;
    photo: string;
    description: string;
    created_at: string;
    meta_title?: string;
    meta_tag?: string;
    meta_description?: string;

}

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPostProps[]>([]);

    const pageHeaderData = {
        heading: "Latest Blog Posts",
        bgImage: pageHeaderBg.src
    };

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                if (data) {
                    setPosts(data);
                } else {
                    console.error("No data found in response");
                }
            })
            .catch((error) => {
                console.error("Error fetching blog posts:", error);
            });
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100">
            <PageHeader pageHeaderData={pageHeaderData} />
            <div className="max-w-7xl mx-auto px-4 py-10">
                <h1 className="text-4xl font-bold mb-10 text-center">Latest Blog Posts</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => <BlogCard key={post.id} blogData={post} />)}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
