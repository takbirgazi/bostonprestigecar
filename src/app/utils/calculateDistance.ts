// utils/calculateDistance.ts
// Calculate distance between two places using Google Maps Distance Matrix API
import { Loader } from '@googlemaps/js-api-loader';

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export async function calculateDistance(placeId1: string, placeId2: string): Promise<google.maps.DistanceMatrixResponse | null> {
  if (!googleMapsApiKey) {
    console.error("Google Maps API key is not set in environment variables.");
    return null;
  }

  const loader = new Loader({
    apiKey: googleMapsApiKey,
    libraries: ['places', 'geocoding', 'routes'], // Ensure 'routes' (for Distance Matrix) is included
  });

  try {
    const google = await loader.load();
    const service = new google.maps.DistanceMatrixService();

    return new Promise((resolve, reject) => {
      service.getDistanceMatrix(
        {
          origins: [{ placeId: placeId1 }],
          destinations: [{ placeId: placeId2 }],
          travelMode: google.maps.TravelMode.DRIVING, // You can change this
        },
        (response, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK && response) {
            resolve(response);
          } else {
            console.error('Error fetching distance matrix:', status);
            reject(status);
          }
        }
      );
    });
  } catch (error) {
    console.error('Error loading Google Maps API:', error);
    return null;
  }
}