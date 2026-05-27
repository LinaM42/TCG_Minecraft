import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ identifier: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async () => {
        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Identifiants incorrects.");
                return;
            }

            navigate("/dashboard");
        } catch {
            setError("Impossible de contacter le serveur.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="w-full max-w-sm flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-minecraft-green text-[36px] md:text-[48px] font-bold uppercase leading-tight">
                        Connexion
                    </h1>
                    <p className="text-white/50 text-sm">
                        Content de te revoir, joueur.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-white/70 text-xs uppercase font-bold tracking-widest">
                            Pseudo ou Email
                        </label>
                        <input
                            name="identifier"
                            type="text"
                            placeholder="TonPseudo ou ton@email.com"
                            value={form.identifier}
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
                    <a
                        href="#"
                        className="text-white/30 text-xs hover:text-minecraft-green transition self-end"
                    >
                        Mot de passe oublié ?
                    </a>
                </div>

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <Button onClick={handleSubmit}>Se connecter</Button>

                <p className="text-white/30 text-xs text-center">
                    Pas encore de compte ?{" "}
                    <Link
                        to="/register"
                        className="text-minecraft-green hover:underline"
                    >
                        S'inscrire
                    </Link>
                </p>
            </div>
        </div>
    );
}
