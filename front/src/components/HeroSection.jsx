import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Button from './Button'
import logo from '../assets/logoWhite.png'
import herocards from '../assets/heroCards.webp'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.png'
import carte1 from '../assets/carte1.png'
import carte2 from '../assets/carte2.png'
import carte3 from '../assets/carte3.png'

const cards = [card1, card2, card3, card4, card5]

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => emblaApi.scrollNext(),1500)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="relative min-h-screen flex flex-col mt-10 md:mt-15 md:ml-45 md:mr-45">
      
      <div className="flex flex-col items-center mb-20">
        <span className="rotate-[-3deg] md:mb-[-20px] z-10 px-4 md:px-10 py-1 bg-minecraft-green text-black text-[30px] md:text-[60px] font-bold rounded-sm uppercase font-title">
          Nouveau
        </span>
        <img src={logo} alt="Hero Logo" className=" w-85 md:w-250" />
      </div>

      <div className="w-full mb-10">

        <div className="hidden md:flex items-end justify-center">
          <img src={herocards} alt="Hero Cards" className="w-250" />
        </div>

        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cards.map((card, i) => (
              <div key={i} className="flex-none w-full flex justify-center px-8">
                <img src={card} alt={`Carte ${i}`} className="h-64 object-contain" />
              </div>
            ))}
          </div>
        </div>

      </div>


      <div className="flex mb-10 justify-center">
        <Button className="px-6 py-3">
            Essayer votre TCG Minecraft !
        </Button>
    </div>

      <div className="flex flex-col items-center md:bottom-10 md:flex-row md:gap-10 lg:justify-between">
        <img src={carte1} alt="Carte 1" className="w-75 mt-10 rounded-lg" />
        <img src={carte2} alt="Carte 2" className="w-75 mt-10 rounded-lg"/>
        <img src={carte3} alt="Carte 3" className="w-75 mt-10 rounded-lg"/>
      </div>

    </section>
  )
}