import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayTemperature: false,
    displayBottomBar: false
}

const cardSettingsSlice = createSlice({
    name: 'cardSettings',
    initialState,
    reducers: {
        setDisplayTemperature: (state) => {
            state.displayTemperature = !state.displayTemperature
        },
        setDisplayBottomBar: (state) => {
            state.displayBottomBar = !state.displayBottomBar
            console.log(state.displayBottomBar)
        }
    }
})


export const {setDisplayTemperature, setDisplayBottomBar} = cardSettingsSlice.actions
export default cardSettingsSlice.reducer
