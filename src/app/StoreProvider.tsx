"use client"
import { store } from '@/lib/store'
import Image from 'next/image';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import loading from "@/assets/images/loading2.gif";

export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate
                loading={
                    <div>
                        <div className='bg-[#121212] h-[75px]'></div>
                        <div className='h-svh flex justify-center items-center bg-gradient-to-r from-blue-100 via-white to-blue-100'>
                            <figure>
                                <Image width={100} height={100} src={loading} alt="Loading..." />
                            </figure>
                        </div>
                    </div>
                }
                persistor={persistor}
            >
                {children}
            </PersistGate>
        </Provider>
    )
}