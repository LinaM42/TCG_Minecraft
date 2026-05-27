import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function AppHome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <div className="w-full max-w-md bg-white/5 border border-white/10 p-8 rounded-sm flex flex-col gap-6">
                <h1 className="text-minecraft-green text-[36px] font-bold uppercase tracking-wide">
                    Tableau de Bord
                </h1>
                <p className="text-white/70 text-sm">
                    Bienvenue dans ton espace de jeu. Ton inscription et ta connexion fonctionnent parfaitement !
                </p>
                
                <div className="border-t border-white/10 pt-4">
                    <Button variant="outline" onClick={handleLogout}>
                        Se déconnecter
                    </Button>
                </div>
            </div>
        </div>
    );
}