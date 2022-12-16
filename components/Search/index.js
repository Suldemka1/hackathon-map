import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {setDisplayTemperature} from "../../store/slices/CardSettingsSlice";

const Search = () => {
    const cardSettings = useSelector(state => state.cardSettings)
    const dispatch = useDispatch()

    return (
        <div className="w-1/5 h-screen absolute right-0 flex flex-col justify-between bg-gray-900 gap-6 z-[500] opacity-80 py-10 px-10">
            <button className="border-white border rounded text-white text-lg py-2">Выбрать точку на карте</button>
            <div className="flex flex-col gap-3">
                <div className="flex flex-row items-center gap-2">
                    <input
                        id="temperature"
                        type="checkbox"
                        className="w-6 h-6"
                    />
                    <label htmlFor="temperature" className="text-gray-200 text-xl cursor-pointer">
                        Температура
                    </label>

                </div>

                <div className="flex flex-row items-center gap-2">
                    <input
                        id="clouds"
                        type="checkbox"
                        className="w-6 h-6"
                    />
                    <label htmlFor="clouds" className="text-gray-200 text-xl cursor-pointer">
                        Облака
                    </label>

                </div>
            </div>



            <div className="text-2xl text-white">
                <h2>Настройки города</h2>

                <div className="flex flex-row items-center gap-2">
                    <input
                        id="clouds"
                        type="checkbox"
                        className="w-6 h-6"
                        defaultValue={cardSettings.displayTemperature}
                        onChange={() => dispatch(setDisplayTemperature())}
                    />
                    <label htmlFor="clouds" className="text-gray-200 text-xl cursor-pointer">
                        Температура {cardSettings.displayTemperature}
                    </label>

                </div>



                <div className="flex flex-row items-center gap-2">
                    <input
                        id="clouds"
                        type="checkbox"
                        className="w-6 h-6"
                    />
                    <label htmlFor="clouds" className="text-gray-200 text-xl cursor-pointer">
                        Осадки
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Search;
