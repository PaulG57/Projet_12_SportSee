import { useNavigate } from "react-router-dom";
import "../styles/selectUser.css";

const SelectUser = () => {
    const navigate = useNavigate();

    return (
        <div className="selection-container">
            <h1>Choisissez votre utilisateur</h1>
            <div className="user-buttons">
                <button onClick={() => navigate("/profile/12")}>Utilisateur 12</button>
                <button onClick={() => navigate("/profile/18")}>Utilisateur 18</button>
            </div>
        </div>
    );
};

export default SelectUser;