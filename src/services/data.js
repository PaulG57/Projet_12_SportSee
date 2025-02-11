import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./mockData";
import UserDataModel from "./UserDataModel";

const USE_API = false;
const BASE_URL = "http://localhost:3000/user";

// Fonction pour récupérer une donnée depuis l'API
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
};

// Récupère toutes les données de l'utilisateur et les formate avec `UserDataModel`
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
            console.error(error);
        }
    }

    // Mode Mock : récupère et formate les données locales
    const user = USER_MAIN_DATA.find(user => user.id === userId);
    const activity = USER_ACTIVITY.find(act => act.userId === userId);
    const averageSessions = USER_AVERAGE_SESSIONS.find(sess => sess.userId === userId);
    const performance = USER_PERFORMANCE.find(perf => perf.userId === userId);
    return new UserDataModel(user, activity, averageSessions, performance);
};
