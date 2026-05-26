import homeFriend from '../assets/homeFriend.webp'
import Button from './Button'
import homeBooster from '../assets/homeBooster.webp'
import Box from './HomeBox'
import bento1 from "../assets/bento1.webp"
import bento2 from "../assets/bento2.webp"
import bento3 from "../assets/bento3.jpg"
import bento4 from "../assets/bento4.jpg"

export default function HomeFriend() {
    return (
        <div className="flex gap-60 mt-10">
            <div className="flex justify-start ml-45 mt-20 flex-col items-start gap-1">
                <h1 className="text-minecraft-green text-4xl uppercase font-bold">
                    Fais de <br /> nouvelles <br /> rencontres !
                </h1>
                <p className="text-white text-md mb-10">
                    Discutte et échnges avec eux, gardes les en amis, <br/> échangez des cartes 
                </p>
                <img src={homeFriend} alt="Home Friend" className="w-90" />
                <div className="flex gap-14 mt-20">
                    <p className="text-white text-md">
                        C'est SUPER !!
                    </p>
                    <Button>
                        Je commence
                    </Button>
                </div>
            </div>
            <div className="flex flex-col gap-4 mt-40 ml-20">
  
            <div className="flex gap-4">
                <Box image={bento1} ml="ml-20" />
                <Box color="yellow" width="w-80"/>
            </div>

            <div className="flex gap-4">
                <Box color="red" width="w-50" ml="ml-2" />
                <Box image={bento2}/>
                <Box image={bento3} width="w-65"/>
            </div>

            <div className="flex gap-4">
                <Box image={bento4}  width="w-80" ml="ml-20"/>
                <Box color="blue"/>
            </div>

            </div>
        </div>
    )
}