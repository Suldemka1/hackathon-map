import {configureStore} from "@reduxjs/toolkit";
import cardSettingsSliceReducer from "./slices/CardSettingsSlice";
import {createWrapper} from "next-redux-wrapper";
import {useDispatch, useSelector} from "react-redux";

const store = () => configureStore({
    reducer: {
        cardSettings: cardSettingsSliceReducer
    }
})

export default store
export const useAppDispatch = () => useDispatch()
export const useAppSelector = useSelector

export const wrapper = createWrapper(store);

