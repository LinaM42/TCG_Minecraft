import homeFriend from "../assets/homeFriend.webp";
import Button from "./Button";
import homeBooster from "../assets/homeBooster.webp";
import Box from "./HomeBox";
import bento1 from "../assets/bento1.webp";
import bento2 from "../assets/bento2.webp";
import bento3 from "../assets/bento3.jpg";
import bento4 from "../assets/bento4.jpg";

export default function HomeFriend() {
    return (
        <div className="flex flex-col md:flex-row gap-55 md:mt-10 mb-20">
            <div className="flex justify-start ml-10 md:ml-45 mt-20 flex-col items-center md:items-start gap-1">
                <h1 className="text-minecraft-green text-[30px] md:text-4xl uppercase font-bold">
                    Fais de nouvelles rencontres !
                </h1>
                <p className="text-white text-md mb-10">
                    Discute, échange, fais toi des amis et échangez des cartes
                </p>
                <img
                    src={homeFriend}
                    alt="Home Friend"
                    className="hidden md:block w-90"
                />
                <div className="flex md:hidden flex-col gap-4 px-4">
                    <div className="flex gap-4">
                        <Box image={bento3} width="w-40" />
                        <Box color="yellow" width="w-40" />
                    </div>
                    <div className="flex gap-4">
                        <Box color="blue" width="w-25" />
                        <Box image={bento4} width="w-55" />
                    </div>
                </div>
                <div className="flex md:gap-14 mt-10 md:mt-20 md:flex-row items-center">
                    <p className="text-white text-md hidden md:block">
                        C'est SUPER !!
                    </p>
                    <Button>Je commence</Button>
                </div>
            </div>

            <div className="hidden md:flex flex-col gap-4 mt-40 mr-30 ml-20">
                <div className="flex gap-4">
                    <Box image={bento1} ml="ml-20" />
                    <Box color="yellow" width="w-80" />
                </div>
                <div className="flex gap-4">
                    <Box color="red" width="w-50" ml="ml-2" />
                    <Box image={bento2} />
                    <Box image={bento3} width="w-65" />
                </div>
                <div className="flex gap-4">
                    <Box image={bento4} width="w-80" ml="ml-20" />
                    <Box color="blue" />
                </div>
            </div>
        </div>
    );
}
