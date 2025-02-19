import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./mockData";
import UserDataModel from "./UserDataModel";

const USE_API = true;
const BASE_URL = "http://localhost:3000/user";

/**
 * Récupère une donnée depuis l'API.
 * @param {string} url - URL de l'API à interroger.
 * @returns {Promise<Object>} - Données récupérées depuis l'API.
 */
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
    }
};

/**
 * Récupère toutes les données de l'utilisateur (profil, activité, sessions, performance).
 * Si l'API est activée (`USE_API = true`), les données sont récupérées depuis l'API.
 * Sinon, elles sont chargées depuis les mocks (`mockData.js`).
 *
 * @param {number} userId - ID de l'utilisateur.
 * @returns {Promise<UserDataModel>} - Objet formaté contenant toutes les données utilisateur.
 */
export const getUserData = async (userId) => {
    if (USE_API) {
        try {
            const [user, activity, averageSessions, performance] = await Promise.all([
                fetchData(`${BASE_URL}/${userId}`),
                fetchData(`${BASE_URL}/${userId}/activity`),
                fetchData(`${BASE_URL}/${userId}/average-sessions`),
                fetchData(`${BASE_URL}/${userId}/performance`)
            ]);
            return new UserDataModel(user, activity, averageSessions, performance);
        } catch (error) {
            console.error("Erreur lors de la récupération des données utilisateur :", error);
        }
    }

    // Mode Mock : récupère et formate les données locales
    const user = USER_MAIN_DATA.find(user => user.id === userId);
    const activity = USER_ACTIVITY.find(act => act.userId === userId);
    const averageSessions = USER_AVERAGE_SESSIONS.find(sess => sess.userId === userId);
    const performance = USER_PERFORMANCE.find(perf => perf.userId === userId);
    return new UserDataModel(user, activity, averageSessions, performance);
};