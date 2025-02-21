import { useEffect, useState } from "react";
import { getUserData } from "../services/data";
import ActivityChart from "./ActivityChart";
import AverageSessionsChart from "./AverageSessionsChart";
import RadarGraph from "./PerformanceChart";
import ScoreChart from "./ScoreChart";
import KeyDataSection from "./KeyDataSection";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const data = await getUserData(12);
          setUser(data);
      };
      fetchData();
  }, []);

  if (!user) return <div>❌ Une erreur est survenue</div>;

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