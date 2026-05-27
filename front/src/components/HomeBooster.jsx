import Button from "./Button";
import Box from "./Box";
import boosters from "../assets/homeBooster.webp";

export default function HomeBooster() {
  return (
    <div className="flex flex-col items-center">
      <Box className="flex flex-col justify-center gap-6 mt-10">
        <img src={boosters} alt="Booster" className="w-35 m -40" />
        <Button>Ouvrir mon booster</Button>
      </Box>
      
    </div>
  );
}