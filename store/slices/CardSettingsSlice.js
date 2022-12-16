import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayTemperature: false
}

const cardSettingsSlice = createSlice({
    name: 'cardSettings',
    initialState,
    reducers: {
        setDisplayTemperature: (state) => {
            state.displayTemperature = !state.displayTemperature
            console.log(state.displayTemperature)
        }
    }
})


export const {setDisplayTemperature} = cardSettingsSlice.actions
export default cardSettingsSlice.reducer
