import { FaInstagram, FaXTwitter, FaTiktok } from "react-icons/fa6";
import Footer from "./Footer";
import Button from "./Button";

const stats = [
    { label: "Revenus totaux", value: "0 €", color: "border-minecraft-green" },
    { label: "Cartes vendues", value: "0", color: "border-minecraft-yellow" },
    { label: "Utilisateurs", value: "0", color: "border-minecraft-blue" },
    { label: "Commandes", value: "0", color: "border-minecraft-red" },
];

export default function Dashboard() {
    return (
        <div className="min-h-screen flex flex-col bg-minecraft-bg text-white">
            <nav className="bg-zinc-900 border-b border-white/10 px-6 md:px-45 py-4 flex justify-between items-center">
                <span className="font-title text-minecraft-green text-xl uppercase tracking-widest">
                    Mine.Craft.Collect.
                </span>
                <div className="flex gap-4">
                    <Button variant="outline">Cartes</Button>
                    <Button>Marché</Button>
                </div>
            </nav>

            <main className="flex-1 px-6 md:px-45 py-10">
                <h1 className="font-title text-2xl uppercase text-white mb-1">
                    Dashboard
                </h1>
                <p className="text-minecraft-green text-xs uppercase tracking-widest mb-8">
                    Aperçu général
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className={`bg-zinc-800 border-t-2 ${s.color} p-5 rounded-sm`}
                        >
                            <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                                {s.label}
                            </p>
                            <p className="font-title text-3xl text-white">
                                {s.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    <div className="bg-zinc-800 p-6 rounded-sm">
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                            Ventes — 7 derniers jours
                        </p>
                        <div className="h-40 flex items-end justify-center">
                            <p className="text-white/20 text-sm uppercase tracking-widest">
                                Données à venir
                            </p>
                        </div>
                    </div>
                    <div className="bg-zinc-800 p-6 rounded-sm">
                        <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                            Répartition par type
                        </p>
                        <div className="h-40 flex items-center justify-center">
                            <p className="text-white/20 text-sm uppercase tracking-widest">
                                Données à venir
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-zinc-800 p-6 rounded-sm">
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                        Dernières commandes
                    </p>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10 text-white/30 text-xs uppercase tracking-widest">
                                <th className="text-left pb-3">Utilisateur</th>
                                <th className="text-left pb-3">Carte</th>
                                <th className="text-left pb-3">Montant</th>
                                <th className="text-left pb-3">Statut</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    colSpan={4}
                                    className="text-center py-10 text-white/20 uppercase tracking-widest text-xs"
                                >
                                    Aucune commande pour l'instant
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <Footer />
        </div>
    );
}
