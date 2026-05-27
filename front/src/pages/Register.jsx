import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Register() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        pseudo: "",
        email: "",
        password: "",
        confirm: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        if (form.password !== form.confirm) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    pseudo: form.pseudo,
                    email: form.email,
                    password: form.password,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Erreur lors de l'inscription.");
                return;
            }

            navigate("/home");
        } catch {
            setError("Impossible de contacter le serveur.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="w-full max-w-sm flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-minecraft-green text-[36px] md:text-[48px] font-bold uppercase leading-tight">
                        Inscription
                    </h1>
                    <p className="text-white/50 text-sm">
                        Crée ton compte et commence à collecter.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-white/70 text-xs uppercase font-bold tracking-widest">
                            Pseudo
                        </label>
                        <input
                            name="pseudo"
                            type="text"
                            placeholder="TonPseudo"
                            value={form.pseudo}
                            onChange={handleChange}
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-minecraft-green transition"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white/70 text-xs uppercase font-bold tracking-widest">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="ton@email.com"
                            value={form.email}
                            onChange={handleChange}
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-minecraft-green transition"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white/70 text-xs uppercase font-bold tracking-widest">
                            Mot de passe
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-minecraft-green transition"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-white/70 text-xs uppercase font-bold tracking-widest">
                            Confirmer le mot de passe
                        </label>
                        <input
                            name="confirm"
                            type="password"
                            placeholder="••••••••"
                            value={form.confirm}
                            onChange={handleChange}
                            className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-4 py-3 rounded-sm text-sm focus:outline-none focus:border-minecraft-green transition"
                        />
                    </div>
                </div>

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <Button onClick={handleSubmit}>Créer mon compte</Button>

                <p className="text-white/30 text-xs text-center">
                    Déjà un compte ?{" "}
                    <Link
                        to="/login"
                        className="text-minecraft-green hover:underline"
                    >
                        Se connecter
                    </Link>
                </p>
            </div>
        </div>
    );
}
