import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayTemperature: false,
    displayBottomBar: false,
    displaySidebar: false
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
        },
        setDisplaySidebar: (state) => {
            state.displaySidebar = !state.displaySidebar
        }
    }
})


export const {setDisplayTemperature, setDisplayBottomBar, setDisplaySidebar} = cardSettingsSlice.actions
export default cardSettingsSlice.reducer
