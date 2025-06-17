import { configureStore } from '@reduxjs/toolkit'
import formdataReducer from './features/formdata/formdataSlice'

export const store = () => {
    return configureStore({
        reducer: {
            formData: formdataReducer,
        }
    })
}

// Infer the type of store
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']