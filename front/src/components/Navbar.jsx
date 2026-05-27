import { Link } from "react-router-dom";
import whiteC from '../assets/logoWhite.png'
import Button from './Button'

export default function Navbar() {
  return (
    <nav className="top-0 w-full z-50 flex items-center gap-6 px-4 md:px-15 py-5 bg-zinc-800/60 text-[#fcfcfc]">

      <img src={whiteC} alt="Logo" className="w-60" />


      <div className="flex flex-1 justify-center gap-8">  
        <Link to="/login">
          Messagerie
        </Link>

        <Link to="/register">
          Échanges
        </Link>
        <Link to="/register">
          Ma collection
        </Link>
      </div>


    </nav>
  )
}