import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {SlArrowDown} from "react-icons/sl";
import {useDispatch, useSelector} from "react-redux";

const BottomBar = () => {
    const bottomBar = useSelector(state => state.cardSettings)
    const dispatch = useDispatch()
    return (
        <div>
            {bottomBar.displayBottomBar && <div>asd</div>}
            <div className="absolute bottom-0 left-0 w-4/5 max-h-[400px] bg-gray-700 text-white text-lg px-4 py-4 z-[1500]">

                <div className="flex flex-row  justify-between h-12">
                    <div>
                        <h1 className="text-2xl">Прозноз погоды на неделю</h1>
                    </div>
                    <div>
                        <button onClick={() => dispatch(setDisplayBottomBar())} className="px-2 py-2 border-2 rounded-full border-white">
                            <SlArrowDown/>
                        </button>
                    </div>

                </div>

                <div className="flex flex-row gap-3">
                    {
                        [1, 2, 3, 4, 5, 6, 7].map((item) => {
                            return <div className="max-w-1/12 w-1/6 border-white border-2 rounded p-3">
                                <div>16.12.2022</div>
                                <div className="flex justify-center items-center">
                                    <Image src="/cityscape.png" alt="some" width={70} height={70}/>
                                </div>
                                <div>
                                <span className="grid grid-cols-2"><h6>Средняя</h6><h6
                                    className="text-end">-31</h6></span>
                                    <span className="grid grid-cols-2"><h6>Максимум</h6><h6
                                        className="text-end">-25</h6></span>
                                    <span className="grid grid-cols-2"><h6>Минимум</h6><h6
                                        className="text-end">-38</h6></span>
                                </div>

                                <div>
                                <span className="grid grid-cols-2"><h6>Влажность</h6><h6
                                    className="text-end">60%</h6></span>
                                </div>

                                <div>
                                <span className="grid grid-cols-2"><h6>Восход</h6><h6
                                    className="text-end">08:30</h6></span>
                                    <span className="grid grid-cols-2"><h6>Закат</h6><h6
                                        className="text-end">17:30</h6></span>
                                </div>

                                <Link href="/weather">Подробнее</Link>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>

    );
};

export default BottomBar;
