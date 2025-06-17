import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface formId {
    usrId: string
}

// Define the initial state using that type
const initialState: formId = {
    usrId: ""
}

export const formdataSlice = createSlice({
    name: 'formId',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setFrom: (state, action) => {
            state.usrId = action.payload;
        }
    }
})

export const { setFrom } = formdataSlice.actions;
export default formdataSlice.reducer;