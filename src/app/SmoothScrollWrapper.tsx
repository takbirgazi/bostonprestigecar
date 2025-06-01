'use client';
import useSmoothScroll from './useSmoothScroll';

import { ReactNode } from 'react';

const SmoothScrollWrapper = ({ children }: { children: ReactNode }) => {
    useSmoothScroll();
    return <>{children}</>
};

export default SmoothScrollWrapper;