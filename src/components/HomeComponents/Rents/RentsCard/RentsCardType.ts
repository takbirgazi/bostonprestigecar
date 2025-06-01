export interface RentsCardType {
    rentCardData: {
        id: number;
        name: string;
        image: string;
        rating: number;
        dailyRate: number;
        specifications: {
            seat: number;
            luggage: number;
            door: number;
            carColor: string,
        }
    }
}