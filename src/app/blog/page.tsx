"use client";
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/BlogComponents/BlogCard/BlogCard';
import PageHeader from '@/components/SharedComponent/PageHeader/PageHeader';
import pageHeaderBg from "@/assets/images/pageHeadearBg.webp";
import Image from 'next/image';
import loadingImage from "@/assets/images/loading2.gif";

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

interface BlogApiResponse {
    current_page: number;
    data: BlogPostProps[];
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
}

const BlogPage = () => {
    const [posts, setPosts] = useState<BlogPostProps[]>([]);
    const [pagination, setPagination] = useState<BlogApiResponse | null>(null);
    const [loading, setLoading] = useState(false);

    const pageHeaderData = {
        heading: "Latest Blog Posts",
        bgImage: pageHeaderBg.src
    };

    const fetchPosts = async (page = 1) => {
        setLoading(true);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog?page=${page}`);
            const data: BlogApiResponse = await res.json();
            setPosts(data.data);
            setPagination(data);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handlePageChange = (page: number) => {
        if (page !== pagination?.current_page) {
            fetchPosts(page);
        }
    };

    return (
        <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100">
            <PageHeader pageHeaderData={pageHeaderData} />
            <div className="max-w-7xl mx-auto px-4 py-10">
                {loading ? (
                    <figure className='flex justify-center items-center'>
                        <Image width={50} height={50} src={loadingImage} alt="Loading..." />
                    </figure>
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <BlogCard key={post.id} blogData={post} />
                            ))}
                        </div>

                        {pagination && pagination.last_page > 1 && (
                            <div className="flex justify-center mt-10 space-x-2 flex-wrap">
                                {/* Previous */}
                                <button
                                    className={`px-4 py-2 rounded ${!pagination.prev_page_url ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                                    onClick={() => handlePageChange(pagination.current_page - 1)}
                                    disabled={!pagination.prev_page_url}
                                >Previous</button>

                                {/* Page Numbers */}
                                {Array.from({ length: pagination.last_page }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        className={`px-4 py-2 rounded border ${page === pagination.current_page
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-blue-600 hover:bg-blue-100"
                                            }`}
                                        onClick={() => handlePageChange(page)}
                                    >{page}</button>
                                ))}

                                {/* Next */}
                                <button
                                    className={`px-4 py-2 rounded ${!pagination.next_page_url ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                                    onClick={() => handlePageChange(pagination.current_page + 1)}
                                    disabled={!pagination.next_page_url}
                                >Next</button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default BlogPage;