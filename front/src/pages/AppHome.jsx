import { useNavigate } from "react-router-dom";

import Navbar from '../components/Navbar'
import HomeBooster from '../components/HomeBooster'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
        <HomeBooster />
      <Footer />
    </div>
  )
}