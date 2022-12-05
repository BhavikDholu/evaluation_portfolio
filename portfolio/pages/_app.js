import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <main>
    <Navbar />
    <Component {...pageProps} />
  </main>
}

export default MyApp
