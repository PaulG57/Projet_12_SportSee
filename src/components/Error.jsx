import "../styles/Error.css";

const Erreur = () => {
    return (
        <div className="error-container">
            <h2>❌ Oups ! Une erreur est survenue</h2>
            <p>Impossible de récupérer les données</p>
        </div>
    );
};

export default Erreur;