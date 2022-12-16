import {configureStore} from "@reduxjs/toolkit";
import cardSettingsSliceReducer from "./slices/CardSettingsSlice";
import forecastSliceReducer from './slices/ForecastSlice'
import {createWrapper} from "next-redux-wrapper";
import {useDispatch, useSelector} from "react-redux";
import mapSettingsSliceReducer from "./slices/MapSettingsSlice";

const store = () => configureStore({
    reducer: {
        cardSettings: cardSettingsSliceReducer,
        weeklyForecast: forecastSliceReducer,
        mapSettings: mapSettingsSliceReducer
    }
})

export default store
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const wrapper = createWrapper(store);

