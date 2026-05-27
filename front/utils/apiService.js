const BASE_URL = "http://127.0.0.1:8000/api";
/**
 * Client API personnalisé basé sur fetch
 * @param {string} endpoint - L'adresse (ex: '/login' ou '/register')
 * @param {Object} options - Les options de configuration du fetch (method, body, etc.)
 */
export async function apiFetch(endpoint, options = {}) {
    // 1. On s'assure que l'endpoint commence bien par un slash
    const url = `${BASE_URL}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

    // 2. On prépare les headers par défaut (notamment pour le JSON de Symfony)
    const defaultHeaders = {
        "Content-Type": "application/json",
    };

    // 3. On fusionne les headers par défaut avec ceux éventuellement passés en option
    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    // 4. On exécute la requête
    const response = await fetch(url, config);

    return response;
}