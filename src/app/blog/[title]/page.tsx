import SingleBlogClient from "@/components/BlogComponents/SingleBlogClient/SingleBlogClient";

// // You should fetch or define all possible blog titles here
// export async function generateStaticParams() {
//     // Example: Replace this array with your actual blog titles
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
//     const data = await res.json();
//     const blogTitles = data.map((blog: { id: string | number }) => String(blog.id));


//     interface StaticParam {
//         title: string;
//     }

//     return blogTitles.map((title: string): StaticParam => ({ title }));
// }

export default async function BlogPage({ params }: { params: Promise<{ title: string }> }) {
    const { title } = await params;
    return <SingleBlogClient slug={title} />;
}
