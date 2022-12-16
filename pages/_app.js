import '../../styles/globals.css'
import Map from "../components/Map"

function MyApp({ Component, pageProps }) {
  return (
          <>
            <Map />
            <Component {...pageProps} />
          </>
      )


}

export default MyApp
