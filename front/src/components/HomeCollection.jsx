import homecollection from '../assets/homeCollec.webp'
import Button from './Button'
import homeBooster from '../assets/homeBooster.webp'

export default function HomeCollection() {
    return (
        <div className="flex gap-60 mt-10">
            <div className="flex justify-start ml-45 mt-20 flex-col items-start gap-1">
                <h1 className="text-minecraft-green text-4xl uppercase font-bold">
                    Échange <br /> et collectionne !
                </h1>
                <p className="text-white text-md mb-10">
                    Échanges tes cartes avec d’autres joueur afin <br /> de pouvoir compléter ta collection.
                </p>
                <img src={homecollection} alt="Home Collection" className="w-90" />
                <div className="flex gap-14 mt-20">
                    <p className="text-white text-md">
                        C'est partit !!
                    </p>
                    <Button>
                        Essayer Minecards
                    </Button>
                </div>
            </div>
            <img src={homeBooster} alt="Home Booster" className="w-200 mt-20" />
        </div>
    )
}