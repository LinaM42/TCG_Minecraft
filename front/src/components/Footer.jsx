import { FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-zinc-800/60 border-t border-white/10 px-45 py-3">
      
      <div className="flex justify-between items-start mb-10">
        
        <div className="flex flex-col mt-4">
          <span className="text-minecraft-green text-3xl font-bold uppercase leading-tight">Mine.</span>
          <span className="text-minecraft-green text-3xl font-bold uppercase leading-tight">Craft.</span>
          <span className="text-minecraft-green text-3xl font-bold uppercase leading-tight">Collect.</span>
        </div>

        <div className="flex flex-col gap-3 mt-7">
          <span className="text-minecraft-green font-bold uppercase text-[25px]">Suivez nous.</span>
          <div className="flex gap-4 justify-center">
            <a href="#"><FaInstagram className="text-white text-2xl hover:text-minecraft-green transition" /></a>
            <a href="#"><FaXTwitter className="text-white text-2xl hover:text-minecraft-green transition" /></a>
            <a href="#"><FaTiktok className="text-white text-2xl hover:text-minecraft-green transition" /></a>
          </div>
        </div>

      </div>

      <div className="flex justify-between items-center text-white/40 text-xs uppercase mb-3">
        <span>© 2026 Minecraft. Tous droits réservés.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition">Mentions légales</a>
          <a href="#" className="hover:text-white transition">CGV</a>
          <a href="#" className="hover:text-white transition">Politique de confidentialité</a>
        </div>
      </div>

    </footer>
  )
}