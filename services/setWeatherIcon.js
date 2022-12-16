import {
    BsCloudDrizzle,
    BsCloudDrizzleFill,
    BsCloudFog2,
    BsCloudSnowFill,
    BsFillCloudRainHeavyFill,
    BsSun
} from 'react-icons/bs'
import {RiSunCloudyFill} from 'react-icons/ri'
import {IoIosThunderstorm} from 'react-icons/io'
import {FaCloudShowersHeavy} from 'react-icons/fa'

export function setWeatherIcon(code) {
    switch (code) {
        case 0:
            return <div className="flex flex-col items-center justify-center py-3">

                <BsSun size={50}
                />
                <h4>Ясно</h4>
            </div>
        case 1:
            return <div className="flex flex-col items-center justify-center py-3">

                <RiSunCloudyFill size={50}
                />
                <h4>В основном ясно</h4>
            </div>
        case 2:
            return <div className="flex flex-col items-center justify-center py-3">

                <RiSunCloudyFill size={50}
                />
                <h4>Перем. облачность</h4>
            </div>
        case 3:
            return <div className="flex flex-col items-center justify-center py-3">
                <RiSunCloudyFill size={50}/>
                <h4>Пасмурно</h4></div>
        case 48:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudFog2 size={50}/>
                <h4>Туман</h4></div>
        case 45:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudFog2 size={50}/>
                <h4>Ухудш. видимости</h4></div>
        case 51:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudDrizzle size={50}/>
                <h4>Легкая изморось</h4></div>
        case 53:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudDrizzle size={50}/>
                <h4>Изморось</h4></div>
        case 55:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudDrizzle size={50}/>
                <h4>Плотная изморось</h4></div>
        case 56:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudDrizzleFill size={50}/>
                <h4>Морозная изморось</h4></div>
        case 57:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudDrizzleFill size={50}/>
                <h4>Морозная изморось</h4></div>
        case 61:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudDrizzleFill size={50}/>
                <h4>Дождь</h4></div>
        case 63:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsFillCloudRainHeavyFill size={50}/>
                <h4>Дождь</h4></div>
        case 65:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsFillCloudRainHeavyFill size={50}/>
                <h4>Дождь</h4></div>
        case 66:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsFillCloudRainHeavyFill size={50}/>
                <h4>Дождь</h4></div>
        case 67:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsFillCloudRainHeavyFill size={50}/>
                <h4>Дождь</h4></div>
        case 71:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudSnowFill size={50}/>
                <h4>Снегопад</h4></div>
        case 73:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudSnowFill size={50}/>
                <h4>Снегопад</h4></div>
        case 75:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudSnowFill size={50}/>
                <h4>Снегопад</h4></div>
        case 77:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsCloudSnowFill size={50}/>
                <h4>Снегопад</h4></div>
        case 80:
            return <div className="flex flex-col items-center justify-center py-3">
                <FaCloudShowersHeavy size={50}/>
                <h4>Ливень</h4></div>
        case 81:
            return <div className="flex flex-col items-center justify-center py-3">
                <FaCloudShowersHeavy size={50}/>
                <h4>Ливень</h4></div>
        case 82:
            return <div className="flex flex-col items-center justify-center py-3">
                <FaCloudShowersHeavy size={50}/>
                <h4>Ливень</h4></div>
        case 86:
            return <div className="flex flex-col items-center justify-center py-3">
                <FaCloudShowersHeavy size={50}/>
                <h4>Сильный ливень</h4></div>
        case 85:
            return <div className="flex flex-col items-center justify-center py-3">
                <FaCloudShowersHeavy size={50}/>
                <h4>Метель</h4></div>
        case 95:
            return <div className="flex flex-col items-center justify-center py-3">
                <IoIosThunderstorm size={50}/>
                <h4>Штормовое предупреждение</h4></div>
        case 96:
            return <div className="flex flex-col items-center justify-center py-3">
                <IoIosThunderstorm size={50}/>
                <h4>Штормовое предупреждение</h4></div>
        case 99:
            return <div className="flex flex-col items-center justify-center py-3">
                <IoIosThunderstorm size={50}/>
                <h4>Штормовое предупреждение</h4></div>
        default:
            return <div className="flex flex-col items-center justify-center py-3">
                <BsSun size={50}/>
                <h4>Неизвестно</h4></div>
    }
}
