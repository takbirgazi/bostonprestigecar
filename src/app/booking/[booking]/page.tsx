
import BookingPageClient from '@/components/BookingComponents/BookingPageClient/BookingPageClient';

// // Example implementation: replace with your actual booking IDs or fetch from a data source
// export async function generateStaticParams() {
//   // Add all booking IDs that should be statically generated
//   return [
//     { booking: 'ca21915e-dd05-4a71-a60d-86adb738fc7c' },
//     // Add more booking IDs here as needed
//   ];
// }

export default async function BookingSummaryPage({ params }: { params: Promise<{ booking: string }> }) {
  const { booking } = await params;
  return <BookingPageClient route={booking} />;
}