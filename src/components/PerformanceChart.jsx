import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import "../styles/performance.css";

const RadarGraph = ({ data }) => {
    return (
        <div className="radar-container">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
                    <PolarGrid stroke="white" strokeOpacity={0.7} radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} tickSize={10} />
                    <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RadarGraph;