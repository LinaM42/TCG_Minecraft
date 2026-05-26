import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HomeCollection from '../components/HomeCollection'
import HomeFriend from '../components/HomeFriend'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HomeCollection />
      <HomeFriend />
      <Footer />
    </div>
  )
}