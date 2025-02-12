import { useEffect, useState } from "react";
import { getUserData } from "../services/data";
import ActivityChart from "./ActivityChart";
import AverageSessionsChart from "./AverageSessionsChart";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const data = await getUserData(18);
          setUser(data);
      };
      fetchData();
  }, []);

  return (
      <div className="profile">
          {user && <h1>Bonjour <span className="user-name">{user.firstName}</span></h1>}
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          {user && <ActivityChart data={user.activity} />}
          {user && <AverageSessionsChart data={user.averageSessions} />}
      </div>
  );
};

export default Profile;
