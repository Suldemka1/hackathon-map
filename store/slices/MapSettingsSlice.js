import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectLocation: false
}

const mapSettingsSlice = createSlice({
    name: 'mapSettings',
    initialState,
    reducers: {
        setSelectLocation: (state) => {
            state.selectLocation = !state.selectLocation
        },
    }
})

export const {setSelectLocation} = mapSettingsSlice.actions
export default mapSettingsSlice.reducer
