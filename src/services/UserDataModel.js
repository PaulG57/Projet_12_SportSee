/**
 * Modèle de données utilisateur pour SportSee.
 * Modélise et contient les informations d'un utilisateur et ses performances.
 */
class UserDataModel {
    /**
     * Crée une instance de UserDataModel.
     *
     * @param {Object} user - Données de l'utilisateur.
     * @param {Object} activity - Données d'activité quotidienne.
     * @param {Object} averageSessions - Durée moyenne des sessions.
     * @param {Object} performance - Performance de l'utilisateur.
     */
    constructor(user, activity, averageSessions, performance) {
        this.id = user.id;
        this.firstName = user.userInfos.firstName;
        this.lastName = user.userInfos.lastName;
        this.age = user.userInfos.age;
        this.score = (user.todayScore ? user.todayScore : user.score) * 100;
        this.keyData = user.keyData;

        this.activity = activity.sessions;
        this.averageSessions = averageSessions.sessions;
        this.performance = performance.data.map(perf => ({
            value: perf.value,
            kind: performance.kind[perf.kind]
        }));
    }
}

export default UserDataModel;
