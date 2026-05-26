import whiteC from '../assets/whiteC.png'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className="top-0 w-full z-50 flex justify-end items-center gap-6 px-4 md:px-15 py-5 bg-zinc-800/60">

    <img src={whiteC} alt="Logo" className="w-12 mr-auto" />
      
      <Button variant="outline">
        Connexion
      </Button>

      <Button>
        Inscription
      </Button>

    </nav>
  )
}