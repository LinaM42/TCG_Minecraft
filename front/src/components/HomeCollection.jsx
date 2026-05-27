import homecollection from "../assets/homeCollec.webp";
import Button from "./Button";
import Carousel from "./Carousel";
import homeBooster from "../assets/homeBooster.webp";
import booster1 from "../assets/booster1.webp";
import booster2 from "../assets/booster2.webp";
import booster3 from "../assets/booster3.webp";

const boosters = [booster1, booster2, booster3];

export default function HomeCollection() {
    return (
        <div className="flex gap-60 mt-10">
            <div className="flex flex-col md:flex-row">
                <div className="flex justify-center md:justify-start md:ml-45 ml-10 mt-20 flex-col items-center md:items-start gap-1">
                    <h1 className="text-minecraft-green md:text-4xl uppercase font-bold text-[30px] text-left">
                        Échange et collectionne !
                    </h1>
                    <p className="text-white text-md md:mb-10">
                        Échanges tes cartes avec d'autres joueur afin de pouvoir
                        compléter ta collection.
                    </p>
                    <img
                        src={homecollection}
                        alt="Home Collection"
                        className="hidden md:block w-90"
                    />
                    <div className="flex flex-col">
                        <Carousel
                            items={boosters}
                            className="md:hidden mt-10"
                        />
                    </div>
                    <div className="flex md:gap-14 mt-10 md:mt-20 md:flex-row items-center">
                        <p className="text-white text-md hidden md:block">
                            C'est partit !!
                        </p>
                        <Button>Essayer Minecards</Button>
                    </div>
                </div>

                <img
                    src={homeBooster}
                    alt="Home Booster"
                    className="hidden md:block w-200 mt-20"
                />
            </div>
        </div>
    );
}
