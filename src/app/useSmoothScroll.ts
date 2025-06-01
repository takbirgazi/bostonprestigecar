'use client';
import { useEffect } from 'react';

const useSmoothScroll = () => {
    useEffect(() => {
        type WheelEventWithDelta = WheelEvent & {
            detail?: number;
            wheelDelta?: number;
        };

        const handleWheel = (event: WheelEventWithDelta): void => {
            if (event.ctrlKey) {
            return;
            }

            event.preventDefault();
            const delta: number = event.deltaY || event.detail || event.wheelDelta || 0;
            window.scrollBy({
            top: delta * 3,
            behavior: 'smooth',
            });
        };

        window.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);
};

export default useSmoothScroll;