import {configureStore} from "@reduxjs/toolkit";
import cardSettingsSliceReducer from "./slices/CardSettingsSlice";
import forecastSliceReducer from './slices/ForecastSlice'
import {createWrapper} from "next-redux-wrapper";
import {useDispatch, useSelector} from "react-redux";

const store = () => configureStore({
    reducer: {
        cardSettings: cardSettingsSliceReducer,
        weeklyForecast: forecastSliceReducer
    }
})

export default store
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const wrapper = createWrapper(store);

