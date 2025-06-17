import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

interface BlogPostProps {
    blogData: {
        id: number;
        title: string;
        slug: string;
        photo: string;
        description: string;
        created_at: string;
        meta_title?: string;
        meta_tag?: string;
        meta_description?: string;
    };
}

const BlogCard: React.FC<BlogPostProps> = ({ blogData }) => {
    // Format date to be more readable
    const formattedDate = new Date(blogData.created_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white h-full flex flex-col">
            <div className="relative w-full h-56">
                <figure className='h-full w-full overflow-hidden'>
                    <Image className='w-full h-full object-cover' src={`https://admin.bostonprestigecar.com/${blogData.photo}`} alt={blogData.title} height={400} width={600} />
                </figure>
            </div>
            <div className="p-5 flex-grow flex flex-col">
                {blogData.meta_tag && (
                    <p className="text-xs uppercase tracking-wide text-indigo-500 font-semibold mb-1">
                        {blogData.meta_tag}
                    </p>
                )}
                <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900 hover:text-indigo-600 transition-colors duration-200">
                    <Link href={`/blog/${blogData.slug}`}>{blogData.title.length > 50 ? blogData.title.slice(0, 50) + "..." : blogData.title}</Link>
                </h2>
                <p className="text-sm text-gray-400 mb-2">{formattedDate}</p>
                {/* <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
                    <span
                        dangerouslySetInnerHTML={{ __html: blogData.description }}
                    />
                </p> */}
                <div>
                    <Link
                        href={`/blog/${blogData.slug}`}
                        className="text-sm text-indigo-600 font-medium hover:underline mt-auto flex items-center gap-1 group"
                        aria-label={`Read more about ${blogData.title}`}
                    >
                        Read More
                        <FaArrowRightLong className="group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;