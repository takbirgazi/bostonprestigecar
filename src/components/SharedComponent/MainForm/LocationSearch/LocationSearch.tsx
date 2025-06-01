// components/AutocompleteInput.tsx
"use client";

import { useEffect, useRef, useState } from "react";

type Suggestion = {
    description: string;
    place_id: string;
};

type Props = {
    onSelect: (placeId: string, description: string) => void;
    setLocationChanging: (changing: number) => void;
};

export default function LocationSearch({ onSelect, setLocationChanging }: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        if (!window.google) {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.async = true;
            script.onload = () => console.log("Google Maps script loaded");
            document.body.appendChild(script);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocationChanging(value.length);
        if (!window.google || !value) return;

        const service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions({ input: value }, (predictions, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
                setSuggestions(predictions.map((p) => ({
                    description: p.description,
                    place_id: p.place_id
                })));
            } else {
                setSuggestions([]);
            }
        });
    };

    const handleSelect = (place: Suggestion) => {
        onSelect(place.place_id, place.description);
        setSuggestions([]);
        if (inputRef.current) inputRef.current.value = place.description;
        setLocationChanging(place.place_id.length);
    };

    return (
        <div className="relative">
            <input
                ref={inputRef}
                type="text"
                placeholder="Search a location"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-sm focus:outline-0"
            />
            {suggestions.length > 0 && (
                <ul className="absolute z-10 bg-white border w-full rounded shadow-md max-h-60 overflow-auto">
                    {suggestions.map((s) => (
                        <li
                            key={s.place_id}
                            onClick={() => handleSelect(s)}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {s.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}