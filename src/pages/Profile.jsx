import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserData } from "../services/data";
import ActivityChart from "../components/ActivityChart";
import AverageSessionsChart from "../components/AverageSessionsChart";
import RadarGraph from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import KeyDataSection from "../components/KeyDataSection";
import Erreur from "../components/Error";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
          const data = await getUserData(id);
          if (!data) {
              setError(true);
          } else {
              setUser(data);
          }
      };
      fetchData();
  }, [id]);

  if (error) return <Erreur />;
  if (!user) return <div>Chargement...</div>;

  return (
    <div className="profile">
      <div className="profile-header">
        <h1>Bonjour <span className="user-name">{user.firstName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>
  
      <div className="profile-content">
        <div className="charts-container">
          <ActivityChart data={user.activity} />
          <div className="small-charts">
            <AverageSessionsChart data={user.averageSessions} />
            <RadarGraph data={user.performance} />
            <ScoreChart score={user.score} />
          </div>
        </div>
        <KeyDataSection keyData={user.keyData} />
      </div>
    </div>
  );
};

export default Profile;