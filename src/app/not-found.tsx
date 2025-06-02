// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-500 mb-6">
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </main>
    );
}
