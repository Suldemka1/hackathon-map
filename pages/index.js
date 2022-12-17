import Head from 'next/head';
import Map from "../components/Map";

export const getServerSideProps = async () => {
    const data = []
    let cities = [
        {
            name: "Кызыл",
            coordinates: {
                lat: 51.7147,
                long: 94.4534
            }
        },
        {
            name: "Туран",
            coordinates: {
                lat: 52.14212,
                long: 93.92107
            }
        },
        {
            name: "Ак-Довурак",
            coordinates: {
                lat: 51.1833,
                long: 90.6
            }
        },
        {
            name: "Шагонар",
            coordinates: {
                lat: 51.53213,
                long: 92.88827
            }
        },
        {
            name: "Чадан",
            coordinates: {
                lat: 51.28939,
                long: 91.56686
            }
        },
        {
            name: "Красноярск",
            coordinates: {
                lat: 56.02,
                long: 92.87
            }
        },
        {
            name: "Абакан",
            coordinates: {
                lat: 53.43,
                long: 91.25
            }
        },
        {
            name: "Саяногорск",
            coordinates: {
                lat: 53.06,
                long: 91.24
            }
        },
        {
            name: "Сорск",
            coordinates: {
                lat: 54.0,
                long: 90.15
            }
        },
        {
            name: "Черногорск",
            coordinates: {
                lat: 53.49,
                long: 91.17
            }
        }
    ]

    for (const item of cities) {
        const willPushed = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${item.coordinates.lat}&longitude=${item.coordinates.long}&hourly=temperature_2m,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timeformat=unixtime&timezone=auto&start_date=2022-12-17&end_date=2022-12-24`)

            .then((res) => res.json())
            .catch((e) => console.error(e))
            .finally((res) => console.log(res))


        data.push({
                ...willPushed,
                city: {
                    name: item.name
                }
            }
        )
    }

    return {
        props: {
            cities: data
        }
    }
}

export default function Home({cities}) {
    console.log(cities)
    return (
        <div>
            <Head>
                <title>RedCloudGis</title>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <Map data={cities}/>
        </div>
    )
}



