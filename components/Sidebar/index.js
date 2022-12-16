import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setDisplaySidebar, setDisplayTemperature} from "../../store/slices/CardSettingsSlice";
import {setSelectLocation} from "../../store/slices/MapSettingsSlice";
import {GrClose, HiMenu} from "react-icons/all";
import {IconContext} from "react-icons";

const Search = () => {
    const cardSettings = useSelector(state => state.cardSettings)
    const mapSettings = useSelector(state => state.mapSettings)

    const dispatch = useDispatch()

    return (
        <div className="w-2/12 h-3/5 absolute right-0 top-0 z-[500]">
            <HiMenu size={60} onClick={() => dispatch(setDisplaySidebar())}
                    className={`${cardSettings.displaySidebar ? 'hidden' : 'block'} absolute right-0 top-0 z-[500] -translate-x-6 translate-y-4 cursor-pointer`}/>
            {cardSettings.displaySidebar && <div
                className="w-full h-full flex flex-col justify-between bg-gray-900 gap-6 z-[500] opacity-80 p-10">
                <div className="absolute top-0 right-0 z-[501] -translate-x-5 translate-y-2">
                    <GrClose size={30}
                             onClick={() => dispatch(setDisplaySidebar())}
                             fill="white"
                             color="white"

                    />
                </div>

                <button onClick={() => {
                    dispatch(setSelectLocation())
                }} className="border-white border rounded text-white text-lg py-2">Выбрать точку на карте
                </button>

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
                </div>
            </div>}
        </div>

    );
};

export default Search;
